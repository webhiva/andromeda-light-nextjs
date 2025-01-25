"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFileDownload, FaVideo } from "react-icons/fa";

const courseData = {
  title: "آموزش ساخت ربات ترید با پایتون",
  description:
    "توی دوره آموزش ساخت ربات ترید با هم یاد میگیریم چطوری یه استراتژی شخصی رو با پایتون تبدیل به ربات کنیم تا به صورت خودکار داده های کندلی رو از صرافی دریافت کنه تحلیل کنه و تصمیم به معامله کردن بگیره همچنین از صفر تا صد و پروژه محور یاد میگریم سیگنال های ربات معامله گر خودکارمون رو توی تلگرام دریافت کنیم پس حتما با ما همراه باشید.",
  sections: [
    { id: 1, title: "معرفی دوره ساخت ربات ترید با پایتون", video: "/videos/python-trading-bot-course/intro.mp4", desc: "توضیحات سر فصل ها و اینکه توی دوره ساخت ربات ترید قراره چی یاد بگیریم" },
    { id: 2, title: "پیش نیاز های دوره برای ساخت ربات ترید", video: "", desc: "در این بخش پیش‌نیازهای لازم برای یادگیری ربات ترید آموزش داده می‌شود." },
    { id: 3, title: "ربات ترید چیست و چگونه کار میکند", video: "", desc: "در این بخش پیش‌نیازهای لازم برای یادگیری ربات ترید آموزش داده می‌شود." },
    { id: 4, title: "چرا از ربات های ترید استفاده میکنیم", video: "", desc: "در این بخش پیش‌نیازهای لازم برای یادگیری ربات ترید آموزش داده می‌شود." },
    { id: 5, title: "اصول تدوین استراتژی برای ربات", video: "", desc: "در این بخش پیش‌نیازهای لازم برای یادگیری ربات ترید آموزش داده می‌شود." },
    { id: 6, title: "آشنایی با داده های کندلی برای تحلیل", video: "", desc: "در این قسمت، با داده‌های کندلی آشنا می‌شویم." },
    { id: 7, title: "اولین ارتباط با صرافی", video: "", desc: "این بخش به شما نشان می‌دهد که چگونه داده‌های کندلی را از صرافی‌ها استخراج کنید." },
    { id: 8, title: "روش گرفتن داده های کندلی از صرافی", video: "", desc: "در این قسمت، اولین استراتژی برای ربات ترید خود را پیاده‌سازی می‌کنید." },
    { id: 9, title: "پیاده سازی اولین استراتژی", video: "", desc: "یاد می‌گیرید چگونه سیگنال‌ها را از استراتژی خود دریافت کنید." },
    { id: 10, title: "آشنایی با دیتافریم و کتابخانه های محاسبه اندیکاتور", video: "", desc: "در این بخش، زمانبندی اجرای استراتژی‌ها را تنظیم می‌کنید." },
    { id: 11, title: "پیاده سازی یک استراتژی پیشرفته در ربات ترید", video: "", desc: "این قسمت به شما نشان می‌دهد که چگونه سیگنال‌ها را به تلگرام ارسال کنید." },
    { id: 12, title: "ایجاد زمان بندی برای تحلیل و معامله", video: "", desc: "این قسمت به شما نشان می‌دهد که چگونه سیگنال‌ها را به تلگرام ارسال کنید." },
    { id: 13, title: "روش خرید و فروش در صرافی بر اساس استراتژی", video: "", desc: "این قسمت به شما نشان می‌دهد که چگونه سیگنال‌ها را به تلگرام ارسال کنید." },
    { id: 14, title: "روش ارسال سیگنال به تلگرام", video: "", desc: "این قسمت به شما نشان می‌دهد که چگونه سیگنال‌ها را به تلگرام ارسال کنید." },
    { id: 15, title: "نکات تکمیلی", video: "", desc: "این قسمت به شما نشان می‌دهد که چگونه سیگنال‌ها را به تلگرام ارسال کنید." },
    { id: 16, title: "سخن پایانی", video: "", desc: "این قسمت به شما نشان می‌دهد که چگونه سیگنال‌ها را به تلگرام ارسال کنید." },
 
  ],
  additionalInfo: [
    {
      title: "فایل‌ها و منابع دوره",
      content: "تمامی فایل‌های تمرینی این دوره در انتهای هر بخش قابل دانلود هستند.",
      files: [
        { name: "کد پروژه", url: "" },
        { name: "اکسل استفاده شده در پروژه", url: "" },
      ],
    },
    {
      title: "سوالات دوره",
      content: "در صورت داشتن سوال یا پیشنهاد در مورد دوره میتونید به اکانت شخصی من در تلگرام به آیدی @Real_Call_Margin پیام بدید.",
    },
  ],
 
};

