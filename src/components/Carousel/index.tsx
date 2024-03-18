import { useState, useEffect } from "preact/hooks";
import { createRef } from 'preact';
import preact from "preact";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel } from "../ui/carousel";

export default function HeadlineCarousel({ children }: { children: ReturnType<typeof Headline>[] }) {

    return (
        <div className="max-w-full md:max-w-[1124px] min-h-[459px] border border-[#042926] dark:border-white p-2">
            <Carousel className="relative">
                <CarouselContent className="">
                    {children}
                </CarouselContent>
                <HeadlineTag headlines={children.map((child: any) => child.props.headline)} />
                <CarouselDots />
                <Gradient />
            </Carousel>
        </div >
    );
}

export function Gradient() {
    return (
        <div className="absolute w-full h-full top-0 z-[50] bg-gradient-to-b from-transparent opacity-[36%] to-[#2FFFEA] dark:from-transparent dark:to-[#98DFD8] select-none pointer-events-none"></div>
    )
}

export function CarouselDots() {
    const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
    const [length, setLength] = useState(0);
    const [direction, setDirection] = useState<"left" | "right" | "none">("none");
    const carousel = useCarousel();

    useEffect(() => {
        setLength(carousel.api?.scrollSnapList().length || 0);
        setCurrentCarouselSlide(carousel.api?.selectedScrollSnap() || 0);
    }, [carousel])

    return (
        <div className="absolute z-[60] bottom-[10px] left-1/2 transform -translate-x-1/2 flex flex-row gap-2">
            {
                Array.from({ length: length }, (_, i) => i).map((_, i) => {
                    return (
                        <div className={`transition-all w-[10px] h-[10px] ${currentCarouselSlide === i ? " bg-teal-600" : "bg-white"} rounded-full transition-all cursor-pointer `} onClick={() => carousel.api?.scrollTo(i)}></div>
                    )
                })
            }
        </div>
    );
}

export function HeadlineTag({ headlines }: { headlines: string[] }) {
    const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
    const carousel = useCarousel();

    useEffect(() => {
        setCurrentCarouselSlide(carousel.api?.selectedScrollSnap() || 0);
    }, [carousel])

    return (
        <p className="absolute bottom-[15px] z-[80] left-[15px] text-[14.5px] md:text-[24px] max-w-[calc(100vw-200px)] md:max-w-[386px] text-white">{headlines[currentCarouselSlide]}</p>
    )
}

export function Headline({ headline, imagesrc }: { headline: string, imagesrc: string }) {
    return (
        <CarouselItem>
            <div className="relative flex flex-col items-center">
                {/* <p className="absolute bottom-[10px] left-[10px] text-[#042926] dark:text-white text-3xl">{headline}</p> */}
                <img src={imagesrc} className="w-full h-[459px] object-cover" />
            </div>
        </CarouselItem>
    )
}