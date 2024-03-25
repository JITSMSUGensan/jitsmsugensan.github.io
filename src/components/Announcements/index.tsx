import { useContext, useEffect, useState } from "preact/hooks";
import _ from "lodash";
import React, { ReactElement, ReactNode } from "preact/compat";
import { JSXInternal } from "node_modules/preact/src/jsx";

export function Cell({ chance }: { chance: number }) {
    const [value, setValue] = useState(_.random(chance, 1));

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(_.random(chance, 1));
        }, _.random(4500, 10000));
        return () => clearInterval(interval);
    }, [chance])

    return <div className={`size-[20px] duration-1000 ease-out transition-all bg-[#042926] dark:bg-[#4FB9AF] ${value > 0.85 ? "scale-100" : "scale-0"}`}></div>
}

export function Column({ direction = "top" }: { direction?: "top" | "bottom" }) {
    return <div className="flex flex-col">
        {
            direction === "top" ? Array.from({ length: 5 }, (_, i) => i).map((_, index) => {
                return <Cell chance={((index + 1) / 5)} />
            })
                :
                Array.from({ length: 5 }, (_, i) => i).map((_, index) => {
                    return <Cell chance={((index + 1) / 5)} />
                }).reverse()
        }
    </div>
}

export function Grid({ direction = "top" }: { direction?: "top" | "bottom" }) {
    const [numberOfColumns, setNumberOfColumns] = useState<any>([]);

    useEffect(() => {
        const getNumberOfColumns = () => {
            setNumberOfColumns(Array.from({ length: _.ceil(window.innerWidth / 20) }, (_, i) => i));
        }
        getNumberOfColumns();
        window.addEventListener("resize", getNumberOfColumns);
        return () => document.removeEventListener("resize", getNumberOfColumns);
    }, []);

    return <><div className="flex flex-row">
        {
            numberOfColumns.map(() => {
                return <Column direction={direction} />
            })
        }
    </div></>
}

export function Announcement({ imageSrc, description, ...props }: { imageSrc: string, description: string, props?: any }) {
    return (
        <div className="relative border border-[#B6F0FF] dark:border-[#030D0F] min-h-[591px] max-w-full md:max-w-[450px] p-[12px] group space-y-[12px] cursor-pointer">
            <img src={imageSrc} className="w-full aspect-auto object-cover" />
            <p className="font-krona text-[16px] text-[#B6F0FF] dark:text-black">{description}</p>
            <div className="absolute bottom-[20px] right-[20px] w-full flex flex-row justify-end">
                <button className="relative py-[8px] font-krona min-w-[149px] text-[#B6F0FF] dark:text-black">
                    More Info&gt;&gt;
                    <div className="absolute bottom-0 min-h-[1px] w-0 group-hover:w-full transition-all bg-[#B6F0FF] dark:bg-[#030D0F]"></div>
                </button>
            </div>
        </div>)
}

export function Announcements({ children, ...props }: { children: ReturnType<typeof Announcement> | ReturnType<typeof Announcement>[] | undefined, props?: any }) {

    return <div className="flex flex-col min-h-screen justify-center z-[50]">
        <Grid />
        <div className="flex flex-col items-center min-h-[588px] bg-[#042926] dark:bg-[#4FB9AF] transition-all ease-in-out space-y-[42px] pb-[42px]">
            <p className="text-[34px] delay-150 text-[#B6F0FF] dark:text-black font-krona min-h-[77px] border-b border-[#B6F0FF] dark:border-[#030D0F]">Announcements</p>
            <div className="flex flex-col md:flex-row justify-center space-y-[42px] md:space-y-0 md:space-x-[64px]">
                {children}
            </div>
        </div>
        <Grid direction="bottom" />
    </div>
}

