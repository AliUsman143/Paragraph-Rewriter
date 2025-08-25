import React from "react";
import WriterText from "./components/paragraphWriter";
import Featured from "./components/featured";
import AiTool from "./components/AItool";
import RewriterTool from "./components/rewritertool";
import FAQs from "./components/FAQ";
import ParagraphRewriteing from "./paragraphRewriteing/page.jsx";
const page = () => {
  return (
    <>
      <div>
        <ParagraphRewriteing />
      </div>
        {/* <WriterText/> 
      <Featured/>
      <AiTool/>
      <RewriterTool/>
      <FAQs/> */}
     
    </>
  );
};

export default page;
