import PageScreen from "../../components/PageScreen";
import HeadlineCarousel, { Headline } from "@/components/Carousel";

export default function Landing() {
    return (
        <>
            <PageScreen>
                <div className="flex flex-col text-[#010D10] dark:text-white px-[62px] py-[42px] space-y-[12px]">
                    <div>
                        <p className="text-[30px]">Welcome To</p>
                        <p className="text-[39px]">JUNIOR INFORMATION TECHNOLOGY SOCIETY</p>
                    </div>
                    <HeadlineCarousel>
                        <Headline headline="JITS General Assembly" imagesrc="/sampleslide2.jpg" />
                        <Headline headline="JITS Academic Awards" imagesrc="/sampleslide1.jpg" />
                        <Headline headline="IT-BPM Stuff" imagesrc="/sampleslide3.jpg" />
                    </HeadlineCarousel>
                    <div className="space-y-[12px]">
                        <p className="text-[30px] mt-[calc(36px-12px)]">LATEST NEWS</p>
                    </div>
                </div>
            </PageScreen>
            <PageScreen>
                <></>
            </PageScreen>
        </>
    )
}