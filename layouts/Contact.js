// در بالای فایل Contact.js
'use client';

import { useState } from 'react';
import config from '@config/config.json';
import Banner from './components/Banner';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'موفقیت',
          text: 'پیام شما با موفقیت ارسال شد.',
          confirmButtonText: 'باشه',
        });
        e.target.reset(); // پاک کردن مقادیر فرم
      } else {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'خطا',
          text: `خطا در ارسال پیام: ${data.error}`,
          confirmButtonText: 'تلاش دوباره',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'خطا',
        text: 'خطای شبکه. لطفاً دوباره تلاش کنید.',
        confirmButtonText: 'باشه',
      });
    }
  };

  return (
    <section className="section" dir="rtl">
  <div className="container">
    <div className="section row items-center justify-center">
      <div className="lg:col-5">
        {/* اطلاعات تماس */}
        <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">اطلاعات تماس</h3>
          <div className="flex flex-col space-y-3">
          <p>
  در صورت نیاز به ارتباط سریع‌تر می‌توانید با شماره 
  <strong>09365459878</strong> در 
 واتساپ و آیدی 
  <strong>@mytradebotir</strong> در 
  تلگرام و یا ایمیل 
  <strong>mytradebotir@gmail.com</strong> 
  ارتباط برقرار کنید.
</p>

          </div>
        </div>

        {/* فرم ارتباطی */}
        <form
          method="POST"
          action={config.params.contact_form_action}
          className="contact-form rounded-xl p-6 shadow-lg mt-6 bg-white"
          onSubmit={handleSubmit}
        >
          <h2 className="h4 mb-6">فرم ارتباطی</h2>
          <div className="mb-6">
            <label className="mb-2 block font-medium text-dark" htmlFor="name">
              نام و نام خانوادگی
            </label>
            <input className="form-input w-full" name="name" placeholder="نام کامل" type="text" required />
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-medium text-dark" htmlFor="email">
              آیدی / شماره / ایمیل
            </label>
            <input className="form-input w-full" name="email" placeholder="اطلاعات تماس" type="text" required />
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-medium text-dark" htmlFor="message">
              پیام
            </label>
            <textarea className="form-textarea w-full" rows="6" name="message" placeholder="توضیحات کامل درخواست" required />
          </div>
          <button className="btn btn-primary block w-full">ارسال پیام</button>
        </form>

        {formStatus && (
          <div className={`mt-6 p-4 ${formStatus.type === "success" ? "bg-green-100" : "bg-red-100"} rounded-md`}>
            <h3>{formStatus.message}</h3>
            {formStatus.details && <p className="mt-2 text-sm text-gray-700">{formStatus.details}</p>}
            {formStatus.contact && (
              <pre className="mt-4 bg-gray-800 text-white p-4 rounded">
                {JSON.stringify(formStatus.contact, null, 2)}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
