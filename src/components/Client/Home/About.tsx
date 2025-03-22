// Desc: About component for Home page
import { AboutData } from "@/data/AboutData"
import Container from "@/lib/Container"
const About = () => {
  const about = AboutData()
  return (
    <div className=" bg-green-50 py-16">
      <Container>
        <div>
          {about.map(item => <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <img className="w-full h-[350px] object-cover" src={item.image} alt={item.title} />
            </div>
            <div className="select-none">
              <h2 className="text-xl font-bold uppercase text-gray-700">{item.title}</h2>
              <hr className=" border-gray-300 border-dashed my-3" />
              <p className="text-[16px] font-light">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.features.map((feature, index) => (
                  <span key={index} className="text-white text-sm font-light bg-gray-700 px-3 py-1 rounded-tl-2xl rounded-br-2xl">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>)}
        </div>
      </Container>
    </div>
  )
}

export default About