import { FaEye, FaStar, FaStarHalf } from "react-icons/fa";

const NewsCard = ({news}) => {
    console.log(news)
const {title, thumbnail_url,details,total_view,rating,image_url} = news;


  return (
    <div className='w-full px-2'>
      <div className="bg-white rounded-lg mb-5">
        <a href="#">
          <img className="rounded-t-lg mx-auto p-2" src={image_url} alt="" />
        </a>
        <div className="p-4">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
          </a>
          <p className="text-neutral-500 text-base mb-3">{details}</p>
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
            Read more
          </a>
        </div>
        <hr />
        <div className="flex justify-between py-3 px-1">
<h3 className="flex gap-2 items-center"><div className="flex text-xl"> 
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalf/>
</div>{rating.number} </h3>

<p className="flex items-center"><FaEye className="me-2"/>{total_view}</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default NewsCard
