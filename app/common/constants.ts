export const appData = {
  name: "Suko Classic",
  title: "Suko Classic",
  description: "A minimalist logic puzzle of numbers and shades.",
  isLaunched: false,
  socialLinks: {
    email: "mailto:theillustrator2001@gmail.com",
    twitter: "https://x.com/devillus1972",
    linkedin: "https://www.linkedin.com/in/nileshsk1/",
    website: "https://nileshkamble.co.in/",
  },
  appStoreLink:
    "https://apps.apple.com/in/developer/nilesh-kamble/id1790227862",
};

export const openGraphMetadata = {
  title: appData.name,
  description: appData.description,
  url: "https://suko-classic-landing-page.vercel.app/",
  siteName: appData.name,
  images: [
    {
      url: "/AppLogo/AppLogo.png",
      width: 1200,
      height: 630,
      alt: appData.name,
    },
  ],
  locale: "en_US",
  type: "website",
};

export const twitterMetadata = {
  card: "summary_large_image",
  title: appData.name,
  description: appData.description,
  images: ["/AppLogo/AppLogo.png"],
  creator: "@devillus1972",
};
