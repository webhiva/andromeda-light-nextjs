import BlogPagination, { generateStaticParams } from "./page/[slug]/page";

export { generateStaticParams };
export default BlogPagination;



export const metadata = {
    title: 'وبلاگ',
    description:'وبلاگ وبسایت ربات ترید من جایی برای بیشتر یاد گرفتن در مورد ربات های ترید و طرز کار اون هاست . اگه به ربات های ترید علاقه مندی حتما یه سری به مطالب بزن'  ,
    alternates: {
      canonical: 'https://mytradebot.ir/posts',
    },
  };
  