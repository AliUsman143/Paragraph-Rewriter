"use client";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
        <div className="flex justify-center items-center text-center pt-20">
          <div className="w-full sm:w-[600px] lg:w-[800px]">
            <h1 className="text-4xl sm:text-3xl font-extrabold text-gray-800">
              About <span className="text-blue-600">Us</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg px-4">
              Welcome to <span className="font-semibold">Paragraph Rewriter</span>, 
              your ultimate platform for transforming text into clear, concise, 
              and plagiarism-free content.
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="mt-10 w-full lg:max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Our Mission */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🚀 Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Paragraph Rewriter, we understand that writing can sometimes feel overwhelming.
              That&apos;s why we built tools like our <span className="font-semibold">Sentence Rewriter</span> 
              and <span className="font-semibold">Paragraph Generator</span> — designed to make your writing smoother and more productive.
            </p>
          </div>

          {/* Our Commitment */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">💡 Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re committed to protecting your privacy and ensuring seamless user experiences. 
              Our team constantly improves our services, delivering the best rewriting tools while 
              keeping your unique voice intact.
            </p>
          </div>

          {/* We're Here to Help */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">📩 We&apos;re Here to Help</h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions? Reach out anytime at 
              <span className="text-blue-600 font-medium"> hi.paragraphrewriter@gmail.com</span>. 
              We&apos;re always ready to assist you on your writing journey.
            </p>
          </div>

          {/* Join Our Community */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">🌍 Join Our Community</h2>
            <p className="text-gray-600 leading-relaxed">
              Join thousands of writers who have benefited from 
              <span className="font-semibold"> Paragraph Rewriter</span>. 
              Elevate your content, enhance readability, and enjoy 
              the writing process like never before.
            </p>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12 pb-12">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            ✨ Start Rewriting Now
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default About;
