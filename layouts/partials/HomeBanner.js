"use client";

import Circle from "@layouts/components/Circle";
import ImageFallback from "@layouts/components/ImageFallback";
import { gsap } from "@lib/gsap";
import Link from "next/link";
import { useEffect } from "react";

const HomeBanner = () => {
  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-subtitle",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-features",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-img",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-.5"
        );
    });

    return () => ctx2.revert();
  }, []);

  return (
    <section className="section banner pt-0 mb-0 pb-0" dir="rtl">
      <div className="container-xl">
        <div className="relative">
          <div className="bg-theme banner-bg col-12 absolute left-0 top-0 overflow-hidden">
            {/* اشکال دایره‌ای اطراف */}
            <Circle
              className="circle left-[10%] top-12 opacity-50"
              width={32}
              height={32}
              fill={false}
            />
            {/* بقیه دایره‌ها */}
          </div>
          <div className="row overflow-hidden rounded-2xl">
            <div className="col-12">
              <div className="row relative justify-center pb-10">
                {/* محتوا */}
                <div className="banner-content col-10 pb-10 pt-20 text-center">
                  <h1 className="mb-4 banner-title text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800">
                   ساخت ربات ترید با استراتژی شخصی شما
                  </h1>
                  <p className="mb-8 banner-subtitle text-lg lg:text-xl text-gray-600">
                    با ساخت ربات ترید برای استراتژی شخصیت میتونی بدون احساسات تمام وقت و با مدیریت 
                    سرمایه ترید کنی و از بازار با استراتژیت سود بگیری
                  </p>
                  
                  {/* افزودن تیک‌ها در مرکز */}
                  <div className="mt-6 flex flex-col items-center space-y-4 text-teal-600">
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-900">بدون خستگی هیچ موقعیتی رو از دست نده</span>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-900">مدیریت سرمایه حرفه ای داشه باش</span>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-900">آمار و بک تست واقع بینانه و دقیق بگیر</span>
                                </div>
                            </div>
                  {/* دکمه */}
<div className="banner-btn mt-6">
  <Link
    className="btn btn-primary px-6 py-3 text-white text-lg bg-orange-500 hover:bg-orange-600 rounded-full"
    href="/plans"
  >
    سفارش ساخت
  </Link>
</div>

                </div>
                {/* تصویر */}
                <div className="col-10">
  <ImageFallback
    className="banner-img rounded-lg mx-auto w-full h-auto max-w-[800px]"  // اضافه کردن max-width برای محدود کردن طول تصویر
    src="/images/banner-app_2.png"
    width={800}  // عرض بیشتر برای بنر
    height={200}
    priority={true}
    alt="سفارش ساخت ربات ترید"
  />
</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      
      
    </section>
  );
};

export default HomeBanner;
