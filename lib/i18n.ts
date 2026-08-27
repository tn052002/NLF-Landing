export const locales = ["en", "vi"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export type SectionCopy = {
  eyebrow: string;
  heading: string;
};

export type HeroCopy = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  trustItems: string[];
  mediaLabel: string;
};

export type WorkshopCopy = {
  header: {
    ariaLabel: string;
    brandHref: string;
    question: string;
    tagline: string;
  };
  sections: {
    audience: SectionCopy;
    beliefShift: SectionCopy;
    faq: SectionCopy;
    finalCta: SectionCopy;
    fundamental: SectionCopy;
    hero: HeroCopy;
    movementDiscovery: SectionCopy;
    practice: SectionCopy;
    recognition: SectionCopy;
    team: SectionCopy;
    testimonials: SectionCopy;
    tryIt: SectionCopy;
    whatIsNlf: SectionCopy;
    workshopHeader: SectionCopy;
    workshops: SectionCopy;
  };
};

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const requestedLocales = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  if (requestedLocales.some((locale) => locale === "vi" || locale.startsWith("vi-"))) {
    return "vi";
  }

  return defaultLocale;
}

export const workshopCopy: Record<Locale, WorkshopCopy> = {
  en: {
    header: {
      ariaLabel: "NLF Neuro Linguistic Fitness",
      brandHref: "/en/workshop",
      question: "Have a Question",
      tagline: "Neuro Linguistic Fitness",
    },
    sections: {
      audience: { eyebrow: "Audience", heading: "Audience Section" },
      beliefShift: { eyebrow: "Belief Shift", heading: "Belief Shift Section" },
      faq: { eyebrow: "FAQ", heading: "FAQ Section" },
      finalCta: { eyebrow: "Final CTA", heading: "Final CTA Section" },
      fundamental: { eyebrow: "Fundamental", heading: "Fundamental Section" },
      hero: {
        eyebrow: "ATTENTION ACTIVE ADULTS WHO WANT TO STAY STRONG, CAPABLE & FREE AS THEY AGE",
        heading: "DON'T LET YOUR BODY BECOME THE LIMIT ON THE LIFE YOU WANT TO LIVE.",
        description:
          "Your body will be with you for the rest of your life. Learn to understand how it moves-and build the awareness and practical knowledge you can keep practicing for decades to come.",
        primaryCta: "Book Movement Discovery",
        secondaryCta: "Explore the Workshop",
        trustItems: ["30-minute complimentary session", "No experience required", "Explore your movement"],
        mediaLabel: "VIDEO - REAL NLF WORKSHOP / MOVEMENT ASSESSMENT",
      },
      movementDiscovery: { eyebrow: "Movement Discovery", heading: "Movement Discovery Section" },
      practice: { eyebrow: "Practice", heading: "Practice Section" },
      recognition: { eyebrow: "Recognition", heading: "Recognition Section" },
      team: { eyebrow: "Team", heading: "Team Section" },
      testimonials: { eyebrow: "Testimonials", heading: "Testimonials Section" },
      tryIt: { eyebrow: "Try It", heading: "Try It Section" },
      whatIsNlf: { eyebrow: "What Is NLF", heading: "What Is NLF Section" },
      workshopHeader: { eyebrow: "Workshop", heading: "Workshop Header" },
      workshops: { eyebrow: "Workshops", heading: "Workshops Section" },
    },
  },
  vi: {
    header: {
      ariaLabel: "NLF Neuro Linguistic Fitness",
      brandHref: "/vi/workshop",
      question: "Bạn có câu hỏi?",
      tagline: "Neuro Linguistic Fitness",
    },
    sections: {
      audience: { eyebrow: "Đối tượng", heading: "Phần Đối tượng" },
      beliefShift: { eyebrow: "Chuyển đổi niềm tin", heading: "Phần Chuyển đổi niềm tin" },
      faq: { eyebrow: "Câu hỏi thường gặp", heading: "Phần Câu hỏi thường gặp" },
      finalCta: { eyebrow: "Kêu gọi hành động", heading: "Phần Kêu gọi hành động cuối" },
      fundamental: { eyebrow: "Nền tảng", heading: "Phần Nền tảng" },
      hero: {
        eyebrow: "Dành cho người trưởng thành năng động muốn giữ cơ thể mạnh mẽ, linh hoạt và tự do khi lớn tuổi",
        heading: "Đừng để cơ thể trở thành giới hạn của cuộc sống bạn muốn sống.",
        description:
          "Cơ thể sẽ đồng hành cùng bạn suốt phần đời còn lại. Học cách hiểu cơ thể bạn chuyển động như thế nào-và xây dựng nhận thức cùng kiến thức thực tế để tiếp tục rèn luyện trong nhiều thập kỷ tới.",
        primaryCta: "Đặt lịch Movement Discovery",
        secondaryCta: "Khám phá Workshop",
        trustItems: ["Buổi tư vấn miễn phí 30 phút", "Không cần kinh nghiệm trước", "Khám phá chuyển động của bạn"],
        mediaLabel: "VIDEO - WORKSHOP NLF THỰC TẾ / ĐÁNH GIÁ CHUYỂN ĐỘNG",
      },
      movementDiscovery: { eyebrow: "Khám phá chuyển động", heading: "Phần Khám phá chuyển động" },
      practice: { eyebrow: "Thực hành", heading: "Phần Thực hành" },
      recognition: { eyebrow: "Nhận diện", heading: "Phần Nhận diện" },
      team: { eyebrow: "Đội ngũ", heading: "Phần Đội ngũ" },
      testimonials: { eyebrow: "Cảm nhận", heading: "Phần Cảm nhận" },
      tryIt: { eyebrow: "Thử ngay", heading: "Phần Thử ngay" },
      whatIsNlf: { eyebrow: "NLF là gì", heading: "Phần NLF là gì" },
      workshopHeader: { eyebrow: "Workshop", heading: "Đầu trang Workshop" },
      workshops: { eyebrow: "Workshop", heading: "Phần Workshop" },
    },
  },
};
