import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
// import SeoMeta from "@layouts/partials/SeoMeta";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
// import Testimonial from "@layouts/partials/Testimonial";
import { getListPage } from "@lib/contentParser";

export const metadata = {
  title: 'ساخت ربات ترید',
  description:'سفارش ساخت و برنامه‌نویسی ربات ترید با استراتژی شخصی شما. با دریافت سرور مجازی رایگان و دسترسی به پنل مدیریت پیشرفته، به راحتی معاملات خود را مدیریت کنید و به سودهای بیشتری دست یابید.'  ,
  
};

 

const Home = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;
  return (
    <>
      <HomeBanner />
      <Features/>
      <SpecialFeatures/>
      <ShortIntro/>
      {/* <Testimonial testimonial={testimonial} /> */}
      <Cta />
      
    </>
  );
};

export default Home;
