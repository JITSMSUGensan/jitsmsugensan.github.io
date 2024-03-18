import LandingBackground from "@/components/LandingBackground";
import PageScreen from "../../components/PageScreen";
import HeadlineCarousel, { Headline } from "@/components/Carousel";

export default function Landing() {
    return (
        <>
            <PageScreen>
                <div className="flex flex-col text-[#010D10] dark:text-white px-[28px] md:px-[62px] md:py-[42px] space-y-[12px]">
                    <div>
                        <p className="text-[30px]">Welcome To</p>
                        <p className="text-[39px]">JUNIOR INFORMATION TECHNOLOGY SOCIETY</p>
                    </div>
                    <HeadlineCarousel>
                        <Headline headline="Junior Information Technology Society General Assembly 2023" imagesrc="/sampleslide2.jpg" />
                        <Headline headline="JITS Academic Awards" imagesrc="/sampleslide1.jpg" />
                        <Headline headline="IT-BPM Stuff" imagesrc="/sampleslide3.jpg" />
                    </HeadlineCarousel>
                    
                </div>
                <LandingBackground />
            </PageScreen>
            <PageScreen>
                <>
                    <img src="/radialgradient1.png" className={`absolute top-0 left-0 translate-y-full`} />
                </>
            </PageScreen>
        </>
    )
}