import React from "preact/compat";

export default function Screen({ children, className, ...props }: { children: React.ReactNode, className?: string, props?: any }) {
    return (
        <div className={`min-h-screen w-full flex flex-col overflow-x-hidden overflow-y-auto bg-[#B6F0FF] dark:bg-[#010D10] transition-all ${className}`} {...props}>
            {children}
        </div>
    )
}