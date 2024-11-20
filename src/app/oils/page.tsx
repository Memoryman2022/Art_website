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
        {/* Centering Carousel Content */}
        <CarouselContent className="flex justify-center items-center h-[400px]">
          {/* Carousel Items */}
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

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute bottom-4 left-1/2 transform -translate-x-full z-20">
          <Button variant="outline" className="text-white">
            Prev
          </Button>
        </CarouselPrevious>

        <CarouselNext className="absolute bottom-4 right-1/2 transform translate-x-full z-20">
          <Button variant="outline" className="text-white">
            Next
          </Button>
        </CarouselNext>
      </Carousel>
    </div>
  );
}
