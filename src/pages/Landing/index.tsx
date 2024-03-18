import LandingBackground from "@/components/LandingBackground";
import PageScreen from "../../components/PageScreen";
import HeadlineCarousel, { Headline } from "@/components/Carousel";
import { News, NewsItem } from "@/components/News";
import Welcome from "@/components/Welcome";
import Announcements from "@/components/Announcements";

export default function Landing() {
    return (
        <>
            <PageScreen>
                <Welcome />
                <HeadlineCarousel>
                    <Headline headline="Junior Information Technology Society General Assembly 2023" imagesrc="/sampleslide2.jpg" />
                    <Headline headline="JITS Academic Awards" imagesrc="/sampleslide1.jpg" />
                    <Headline headline="IT-BPM Stuff" imagesrc="/sampleslide3.jpg" />
                </HeadlineCarousel>
                <News>
                    <NewsItem
                        title="JITS General Assembly 2023" 
                        date="02/20/2024" 
                        description="Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat egestas mi gravida suspendisse arcu ut. Id augue purus sed tristique convallis rhoncus dignissim at faucibus. Pellentesque euismod donec nascetur sociis mattis. Malesuada." 
                    />
                    <NewsItem
                        title="MSU-Gensan’s back gate reopens for students, employees only"
                        date="02/20/2024"
                        description="Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat egestas mi gravida suspendisse arcu ut. Id augue purus sed tristique convallis rhoncus dignissim at faucibus. Pellentesque euismod donec nascetur sociis mattis. Malesuada."
                    />
                </News>
                <LandingBackground />
            </PageScreen>
            <PageScreen flush={true}>
                <>
                    <img src="/radialgradient1.png" className={`absolute top-0 left-0 translate-y-full`} />
                    <Announcements/>
                </>
            </PageScreen>
        </>
    )
}

/* <div className="flex flex-col text-[#010D10] dark:text-white px-[28px] md:px-[62px] md:py-[42px] space-y-[12px]"> */