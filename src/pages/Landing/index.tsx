import LandingBackground from "@/components/LandingBackground";
import PageScreen from "../../components/PageScreen";
import HeadlineCarousel, { Headline } from "@/components/Carousel";
import { News, NewsItem } from "@/components/News";
import Welcome from "@/components/Welcome";
import { Announcements, Announcement } from "@/components/Announcements";
import { RadialGradient } from "@/components/Gradient";
import Gap from "@/components/Gap";

export default function Landing() {
  return (
    <>
      <PageScreen flushTop={true}>
        <Welcome />
        <HeadlineCarousel>
          <Headline
            headline="Junior Information Technology Society General Assembly 2023"
            imagesrc="/events/event2.jpg"
          />
          <Headline
            headline="JITS Academic Awards"
            imagesrc="/events/event1.jpg"
          />
          <Headline headline="IT-BPM Stuff" imagesrc="/events/event3.jpg" />
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
      <Gap />
      <PageScreen flush={true}>
        <RadialGradient />
        <Announcements>
          <Announcement
            imageSrc="/announcements/announcementimage1.png"
            description="We're making some big decisions, and we want your input! Join us for the online ratification of our Constitution and..."
          />
          <Announcement
            imageSrc="/announcements/announcementimage2.png"
            description="Celebrating Excellence! A huge round of applause and a heartfelt congratulations to our exceptional.."
          />
          <Announcement
            imageSrc="/announcements/announcementimage3.png"
            description="A huge round of applause and a heartfelt congratulations to our exceptional Dean's Listers for achieving..."
          />
        </Announcements>
      </PageScreen>
      <Gap />
      <PageScreen>
        <div className="flex-1 flex flex-col justify-center">
          <div className="self-center flex flex-col h-[730px] min-w-[1120px]">
            <div className="h-[64px] w-full flex flex-row">
              <div class="relative h-full w-[20px]">
                <div className="absolute w-[10px] h-[32px] bottom-0 right-0 border-t border-l  border-blue-400"></div>
              </div>
              <div className="relative h-full flex-1 flex flex-row">
                <div className="self-center mx-2 text-center !text-[33px] font-black paint-fsm font-krona text-stroke text-stroke-teal text-fill-transparent text-lg">
                  EVENTS
                </div>
                <div className="h-[32px] w-full border-t  border-blue-400 self-end"></div>
              </div>
              <div class="relative h-full w-[20px]">
                <div className="absolute w-[10px] h-[32px] bottom-0 left-0 border-t border-r  border-blue-400"></div>
              </div>
            </div>
            <div className="flex flex-row flex-1">
              <div className="relative w-[20px] h-full">
                <div className="absolute w-[10px] h-full right-0 border-l border-blue-400"></div>
              </div>
              <div className="flex-1">Content</div>
              <div className="relative w-[20px] h-full">
                <div className="absolute w-[10px] h-full left-0 border-r border-blue-400"></div>
              </div>
            </div>
            <div className="h-[64px] w-full flex flex-row">
              <div class="relative h-full w-[20px]">
                <div className="absolute w-[10px] h-[32px] top-0 right-0 border-b border-l   border-blue-400"></div>
              </div>
              <div className="relative h-full flex-1">
                <div className="absolute h-[32px] w-full top-0 border-b border-blue-400"></div>
              </div>
              <div class="relative h-full w-[20px]">
                <div className="absolute w-[10px] h-[32px] top-0 left-0 border-b border-r border-blue-400"></div>
              </div>
            </div>
          </div>
        </div>
      </PageScreen>
      <Gap />
    </>
  );
}
