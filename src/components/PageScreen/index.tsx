import React from "preact/compat";

export default function Screen({ children, className, flush, ...props }: { children: React.ReactNode, flush?: boolean, className?: string, props?: any }) {
    return (
        <div className={`min-h-screen w-full text-[#010D10] dark:text-white ${!flush && "px-[28px] md:px-[62px]"} md:py-[42px] space-y-[12px] flex flex-col overflow-x-hidden overflow-y-hidden bg-[#B6F0FF] dark:bg-[#010D10] transition-all ${className}`} {...props}>
            {children}
        </div>
    )
}