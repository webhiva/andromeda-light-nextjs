const OrderPage = () => {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">سفارش پلن</h1>
          <p className="text-sm text-gray-600 text-center mb-8">
            لطفاً اطلاعات نهایی خود را بررسی کنید و برای ادامه، قوانین را تأیید نمایید.
          </p>
          
          {/* نمایش نام پلن و قیمت */}
          <div className="mb-6">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <span className="font-medium text-gray-700">نام پلن:</span>
              <span className="font-bold text-gray-800">تریدر فاتح</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">قیمت نهایی:</span>
              <span className="font-bold text-green-600">6,299,000</span>
            </div>
          </div>
  
          {/* فیلد اطلاعات تماس */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
              شماره تماس
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="0912-------"
              required
            />
          </div>
  
          {/* فیلد توضیحات سفارش */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="orderDetails">
              توضیحات سفارش
            </label>
            <textarea
              id="orderDetails"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="توضیحات کامل وارد کنید"
              rows="4"
              required
            />
          </div>
  
          {/* تیک تأیید قوانین */}
          <div className="mb-6">
            <label className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                className="form-checkbox h-6 w-6 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                required
              />
              <span className="text-sm text-gray-700">قوانین و شرایط را مطالعه کردم و می‌پذیرم.</span>
            </label>
          </div>
  
          {/* پیام پس از پرداخت */}
          <div className="mb-6 text-sm text-gray-600">
            <p>پس از پرداخت، سفارش شما آغاز می‌شود و کارشناسان ما برای ادامه کار و تحویل، با شما تماس خواهند گرفت.</p>
          </div>
  
          {/* دکمه‌ها */}
          <div className="flex flex-col gap-4">
            <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-lg hover:from-teal-600 hover:to-teal-700 transition text-lg font-medium shadow-md hover:shadow-lg">
              پرداخت
            </button>
            <button className="bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition text-lg font-medium shadow-md hover:shadow-lg">
              بازگشت
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderPage;
  