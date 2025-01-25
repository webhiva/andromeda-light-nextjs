export default function sitemap() {
    return [
      {
        url: 'https://mytradebot.ir',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1, // صفحه اصلی باید بالاترین اولویت را داشته باشد
      },
      {
        url: 'https://mytradebot.ir/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8, // صفحه درباره ما اهمیت کمتری دارد
      },
      {
        url: 'https://mytradebot.ir/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6, // صفحه تماس با ما، اولویت متوسط دارد
      },
      {
        url: 'https://mytradebot.ir/how',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8, 
      },

      {
        url: 'https://mytradebot.ir/plans',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8, 
      },

      {
        url: 'https://mytradebot.ir/courses',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9, 
      },

      {
        url: 'https://mytradebot.ir/courses/python-trading-bot-course',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8, 
      },


      {
        url: 'https://mytradebot.ir/posts',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      },
      {
        url: 'https://mytradebot.ir/posts/استفاده-از-هوش-مصنوعی-در-ربات-ترید',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      
      {
        url: 'https://mytradebot.ir/posts/اشتباهات-رایج-در-ربات-های-ترید-و-جلوگیری-از-آنها',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      
      {
        url: 'https://mytradebot.ir/posts/ربات-ترید-چیست-چگونه-کار-میکند',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      
      {
        url: 'https://mytradebot.ir/posts/الگوریتم-های-مختلف-در-ربات-ترید',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      
      {
        url: 'https://mytradebot.ir/posts/چگونه-یک-ربات-ترید-بسازیم',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      
      {
        url: 'https://mytradebot.ir/posts/مزایا-معایب-استفاده-از-ربات-ترید',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      
      
    ];
  }
  