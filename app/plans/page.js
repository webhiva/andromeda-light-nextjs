import Image from 'next/image';

const plans = [
  { 
    name: "تریدر مسافر", 
    slug:'plan_1',
    description: "مناسب برای استراتژی های ساده و اولین استفاده از ربات های ترید با قیمت مناسب", 
    features: [
      { text: "کدنویسی اختصاصی استراتژی", available: true },
      { text: "تحویل سورس کد استراتژی", available: true },
      { text: "گارانتی فنی کد", available: true },
      { text: "آموزش استفاده", available: true },
      { text: "استراتژی های پیچیده", available: false },
      { text: "بک تست سیستمی", available: false },
      { text: "پیاده سازی برای بیش از یک صرافی", available: false },
      { text: "پیاده سازی هم برای فارکس هم برای ارز دیجیتال", available: false },
      { text: "سرور مجازی رایگان", available: false },
    ],
    originalPrice: "1,200,000",
    discountedPrice: "999,000"
  },
  { 
    name: "تریدر کاوشگر ", 
    slug:'plan_2',
    description: "مناسب برای استراتژی های پیچیده تر و کسایی که تحربه بیشتری دارن", 
    features: [
      { text: "کدنویسی اختصاصی استراتژی", available: true },
      { text: "تحویل سورس کد استراتژی", available: true },
      { text: "گارانتی فنی کد", available: true },
      { text: "آموزش استفاده", available: true },
      { text: "استراتژی های پیچیده", available: true },
      { text: "استراتژی های مالتی تایم و خیلی پیچیده", available: false },
      { text: "پیاده سازی برای بیش از یک صرافی", available: false },
      { text: "پیاده سازی هم برای فارکس هم برای ارز دیجیتال", available: false },
      { text: "سرور مجازی رایگان", available: false },
    ],
    originalPrice: "1,700,000",
    discountedPrice: "1,399,000"
  },
  { 
    name: "تریدر ماجراجو", 
    slug:'plan_3',
    description: "مناسب استراتژی های پیچیده مالتی تایم و کسایی که نیاز به چند تا بازار و صرافی دارن", 
    features: [
      { text: "کدنویسی اختصاصی استراتژی", available: true },
      { text: "تحویل سورس کد استراتژی", available: true },
      { text: "گارانتی فنی کد", available: true },
      { text: "آموزش استفاده", available: true },
      { text: "استراتژی های پیچیده", available: true },
      { text: "استراتژی های مالتی تایم و خیلی پیچیده", available: true },
      { text: "یک بار بک تست", available: true },
      { text: "پیاده سازی برای بیش از یک صرافی", available: false },
      { text: "پیاده سازی هم برای فارکس هم برای ارز دیجیتال", available: false },
      { text: "سرور مجازی رایگان", available: false },
    ],
    originalPrice: "2,900,000",
    discountedPrice: "2,299,000"
  },
  { 
    name: "تریدر پیشتاز", 
    slug:'plan_4',
    description: "مناسب برای افرادی که نیاز به کارای اختصاصی تر و ابزار های بیشتری برای استراتژیشون دارن ", 
    features: [
      { text: "کدنویسی اختصاصی استراتژی", available: true },
      { text: "تحویل سورس کد استراتژی", available: true },
      { text: "گارانتی فنی کد", available: true },
      { text: "آموزش استفاده", available: true },
      { text: "استراتژی های پیچیده", available: true },
      { text: "استراتژی های مالتی تایم و خیلی پیچیده", available: true },
      { text: "پنج بار بک تست", available: true },
      { text: "بهینه سازی", available: true },
      { text: "پیاده سازی برای بیش از یک صرافی", available: true },
      { text: "پیاده سازی هم برای فارکس هم برای ارز دیجیتال", available: false },
      { text: "سرور مجازی رایگان", available: false },
    ],
    originalPrice: "5,200,000",
    discountedPrice: "4,399,000"
  },
  { 
    name: "تریدر فاتح", 
    slug:'plan_5',
    description: "مناسب افرادی که استراتژی خاصی دارن و نیاز به ابزار های خاص و ایده های جدید همینطور ارتباط بیشتر با ما رو دارن", 
    features: [
      { text: "کدنویسی اختصاصی استراتژی", available: true },
      { text: "تحویل سورس کد استراتژی", available: true },
      { text: "گارانتی فنی کد", available: true },
      { text: "آموزش استفاده", available: true },
      { text: "استراتژی های پیچیده", available: true },
      { text: "استراتژی های مالتی تایم و خیلی پیچیده", available: true },
      { text: "20 بار بک تست", available: true },
      { text: "بهینه سازی", available: true },
      { text: "پیاده سازی برای بیش از یک صرافی", available: true },
      { text: "پیاده سازی هم برای فارکس هم برای ارز دیجیتال", available: true },
      { text: "سرور مجازی رایگان", available: true },
    ],
    originalPrice: "8,500,000",
    discountedPrice: "6,299,000"
  },
  { 
    name: "تریدر فضانورد", 
    slug:'plan_6',
    description: "مناسب پروژه های بزرگ و استراتژی های بسیار حرفه ای که کد نویسی اختصاصی میخوان و کسانی که قصد دارن با ارتباط داعمی و اختصاصی با ما کار کنن", 
    features: [
      { text: "کدنویسی اختصاصی استراتژی", available: true },
      { text: "تحویل سورس کد استراتژی", available: true },
      { text: "گارانتی فنی کد", available: true },
      { text: "آموزش استفاده", available: true },
      { text: "استراتژی های پیچیده", available: true },
      { text: "استراتژی های مالتی تایم و خیلی پیچیده", available: true },
      { text: "20 بار بک تست", available: true },
      { text: "بهینه سازی", available: true },
      { text: "پیاده سازی برای بیش از یک صرافی", available: true },
      { text: "پیاده سازی هم برای فارکس هم برای کریپتو", available: true },
      { text: "پیاده سازی هم برای فارکس هم برای ارز دیجیتال", available: true },
      { text: "سرور مجازی رایگان", available: true },
    ],
    originalPrice: "12,000,000",
    discountedPrice: "8,900,000"
  },
 
];

const ProductPage = () => {
  return (
    <div className="bg-gray-50 p-6 sm:p-12" dir="rtl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">پلن های ساخت ربات ترید</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">{plan.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <div className="mb-4 text-center">
              <p className="text-sm text-gray-500 line-through">{plan.originalPrice} تومان</p>
              <p className="text-lg font-bold text-green-600">{plan.discountedPrice} تومان</p>
            </div>
            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  {feature.available ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center" dir='ltr'>
                <a 
                  href={`/plans/${plan.slug}`} // لینک به صفحه توضیحات محصول
                  className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition duration-300 shadow-md hover:shadow-lg text-center text-sm sm:text-base tracking-wide"
                >
                  توضیحات
                </a>
                <a 
                  href={`/plans/${plan.slug}/purchase`} // لینک به صفحه سفارش محصول
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg text-center text-sm sm:text-base tracking-wide"
                >
                  سفارش
                </a>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
