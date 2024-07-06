import { twMerge } from "tailwind-merge"


export default function Gap({ className }: { className?: string }) {
    return (
        <div className={twMerge([ "flex min-h-[200px] w-full", className])}></div>
    )
}