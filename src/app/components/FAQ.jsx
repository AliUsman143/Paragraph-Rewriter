'use client';
import React, { useState } from 'react';
import { FAQsData } from '../dataset/data';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeBtn, setActiveBtn] = useState(0);
    
    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="container-fluid p-0 mb-36">
            <div className="flex justify-center items-center text-center mt-6">
                <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                    <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                        <h2 className="text-3xl sm:text-2xl font-bold">FAQs</h2>
                        <p className="text-md sm:text-lg mt-4">
                            Do you have questions regarding our paragraph rewriter? Check out the FAQs below to find your answers. You can also get in touch with us directly if you still have any queries.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex mt-5 w-full lg:max-w-[950px] mx-auto p-7 bg-slate-100">
                <div id="accordion-open" data-accordion="open" className="w-full">
                    {FAQsData.map((item, index) => (
                        <div key={index} className='p-1'>
                            <h3 id={`accordion-open-heading-${index}`}>
                                <button
                                    type="button"
                                    className={`flex text-justify justify-between w-full p-5 font-medium ${activeBtn === index ? 'bg-gray-600 text-white' : 'text-black'} rounded-t-xl hover:bg-gray-600 hover:text-white gap-3`}
                                    onClick={() => {
                                        toggleAccordion(index);
                                        setActiveBtn(index); // Set the active button
                                    }}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`accordion-open-body-${index}`}
                                >
                                    <div className="flex items-center">
                                        <h3>
                                            <span className="font-bold text-2xl">{item.questionNo}</span>
                                            <span className="font-normal ml-3 text-xl text-left"> {item.question}</span>
                                        </h3>
                                    </div>
                                    <svg
                                        className={`w-3 h-3 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h3>
                            <div
                                id={`accordion-open-body-${index}`}
                                className={`p-5 text-lg border border-b-0 border-gray-200 bg-slate-200 transition-all duration-200 ${openIndex === index ? '' : 'hidden'}`}
                                aria-labelledby={`accordion-open-heading-${index}`}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
