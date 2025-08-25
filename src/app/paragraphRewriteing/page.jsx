import React from "react";
import ParagraphRewrite from "../components/paragraphRewrite";
import WriterText from "../components/paragraphWriter";
import Featured from "../components/featured";
import AiTool from "../components/AItool";
import RewriterTool from "../components/rewritertool";
import FAQs from "../components/FAQ";

const ParagraphRewriteing = () => {
  return (
    <div>
      <ParagraphRewrite />
       <WriterText/> 
      <Featured/>
      <AiTool/>
      <RewriterTool/>
      <FAQs/>
    </div>
  );
};

export default ParagraphRewriteing;
