import { Rewritertooldata } from "../dataset/data";

const RewriterTool=()=>{
    return (
        <>
             <div className="container-fluid p-0 mt-4">
                <div className="flex justify-center items-center text-center mt-6 ">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h2 className="text-3xl sm:text-2xl font-bold">Who Can Use Our AI Rewriter?</h2>
                            <p className="text-md sm:text-lg mt-4">
                                Here are some examples of individuals who can use our paragraph rewriter.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Cards Section of Rewriter Tool */}
                <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-7">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 ">
                        { 
                            Rewritertooldata.map((el,idx)=>(
                                <div key={idx} className=" p-4 border-l-2  border-gray-200   ">
                                    <img src={el.image} alt={el.alt} className="w-[60px] h-[60px]" />
                                    <a>
                                        <h3 className="mb-2 mt-5 font-bold text-4xl tracking-tight text-gray-800 ">{el.title}</h3>
                                    </a>
                                    <p className="mb-3 mt-2 text-lg font-normal text-gray-500">{el.content}</p>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default RewriterTool;