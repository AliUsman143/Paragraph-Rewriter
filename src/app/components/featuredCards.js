import { FeaturedCardData } from "../dataset/data";

const FeaturedCards = () => {
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {
                    FeaturedCardData.map((el, idx) => (
                        <div key={idx} className=" p-6 bg-slate-100 border border-gray-200 rounded-lg shadow ">
                            <a className="inline-flex items-center" style={el.style}>
                                <span className="text-xl font-bold">{el.id}:</span>
                                <h3 className="inline ml-1 text-xl font-bold tracking-tight text-gray-900 mb-0">
                                    {el.title}
                                </h3>
                            </a>
                            <p className="mb-3 mt-4 text-lg font-normal text-gray-700"> {el.content}</p>
                        </div>
                    ))
                }
            </div>


        </>
    )
}
export default FeaturedCards;