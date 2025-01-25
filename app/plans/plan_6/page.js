const ProductDetailsPage = () => {
    const plan = {
      name: "تریدر فضانورد",
      price: "8,900,000",
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 sm:p-12" dir="rtl">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-teal-600 mb-6 text-center">{plan.name}</h1>
          
          <div className="border rounded-lg p-4 bg-gray-100 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">پلن 6: بازارهای بیشتر، صرافی‌های بیشتر، پشتیبانی اختصاصی</h2>
            <p className="text-gray-700 text-justify mb-4">
              در این پلن، شما به بازارهای بیشتری مانند ارزهای دیجیتال، فارکس، و سهام دسترسی خواهید داشت. همچنین ربات شما قادر خواهد بود به صرافی‌های بیشتری متصل شود و از امکانات آن‌ها بهره‌برداری کند. این پلن همچنین شامل پشتیبانی اختصاصی است که به شما کمک می‌کند تا ربات خود را بهینه کرده و از جدیدترین تغییرات بازار مطلع شوید.
            </p>
            <h3 className="font-semibold text-gray-800 mb-2">ویژگی‌ها:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>✔ دسترسی به بازارهای بیشتر (ارزهای دیجیتال، فارکس، سهام)</li>
              <li>✔ اتصال به صرافی‌های متعدد</li>
              <li>✔ پشتیبانی اختصاصی و مشاوره مداوم</li>
              <li>✔ بهینه‌سازی عملکرد ربات و استراتژی‌ها</li>
            </ul>
          </div>


         
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-lg font-bold text-green-500">{plan.price}</span>
            <div className="flex gap-4">
              <a
                href="/plans/plan_6/purchase"
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg text-lg font-medium"
              >
                سفارش این پلن
              </a>
              <a
                href="/plans"
                className="bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300 shadow-md hover:shadow-lg text-lg font-medium"
              >
                بازگشت
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetailsPage;
  