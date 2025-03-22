import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { OngoingProjectData } from "@/data/OngoingProjectData";
import Container from "@/lib/Container";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useMemo } from "react";
import { FaCheck } from "react-icons/fa6";

const OngoingProject = () => {
  const banners = OngoingProjectData() || [];

  const carouselOptions = useMemo(() => ({
    align: "start" as const,
    loop: true,
  }), []);

  const carouselPlugins = useMemo(() => [
    Autoplay({ delay: 3000 }),
    Fade(),
  ], []);

  return (
    <div className="bg-green-50 py-5">
      <Container>
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-5">Ongoing Projects</h1>
        <Carousel opts={carouselOptions} plugins={carouselPlugins}>
          <CarouselContent>
            {banners.map(({ id, image, title, description, features }) => (
              <CarouselItem key={id}>
                <div className="relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded shadow-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-3">
                    <h2 className="text-xl font-bold uppercase text-gray-700">{title}</h2>
                    <p className="text-[16px] font-light">{description}</p>
                    <div>
                      {features.map((feature, index) => (
                        <div className="flex items-center gap-2 mt-1" key={index}>
                          <FaCheck className="text-green-700" />
                          <span className="text-green-700 text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default OngoingProject;
