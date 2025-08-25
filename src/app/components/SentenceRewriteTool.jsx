"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HighlightIcon from '@mui/icons-material/Highlight';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SentenceRewriteTool = () => {
  const Tabs = [
    {
      id: 1,
      title: "Simplify",
      icon: <FormatColorFillIcon style={{ color: '#D4BDAC' }} />
    },
    {
      id: 2,
      title: "Shorten",
      icon: <BorderColorIcon style={{ color: 'green' }} />
    },
    {
      id: 3,
      title: "Improver",
      icon: <HighlightIcon style={{ color: '#78B7D0' }} />
    },
    {
      id: 4,
      title: "Randomizer",
      icon: <TipsAndUpdatesIcon style={{ color: 'orange' }} />
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabName, setActiveTabName] = useState(Tabs[0]?.title || "simplify");
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputData, setInputData] = useState(""); // State for input textarea
  const [rewrittenData, setRewrittenData] = useState(""); // State for rewritten textarea
  const [isRewritten, setIsRewritten] = useState(false); // State to control input visibility on mobile
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile
  const [showRewrittenSection, setShowRewrittenSection] = useState(false); // State to show rewritten 
  const [sentenceCount, setSentenceCount] = useState(0); // State for word count
  const [loadingSentence, setLoadingSentence] = useState(false);

  const SampleText =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";

  const sampleText = () => {
    setInputData(SampleText);
  };

  const handleTabClick = (idx, tabName) => {
    console.log("Tab is: ", idx);
    setActiveTabName(tabName)
    setActiveTab(idx);
    setShowDropdown(false); // Close the dropdown after selection
  };
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const combinedText = inputData + ' ' + clipboardText; // Add a space to separate the texts
      const sentenceCount = countWords(combinedText); // Assuming countWords is defined elsewhere

      if (sentenceCount > 1500) {
        const wordsArray = combinedText.trim().split(/\s+/);
        const limitedWords = wordsArray.slice(0, 1500).join(' '); // Get only the first 1500 words
        setInputData(limitedWords);
      } else {
        setInputData(combinedText);
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  // Define the countWords function if not already defined
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };


  const handleSentenceRewriter = async (inputparagraph) => {

    console.log('inputText: ', inputparagraph);
    console.log('tone: ', activeTabName);
    setLoadingSentence(true);
    // Start loading state
    const wordCount = countWords(inputparagraph);
    if (wordCount < 10) {
      toast.warning("Please enter at least 10 words to rewrite sentence.", {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      })
      return;
    }
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/rewrite/sentencerewriter`, { inputText: inputparagraph, tone: activeTabName.toLowerCase() });

      if (data) {
        if (data.data.status === 200) {
          console.log('data.data.data: ', data.data.data);
          console.log('data.data.data.content: ', data.data.data.content);
          setRewrittenData(data.data.data.content);
        } else {
          alert("Sorry this Sentence cannot be rewritten right now. Please try again later!");
          setRewrittenData("Error occurred.");
        }
      }

      if (isMobile) {
        setIsRewritten(true);
        setShowRewrittenSection(true);
      }
    } catch (error) {
      if (error.response) {
        alert("Error rewriting text: " + error.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
    } finally {
      setLoadingSentence(false); // Stop loading  state
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenData);
    alert("Rewritten text copied to clipboard!");
  };

  const handleDownload = (fileType) => {
    const blob = new Blob([rewrittenData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `rewritten-text.${fileType}`;
    link.click();
  };
  const handleRewriteAgain = () => {
    setInputData(''); // Clear input data
    setRewrittenData(''); // Clear rewritten data
    setSentenceCount(0); // Reset word count
    setShowRewrittenSection(false); // Show input section again
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        console.log("formData: ", formData);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/file/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("response.data.data: ", response);
        console.log("response.data.data: ", response.data);
        console.log("response.data.data: ", response.data.data);

        if (response.status === 200 && response.data) {
          setInputData(response.data.data);
        } else {
          console.error("Error: No data received from the API.");
        }
      } catch (error) {
        console.error("File upload error:", error);
      }
    }
  };

  return (
    <div className="container-fluid p-0 mt-28">
      <div className="flex justify-center items-center text-center">
        <ToastContainer />
        <div className="w-full sm:w-[600px] lg:w-[800px]">
          <h1 className="text-4xl sm:text-3xl font-bold">Sentence Rewriter</h1>
          <p className="text-md sm:text-lg mt-4">
            Transform Your Sentences and Enhance Their Quality With the Help of Our Online Sentence Rewriter Tool. Enter Your Sentences Into the Space Provided Below and Start the Process for Free Without Any Signups.
          </p>
        </div>
      </div>

      <div className="mt-5 p-5 w-full lg:max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 text-black rounded-lg p-3">
          <div className="w-full">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">Select rewriting style</label>
              {/* Custom Dropdown for small screens */}
              <div className="sm:hidden relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="bg-gray-50 border border-slate-300 text-gray-900 text-sm rounded-lg flex items-center justify-between w-[290px] p-2.5"
                >
                  <span>{Tabs[activeTab] ? Tabs[activeTab].title : 'Select a Tab'}</span>
                  <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}></i>
                </button>
                {showDropdown && (
                  <ul className="absolute z-10 w-[290px] bg-white shadow-lg rounded-lg mt-2">
                    {Tabs.map((el, idx) => (
                      <li key={idx} onClick={() => handleTabClick(idx, el.title)}>
                        <button
                          className={`inline-block text-md w-full p-2 text-gray-900 bg-slate-100 hover:bg-gray-500 hover:text-black border rounded-lg active focus:outline-none ${activeTab === idx ? "bg-gray-500 text-black" : "bg-gray-50"
                            }`}
                        >
                          <span className="p-1 flex">{el.icon}
                            <span className="ml-1">{el.title}</span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex " >
              {
                Tabs.map((el, idx) => (
                  <li className="w-full focus-within:z-10" key={idx}>
                    <button
                      className={`inline-block w-full p-1 border rounded-l-lg focus:outline-none ${activeTab === idx ? "bg-gray-500 text-white" : "bg-slate-100 hover:bg-gray-500 hover:text-white"}`}
                      onClick={() => handleTabClick(idx, el.title)}
                    >
                      <span className="p-1 flex">{el.icon}
                        <span className="m-1">{el.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5 ">
          {!isRewritten && (
            <div className="gap-1 hidden lg:block md:block">
              <div className="relative h-[400px] p-4 w-full bg-slate-100 rounded-lg">
                <textarea
                  className={`bg-slate-100 text-xl w-full ${inputData?.length === 0 ? 'h-[180px]' : 'h-full'} resize-none p-2 border-none outline-none`}
                  placeholder="Enter Text to Paraphrase..."
                  value={inputData || ""}
                  onChange={(e) => {
                    const newInput = e.target.value;
                    const sentenceCount = countWords(newInput);
                    if (sentenceCount <= 1500) {
                      setInputData(newInput);
                      setSentenceCount(sentenceCount);
                    }
                  }}
                />
                <div className="mt-24 p-6 inset-0 flex justify-center items-center">
                  {inputData.length === 0 && (
                    <div className="flex gap-2 h-[30px] justify-center items-center">
                      <div
                        className="border rounded-md border-gray-500 p-4 h-[90px] w-[130px] hover:bg-gray-300 cursor-pointer"
                        onClick={handlePaste}
                      >
                        <div className="justify-center items-center text-center">
                          <i className="fa-solid fa-paste text-2xl text-pink-700"></i>
                          <p>Paste Text</p>
                        </div>
                      </div>
                      <div
                        className="border rounded-md border-gray-500 p-4 h-[90px] w-[130px] hover:bg-gray-300 cursor-pointer"
                        onClick={sampleText}
                      >
                        <div className="justify-center items-center text-center">
                          <i className="fa-regular fa-file-lines text-2xl text-cyan-600"></i>
                          <p>Sample Text</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 bg-slate-100 rounded-lg p-4">
                <label className="border border-gray-600 p-1 rounded-lg hover:bg-gray-300  flex items-center cursor-pointer">
                  <i className="fa-solid fa-upload p-1 text-cyan-800 "></i>
                  <span className="ml-2">Upload</span>
                  <input
                    id="multiple_files"
                    type="file"
                    accept=".txt, .docx, .pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <span className="text-sm px-4">{countWords(inputData)} / words</span>
                <button
                  onClick={() => handleSentenceRewriter(inputData)}
                  disabled={inputData.length === 0 || loadingSentence}
                  className={`
    border border-gray-600 p-1 rounded-lg text-sm
    ${inputData.length === 0 || loadingSentence
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-700 hover:text-white"
                    }
  `}
                >
                  {loadingSentence
                    ? (
                      <span className="flex items-center">
                        {/* Tailwind SVG spinner */}
                        <svg
                          className="w-4 h-4 mr-2 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Rewriting…
                      </span>
                    )
                    : "Sentence Rewrite"
                  }
                </button>


              </div>
            </div>
          )}

          {/* Rewritten Section - Only show when the rewrite button is clicked on mobile */}
          {(!isMobile || showRewrittenSection) && (
            <div className="gap-1 grid-cols-2 bg-slate-100 p-5 rounded-lg">
              <div>
                <textarea
                  className="bg-slate-100 w-full h-[370px] resize-none p-3 border-none text-lg  outline-none"
                  placeholder="Rewritten text will appear here..."
                  value={rewrittenData}
                  onChange={(e) => setRewrittenData(e.target.value)} // Make it editable
                />
              </div>
              <div className="flex justify-end items-center mt-2 bg-slate-100 rounded-lg">
                <div className="md:hidden lg:hidden mr-2">
                  <button
                    className="bg-gray-500 text-white p-1 rounded-md transition-colors duration-300"
                    onClick={handleRewriteAgain}
                  >
                    Rewrite Again
                  </button>
                </div>
                <div className="relative group inline-block">
                  <button
                    className={`border border-gray-600 p-1 rounded-lg ${rewrittenData.length === 0
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-300 hover:text-white"
                      }`}
                    onClick={handleCopy}
                    disabled={rewrittenData.length === 0}
                  >
                    <i className="fa-solid fa-copy text-blue-800 text-2xl"></i>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Copy
                  </div>
                </div>
                <div className="relative group block-inline">
                  <button
                    className={`border border-gray-600 p-1 rounded-lg ${rewrittenData.length === 0
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-300 hover:text-black"
                      }`}
                    onClick={() => handleDownload("txt")}
                    disabled={rewrittenData.length === 0}
                  >
                    <i className="fa-solid fa-download text-2xl"></i> .txt
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Download file .txt
                  </div>
                </div>
                <div className="relative group block-inline">
                  <button
                    className={`border border-gray-600 p-1 rounded-lg ${rewrittenData.length === 0
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-300 hover:text-black"
                      }`}
                    onClick={() => handleDownload("doc")}
                    disabled={rewrittenData.length === 0}
                  >
                    <i className="fa-solid fa-download text-2xl"></i> .doc
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Download file .doc
                  </div>
                </div>
              </div>
            </div>

          )}
          {!showRewrittenSection && (
            <div className="gap-1 p-2">
              <div className="relative h-[400px] p-4 w-full bg-slate-100 rounded-lg md:hidden ">
                <textarea
                  className={`bg-slate-100 text-md w-full ${inputData.length === 0 ? 'h-[180px]' : 'h-full'} resize-none p-2 border-none outline-none`}
                  placeholder="Enter Text to Rephrase..."
                  value={inputData}
                  onChange={(e) => {
                    const newInput = e.target.value;
                    const sentenceCount = countWords(newInput); // Count words

                    if (sentenceCount <= 1500) {
                      setInputData(newInput);
                      setSentenceCount(sentenceCount); // Update word count
                    }
                  }}
                />
                <div className="mt-24 p-6 inset-0 flex justify-center items-center">
                  {inputData.length === 0 && (
                    <div className="flex gap-2 flex-row sm:flex-row h-[30px] justify-center items-center">
                      <div
                        className="border rounded-md border-gray-500 p-4 h-[90px] w-full sm:w-[130px] hover:bg-gray-300 cursor-pointer"
                        onClick={handlePaste}
                      >
                        <div className="justify-center items-center text-center">
                          <i className="fa-solid fa-paste text-2xl text-pink-700"></i>
                          <p>Paste Text</p>
                        </div>
                      </div>
                      <div
                        className="border rounded-md border-gray-500 p-4 h-[90px] w-full sm:w-[130px] hover:bg-gray-300 cursor-pointer"
                        onClick={sampleText}
                      >
                        <div className="justify-center items-center text-center">
                          <i className="fa-regular fa-file-lines text-2xl text-cyan-600"></i>
                          <p>Sample Text</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:hidden md:hidden flex justify-between items-center mt-2 bg-slate-100 rounded-lg p-4">
                <label className="border border-gray-600 p-1 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer">
                  <i className="fa-solid fa-upload p-1 text-cyan-800"></i>
                  <span className="ml-2">Upload</span>
                  <input
                    id="multiple_files"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <span className="text-sm px-1 text-center">{countWords(inputData)} words</span>
                <button
                  onClick={() => handleSentenceRewriter(inputData)}
                  disabled={inputData.length === 0 || loadingSentence}
                  className={`
    border border-gray-600 p-1 rounded-lg text-sm
    ${inputData.length === 0 || loadingSentence
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-700 hover:text-white"
                    }
  `}
                >
                  {loadingSentence
                    ? (
                      <span className="flex items-center">
                        {/* Tailwind SVG spinner */}
                        <svg
                          className="w-4 h-4 mr-2 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Rewriting…
                      </span>
                    )
                    : "Sentence Rewrite"
                  }
                </button>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SentenceRewriteTool;
