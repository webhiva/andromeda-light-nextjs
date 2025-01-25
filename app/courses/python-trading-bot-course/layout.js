import Head from "next/head";

export const metadata = {
  title: "آموزش ساخت ربات ترید با پایتون - جامع - رایگان",
  description:
    "دوره کامل و رایگان ساخت ربات ترید با پایتون. یادگیری گام‌به‌گام برنامه‌نویسی ربات‌های معاملاتی و الگوریتم‌های ترید خودکار.",
  keywords:
    "ربات ترید با پایتون, آموزش رایگان ربات ترید, ساخت ربات ترید, الگوریتم ترید با پایتون, آموزش ترید خودکار, برنامه‌نویسی ترید",
  author: "ربات ترید من",
  url: "https://mytradebot.ir/courses/python-trading-bot-course",
  image: "https://mytradebot.ir/images/courses/create-python-trading-bot-course.webp",
  ogDescription:
    "دوره آموزش ساخت ربات ترید با زبان پایتون به صورت کاملا رایگان ! یادگیری صفر تا صد پیاده سازی استراتژی شخصی در ربات های معامله گر خودکار",
  twitterDescription:
    "دوره رایگان ساخت ربات ترید با پایتون! یادگیری برنامه‌نویسی ربات‌های معاملاتی و الگوریتم‌های پیشرفته ترید به صورت کاملاً رایگان.",
};

export default function CourseLayout({ children }) {
  return (
    <div>
      <Head>
        {/* General SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.twitterDescription} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:url" content={metadata.url} />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": metadata.title,
              "description": metadata.description,
              "provider": {
                "@type": "Organization",
                "name": "ربات ترید من",
                "sameAs": "https://mytradebot.ir",
              },
              "url": metadata.url,
              "thumbnailUrl": metadata.image,
              "courseMode": "Online",
              "isAccessibleForFree": true,
              "learningResourceType": "Free Course",
            }),
          }}
        />
      </Head>
      {children}
    </div>
  );
}
