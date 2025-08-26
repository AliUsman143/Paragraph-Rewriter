"use client";
import React, { useState, useRef } from "react";
import axios from "axios";
import { FaTrash, FaDownload, FaCopy } from "react-icons/fa";
const GeneratorTool = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lengthMenuOpen, setLengthMenuOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState("Formal");
  const [selectedLength, setSelectedLength] = useState("Default");
  const [activeTab, setActiveTab] = useState(1);
  const [paragraphs, setParagraphs] = useState("");
  const [buttonText, setButtonText] = useState("Generate Paragraphs");
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [plainTextParagraphs, setPlainTextParagraphs] = useState(""); // New state for plain text

  const MenuOpenHandle = () => setMenuOpen((prev) => !prev);
  const LengthMenuOpenHandle = () => setLengthMenuOpen((prev) => !prev);

  const handleToneSelect = (tone) => {
    setSelectedTone(tone);
    setMenuOpen(false);
  };

  const handleLengthSelect = (length) => {
    setSelectedLength(length);
    setLengthMenuOpen(false);
  };

  const downloadDocFile = () => {
    const element = document.createElement("a");
    const file = new Blob([plainTextParagraphs], {
      type: "application/msword",
    });
    element.href = URL.createObjectURL(file);
    element.download = "paragraphs.doc";
    element.click();
  };

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(plainTextParagraphs);
      alert("Content copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const deleteContent = () => {
    setButtonText("Generate Paragraphs");
    setParagraphs();
    inputRef.current.value = "";
  };

  const handleParagraphGenerator = async () => {
    setLoading(true);
    setButtonText("Generating…");

    const inputText = inputRef.current?.value || "";
    if (!inputText.trim()) {
      alert("Please enter a topic to generate paragraphs.");
      setLoading(false);
      return;
    }

    if (activeTab < 1 || activeTab > 20) {
      alert("Number of paragraphs must be between 1 and 20.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://paragraph-rewriter-gorq-api.vercel.app/api/generator",
        {
          topic: inputText,
          tone: selectedTone,
          length: selectedLength,
          paragraphs: activeTab,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);

      const content = response.data.content;

      if (Array.isArray(content)) {
        // ✅ Handle array of paragraphs
        const formattedParagraphs = content.map((para, index) => (
          <p key={index} className="mb-10">
            {para}
          </p>
        ));
        setParagraphs(formattedParagraphs);
        setPlainTextParagraphs(content.join("\n\n"));
      } else if (typeof content === "string") {
        // ✅ Handle single string
        const formattedParagraphs = content.split("\n\n").map((para, index) => (
          <p key={index} className="mb-10">
            {para}
          </p>
        ));
        setParagraphs(formattedParagraphs);
        setPlainTextParagraphs(content);
      } else {
        alert("Sorry, no content generated. Please try again.");
        setParagraphs("");
        setPlainTextParagraphs("");
      }
    } catch (error) {
      console.error("Generator Error:", error.response?.data || error.message);
      alert("An error occurred. Please try again later.");
      setParagraphs("");
      setPlainTextParagraphs("");
    } finally {
      setLoading(false);
      setButtonText("Generate Paragraphs");
    }
  };

  return (
    <div className="container-fluid p-4 sm:p-6 md:p-8 lg:p-10 mt-20">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-full max-w-[950px]">
          <h1 className="text-4xl md:text-3xl font-bold">
            Paragraph Generator
          </h1>
          <p className="text-sm md:text-lg mt-2">
            Our AI Paragraph Generator Allows You to Create Engaging,
            Compelling, and High-Quality Paragraphs on Any Topic. This AI Tool
            Is Ideal for Academic Content, Blog Content, and Marketing Copies.
          </p>
        </div>
      </div>

      {/* tool section */}
      <div className="mt-5 p-4 w-full lg:max-w-[1000px] mx-auto">
        <div className="p-4 bg-slate-100 rounded-lg shadow-md">
          <textarea
            ref={inputRef}
            className="w-full border-none outline-none bg-slate-100 md:text-lg lg:text-lg resize-none text-sm"
            placeholder="Enter your paragraph topic here..."
          ></textarea>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="md:space-y-4">
              <div className="grid grid-cols-2 gap-2 p-1">
                <div>
                  <p className="text-sm">Paragraph Tone</p>
                  <div className="relative flex items-center mt-3">
                    <button
                      className="inline-flex items-center px-3 py-3 min-w-[128px] text-sm font-normal text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
                      onClick={MenuOpenHandle}
                      aria-expanded={menuOpen}
                    >
                      {selectedTone}
                      <svg
                        className="w-2.5 h-2.5 ml-5 md:ml-16 lg:ml-16 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute top-full left-0 w-full max-w-[200px] ${
                        menuOpen ? "block" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow`}
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        {[
                          "Formal",
                          "Informal",
                          "Professional",
                          "Diplomatic",
                          "Academic",
                          "Simplified",
                          "Persuasive",
                        ].map((tone) => (
                          <li key={tone}>
                            <button
                              onClick={() => handleToneSelect(tone)}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              {tone}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm">Paragraph Length</p>
                  <div className="relative flex items-center mt-3">
                    <button
                      className="inline-flex items-center px-3 py-3 min-w-[128px] text-sm font-normal text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
                      onClick={LengthMenuOpenHandle}
                      aria-expanded={lengthMenuOpen}
                    >
                      {selectedLength}
                      <svg
                        className="w-2.5 h-2.5 ml-5 md:ml-16 lg:ml-16"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute top-full left-0 w-full max-w-[200px] ${
                        lengthMenuOpen ? "block" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow`}
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        {["Default", "Concise", "Detailed"].map((length) => (
                          <li key={length}>
                            <button
                              onClick={() => handleLengthSelect(length)}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              {length}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm">Number of Paragraphs</p>
              <input
                type="number"
                min="1"
                max="20"
                value={activeTab}
                onChange={(e) => {
                  let value = Number(e.target.value);
                  if (value > 20) value = 20;
                  if (value < 1) value = 1;
                  setActiveTab(value);
                }}
                className="mt-3 w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Generate Section */}
      <div className="mt-5 text-center">
        <button
          onClick={handleParagraphGenerator}
          disabled={loading}
          className={`
      bg-gray-600 p-3 text-white rounded-md transition
      ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}
    `}
        >
          {loading ? (
            <span className="inline-flex items-center">
              {/* Tailwind spinning SVG */}
              <svg
                className="w-5 h-5 mr-2 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Generating…
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>

      {plainTextParagraphs && (
        <div className="container mt-5 p-4 w-full lg:max-w-[980px] rounded-lg shadow-md mx-auto bg-slate-100">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-5">
            <div>
              <p className="text-lg font-bold">Result</p>
            </div>
            <div className="flex-1 mt-2 sm:mt-0 text-center">
              <p>
                Characters {plainTextParagraphs.replace(/\s/g, "").length} |
                Words {plainTextParagraphs.trim().split(/\s+/).length} |
                Sentences{" "}
                {
                  plainTextParagraphs
                    .split(/[.!?]+/)
                    .filter((s) => s.trim().length > 0).length
                }
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-5 mt-3">
              {/* Delete */}
              <div className="relative group inline-block">
                <FaTrash
                  className="text-xl text-red-400 cursor-pointer"
                  onClick={deleteContent}
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Delete
                </div>
              </div>

              {/* Download */}
              <div className="relative group inline-block">
                <FaDownload
                  className="text-xl text-[#005f78] cursor-pointer"
                  onClick={downloadDocFile}
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Download
                </div>
              </div>

              {/* Copy */}
              <div className="relative group inline-block">
                <FaCopy
                  className="text-xl text-[#8598d8] cursor-pointer"
                  onClick={copyContent}
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Copy
                </div>
              </div>
            </div>
          </div>

          {/* Paragraphs Output */}
          <div>{paragraphs}</div>
        </div>
      )}
    </div>
  );
};

export default GeneratorTool;
