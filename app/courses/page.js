import React from "react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "آموزش ساخت ربات",
    slug:'python-trading-bot-course',
    description: "آموزش کار با داده های کندلی و محاسبه اندیکاتور ها و پیاده سازی استراتژی ها در کد به زبان پایتون",
    image: "/images/courses/create-python-trading-bot-course.webp",
    category: "ساخت ربات ترید",
    price: "رایگان",
  },
//   {
//     id: 2,
//     title: "دوره جاوا اسکریپت پیشرفته",
//     description: "مفاهیم پیشرفته جاوا اسکریپت و پروژه‌های کاربردی.",
//     image: "/javascript.jpg",
//     category: "برنامه‌نویسی",
//     price: "300,000 تومان",
//   },
];



export default function Courses() {
  return (
    <div className="bg-orange-50 py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">
          دوره‌های آموزشی ساخت ربات ترید
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* تصویر دوره */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              {/* محتوای کارت */}
              <div className="flex flex-col flex-grow p-6">
                <span className="text-sm font-medium text-orange-500">
                  {course.category}
                </span>
                <h2 className="text-lg font-semibold text-gray-800 mt-2">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 mt-4 flex-grow">
                  {course.description}
                </p>
                {/* قیمت و دکمه در پایین کارت */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold text-orange-700">
                    {course.price}
                  </span>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-orange-600 transition">
                        مشاهده
                    </button>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