export default function CoursePage() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-10" dir="rtl">
      <header className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-6">{courseData.title}</h1>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          {courseData.description}
        </p>
      </header>

      <main className="container mx-auto px-4">
        <section className="space-y-6">
          {courseData.sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-4 text-orange-500 font-medium text-lg hover:bg-orange-50 transition"
                aria-expanded={activeSection === section.id}
              >
                <span className="flex items-center gap-2">
                  <FaVideo className="text-gray-400" />
                  {section.id}. {section.title}
                </span>
                <span>
                  {activeSection === section.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {activeSection === section.id && (
                <div className="p-4 bg-gray-50">
                  {section.desc && <p className="text-gray-600 mb-4">{section.desc}</p>}
                  {section.video ? (
                    <video
                      controls
                      src={section.video}
                      className="w-full rounded-lg shadow-md"
                      alt={`ویدیو مربوط به ${section.title}`}
                    ></video>
                  ) : (
                    <p className="text-gray-600 text-center py-6">
                      این قسمت در حال ساخت است.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="mt-12 max-w-full mx-auto space-y-8">
          {courseData.additionalInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">{info.title}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{info.content}</p>
              {info.files && (
                <ul className="list-disc list-inside space-y-3">
                  {info.files.map((file, idx) => (
                    <li key={idx}>
                      <a
                        href={file.url}
                        className="text-orange-500 flex items-center gap-2 hover:underline"
                        download
                      >
                        <FaFileDownload />
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>


        <section className="mt-12 max-w-full mx-auto space-y-8">
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-3xl font-bold text-orange-500 mb-4">توضیحات تکمیلی</h2>
    <div className="space-y-6">
    <div>
  <h3 className="text-2xl font-semibold text-gray-700">دوره ساخت ربات ترید با پایتون مناسب چه کسانی است؟</h3>
  <p className="text-gray-600 leading-relaxed">
    این دوره مناسب علاقه‌مندان به برنامه‌نویسی و بازارهای مالی است. اگر تازه‌کار هستید و به دنبال یادگیری مفاهیم پایه پایتون و کاربرد آن در معاملات خودکار هستید یا اگر یک تریدر حرفه‌ای هستید که می‌خواهید استراتژی‌های خود را خودکار کنید، این دوره برای شما ایده‌آل است.
  </p>
</div>
<div>
  <h3 className="text-2xl font-semibold text-gray-700">چرا باید ربات ترید خود را بسازید؟</h3>
  <p className="text-gray-600 leading-relaxed">
    ساخت ربات ترید به شما این امکان را می‌دهد که از تصمیم‌گیری‌های احساسی در معاملات جلوگیری کنید. با برنامه‌نویسی ربات‌های معاملاتی، می‌توانید استراتژی‌های خود را به طور دقیق پیاده‌سازی کرده و معاملات خود را به صورت 24/7 انجام دهید.
  </p>
</div>
<div>
  <h3 className="text-2xl font-semibold text-gray-700">در این دوره چه مباحثی پوشش داده می‌شود؟</h3>
  <p className="text-gray-600 leading-relaxed">
    این دوره شامل مباحثی از جمله مقدمات پایتون، استفاده از API های صرافی‌های ارز دیجیتال، طراحی و اجرای الگوریتم‌های ترید، و مدیریت ریسک است. تمامی مطالب به صورت گام‌به‌گام و با مثال‌های عملی آموزش داده می‌شود.
  </p>
</div>
<div>
  <h3 className="text-2xl font-semibold text-gray-700">چگونه این دوره می‌تواند شما را به درآمد برساند؟</h3>
  <p className="text-gray-600 leading-relaxed">
    با یادگیری ساخت ربات ترید، می‌توانید به صورت خودکار در بازارهای مالی فعالیت کنید. این مهارت می‌تواند به شما کمک کند تا درآمد غیرفعال کسب کرده و زمان بیشتری برای تحلیل بازار یا فعالیت‌های دیگر داشته باشید.
  </p>
</div>
<div>
  <h3 className="text-2xl font-semibold text-gray-700">مزایای یادگیری پایتون برای ترید خودکار</h3>
  <p className="text-gray-600 leading-relaxed">
    پایتون به دلیل سادگی، انعطاف‌پذیری، و وجود کتابخانه‌های گسترده مانند NumPy و Pandas، یک زبان ایده‌آل برای طراحی ربات‌های ترید است. با یادگیری پایتون، نه تنها می‌توانید معاملات خود را خودکار کنید، بلکه فرصت‌های شغلی بیشتری در زمینه برنامه‌نویسی پیدا خواهید کرد.
  </p>
</div>

    </div>
  </div>
</section>

      </main>
    </div>
  );
}
