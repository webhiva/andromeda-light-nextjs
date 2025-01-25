export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: ['/'],
        },
      ],
      sitemap: 'https://mytradebot.ir/sitemap.xml',
    };
  }
  