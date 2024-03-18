

export default function NewsItem({title, date, description, ...props}: {title: string, date: string, description: string, props?: any}){
    return (
        <div className="space-y-[12px]">
            <p className="text-[30px] mt-[calc(36px-12px)]">LATEST NEWS</p>
            <div className="flex flex-col max-w-[1110px] p-[20px] border border-[#042926] dark:border-white">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center space-x-[6px]">
                        <p className="text-[24px]">{title}</p>
                        <p className="text-[16px]">02/20/2024</p>
                    </div>
                    <button className="px-[16px] my-auto h-[29px] border border-[#042926] dark:border-white">More Info</button>
                </div>
                <p className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat egestas mi gravida suspendisse arcu ut. Id augue purus sed tristique convallis rhoncus dignissim at faucibus. Pellentesque euismod donec nascetur sociis mattis. Malesuada.
                </p>
            </div>
        </div>
    )
}