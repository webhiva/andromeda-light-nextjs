const ProductDetailsPage = () => {
    const plan = {
      name: "تریدر ماجراجو",
      price: "2,299,000",
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 sm:p-12" dir="rtl">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-teal-600 mb-6 text-center">{plan.name}</h1>
          
          <div className="border rounded-lg p-4 bg-gray-100 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">ساخت ربات ترید با استراتژی های بسیار پیچیده و مالتی تایم</h2>
            <p className="text-gray-700 text-justify mb-4">
              در این پلن، شما قادر خواهید بود از داده‌های تایم فریم‌های مختلف (مانند ۵ دقیقه، ۱۵ دقیقه، یک ساعته، روزانه و غیره) برای تصمیم‌گیری دقیق‌تر استفاده کنید. استراتژی مالتی تایم فریم به ربات شما این امکان را می‌دهد که تحلیل‌های بازار را در تایم فریم‌های مختلف بررسی کرده و بهترین تصمیم را در هر زمان بگیرد.
            </p>
            <h3 className="font-semibold text-gray-800 mb-2">ویژگی‌ها:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>✔ استفاده از استراتژی‌های مالتی تایم فریم</li>
              <li>✔ تحلیل دقیق‌تر بازار در تایم فریم‌های مختلف</li>
              <li>✔ شبیه‌سازی استراتژی‌های چندگانه</li>
              <li>✔ بهبود دقت و تصمیم‌گیری ربات</li>
            </ul>
          </div>


         
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-lg font-bold text-green-500">{plan.price}</span>
            <div className="flex gap-4">
              <a
                href="/plans/plan_3/purchase"
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
  