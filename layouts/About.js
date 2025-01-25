"use client";

import { markdownify } from "@lib/utils/textConverter";
// import SeoMeta from "@layouts/partials/SeoMeta";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import Head from 'next/head';





const About = () => {
  
  return (
       
    <>


      <section className="section pt-0" dir="rtl">
        {/* About */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src="/images/about-us.png"
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 md:order-1 lg:col-4">
              <p>درباره ما</p>
              {markdownify("ما یک تیم با تجربه  در زمینه برنامه نویسی ربات‌های ترید با استراتژی‌های شخصی هستیم", "h2", "section-title bar-left mt-4")}
              
              <p className="mt-10">
              در تیم ما، ساخت ربات‌های ترید تنها به کدنویسی ختم نمی‌شود. ما با دقت به صحبت‌های شما گوش می‌دهیم تا نیازها و اهداف مالی شما را کاملاً درک کنیم و رباتی طراحی کنیم که به‌طور کامل مطابق با استراتژی‌های شما عمل کند. ما می‌دانیم که هر تریدری روش خاص خود را دارد و ربات باید دقیقاً مثل یک دستیار شخصی عمل کند که همیشه به استراتژی شما پایبند باشد.
<br></br>
ابتدا با شما همکاری می‌کنیم تا استراتژی‌های معاملاتی‌تان را به‌طور کامل بشناسیم و آن‌ها را در ربات ترید شما پیاده‌سازی کنیم. ما برایتان وقت می‌گذاریم تا مطمئن شویم که همه چیز درست طبق خواسته شما پیش می‌رود. بعد از این‌که ربات آماده شد، تیم ما همچنان در کنار شما خواهد بود. هر وقت نیاز به کمک یا مشاوره داشتید، ما اینجا هستیم تا مشکلات فنی را برطرف کنیم و ربات را بهینه نگه داریم.
<br></br>
ما باور داریم که یک ربات ترید باید همیشه در مسیر شما و با استراتژی شما هماهنگ باشد. برای همین پشتیبانی دائمی از شما را در اولویت داریم تا با خیال راحت و بدون نگرانی از ربات خود استفاده کنید. همیشه در کنار شما خواهیم بود تا نتایج بهتری بگیرید.
              </p>
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
  <div className="animate text-center">
    <p>چگونه کار می‌کنیم</p>
    <h2 className="section-title mt-4">فرآیند توسعه و پیاده‌سازی ربات‌های ترید</h2>
    <p className="mt-10">
      ما با درک عمیق نیازها و استراتژی‌های مالی شما، ربات‌هایی دقیق، امن و قدرتمند طراحی و توسعه می‌دهیم. هدف ما این است که به شما ابزاری هوشمند ارائه کنیم که معاملات مالی‌تان را به سطح بالاتری ببرد.
    </p>
  </div>
  <div className="row mt-10 justify-center">
    <div className="mt-10 md:col-6 lg:col-5">
      <div className="animate text-center md:px-6 xl:px-12">
        <h3 className="h4">مشاوره و درک استراتژی شما</h3>
        <p className="mt-2">
          در اولین قدم، تیم ما با شما همکاری می‌کند تا نیازها و اهداف مالی‌تان را به‌طور کامل شناسایی کند. استراتژی‌های بازار و نوع معاملاتی که مدنظر دارید، به دقت بررسی می‌شود تا مطمئن شویم رباتی که توسعه می‌دهیم، به طور کامل با برنامه‌های شما همخوانی داشته باشد.
        </p>
      </div>
    </div>
    <div className="mt-10 md:col-6 lg:col-5">
      <div className="animate text-center md:px-6 xl:px-12">
        <h3 className="h4">ساخت ربات بر اساس استراتژی شما</h3>
        <p className="mt-2">
          پس از تحلیل دقیق استراتژی، ما شروع به توسعه ربات شما می‌کنیم. با استفاده از تکنولوژی‌های پیشرفته، زبان‌های برنامه‌نویسی به‌روز و الگوریتم‌های هوشمند، رباتی منحصر‌به‌فرد طراحی می‌کنیم که بتواند در هر شرایط بازار، عملکردی بهینه داشته باشد.
        </p>
      </div>
    </div>
    <div className="mt-10 md:col-6 lg:col-5">
      <div className="animate text-center md:px-6 xl:px-12">
        <h3 className="h4">پشتیبانی دائمی و بهینه‌سازی</h3>
        <p className="mt-2">
          پس از تحویل ربات، ما همچنان همراه شما خواهیم بود. خدمات پشتیبانی دائمی ما شامل رفع مشکلات فنی، ارائه آپدیت‌های جدید و بهینه‌سازی عملکرد ربات است. با تیم پشتیبانی ما، شما همیشه مطمئن خواهید بود که رباتتان در بهترین وضعیت ممکن کار می‌کند.
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src="/images/mission.png"
                  width={425}
                  height={487}
                  alt="ساخت ربات ترید شخصی"
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4">
              <p>هدف ما</p>
              {markdownify("ایجاد محیطی شفاف و حرفه ای برای تبدیل استراژی افراد به ربات ترید", "h2", "section-title bar-left mt-4")}
              {markdownify("هدف تیم ما در ساخت ربات ترید، فراهم آوردن راه‌حلی است که به افراد این امکان را می‌دهد تا استراتژی‌های شخصی خود را به صورت خودکار و بدون دخالت انسانی در بازارهای مالی پیاده‌سازی کنند. ما با بهره‌گیری از الگوریتم‌های پیشرفته و هوش مصنوعی، ربات‌هایی می‌سازیم که قادرند تحلیل‌های دقیق و تصمیمات معاملاتی بهینه اتخاذ کنند. این ربات‌ها با در نظر گرفتن استراتژی‌های خاص هر فرد، به صورت خودکار در بازارهای مختلف مانند ارزهای دیجیتال، فارکس و سایر بازارهای مالی به معامله پرداخته و به کاربران کمک می‌کنند تا بدون احساسات و با مدیریت بهینه سرمایه، بهترین تصمیمات را در زمان مناسب بگیرند. علاوه بر این، تیم پشتیبانی ما همواره در کنار شماست تا در هر مرحله از ساخت ربات ترید و تنظیمات آن، شما را راهنمایی و پشتیبانی کند و اطمینان حاصل کند که ربات شما به بهترین شکل ممکن عمل می‌کند. ما در تلاشیم تا به شما کمک کنیم تا با استفاده از ربات ترید، به اهداف مالی خود دست یابید و تجربه معاملاتی حرفه‌ای و سودآور داشته باشید.", "p", "mt-10")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
