

export default function LandingBackground() {
    return (
        <>
            <img src="/landing-background.png" className="absolute z-[1] right-0 max-w-[calc(100vw-1124px-62px-28px)] max-h-[1093px] aspect-auto hidden 2xl:block transition-all opacity-0 dark:opacity-100" />
            <img src="/landing-background-dark.png" className="absolute right-0 max-w-[calc(100vw-1124px-62px-28px)] max-h-[1093px] aspect-auto hidden 2xl:block transition-all opacity-100 dark:opacity-0" />
        </>
    )
}