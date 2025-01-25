"use client";
import { gsap } from "@lib/gsap";
import { useEffect, useRef } from "react";
import Circle from "./Circle";
import ImageFallback from "./ImageFallback";

const Banner = () => {
  const banner = useRef(null);

  // banner animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = document.querySelector(".header");
      const tl = gsap.timeline();
      tl.fromTo(
        ".banner-regular-title",
        {
          y: 20,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
      // parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner.current,
          start: () => `top ${header.clientHeight}`,
          end: () => `+=${banner.current.offsetHeight}`,
          scrub: true,
        },
      });

      const position = banner.current.offsetHeight * 0.15;
      parallaxTl.fromTo(
        ".banner-single .circle",
        {
          y: 0,
        },
        {
          y: position,
        },
        "<"
      );
    }, banner);

    return () => ctx.revert();
  }, []);

  return (
    <div className="banner banner-single relative" ref={banner} dir="rtl">
      <div className="container-xl h-full flex items-center justify-center px-4">
        <div className="banner-wrapper text-center relative z-10">
          <div className="banner-regular-title opacity-0 mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-shadow-md text-white">
              ارتباط با ما
            </h1>
          </div>
          <div className="bg-theme banner-bg col-12 absolute left-0 top-0 w-full h-full before:hidden after:hidden">
            <ImageFallback
              priority={true}
              fill={true}
              src="/images/vectors/single-banner-wave-1.svg"
              sizes="100vw"
              alt=""
            />
            <ImageFallback
              priority={true}
              fill={true}
              src="/images/vectors/single-banner-wave-2.svg"
              sizes="100vw"
              alt=""
            />
            <Circle
              className="circle left-[15%] top-[18%] opacity-20"
              width={32}
              height={32}
              fill={false}
            />
            <Circle
              className="circle bottom-[27%] left-[4%] opacity-25"
              width={73}
              height={73}
            />
            <Circle
              className="circle bottom-[27%] left-[39.5%] opacity-25"
              width={20}
              height={20}
            />
            <Circle
              className="circle bottom-[24%] left-[22%] opacity-25"
              width={47}
              height={47}
              fill={false}
            />
            <Circle
              className="circle left-[31%] top-[10%] opacity-25"
              width={62}
              height={62}
              fill={false}
            />
            <Circle
              className="circle right-[27%] top-[15%] opacity-25"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="circle bottom-[17%] right-[3%] opacity-25"
              width={73}
              height={73}
              fill={false}
            />
            <Circle
              className="circle bottom-[50%] right-[38%] opacity-25"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="circle right-[13%] top-[30%] opacity-25"
              width={20}
              height={20}
            />
            <Circle
              className="circle bottom-[29%] right-[20%] opacity-25"
              width={65}
              height={65}
            />
            <Circle
              className="circle bottom-[12%] right-[35%] opacity-25"
              width={37}
              height={37}
              fill={false}
            />
          </div>

          {/* Improved Contact Information Section */}
          <div className="contact-info mt-8 text-center px-6 md:px-16 text-black bg-white bg-opacity-80 rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-theme-dark">
              سفارش ساخت ربات ترید
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              کاربر گرامی در صورتی که نیاز به ثبت سفارش دارید میتوانید با استفاده
              از اطلاعات تماس زیر با ما در ارتباط باشید و یا اطلاعات و درخواست خود را
              از طریق فرم ارتباط در همین صفحه برای ما ارسال کنید.
            </p>
            <ul className="text-lg text-gray-800 list-none space-y-3">
              <li>
                <strong>تلگرام :</strong> @mytradebotir
              </li>
              <li>
                <strong>واتساپ / ایتا :</strong> 09365459878
              </li>
              <li>
                <strong>ایمیل:</strong> mytradebotir@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Banner;
