import { NewsData } from "@/data/NewsData"
import Container from "@/lib/Container"
import NewsCard from "./NewsCard"

const News = () => {
  const news = NewsData() || []
  return (
    <div className="my-5">
      <Container>
        <div>
          <h1 className="text-center text-2xl font-semibold text-gray-700">Latest News</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            news.slice(0, 3).map(item => <NewsCard key={item.id} item={item} />)
          }
        </div>
      </Container>
    </div>
  )
}

export default News