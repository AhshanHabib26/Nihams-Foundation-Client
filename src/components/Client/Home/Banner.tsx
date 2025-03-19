
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { SliderData } from "@/data/SilderData";
import Container from "@/lib/Container";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useMemo } from "react";

const Banner = () => {
  const banners = SliderData() || [];

  const carouselOptions = useMemo(
    () => ({
      align: "start" as const,
      loop: true,
    }),
    []
  );

  const carouselPlugins = useMemo(
    () => [
      Autoplay({ delay: 3000 }),
      Fade(),
    ],
    []
  );

  return (
    <div className="my-5">
      <Container>
        <Carousel opts={carouselOptions} plugins={carouselPlugins}>
          <CarouselContent>
            {banners.map(({ id, image, title }) => (
              <CarouselItem key={id}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[250px] lg:h-[450px] object-cover rounded shadow-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
