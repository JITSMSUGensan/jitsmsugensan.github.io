import { useState, useEffect } from "preact/hooks";
import { createRef } from "preact";
import preact from "preact";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "../ui/carousel";

export default function HeadlineCarousel({
  children,
}: {
  children: ReturnType<typeof Headline>[];
}) {
  return (
    <div className="min-h-[459px] max-w-full border border-[#042926] p-2 dark:border-white md:max-w-[1124px]">
      <Carousel className="relative">
        <CarouselContent className="">{children}</CarouselContent>
        <HeadlineTag
          headlines={children.map((child: any) => child.props.headline)}
        />
        <CarouselDots />
        <Gradient />
      </Carousel>
    </div>
  );
}

export function Gradient() {
  return (
    <div className="pointer-events-none absolute top-0 z-[50] h-full w-full select-none bg-gradient-to-b from-transparent to-[#2FFFEA] opacity-[36%] dark:from-transparent dark:to-[#98DFD8]"></div>
  );
}

export function CarouselDots() {
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const [length, setLength] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | "none">("none");
  const carousel = useCarousel();

  useEffect(() => {
    setLength(carousel.api?.scrollSnapList().length || 0);
    setCurrentCarouselSlide(carousel.api?.selectedScrollSnap() || 0);
  }, [carousel]);

  return (
    <div className="absolute bottom-[10px] left-1/2 z-[60] flex -translate-x-1/2 transform flex-row gap-2">
      {Array.from({ length: length }, (_, i) => i).map((_, i) => {
        return (
          <div
            className={`h-[10px] w-[10px] transition-all ${currentCarouselSlide === i ? "bg-teal-600" : "bg-white"} cursor-pointer rounded-full transition-all`}
            onClick={() => carousel.api?.scrollTo(i)}
          ></div>
        );
      })}
    </div>
  );
}

export function HeadlineTag({ headlines }: { headlines: string[] }) {
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const carousel = useCarousel();

  useEffect(() => {
    setCurrentCarouselSlide(carousel.api?.selectedScrollSnap() || 0);
  }, [carousel]);

  return (
    <p className="absolute bottom-[15px] left-[15px] z-[80] max-w-[calc(100vw-200px)] text-[14.5px] text-white md:max-w-[386px] md:text-[24px]">
      {headlines[currentCarouselSlide]}
    </p>
  );
}

export function Headline({
  headline,
  imagesrc,
}: {
  headline: string;
  imagesrc: string;
}) {
  return (
    <CarouselItem>
      <div className="relative flex flex-col items-center">
        {/* <p className="absolute bottom-[10px] left-[10px] text-[#042926] dark:text-white text-3xl">{headline}</p> */}
        <img src={imagesrc} className="h-[459px] w-full object-cover" />
      </div>
    </CarouselItem>
  );
}
