import { useEffect, useState } from "preact/hooks"

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

    return (
        <div className={`${loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} text-white fixed min-h-screen min-w-full flex flex-col justify-center items-center space-y-3 bg-neutral-800 z-[2000] transition-all  `}>
            
        </div>
    )
}