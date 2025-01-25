"use client";

import { markdownify } from "@lib/utils/textConverter";
import Circle from "./components/Circle";
import ImageFallback from "./components/ImageFallback";

const HowToOrder = () => {
  return (
    <>
      <section className="section pt-0" dir="rtl">
        {/* How to Order */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src="/images/how-to-order.png"
                  width={425}
                  height={487}
                  alt="سفارش ساخت ربات ترید"
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
              <p>چگونه سفارش دهیم</p>
              {markdownify("راهنمای سفارش ساخت ربات ترید", "h2", "section-title bar-left mt-4")}
              
              <p className="mt-10">
              اگر از استراتژی خود مطمئن هستید و قصد دارید آن را به‌صورت یک ربات ترید پیاده‌سازی کنید، اولین قدم این است که با کارشناسان ما تماس بگیرید. برای این کار، کافی است به صفحه "تماس با ما" یا دکمه "ثبت سفارش" در صفحه اصلی سایت مراجعه کنید و اطلاعات لازم را وارد کنید. تیم حرفه‌ای ما با کمال دقت استراتژی شما را بررسی خواهد کرد.
<br></br>
در این مرحله، کارشناسان ما با شما گفتگویی دقیق خواهند داشت تا تمامی جزئیات استراتژی شما را به‌طور کامل درک کنند. هدف ما این است که مطمئن شویم استراتژی شما قابل پیاده‌سازی است و به‌درستی در ربات ترید مورد نظر شما اجرا خواهد شد. در صورتی که استراتژی شما با الزامات فنی و شرایط بازار سازگار باشد، تیم ما شما را برای مراحل بعدی راهنمایی خواهد کرد.
<br></br>
پس از تایید قابلیت پیاده‌سازی استراتژی، ما شروع به طراحی و برنامه‌نویسی ربات ترید شما خواهیم کرد. در تمام مراحل، شما در ارتباط نزدیک با تیم ما خواهید بود تا اطمینان حاصل کنید که ربات دقیقاً مطابق با نیازهای شما عمل می‌کند. اگر سوال یا ابهامی در هر مرحله داشتید، پشتیبانی ما همواره در کنار شما خواهد بود تا هر مشکلی را حل کنیم و روند کار را به بهترین شکل پیش ببریم.
<br></br>
به این ترتیب، شما از یک فرایند ساده، شفاف و حرفه‌ای بهره‌مند خواهید شد که در آن استراتژی شما دقیقاً مطابق خواسته‌هایتان به یک ربات ترید قدرتمند تبدیل خواهد شد.
              </p>
            </div>
          </div>
        </div>

        {/* Steps to Order */}
        <div className="section container">
          <div className="animate text-center">
            <p>مراحل سفارش ساخت ربات ترید</p>
            {markdownify("مراحل اصلی سفارش ساخت ربات ترید :", "h2", "section-title mt-4")}
          </div>
          <div className="row mt-10 justify-center">
            <div className="mt-10 md:col-6 lg:col-5">
              <div className="animate text-center md:px-6 xl:px-12">
                {markdownify("ارتباط با مشاوره", "h3", "h4")}
                {markdownify("اولین قدم این است که با تیم مشاوره ما تماس بگیرید. در این مرحله نیازها و اهداف خود را برای ربات ترید بیان می‌کنید.", "p", "mt-2")}
              </div>
            </div>
            <div className="mt-10 md:col-6 lg:col-5">
              <div className="animate text-center md:px-6 xl:px-12">
                {markdownify("توضیح استراتژی", "h3", "h4")}
                {markdownify("پس از مشاوره، شما می‌توانید استراتژی دقیق خود را برای ربات ترید توضیح دهید تا تیم ما آن را تحلیل و طراحی کند.", "p", "mt-2")}
              </div>
            </div>
            <div className="mt-10 md:col-6 lg:col-5">
              <div className="animate text-center md:px-6 xl:px-12">
                {markdownify("شروع قرارداد", "h3", "h4")}
                {markdownify("پس از تأیید استراتژی و مشخصات ربات، قرارداد رسمی برای شروع ساخت ربات تنظیم می‌شود.", "p", "mt-2")}
              </div>
            </div>
            <div className="mt-10 md:col-6 lg:col-5">
              <div className="animate text-center md:px-6 xl:px-12">
                {markdownify("تعیین زمان تحویل و پرداخت هزینه", "h3", "h4")}
                {markdownify("در این مرحله، زمان تحویل نهایی ربات و شرایط پرداخت هزینه مشخص می‌شود. ما برای اطمینان از رضایت شما، شرایط منعطفی در نظر می‌گیریم.", "p", "mt-2")}
              </div>
            </div>
          </div>
        </div>

        {/* Post-Delivery Support */}
        <div className="section container">
        <div className="animate text-center">
  <h2 className="section-title mt-4">پشتیبانی دائمی پس از ساخت ربات ترید</h2>
  <p className="mt-6">
    یکی از مهم‌ترین عوامل موفقیت در استفاده از ربات ترید، داشتن پشتیبانی حرفه‌ای و مطمئن پس از تحویل است. ما در تمام مراحل پس از تحویل ربات ترید در کنار شما خواهیم بود تا اطمینان حاصل کنیم که ربات به بهترین شکل ممکن عمل می‌کند.
  </p>
  <h3 className="section-subtitle mt-8">رفع رایگان مشکلات فنی</h3>
  <p className="mt-4">
    هر گونه مشکل فنی یا اختلالی که در عملکرد ربات ترید پیش بیاید، توسط تیم پشتیبانی ما به‌صورت رایگان و سریع رفع خواهد شد. این خدمات شامل بررسی دقیق کدنویسی، عملکرد الگوریتم‌ها و رفع خطاهای پیش‌بینی‌نشده است.
  </p>
  <h3 className="section-subtitle mt-8">پشتیبانی 24/7 و دائمی</h3>
  <p className="mt-4">
    خدمات پشتیبانی ما به‌صورت 24/7 در دسترس است. در هر ساعت از شبانه‌روز، می‌توانید از طریق تماس، ایمیل یا چت آنلاین با ما در ارتباط باشید و مشکلات خود را مطرح کنید. ما اطمینان می‌دهیم که ربات ترید شما همواره آماده و بدون اختلال فعالیت کند.
  </p>
  <h3 className="section-subtitle mt-8">تجربه‌ای مطمئن و بی‌دغدغه</h3>
  <p className="mt-4">
    ما باور داریم که ساخت ربات ترید تنها آغاز یک مسیر است. همراهی و پشتیبانی ما به شما این امکان را می‌دهد که با اطمینان کامل از ربات خود استفاده کنید و در مسیر موفقیت قدم بردارید. با تیم پشتیبانی حرفه‌ای ما، دغدغه‌های فنی را فراموش کنید و روی رشد و پیشرفت خود تمرکز کنید.
  </p>
</div>

        </div>
      </section>
    </>
  );
};

export default HowToOrder;
