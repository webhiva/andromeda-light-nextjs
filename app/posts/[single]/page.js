import config from "@config/config.json";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
const { blog_folder } = config.settings;


export async function generateMetadata({ params }) {
  const { single } = params;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug === decodeURIComponent(single)); // استفاده از decodeURIComponent
  const recentPosts = sortByDate(posts).filter((p) => p.slug !== decodeURIComponent(single));
  const { frontmatter, content } = post[0];
  

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    // متا تگ‌های Open Graph
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      // images: [
      //   {
      //     url: frontmatter.image, // URL تصویر
      //     alt: frontmatter.title, // توضیح تصویر
      //   },
      // ],
    },
    // متا تگ‌های Twitter
    twitter: {
      card: 'summary_large_image', // نوع کارت توییتر
      title: frontmatter.title,
      description: frontmatter.description,
      // image: frontmatter.image, // URL تصویر
    },
  };
}



// post single layout
const Article = async ({ params }) => {
  const { single } = params;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug === decodeURIComponent(single)); // استفاده از decodeURIComponent
const recentPosts = sortByDate(posts).filter((p) => p.slug !== decodeURIComponent(single));
  const { frontmatter, content } = post[0];
  
  // console.log(frontmatter)
  // generateMetadata(frontmatter)
  
  
  return (
    <GSAPWrapper>
      <PostSingle
        frontmatter={frontmatter}
        content={content}
        recentPosts={recentPosts}
      />
    </GSAPWrapper>
  );
};

// get post single slug
export async function generateStaticParams() {
  const allSlug = await getSinglePage(`content/${blog_folder}`);
  return allSlug.map((item) => ({
    single: item.slug,
  }));
}

export default Article;
