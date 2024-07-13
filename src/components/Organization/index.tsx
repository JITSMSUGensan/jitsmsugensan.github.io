import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "../ui/carousel";

export default function Organization({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleNext = () => {};

  return (
    <>
      <div className="min-h-[36px]"></div>
      <Carousel className="flex flex-row space-x-[12px]">
        <Previous />
        <CarouselContent>{children}</CarouselContent>
        <Next />
      </Carousel>
    </>
  );
}

export function Member({
  lastname,
  firstname,
  position,
  imageSource,
}: {
  firstname: string;
  lastname: string;
  position: string;
  imageSource: string;
}) {
  lastname = lastname.toUpperCase();
  firstname = firstname.toUpperCase();
  position = position.toUpperCase();
  return (
    <CarouselItem className="md:basis-full lg:basis-1/3 xl:basis-1/5">
      <div className="flex min-h-[150px] flex-row items-center justify-center space-x-[9px] border border-teal-400 p-4 lg:max-w-[298px]">
        <div className="flex flex-row space-x-[12px]">
          <img src={imageSource} className="aspect-square h-full bg-cover" />
          <div className="flex min-w-[148px] flex-1 flex-col">
            <p className="font-kumbh text-[20px] font-medium">{lastname}</p>
            <p className="font-kumbh -mt-[10px] text-[16px] font-extralight">
              {firstname}
            </p>
            <p className="font-kumbh flex-1 content-end text-[20px] font-extralight">
              {position}
            </p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

export function Previous() {
  const carousel = useCarousel();

  const previousHandler = () => {
    carousel.api?.scrollPrev();
  };

  return (
    <img
      src="previous.png"
      className="my-auto size-[50px] cursor-pointer"
      onClick={previousHandler}
    />
  );
}

export function Next() {
  const carousel = useCarousel();

  const nextHandler = () => {
    carousel.api?.scrollNext();
  };

  return (
    <img
      src="next.png"
      className="my-auto size-[50px] cursor-pointer"
      onClick={nextHandler}
    />
  );
}
