import { useContext, useEffect, useState } from "preact/hooks";
import _ from "lodash";
import { createContext } from "preact";

export function Column({ direction = "top" }: { direction?: "top" | "bottom" }) {
    const regen = useRegen();
    const [column, setColumn] = useState<any>([]);

    useEffect(() => {
        const currentGrid: number[] = [];
        for (let i = 0; i < 5; i++) {
            currentGrid.push(_.random(((i + 1) / 5), 1));
        }
        setColumn(direction === "top" ? currentGrid : currentGrid.reverse());
    }, [regen]);

    return <div className="flex flex-col">
        {
            column.map((value: any, index: number) => {
                return <div key={index} className={`size-[20px] duration-0 transition-all ${ value > 0.85 ? "bg-white" : "bg-transparent"}`}></div>
            })
        }
    </div>
}

export function Grid({ direction = "top"}: { direction?: "top" | "bottom" }) {
    const [numberOfColumns, setNumberOfColumns] = useState<any>([]);

    useEffect(() => {
        const getNumberOfColumns = () => {
            setNumberOfColumns(Array.from({ length: _.floor(window.innerWidth / 20) }, (_, i) => i));
        }
        getNumberOfColumns();
        window.addEventListener("resize", getNumberOfColumns);
        return () => document.removeEventListener("resize", getNumberOfColumns);

        // const regenerateGrid = setInterval(() => {
        //     const newNumberOfColumns = _.floor(window.innerWidth / 20);
        //     if (newNumberOfColumns !== numberOfColumns.length) {
        //         setNumberOfColumns(Array.from({ length: newNumberOfColumns }, (_, i) => i));
        //     }
        // }, 100)
        // return () => clearInterval(regenerateGrid);
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

export default function Announcements(){
    const [regen, setRegen] = useState(0);

    useEffect(() => {
        const regenerate = () => {
            setRegen(regen + 1);
        }
        document.addEventListener("scroll", regenerate);
        return () => document.removeEventListener("scroll", regenerate);
    }, [regen]);

    return <RegenContext.Provider value={regen}>
        <Grid />
        <Grid direction="bottom"/>
    </RegenContext.Provider>
}