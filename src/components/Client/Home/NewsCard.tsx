import { Link } from "react-router-dom";

// Desc: NewsCard component for Home page
interface NewsItem {
  id: string;
  slug: string;
  image: string;
  title: string;
  date: string;
  content: string;
}

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <div>
      <div className="bg-white p-5 rounded shadow-md">
        <img src={item.image} alt={item.title} className="w-full h-[200px] object-cover rounded shadow-md" />
        <div className="mt-3">
          <h2 className="text-xl font-medium text-gray-700">{item.title}</h2>
          <span className=" text-sm font-medium text-gray-500">{item.date}</span>
          <p className="text-[16px] font-light text-gray-600">
            {item.content.slice(0, 120)}...
          </p>
          <div className="flex items-end justify-end">
            <Link to={`/news/${item.slug}`}><button className="text-sm font-medium text-blue-600 cursor-pointer">Read More</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard