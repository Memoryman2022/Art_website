import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";
import { Button } from "components/ui/button";
import Image from "next/image";

export default function Oils() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 relative bg-black">
      <Carousel>
        <CarouselContent className="flex justify-center items-center">
          <CarouselItem className="flex justify-center items-center">
            <Image
              src="/IMG_20240204_134257.jpg"
              alt="Oil Painting 1"
              width={300}
              height={300}
              className=""
            />
          </CarouselItem>

          <CarouselItem className="flex justify-center items-center">
            <Image
              src="/IMG_20230802_134249.JPG"
              alt="Oil Painting 2"
              width={300}
              height={300}
              className=""
            />
          </CarouselItem>

          <CarouselItem className="flex justify-center items-center">
            <Image
              src="/IMG_20231030_133051.jpg"
              alt="Oil Painting 3"
              width={300}
              height={300}
              className=""
            />
          </CarouselItem>
        </CarouselContent>

        {/* Carousel Previous Button */}
        <div className="absolute left-0 bottom-0 mb-4 transform -translate-x-1/2 z-10">
          <CarouselPrevious>
            <Button variant="outline">Prev</Button>
          </CarouselPrevious>
        </div>

        {/* Carousel Next Button */}
        <div className="absolute right-0 bottom-0 mb-4 transform translate-x-1/2 z-10">
          <CarouselNext>
            <Button variant="outline">Next</Button>
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
