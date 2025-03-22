import Container from "@/lib/Container"
import { GalleryData } from "@/data/GalleryData"
import GalleryCard from "./GalleryCard"

const Gallery = () => {
  const gallery = GalleryData() || []
  return (
    <div className="bg-green-50 py-5">
      <Container>
        <div>
          <h1 className="text-center text-2xl font-semibold text-gray-700 mb-5">Latest Gallery</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            gallery.map(item => <GalleryCard key={item.id} item={item} />)
          }
        </div>
      </Container>
    </div>
  )
}

export default Gallery