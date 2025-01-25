import NotFound from "@layouts/404";
import About from "@layouts/About";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Contact from "@layouts/Contact";
import HowToOrder from "@layouts/How";
import Rules from "@layouts/Rules";

export async function generateMetadata({ params }) {
  const { regular } = params;

  let title = '';
  let description = '';
  let canonical = '';

  switch (regular) {
    case "about":
      title = 'درباره ما';
      description = 'ما یک تیم متخصص و با تجربه در زمینه تبدیل استراتژی شخصی به ربات ترید هستیم';
      canonical = 'https://mytradebot.ir/about';
      break;
    case "contact":
      title = 'ارتباط با ما';
      description = 'برای ساخت ربات ترید شما میتوانید از طریق این صفحه با ما در ارتباط باشید';
      canonical = 'https://mytradebot.ir/contact';
      break;
    case "rules":
      title = 'قوانین';
      description = 'قوانین ساخت ربات ترید که حتما قبل از ثبت سفارش باید مطالعه شوند';
      canonical = 'https://mytradebot.ir/rules';
      break;
    case "how":
      title = 'راهنمای سفارش ساخت ربات ترید';
      description = 'در این صفحه شما میتوانید مراحل و روش ثبت سفارش و ساخت ربات ترید را مشاهده کنید';
      canonical = 'https://mytradebot.ir/how';
      break;
    case "404":
      title = 'صفحه پیدا نشد';
      description = 'صفحه پیدا نشد';
      canonical = 'https://mytradebot.ir/404';
      break;
    default:
      title = 'سفارش ساخت ربات ترید';
      description = 'تیم متخصص جهت سفارش و ساخت ربات های ترید با استراتژی شخصی';
      canonical = 'https://mytradebot.ir';
  }

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}


const RegularPages = async ({ params }) => {
  const { regular } = params;

  return (
    <GSAPWrapper>
      {regular === "404" ? (
        <NotFound />
      ) : regular === "about" ? (
        <About />
      ) : regular === "contact" ? (
        <Contact />
      ) : regular === "rules" ? (
        <Rules />
      ) : regular === "how" ? (
        <HowToOrder />
      ) : (
        <NotFound />
      )}
    </GSAPWrapper>
  );
};

export default RegularPages;
