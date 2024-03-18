import { format } from "date-fns"

export function NewsItem({title, date, description, ...props}: {title: string, date: string, description: string, props?: any}){
    return (
        <div className="flex flex-col max-w-[1110px] p-[20px] border border-[#042926] dark:border-white">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center space-x-[6px]">
                    <p className="text-[24px]">{title}</p>
                    <p className="text-[16px]">{date}</p>
                </div>
                <button className="px-[16px] my-auto h-[29px] border border-[#042926] dark:border-white">More Info</button>
            </div>
            <p className="text-[16px]">
                {description}
            </p>
        </div>
    )
}

export function News({children, ...props}: {children: ReturnType<typeof NewsItem>[], props?: any}) {
    return (
        <div className="space-y-[12px]">
            <p className="text-[30px] mt-[calc(36px-12px)]">LATEST NEWS</p>
            <div className="flex flex-col space-y-[20px]">{children}</div>
        </div>
    );
}