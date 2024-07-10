export default function Events({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="self-center flex flex-col h-[730px] min-w-[1120px]">
        <div className="h-[64px] w-full flex flex-row">
          <div class="relative h-full w-[20px]">
            <div className="absolute w-[10px] h-[32px] bottom-0 right-0 border-t border-l  border-teal-500"></div>
          </div>
          <div className="relative h-full flex-1 flex flex-row">
            <div className="self-center mx-2 text-center !text-[33px] font-black paint-fsm font-krona text-stroke text-stroke-teal text-fill-transparent text-lg">
              EVENTS
            </div>
            <div className="h-[32px] w-full border-t  border-teal-500 self-end"></div>
          </div>
          <div class="relative h-full w-[20px]">
            <div className="absolute w-[10px] h-[32px] bottom-0 left-0 border-t border-r  border-teal-500"></div>
          </div>
        </div>
        <div className="flex flex-row flex-1">
          <div className="relative w-[20px] h-full">
            <div className="absolute w-[10px] h-full right-0 border-l border-teal-500"></div>
          </div>
          <div className="flex-1 flex flex-col justify-center align-middle">
            <div className="min-w-[954px] mx-auto my-auto grid  grid-cols-1 gap-[10px] lg:grid-cols-2">
              {children}
            </div>
          </div>
          <div className="relative w-[20px] h-full">
            <div className="absolute w-[10px] h-full left-0 border-r border-teal-500"></div>
          </div>
        </div>
        <div className="h-[64px] w-full flex flex-row">
          <div class="relative h-full w-[20px]">
            <div className="absolute w-[10px] h-[32px] top-0 right-0 border-b border-l   border-teal-500"></div>
          </div>
          <div className="relative h-full flex-1">
            <div className="absolute h-[32px] w-full top-0 border-b border-teal-500"></div>
          </div>
          <div class="relative h-full w-[20px]">
            <div className="absolute w-[10px] h-[32px] top-0 left-0 border-b border-r border-teal-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Event({
  title,
  imageSource,
}: {
  title: string;
  imageSource: string;
}) {
  return (
    <div className="max-w-[472px] cursor-pointer group min-h-[193px] overflow-hidden border border-teal-500 z-[200] relative flex flex-col justify-center align-middle">
      <p className="self-center mx-2 text-center !text-[33px] font-black paint-fsm font-krona text-stroke text-stroke-teal text-fill-transparent text-lg">
        {title}
      </p>
      <div className="w-full flex flex-row justify-end absolute w-full bottom-0 z-[200]">
        <button className="relative py-[8px] font-krona min-w-[149px] text-teal-950 group-hover:text-teal-950 dark:text-teal-500">
          More Info&gt;&gt;
          <div className="absolute bottom-0 min-h-[1px] w-0 group-hover:w-full transition-all bg-teal-950 dark:bg-[#030D0F]"></div>
        </button>
      </div>
      <div className="w-full h-full absolute z-[100] bg-teal-400 bg-opacity-5"></div>
      <img
        src={imageSource}
        className="w-full aspect-auto object-cover absolute z-[50] group-hover:opacity-100 opacity-0 transition-all transition"
      />
    </div>
  );
}

export function Fragment({ props }) {
  return;
}
