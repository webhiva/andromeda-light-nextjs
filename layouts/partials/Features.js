"use client";

import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Features = () => {
  const features = {
    sub_title: "چرا ما ؟",
    title: "ویژگی های ما در ساخت ربات ترید",
    description: "فرقی نمی‌کند تازه‌کار باشید یا حرفه‌ای، ضعف‌های انسانی مثل خستگی، احساسات، و از دست دادن موقعیت‌ها، همیشه مانع اجرای دقیق استراتژی‌های ترید می‌شود. راه‌حل؟ ساخت ربات ترید متناسب با استراتژی شما.ما، با سال‌ها تجربه در طراحی ربات‌های ترید و آشنایی کامل با ابزارها و APIهای صرافی‌های کریپتو و متاتریدر، آماده‌ایم تا رباتی دقیقاً مطابق نیاز شما بسازیم. این ربات به طور هوشمند و بدون تأثیر احساسات، معاملات شما را مدیریت می‌کند و به افزایش سود کمک می‌کند.اگر به دنبال ساخت ربات ترید شخصی هستید، همین حالا سفارش دهید و با بهره‌گیری از تخصص ما، به موفقیت بیشتری در بازار دست یابید.",
    list: [
      {
        icon: "code",
        title: "تجربه و تخصص",
        content: "تخصص فنی نقش حیاتی در ساخت ربات ترید دارد. آشنایی تیم با نیازهای کاربران، تجربه چندساله در طراحی ربات‌های سفارشی، و تسلط به ابزارهای پیشرفته، امکان ارائه راه‌حل‌های دقیق و کارآمد را فراهم می‌کند. درک عمیق از بازارهای مختلف مانند کریپتو و فارکس به تیم اجازه می‌دهد ربات‌هایی هوشمند و انعطاف‌پذیر برای مدیریت سرمایه و اجرای استراتژی‌های شخصی بسازد.",
      },
      {
        icon: "user-check",
        title: "شخصی‌سازی کامل",
        content: "شخصی‌سازی ربات ترید به کاربران این امکان را می‌دهد که ربات خود را بر اساس استراتژی و نیازهای خاص خود طراحی کنند. برخلاف ربات‌های آماده، هر ربات به طور انحصاری برای استراتژی معاملاتی منحصر به فرد کاربر ساخته می‌شود. این شخصی‌سازی باعث بهبود عملکرد ربات و تطابق آن با سبک و روش معامله‌گری هر تریدر می‌شود و با بهینه سازی داعمیآن میتوان به موفقیت های چشمگیری دست پیدا کرد.",
      },
      {
        icon: "help-circle",
        title: "پشتیبانی کامل",
        content: "ویژگی پشتیبانی در ساخت ربات ترید به کاربران این اطمینان را می‌دهد که در صورت بروز مشکل فنی، رفع آن به صورت رایگان انجام خواهد شد. علاوه بر این، مشاوره و پشتیبانی همیشگی و رایگان در اختیار کاربران قرار می‌گیرد. این پشتیبانی مستمر و رایگان برای حل مشکلات و راهنمایی‌های مداوم اهمیت زیادی دارد و کمک می‌کند تا کاربران با اطمینان و آرامش از ربات‌های ترید خود بهره‌برداری کنند.",
      },
    ],
  };

  return (
    <section className="section mt-0" dir="rtl">
      <div className="container text-center">
        <div className="animate">
          <p className="uppercase">{features.sub_title}</p>
          {markdownify(features.title, "h2", "mt-4 section-title")}
          {/* اضافه کردن کلاس‌های اندازه و فاصله */}
          {markdownify(features.description, "p", "mt-10 text-lg leading-relaxed")}
        </div>
        <div className="animate from-right relative mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.list.map((item, index) => (
              <div
                key={"feature-" + index}
                className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-[#ffece4] hover:shadow-none"
              >
                <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                  <FeatherIcon icon={item.icon} />
                </div>
                <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
