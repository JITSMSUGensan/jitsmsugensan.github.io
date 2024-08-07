import LandingBackground from "@/components/LandingBackground";
import PageScreen from "../../components/PageScreen";
import HeadlineCarousel, { Headline } from "@/components/Carousel";
import { News, NewsItem } from "@/components/News";
import Welcome from "@/components/Welcome";
import { Announcements, Announcement } from "@/components/Announcements";
import { RadialGradient } from "@/components/Gradient";
import Gap from "@/components/Gap";
import Events, { Event } from "@/components/Events";
import About from "@/components/About";
import Organization, { Member } from "@/components/Organization";
import FloaterParallaxScene from "@/components/Floaters/FloaterParallaxScene";

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
      <Gap>
        <RadialGradient translate={{ x: -40, y: -10 }} />
      </Gap>
      <PageScreen flush={true}>
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
      <Gap>
        <RadialGradient
          position={{ x: 100, y: 0 }}
          translate={{ x: -50, y: -60 }}
          scale={1.2}
        />
      </Gap>
      <PageScreen>
        <FloaterParallaxScene />
        <Events>
          <Event title="GENERAL ASSEMBLY" imageSource="/events/event4.png" />
          <Event title="TEKKIDS" imageSource="/events/event5.png" />
          <Event title="DO DAY" imageSource="/events/event6.png" />
          <Event title="IT WEEK" imageSource="/events/event7.png" />
        </Events>
        <Gap className="min-h-[500px]" />
        <About />
        <Organization>
          {Array.from({ length: 10 }).map((_, index) => (
            <Member
              key={index}
              firstname="firstname"
              lastname="lastname"
              position="position"
              imageSource="placeholder-square.png"
            />
          ))}
        </Organization>
        <Gap className="min-h-[500px]">
          <RadialGradient
            position={{ x: 0, y: 100 }}
            translate={{ x: -50, y: -60 }}
          />
        </Gap>
      </PageScreen>
      <div className="align-center relative z-[1000] flex flex-col items-center justify-center space-y-[8px] bg-[#041114] py-[63px] text-center text-[23px]">
        <p className="font-krona">Contributors</p>
        <div className="flex min-h-[78px] flex-row justify-center space-x-[343px]">
          <p className="font-kumbh text-[20px]">Reinhart Logronio</p>
          <p className="font-kumbh text-[20px]">Carren Mae Yongco</p>
        </div>
        <p className="font-kumbh min-h-[39px] text-[20px]">
          Want to be a contributor?
        </p>
        <button className="h-[55px] w-[182px] border border-white text-[24px]">
          VOLUNTEER NOW
        </button>
      </div>
      <div className="relative z-[2000] flex flex-row justify-center space-x-[80px] bg-[#01090B] px-[352px] py-[32px]">
        <div className="flex flex-row space-x-[13px]">
          <img src="icon-email.png" className="h-[24px] w-[26px]" />
          <p className="font-kumbh text-[16px]">jits@msugensan.edu.ph</p>
        </div>
        <div className="flex flex-row space-x-[13px]">
          <img src="icon-facebook.png" className="h-[24px] w-[24px]" />
          <img src="icon-instagram.png" className="h-[24px] w-[25px]" />
          <img src="icon-twitter.png" className="h-[24px] w-[29px]" />
          <p className="font-kumbh text-[16px]">jitsmsugsc</p>
        </div>
      </div>
    </>
  );
}
