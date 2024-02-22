import React from "preact/compat";

export default function Screen({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full flex flex-col overflow-x-hidden overflow-y-auto">
            {children}
        </div>
    )
}