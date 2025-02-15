import ImageFallback from "@layouts/components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";

const SpecialFeatures = () => {
  return (
    <section className="section" dir="rtl">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src="/images/about-us.png"
              width={575}
              height={511}
              alt="ساخت ربات ترید شخصی سازی شده"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>اولین ویژگی</p>
            {markdownify(
              "ربات ترید : بدون احساسات",
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(
              "ربات‌های ترید از لحاظ روانی کاملاً بی‌طرف هستند و هیچ تأثیری از احساسات نخواهند پذیرفت. آنها همیشه بر اساس منطق و داده‌های موجود تصمیم‌گیری می‌کنند، بدون اینکه تحت تأثیر هیجاناتی چون ترس یا طمع قرار بگیرند. این ویژگی به ربات‌ها اجازه می‌دهد تا از اشتباهاتی که معمولاً تریدرهای انسانی به دلیل احساسات آنی مرتکب می‌شوند، اجتناب کنند. به عبارت دیگر، تصمیمات ربات‌ها نه از روی واکنش‌های احساسی، بلکه بر اساس تحلیل‌های دقیق و منطقی که از داده‌های واقعی و روندهای بازار به دست می‌آید، اتخاذ می‌شود. با ساخت ربات ترید، شما می‌توانید از یک سیستم هوشمند و دقیق بهره‌مند شوید که همیشه به طور منطقی و بدون دخالت احساسات عمل می‌کند. این ویژگی به شما کمک می‌کند تا از تصمیمات غیرعاقلانه‌ای که ممکن است بر اثر هیجانات و احساسات ناشی از نوسانات بازار گرفته شود، جلوگیری کنید و در نتیجه، به تصمیمات درست‌تری دست یابید که بر اساس تحلیل‌های واقعی و دقیق استوار باشد.",
              "p",
              "mt-10"
            )}
          </div>
        </div>
       
        <div className="row items-center">
          <div className="animate lg:col-6">
            <ImageFallback
              className="mx-auto"
              src="/images/trade_bot_2.png"
              width={575}
              height={511}
              alt="ربات ترید بدون احساسات و خستگی"
            />
          </div>
          <div className="animate lg:col-5">
            <p>دومین ویژگی</p>
            {markdownify(
              "ربات ترید : بدون توقف",
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(
              "بازارهای مالی همیشه در حال نوسان و تغییرات هستند، و این تغییرات می‌توانند در هر لحظه و به طور غیرمنتظره‌ای رخ دهند. این وضعیت، نیاز به تصمیم‌گیری سریع و دقیق را برای موفقیت در ترید بیشتر می‌کند. اما نکته مهم این است که انسان‌ها نمی‌توانند همیشه هوشیار و آماده باشند. در حالی که شما ممکن است در حال استراحت، خواب یا مشغول انجام کارهای دیگر باشید، ربات‌های ترید همچنان در حال تحلیل داده‌ها و انجام معاملات هستند. آنها به طور مستمر و بی‌وقفه به تحلیل بازار پرداخته و فرصت‌های سودآور را شناسایی می‌کنند.این ویژگی ربات‌های ترید این امکان را به شما می‌دهد که هیچ‌گاه فرصت‌های مناسب برای کسب سود را از دست ندهید. همچنین، برخلاف انسان‌ها که ممکن است به دلیل خستگی، احساسات و محدودیت‌های زمانی قادر به تحلیل و تصمیم‌گیری سریع نباشند، ربات‌ها بدون هیچگونه وقفه‌ای به پردازش داده‌ها و انجام معاملات می‌پردازند. آنها قادرند در هر ساعت از شبانه‌روز که بازار تغییر می‌کند، واکنش نشان دهند و به سرعت تصمیمات لازم را اتخاذ کنند. به این ترتیب، در حالی که شما از استراحت خود لذت می‌برید یا به کارهای دیگر مشغولید، ربات‌های ترید همچنان در حال کسب سود و استفاده از فرصت‌های بازار هستند. این باعث می‌شود که هیچ وقت فرصت‌های سودآور از دست نرود و سرمایه‌گذاری شما همیشه در جریان باشد.",
              "p",
              "mt-10"
            )}
          </div>
        </div>



        <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src="/images/trade_bot_3.png"
              width={575}
              height={511}
              alt="ربات ترید با استراتژی شخصی"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>ویژگی سوم</p>
            {markdownify(
              "ربات ترید : واقع بین",
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(
              "ربات‌های ترید با توانایی تحلیل سریع و دقیق داده‌ها می‌توانند تصمیمات منطقی و مبتنی بر واقعیت اتخاذ کنند. برخلاف انسان‌ها که تحت تأثیر احساسات و توهم موفقیت‌های کوتاه‌مدت قرار می‌گیرند، ربات‌ها هیچ‌گونه عاطفه‌ای ندارند و تنها بر اساس داده‌های واقعی و روندهای بازار عمل می‌کنند. این ویژگی به آنها اجازه می‌دهد که از اشتباهات ناشی از تصمیمات احساسی جلوگیری کنند و در مدیریت ریسک و حفظ سرمایه عملکرد بهتری داشته باشند. با استفاده از ربات‌های ترید، هیچ فرصتی برای کسب سود از دست نمی‌رود. ربات‌ها به طور 24 ساعته و بدون وقفه در حال تحلیل بازار و انجام معاملات هستند، حتی زمانی که شما خوابیده‌اید یا مشغول فعالیت‌های دیگری هستید. این توانایی به شما کمک می‌کند تا همیشه در بازار حضور داشته باشید و هیچ فرصتی را از دست ندهید. ساخت ربات ترید به شما این امکان را می‌دهد که در دنیای پیچیده و پرنوسان بازارهای مالی به یک دستیار هوشمند و قابل اعتماد برای مدیریت سرمایه خود دست یابید.",
              "p",
              "mt-10"
            )}
          </div>
        </div>
       

      </div>
    </section>
  );
};

export default SpecialFeatures;
