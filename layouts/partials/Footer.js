import Link from "next/link";

const Footer = () => {
  return (
    <footer className="" dir='rtl'>
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            {/* لوگو به صورت متن */}
          <div className="order-0">
            <div className="text-2xl font-bold text-orange-500">MyTradeBot</div>
          </div>

            <p className="mt-3">
             این وبسایت توسط تیمی با سال ها تجربه در تبدیل استراتژی شخصی افراد به ربات های معاملاتی در انواع بازار ها 
             سعی دارد با ایجاد محیطی حرفه ای و شفاف این نیاز روز افزون کاربران را برطرف کرده 
             و آنها را در مسیر تصمیمات درست برای رسیدن به موفقیت مالی یاری دهد.
            </p>
          </div>
          
          
          
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">لینک های مفید</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10 mr-5">
                <li>
                  <Link href="/plans" className="hover:text-primary hover:underline">
                  ثبت سفارش
                  </Link>
                </li>

                <li>
                  <Link href="/courses" className="hover:text-primary hover:underline">
                  آموزش ها
                  </Link>
                </li>

                <li>
                  <Link href="/posts" className="hover:text-primary hover:underline">
                  وبلاگ
                  </Link>
                </li>

          
                <li>
                  <Link href="/about" className="hover:text-primary hover:underline">
                  درباره
                  </Link>
                </li>

                
            </ul>
          </div>
         
         
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">تماس با ما</h3>
            <ul className="mt-5 leading-10">
              <li>
                <Link href="https://t.me/mytradebotir">@mytradebotir</Link>
              </li>
              <li>
                <Link href="tel:09365459878">09365459878</Link>
              </li>
              <li>
                <Link href="mailto:mytradebotir@gmail.com">mytradebotir@gmail.com</Link>
              </li>
            </ul>
          </div>

          
          <div className="flex flex-wrap justify-center items-center mt-8 md:col-6 lg:col-3 lg:mt-0 gap-4">
            {/* لوگوی نماد اعتماد */}
<a
  referrerPolicy="origin"
  target="_blank"
  href="https://trustseal.enamad.ir/?id=565209&Code=ry2mrHvOk9mZtgd8DbgtdaRpeyeGgPoH"
  style={{ cursor: 'pointer' }}
>
  <img
    referrerPolicy="origin"
    src="https://trustseal.enamad.ir/logo.aspx?id=565209&Code=ry2mrHvOk9mZtgd8DbgtdaRpeyeGgPoH"
    alt="Enamad Logo"
    style={{ width: '150px', height: 'auto' }} // تنظیم اندازه لوگو
    loading="lazy" // لیزی لود کردن تصویر
  />
</a>

{/* لوگوی ساماندهی */}
<div
  style={{ cursor: "pointer" }}
  onClick={() =>
    window.open(
      "https://logo.samandehi.ir/Verify.aspx?id=376033&p=xlaojyoegvkaobpdxlaoxlao",
      "Popup",
      "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
    )
  }
>
  <img
    src="https://logo.samandehi.ir/logo.aspx?id=376033&p=qftiyndtwlbqlymaqftiqfti"
    alt="Samandehi Logo"
    referrerPolicy="origin"
    style={{ width: '150px', height: 'auto' }} // تنظیم اندازه لوگو
    loading="lazy" // لیزی لود کردن تصویر
  />
            </div>
          </div>

        </div>

        


        {/* copyright */}
        <div className="py-6 text-center">
          <p className="footer-copy-write">© 2025 تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
