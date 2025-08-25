import React from "react";
import WriterText from "../components/paragraphWriter";
import Featured from "../components/featured";
import AiTool from "../components/AItool";
import RewriterTool from "../components/rewritertool";
import FAQs from "../components/FAQ";
import SentenceRewriteTool from "../components/SentenceRewriteTool"
export const metadata = {
  title: " Free AI Sentence Rewriter | No Signup Needed",
  description:
    " Improve the quality of your sentences with our free online sentence rewriter tool. Choose from different rewriting modes that fit your needs and requirements.",
};
const page = () => {
  return (
    <>
      <SentenceRewriteTool />
      <WriterText />
      <Featured />
      <AiTool />
      <RewriterTool />
      <FAQs />
    </>
  );
};

export default page;
