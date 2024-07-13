export default function Events({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="flex h-[730px] min-w-[1120px] flex-col self-center">
        <div className="flex h-[64px] w-full flex-row">
          <div class="relative h-full w-[20px]">
            <div className="absolute bottom-0 right-0 h-[32px] w-[10px] border-l border-t border-teal-500"></div>
          </div>
          <div className="relative flex h-full flex-1 flex-row">
            <div className="paint-fsm font-krona text-stroke text-stroke-teal text-fill-transparent mx-2 self-center text-center !text-[33px] text-lg font-black">
              EVENTS
            </div>
            <div className="h-[32px] w-full self-end border-t border-teal-500"></div>
          </div>
          <div class="relative h-full w-[20px]">
            <div className="absolute bottom-0 left-0 h-[32px] w-[10px] border-r border-t border-teal-500"></div>
          </div>
        </div>
        <div className="flex flex-1 flex-row">
          <div className="relative h-full w-[20px]">
            <div className="absolute right-0 h-full w-[10px] border-l border-teal-500"></div>
          </div>
          <div className="flex flex-1 flex-col justify-center align-middle">
            <div className="mx-auto my-auto grid min-w-[954px] grid-cols-1 gap-[10px] lg:grid-cols-2">
              {children}
            </div>
          </div>
          <div className="relative h-full w-[20px]">
            <div className="absolute left-0 h-full w-[10px] border-r border-teal-500"></div>
          </div>
        </div>
        <div className="flex h-[64px] w-full flex-row">
          <div class="relative h-full w-[20px]">
            <div className="absolute right-0 top-0 h-[32px] w-[10px] border-b border-l border-teal-500"></div>
          </div>
          <div className="relative h-full flex-1">
            <div className="absolute top-0 h-[32px] w-full border-b border-teal-500"></div>
          </div>
          <div class="relative h-full w-[20px]">
            <div className="absolute left-0 top-0 h-[32px] w-[10px] border-b border-r border-teal-500"></div>
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
    <div className="group relative z-[200] flex min-h-[193px] max-w-[472px] cursor-pointer flex-col justify-center overflow-hidden border border-teal-500 align-middle">
      <p className="paint-fsm font-krona text-stroke text-stroke-teal text-fill-transparent mx-2 self-center text-center !text-[33px] text-lg font-black">
        {title}
      </p>
      <div className="absolute bottom-0 z-[200] flex w-full flex-row justify-end">
        <button className="font-krona relative min-w-[149px] py-[8px] text-teal-950 group-hover:text-teal-950 dark:text-teal-500">
          More Info&gt;&gt;
          <div className="absolute bottom-0 min-h-[1px] w-0 bg-teal-950 transition-all group-hover:w-full dark:bg-[#030D0F]"></div>
        </button>
      </div>
      <div className="absolute z-[100] h-full w-full bg-teal-400 bg-opacity-5"></div>
      <img
        src={imageSource}
        className="absolute z-[50] aspect-auto w-full object-cover opacity-0 transition transition-all group-hover:opacity-100"
      />
    </div>
  );
}

export function Fragment({ props }) {
  return;
}
