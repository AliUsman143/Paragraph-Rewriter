import React from "react";
import WriterText from "../components/paragraphWriter";
import Featured from "../components/featured";
import AiTool from "../components/AItool";
import RewriterTool from "../components/rewritertool";
import FAQs from "../components/FAQ";
import GeneratorTool from "../components/ParagraphGeneratorTool";
export const metadata = {
  title: "Free AI Paragraph Generator - No Signup Needed",
  description:
    " Use our free AI paragraph generator to create informative paragraphs on any topic. Our tool doesn't have any usage limits and requires no signup.",
};
const ParaGeneratorTool = () => {
  return (
    <>
    <GeneratorTool/>
      <WriterText />
      <Featured />
      <AiTool />
      <RewriterTool />
      <FAQs />
    </>
  );
};

export default ParaGeneratorTool;
