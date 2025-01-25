import Head from "next/head";

export const metadata = {
  title: "آموزش جامع ربات ترید - بهترین دوره برای ترید خودکار",
  description:
    "یادگیری اصول و تکنیک‌های ترید خودکار با استفاده از ربات‌های پیشرفته. این دوره به شما کمک می‌کند تا به صورت حرفه‌ای وارد دنیای ترید شوید.",
  keywords:
    "ربات ترید, آموزش ترید, ترید خودکار, دوره آموزشی ترید, الگوریتم ترید, هوش مصنوعی در ترید",
  author: "ربات ترید من",
  url: "https://mytradebot.ir/courses",
  image: "https://mytradebot.ir/images/courses/trading-bots-courses.webp",
  ogDescription:
    "دوره‌های ربات ترید بهترین راه برای یادگیری ترید خودکار و کسب درآمد از بازارهای مالی است. همین حالا یادگیری را شروع کنید!",
  twitterDescription:
    "یادگیری ترید خودکار با بهترین دوره‌های آموزشی ربات ترید. مهارت‌های خود را ارتقا دهید و وارد دنیای ترید حرفه‌ای شوید!",
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
                "sameAs": "https://mytradebot.ir/",
              },
              "url": metadata.url,
              "thumbnailUrl": metadata.image,
              "hasCourse": [
                {
                  "@type": "Course",
                  "name": "آموزش ساخت ربات ترید با پایتون",
                  "description": "دوره آموزش صفر تا صد و رایگان ساخت ربات ترید با استفاده از پایتون",
                  "url": "https://mytradebot.ir/courses/python-trading-bot-course",
                  "thumbnailUrl": "https://mytradebot.ir/images/courses/create-python-trading-bot-course.webp",
                  "courseMode": "Online",
                  "isAccessibleForFree": true,
                  "learningResourceType": "Free Course",
                },
              ],
            }),
          }}
        />

      </Head>
      {children}
    </div>
  );
}
