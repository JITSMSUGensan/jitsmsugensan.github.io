import { useContext, useEffect, useState } from "preact/hooks";
import _ from "lodash";
import { createContext } from "preact";

export function Cell({ chance }: { chance: number }) {
    const [value, setValue] = useState(_.random(chance, 1));

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(_.random(chance, 1));
        }, _.random(1000, 2500));
        return () => clearInterval(interval);
    }, [chance])

    return <div className={`size-[20px] duration-1000 ease-out transition-all bg-[#042926] dark:bg-[#4FB9AF] ${value > 0.85 ? "scale-100" : "scale-0"}`}></div>
}

export function Column({ direction = "top" }: { direction?: "top" | "bottom" }) {
    // const regen = useRegen();
    // const [column, setColumn] = useState<any>([]);

    // useEffect(() => {
    //     const currentGrid: number[] = [];
    //     for (let i = 0; i < 5; i++) {
    //         currentGrid.push(_.random(((i + 1) / 5), 1));
    //     }
    //     setColumn(direction === "top" ? currentGrid : currentGrid.reverse());
    // }, []);

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
        {/* {
            column.map((value: any, index: number) => {
                return <div key={index} className={`size-[20px] duration-500 ease-in-out transition-all bg-[#042926] dark:bg-[#4FB9AF] ${value > 0.85 ? " scale-100" : "scale-0"}`}></div>
            })
        } */}
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

export const RegenContext = createContext<number>(0);

export const useRegen = () => {
    const regen = useContext(RegenContext);
    return regen;
}

export default function Announcements() {
    const [regen, setRegen] = useState(0);

    useEffect(() => {
        const regenerate = () => {
            // setRegen(regen + 1);
        }
        const regenerateInterval = setInterval(regenerate, 500);
        // document.addEventListener("scroll", regenerate);
        return () => {
            clearInterval(regenerateInterval);
            // document.removeEventListener("scroll", regenerate);
        }
    }, [regen]);

    return <RegenContext.Provider value={regen}>
        <Grid />
        <div className="flex flex-col items-center min-h-[588px] bg-[#042926] dark:bg-[#4FB9AF] transition-all ease-in-out space-y-[42px]">
            <p className="text-[34px] delay-150 text-[#B6F0FF] dark:text-black font-krona min-h-[77px] border-b border-[#B6F0FF] dark:border-[#030D0F]">Announcements</p>
            <div className="flex flex-row justify-center space-x-[64px]">
                <div className="border border-[#B6F0FF] dark:border-[#030D0F] min-h-[591px] max-w-full md:max-w-[450px] p-2 space-y-[12px]">
                    <img src="/announcementimage1.png" className="w-full aspect-auto object-cover" />
                    <p className="font-krona text-[16px] text-[#B6F0FF] dark:text-black">We're making some big decisions, and we want your input! Join us for the online ratification of our Constitution and...</p>
                </div>
                <div className="border border-[#B6F0FF] dark:border-[#030D0F] min-h-[591px] min-w-full md:min-w-[450px]">
                </div>
                <div className="border border-[#B6F0FF] dark:border-[#030D0F] min-h-[591px] min-w-full md:min-w-[450px]">
                </div>
            </div>
        </div>
        <Grid direction="bottom" />
    </RegenContext.Provider>
}