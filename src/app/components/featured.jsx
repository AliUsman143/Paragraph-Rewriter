import FeaturedCards from "./featuredCards";

const Featured=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h2 className="text-3xl sm:text-2xl font-bold">Features of Our Paragraph Rewriter</h2>
                            <p className="text-md sm:text-lg mt-4">
                                There are many different features that you can enjoy with our rewriting tool.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 w-full lg:max-w-[1320px] mx-auto p-7">
                    <FeaturedCards/>
                </div>
            </div>
        </>
    )
}
export default Featured;