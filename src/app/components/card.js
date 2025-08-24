import { CardData } from "../dataset/data";

const Card=()=>{
    return (
        <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4 mt-4">
            {
                CardData.map((el,idx)=>(
                    <div key={idx} className={`max-w-sm p-6  border border-gray-200 rounded-lg shadow  hover:scale-110 transition-transform duration-300 ${el.color}`}>
                        <img src={el.image} alt="cards" className="w-[50px] h-[50px] rounded-[500px]" />
                        <a>
                            <h5 className="mb-2 mt-5 font-thin text-xl tracking-tight text-black">{el.title}</h5>
                        </a>
                        <p className={`mb-3 mt-2 text-lg font-normal ${el.textColor}`}>{el.content}</p>
                        
                    </div>
                ))
            }
        </div>
            
        </>
    )
}
export default Card;