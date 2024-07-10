import LandingBackground from "@/components/LandingBackground";
import PageScreen from "../../components/PageScreen";
import HeadlineCarousel, { Headline } from "@/components/Carousel";
import { News, NewsItem } from "@/components/News";
import Welcome from "@/components/Welcome";
import { Announcements, Announcement } from "@/components/Announcements";
import { RadialGradient } from "@/components/Gradient";
import Gap from "@/components/Gap";
import Events, { Event } from "@/components/Events";

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
        <Events>
          <Event title="GENERAL ASSEMBLY" imageSource="/events/event4.png" />
          <Event title="TEKKIDS" imageSource="/events/event5.png" />
          <Event title="DO DAY" imageSource="/events/event6.png" />
          <Event title="IT WEEK" imageSource="/events/event7.png" />
        </Events>
      </PageScreen>
      <Gap />
    </>
  );
}
