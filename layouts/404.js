const NotFound = () => {
  return (
    <section className="section" dir="rtl">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">صفحه یافت نشد</h1>
            <div className="content">
              متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
