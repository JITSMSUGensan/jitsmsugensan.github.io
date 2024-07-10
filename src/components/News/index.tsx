import { useState } from "preact/hooks";
import { format } from "date-fns";

export function NewsItem({
  title,
  date,
  description,
  ...props
}: {
  title: string;
  date: string;
  description: string;
  props?: any;
}) {
  return (
    <div className={`relative flex flex-col p-[20px] group cursor-pointer`}>
      <div className="absolute size-full border border-[#042926] -translate-x-[20px] -translate-y-[20px] transition-all dark:border-white group-hover:opacity-50 p-[20px]"></div>
      <div className="flex flex-row justify-between items-center">
        <div
          className={`flex flex-row items-center space-x-[6px] transition-all group-hover:opacity-50`}
        >
          <p className="text-[24px]">{title}</p>
          <p className="text-[16px]">{date}</p>
        </div>
        <button className="px-[16px] my-auto h-[29px] border border-[#042926] dark:border-white">
          More Info
        </button>
      </div>
      <p className={`text-[16px] group-hover:opacity-50 transition-all`}>
        {description}
      </p>
    </div>
  );
}

export function News({
  children,
  ...props
}: {
  children: ReturnType<typeof NewsItem>[] | undefined;
  props?: any;
}) {
  return (
    <div className="space-y-[12px]">
      <p className="text-[30px] mt-[calc(36px-12px)]">LATEST NEWS</p>
      <div className="flex flex-col space-y-[20px] max-w-[1110px]">
        {children}
      </div>
    </div>
  );
}
