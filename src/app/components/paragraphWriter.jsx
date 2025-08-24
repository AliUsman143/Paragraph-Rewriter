// import { Textparagraph } from "../dataset/data";
import Card from "./card";

const WriterText=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[1200px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-8 p-2 bg-slate-100 border border-gray-300 border-1">
                                <div className="p-8">
                                    <div className="mt-5">
                                        <h2 className="text-3xl sm:text-2xl font-bold">Introducing Our AI-Based Paragraph Rewriter</h2>
                                        <p className="text-md sm:text-lg mt-3">Our paragraph rewriter utilizes AI models to understand the provided text before making changes to it. This helps it to avoid making any modifications that alter the meaning or context of the content. Thanks to this advanced functionality of our AI paragraph rewriting tool, you can trust it with all types of content, whether it is marketing copies or academic papers.</p>
                                    </div>
                                    
                                    {/* {
                                        Textparagraph.map((el,idx)=>(
                                            <div key={idx} className="mt-5">
                                                <h1 className="text-2xl sm:text-3xl font-bold">{el.title}</h1>
                                                <p className="text-md sm:text-lg mt-3">{el.content}</p>
                                            </div>
                                        ))
                                    } */}
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[950px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-8 p-2">
                                <h2 className="text-3xl sm:text-2xl font-bold">How to Rewrite Texts Using Your Online Rewrite Tool</h2>
                                <p className="text-md sm:text-lg mt-3">Our rewriting tool has a user-friendly interface. It is very easy to use and requires only a few steps.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cards section start */}
                <div className="flex mt-2 w-full lg:max-w-[1320px] mx-auto">
                    <Card/>
                </div>
                
                <div className="flex justify-center ">
                    <div className="w-full sm:w-[600px] lg:w-[1200px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-4 p-2  bg-slate-100 border border-gray-300 border-1">
                                <div className="p-8">
                                    <div className="mt-2">
                                        <h2 className="text-3xl sm:text-2xl font-bold text-center items-center">How Does Our AI Rewriter Work?</h2>
                                        <p className="text-md sm:text-lg mt-3 text-center items-center">Behind the scenes, our rewriter tool performs the following steps on the provided text: </p>
                                        <ul role="list" style={{listStyleType:"disc", marginLeft:"30px"}}>
                                            <li className="text-md sm:text-lg mt-3"><strong>Analyzes</strong> the text to understand its meaning.</li>
                                            <li className="text-md sm:text-lg mt-3"><strong>Identifies</strong> words and phrases that can be changed.</li>
                                            <li className="text-md sm:text-lg mt-3"><strong>Replaces</strong> them with suitable alternatives & synonyms.</li>
                                            <li className="text-md sm:text-lg mt-3"><strong>Verifies</strong> the rewritten text to maintain accuracy & context.</li>
                                        </ul>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WriterText;
                                    