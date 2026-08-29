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

export type RecognitionCopy = {
  heading: string;
  items: string[];
  question: string;
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
    recognition: RecognitionCopy;
    team: SectionCopy;
    testimonials: SectionCopy;
    tryIt: SectionCopy;
    whatIsNlf: SectionCopy;
    workshopHeader: SectionCopy;
    workshops: SectionCopy;
  };
};

export type NlfHcmSectionKey =
  | "header"
  | "proofHero"
  | "beforeAfterProof"
  | "featuredTestimonial"
  | "whatIsNlf"
  | "workshopExperience"
  | "fundamentalWorkshop"
  | "included"
  | "team"
  | "proofWall"
  | "notSure"
  | "finalCta"
  | "footer";

export type NlfHcmHeaderCopy = {
  cta: string;
  logoLabel: string;
};

export type NlfHcmProofHeroCopy = {
  heading: string;
  subheading: string;
  beforeLabel: string;
  afterLabel: string;
  proofLabel: string;
  cta: string;
  location: string;
};

export type ProofItemCopy = {
  age: string;
  afterLabel: string;
  beforeLabel: string;
  label: string;
  note: string;
};

export type NlfHcmBeforeAfterProofCopy = {
  cta: string;
  heading: string;
  modalClose: string;
  modalTitle: string;
  subcopy: string;
  items: ProofItemCopy[];
};

export type TestimonialStoryCopy = {
  age: string;
  context: string;
  label: string;
  memberName: string;
  previewLabel: string;
  quote: {
    cameBecause: string;
    surprisedMe: string;
    changed: string;
  };
};

export type NlfHcmFeaturedTestimonialCopy = {
  carouselLabel: string;
  heading: string;
  nextLabel: string;
  previousLabel: string;
  stories: TestimonialStoryCopy[];
};

export type NlfHcmExplanationCopy = {
  body: string[];
  heading: string;
  quote: string;
  subheadline: string;
  videoLabel: string;
};

export type WorkshopExperienceItemCopy = {
  label: string;
  path: string;
  type: "image" | "video";
};

export type NlfHcmWorkshopExperienceCopy = {
  heading: string;
  note: string;
  items: WorkshopExperienceItemCopy[];
};

export type NlfHcmWorkshopOfferCopy = {
  city: string;
  cta: string;
  date: string;
  description: string;
  duration: string;
  heading: string;
  imageLabel: string;
  metaLabels: {
    date: string;
    investment: string;
    location: string;
    time: string;
  };
  price: string;
  themes: string[];
  title: string;
};

export type NlfHcmIncludedCopy = {
  heading: string;
  imageLabel: string;
  items: string[];
};

export type TeamMemberCopy = {
  bio: string;
  imageLabel: string;
  name: string;
  role: string;
};

export type NlfHcmTeamCopy = {
  heading: string;
  featured: TeamMemberCopy;
  members: TeamMemberCopy[];
};

export type ProofWallItemCopy = {
  detail?: string;
  kind: "beforeAfter" | "still" | "video" | "quote" | "workshop";
  label: string;
  quote?: string;
  size: "small" | "medium" | "wide" | "tall" | "large";
};

export type NlfHcmProofWallCopy = {
  heading: string;
  subheadline: string;
  items: ProofWallItemCopy[];
};

export type PolicyPlaceholderCopy = {
  label: string;
  todo: string;
};

export type NlfHcmRiskReversalCopy = {
  heading: string;
  policies: PolicyPlaceholderCopy[];
  primaryCta: string;
  primaryMessage: string;
  secondaryCta: string;
  supportingText: string[];
};

export type NlfHcmRegistrationCopy = {
  ageRangeLabel: string;
  ageRanges: string[];
  closeLabel: string;
  contactMethodLabel: string;
  contactMethods: string[];
  emailLabel: string;
  heading: string;
  nameLabel: string;
  note: string;
  phoneLabel: string;
  reasonLabel: string;
  submit: string;
};

export type NlfHcmFinalCtaCopy = {
  city: string;
  dates: string;
  heading: string;
  imageLabel: string;
  primaryCta: string;
  program: string;
  secondaryCta: string;
  subcopy: string;
};

export type FooterLinkCopy = {
  href: string;
  label: string;
};

export type NlfHcmFooterCopy = {
  links: FooterLinkCopy[];
  logoLabel: string;
};

export type NlfHcmCopy = Omit<
  Record<NlfHcmSectionKey, SectionCopy>,
  | "header"
  | "proofHero"
  | "beforeAfterProof"
  | "featuredTestimonial"
  | "whatIsNlf"
  | "workshopExperience"
  | "fundamentalWorkshop"
  | "included"
  | "team"
  | "proofWall"
  | "notSure"
  | "finalCta"
  | "footer"
> & {
  beforeAfterProof: NlfHcmBeforeAfterProofCopy;
  featuredTestimonial: NlfHcmFeaturedTestimonialCopy;
  finalCta: NlfHcmFinalCtaCopy;
  footer: NlfHcmFooterCopy;
  fundamentalWorkshop: NlfHcmWorkshopOfferCopy;
  header: NlfHcmHeaderCopy;
  included: NlfHcmIncludedCopy;
  notSure: NlfHcmRiskReversalCopy;
  proofWall: NlfHcmProofWallCopy;
  proofHero: NlfHcmProofHeroCopy;
  registration: NlfHcmRegistrationCopy;
  team: NlfHcmTeamCopy;
  whatIsNlf: NlfHcmExplanationCopy;
  workshopExperience: NlfHcmWorkshopExperienceCopy;
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
      recognition: {
        heading: "Does this sound familiar?",
        items: [
          "You exercise regularly, but feel stiffer than before.",
          "Stretching helps, but the tightness returns.",
          "One side moves differently from the other.",
          "Your body works, but doesn't feel as free.",
          "You want to remain capable for decades to come.",
        ],
        question: "If your body feels this way now, how do you want it to feel ten or twenty years from now?",
      },
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
      recognition: {
        heading: "Điều này có quen thuộc với bạn không?",
        items: [
          "Bạn tập luyện đều đặn, nhưng cơ thể vẫn cứng hơn trước.",
          "Giãn cơ có hiệu quả, nhưng cảm giác căng lại quay trở lại.",
          "Một bên cơ thể chuyển động khác với bên còn lại.",
          "Cơ thể vẫn hoạt động, nhưng không còn cảm giác tự do.",
          "Bạn muốn duy trì khả năng vận động trong nhiều thập kỷ tới.",
        ],
        question:
          "Nếu cơ thể bạn đang cảm thấy như vậy bây giờ, bạn muốn nó cảm thấy thế nào trong mười hay hai mươi năm nữa?",
      },
      team: { eyebrow: "Đội ngũ", heading: "Phần Đội ngũ" },
      testimonials: { eyebrow: "Cảm nhận", heading: "Phần Cảm nhận" },
      tryIt: { eyebrow: "Thử ngay", heading: "Phần Thử ngay" },
      whatIsNlf: { eyebrow: "NLF là gì", heading: "Phần NLF là gì" },
      workshopHeader: { eyebrow: "Workshop", heading: "Đầu trang Workshop" },
      workshops: { eyebrow: "Workshop", heading: "Phần Workshop" },
    },
  },
};

export const nlfHcmCopy: Record<Locale, NlfHcmCopy> = {
  en: {
    header: { cta: "Talk to NLF", logoLabel: "NLF" },
    proofHero: {
      heading: "Your body can change.",
      subheading: "Not by forcing it. By learning to move differently.",
      beforeLabel: "IMG - BEFORE",
      afterLabel: "IMG - AFTER",
      proofLabel: "Real member - Real workshop - X days",
      cta: "Experience NLF",
      location: "Fundamental Workshop - Ho Chi Minh City",
    },
    beforeAfterProof: {
      cta: "See More Results",
      heading: "This isn't one body.",
      modalClose: "Close proof frame",
      modalTitle: "All proof",
      subcopy: "Real people. Different ages. Different starting points.",
      items: [
        {
          age: "Age 30s",
          afterLabel: "IMG - AFTER / MEMBER A",
          beforeLabel: "IMG - BEFORE / MEMBER A",
          label: "Member A",
          note: "Improved shoulder range after workshop assessment.",
        },
        {
          age: "Age 40s",
          afterLabel: "IMG - AFTER / MEMBER B",
          beforeLabel: "IMG - BEFORE / MEMBER B",
          label: "Member B",
          note: "More balanced rotation between left and right sides.",
        },
        {
          age: "Age 50s",
          afterLabel: "IMG - AFTER / MEMBER C",
          beforeLabel: "IMG - BEFORE / MEMBER C",
          label: "Member C",
          note: "Deeper squat position with less guarding.",
        },
        {
          age: "Age 60s",
          afterLabel: "IMG - AFTER / MEMBER D",
          beforeLabel: "IMG - BEFORE / MEMBER D",
          label: "Member D",
          note: "Clearer hip movement and steadier posture.",
        },
        {
          age: "Age 30s",
          afterLabel: "IMG - AFTER / MEMBER E",
          beforeLabel: "IMG - BEFORE / MEMBER E",
          label: "Member E",
          note: "Reduced neck tension during basic movement checks.",
        },
        {
          age: "Age 50s",
          afterLabel: "IMG - AFTER / MEMBER F",
          beforeLabel: "IMG - BEFORE / MEMBER F",
          label: "Member F",
          note: "More confident forward bend and recovery.",
        },
      ],
    },
    featuredTestimonial: {
      carouselLabel: "Testimonial stories",
      heading: "Their words.",
      nextLabel: "Next testimonial",
      previousLabel: "Previous testimonial",
      stories: [
        {
          age: "Age 38",
          context: "Desk work, regular training, recurring hip stiffness",
          label: "Story 1",
          memberName: "Member A",
          previewLabel: "VIDEO - MEMBER A TESTIMONIAL",
          quote: {
            cameBecause: "I came because my body felt older than my routine suggested.",
            surprisedMe: "What surprised me was how small changes made movement feel easier.",
            changed: "What changed was my awareness of where I was forcing instead of listening.",
          },
        },
        {
          age: "Age 52",
          context: "Active parent, uneven shoulders, cautious lower back",
          label: "Story 2",
          memberName: "Member B",
          previewLabel: "VIDEO - MEMBER B TESTIMONIAL",
          quote: {
            cameBecause: "I came because stretching helped for a moment, but the tightness kept returning.",
            surprisedMe: "What surprised me was seeing one side of my body work so differently.",
            changed: "What changed was how I approach practice between sessions.",
          },
        },
        {
          age: "Age 61",
          context: "Weekend sport, balance concerns, wants long-term capability",
          label: "Story 3",
          memberName: "Member C",
          previewLabel: "VIDEO - MEMBER C TESTIMONIAL",
          quote: {
            cameBecause: "I came because I wanted to keep doing the things I love without guessing.",
            surprisedMe: "What surprised me was that the assessment felt practical, not intimidating.",
            changed: "What changed was my confidence in how my body can keep learning.",
          },
        },
      ],
    },
    whatIsNlf: {
      body: [
        "NLF is a practice for understanding your own body through movement.",
        "Instead of forcing everyone into one 'correct' form, you explore how your nervous system, structure and muscles work together.",
      ],
      heading: "What are they doing?",
      quote: "Freedom starts with freedom of movement.",
      subheadline: "This is not a fitness class.",
      videoLabel: "VIDEO - WORKSHOP MONTAGE",
    },
    workshopExperience: {
      heading: "What a day at NLF feels like",
      note: "No posing. Real workshop.",
      items: [
        { label: "Arrival / people", path: "/images/workshop/arrival.jpg", type: "image" },
        { label: "Assessment", path: "/images/workshop/assessment.jpg", type: "image" },
        { label: "Movement exploration", path: "/videos/workshop/practice-loop.mp4", type: "video" },
        { label: "Individual coaching", path: "/images/workshop/coaching.jpg", type: "image" },
        { label: "Partner practice", path: "/images/workshop/group.jpg", type: "image" },
        { label: "Reflection / reassessment", path: "/videos/workshop/reassessment-loop.mp4", type: "video" },
      ],
    },
    fundamentalWorkshop: {
      city: "Ho Chi Minh City",
      cta: "Reserve My Place",
      date: "[DATE]",
      description: "A practical exploration of your own body through movement.",
      duration: "09:00-17:30",
      heading: "Start here.",
      imageLabel: "IMAGE - REAL NLF FUNDAMENTAL WORKSHOP",
      metaLabels: {
        date: "Date",
        investment: "Investment",
        location: "Location",
        time: "Time",
      },
      price: "Full workshop: 10,000,000 VND",
      themes: ["Nervous system", "Bones/Skeleton", "Muscle"],
      title: "NLF Fundamental Workshop",
    },
    included: {
      heading: "What's included",
      imageLabel: "IMAGE - REAL WORKSHOP / COMMUNITY",
      items: [
        "Full-body measurement before + after",
        "Full-body movement examination",
        "Personal coaching / guidance",
        "Workshop equipment provided",
        "Lunch + refreshments",
        "NLF member/community access",
        "21-day post-workshop integration plan",
        "Member benefits for future programs",
      ],
    },
    team: {
      heading: "Meet the people behind NLF",
      featured: {
        bio: "Travis leads the room through observation, movement and practical coaching. The work stays focused on what each body is showing in real time.",
        imageLabel: "IMAGE - TRAVIS TEACHING / COACHING",
        name: "Travis",
        role: "Lead coach",
      },
      members: [
        {
          bio: "Supports workshop flow, member experience and careful practice.",
          imageLabel: "IMAGE - RUBY WORKSHOP SUPPORT",
          name: "Ruby",
          role: "Workshop team",
        },
        {
          bio: "Helps participants stay oriented through assessment and practice.",
          imageLabel: "IMAGE - NHI COACHING SUPPORT",
          name: "Nhi",
          role: "Workshop team",
        },
        {
          bio: "Supports movement practice, setup and participant care.",
          imageLabel: "IMAGE - HIEU WORKSHOP SUPPORT",
          name: "Hieu",
          role: "Workshop team",
        },
      ],
    },
    proofWall: {
      heading: "People who came before you",
      subheadline: "The proof wall",
      items: [
        {
          detail: "Shoulder rotation before + after",
          kind: "beforeAfter",
          label: "Member proof 01",
          size: "large",
        },
        {
          detail: "Workshop moment",
          kind: "workshop",
          label: "Group assessment",
          size: "medium",
        },
        {
          kind: "quote",
          label: "Member note",
          quote: "I could see the difference before I had to explain it.",
          size: "small",
        },
        {
          detail: "20-second testimonial",
          kind: "video",
          label: "Video testimonial",
          size: "tall",
        },
        {
          detail: "Hip position before + after",
          kind: "beforeAfter",
          label: "Member proof 02",
          size: "wide",
        },
        {
          detail: "Teaching still",
          kind: "still",
          label: "Travis coaching",
          size: "medium",
        },
        {
          detail: "Movement exploration",
          kind: "workshop",
          label: "Floor practice",
          size: "small",
        },
        {
          kind: "quote",
          label: "Member note",
          quote: "It felt practical, not like another workout to survive.",
          size: "medium",
        },
        {
          detail: "Forward bend before + after",
          kind: "beforeAfter",
          label: "Member proof 03",
          size: "tall",
        },
        {
          detail: "Community still",
          kind: "still",
          label: "Workshop room",
          size: "wide",
        },
        {
          detail: "45-second testimonial",
          kind: "video",
          label: "Member story",
          size: "medium",
        },
        {
          detail: "Balance check before + after",
          kind: "beforeAfter",
          label: "Member proof 04",
          size: "small",
        },
        {
          detail: "Partner practice",
          kind: "workshop",
          label: "Guided practice",
          size: "medium",
        },
        {
          kind: "quote",
          label: "Member note",
          quote: "One side of my body was telling a completely different story.",
          size: "wide",
        },
        {
          detail: "Reassessment after practice",
          kind: "beforeAfter",
          label: "Member proof 05",
          size: "medium",
        },
      ],
    },
    notSure: {
      heading: "Not sure yet?",
      policies: [
        { label: "Reservation terms", todo: "TODO: Add exact reservation terms." },
        { label: "Cancellation policy", todo: "TODO: Add exact cancellation policy." },
        { label: "Refund policy", todo: "TODO: Add exact refund policy." },
      ],
      primaryCta: "Reserve My Place",
      primaryMessage: "Don't believe the page. Experience the practice.",
      secondaryCta: "Talk to NLF First",
      supportingText: ["Reserve your place.", "Come experience NLF.", "Decide with your own body."],
    },
    registration: {
      ageRangeLabel: "Age range",
      ageRanges: ["Under 30", "30-39", "40-49", "50-59", "60+"],
      closeLabel: "Close registration form",
      contactMethodLabel: "Preferred contact method",
      contactMethods: ["Phone", "Email", "Zalo"],
      emailLabel: "Email",
      heading: "Reserve your place",
      nameLabel: "Full name",
      note: "An NLF team member will contact you to confirm your place.",
      phoneLabel: "Phone",
      reasonLabel: "What brings you to NLF?",
      submit: "Reserve My Place",
    },
    finalCta: {
      city: "Ho Chi Minh City",
      dates: "[DATES]",
      heading: "Your body is still learning.",
      imageLabel: "IMAGE - REAL HUMAN MOVEMENT / NLF WORKSHOP",
      primaryCta: "Reserve My Place",
      program: "NLF Fundamental",
      secondaryCta: "Talk to NLF",
      subcopy: "Come discover what is possible.",
    },
    footer: {
      logoLabel: "NLF",
      links: [
        { href: "#", label: "Instagram" },
        { href: "#", label: "Facebook" },
        { href: "#", label: "Zalo" },
        { href: "#contact", label: "Contact" },
      ],
    },
  },
  vi: {
    header: { cta: "Trao đổi với NLF", logoLabel: "NLF" },
    proofHero: {
      heading: "Cơ thể bạn có thể thay đổi.",
      subheading: "Không phải bằng cách ép buộc. Mà bằng cách học cách chuyển động khác đi.",
      beforeLabel: "HÌNH - TRƯỚC",
      afterLabel: "HÌNH - SAU",
      proofLabel: "Học viên thật - Workshop thật - X ngày",
      cta: "Trải nghiệm NLF",
      location: "Workshop Fundamental - Thành phố Hồ Chí Minh",
    },
    beforeAfterProof: {
      cta: "Xem thêm kết quả",
      heading: "Đây không chỉ là một cơ thể.",
      modalClose: "Đóng khung bằng chứng",
      modalTitle: "Tất cả bằng chứng",
      subcopy: "Người thật. Nhiều độ tuổi. Nhiều điểm bắt đầu khác nhau.",
      items: [
        {
          age: "Độ tuổi 30",
          afterLabel: "HÌNH - SAU / HỌC VIÊN A",
          beforeLabel: "HÌNH - TRƯỚC / HỌC VIÊN A",
          label: "Học viên A",
          note: "Tầm vận động vai cải thiện sau phần đánh giá workshop.",
        },
        {
          age: "Độ tuổi 40",
          afterLabel: "HÌNH - SAU / HỌC VIÊN B",
          beforeLabel: "HÌNH - TRƯỚC / HỌC VIÊN B",
          label: "Học viên B",
          note: "Xoay người cân bằng hơn giữa bên trái và bên phải.",
        },
        {
          age: "Độ tuổi 50",
          afterLabel: "HÌNH - SAU / HỌC VIÊN C",
          beforeLabel: "HÌNH - TRƯỚC / HỌC VIÊN C",
          label: "Học viên C",
          note: "Tư thế squat sâu hơn với ít cảm giác giữ cứng.",
        },
        {
          age: "Độ tuổi 60",
          afterLabel: "HÌNH - SAU / HỌC VIÊN D",
          beforeLabel: "HÌNH - TRƯỚC / HỌC VIÊN D",
          label: "Học viên D",
          note: "Chuyển động hông rõ hơn và tư thế ổn định hơn.",
        },
        {
          age: "Độ tuổi 30",
          afterLabel: "HÌNH - SAU / HỌC VIÊN E",
          beforeLabel: "HÌNH - TRƯỚC / HỌC VIÊN E",
          label: "Học viên E",
          note: "Giảm căng cổ trong các bài kiểm tra chuyển động cơ bản.",
        },
        {
          age: "Độ tuổi 50",
          afterLabel: "HÌNH - SAU / HỌC VIÊN F",
          beforeLabel: "HÌNH - TRƯỚC / HỌC VIÊN F",
          label: "Học viên F",
          note: "Gập người về trước và quay lại tự tin hơn.",
        },
      ],
    },
    featuredTestimonial: {
      carouselLabel: "Các câu chuyện cảm nhận",
      heading: "Lời chia sẻ của họ.",
      nextLabel: "Câu chuyện tiếp theo",
      previousLabel: "Câu chuyện trước",
      stories: [
        {
          age: "38 tuổi",
          context: "Làm việc văn phòng, tập luyện đều, thường căng cứng vùng hông",
          label: "Câu chuyện 1",
          memberName: "Học viên A",
          previewLabel: "VIDEO - CẢM NHẬN HỌC VIÊN A",
          quote: {
            cameBecause: "Tôi đến vì cơ thể mình cảm thấy già hơn so với thói quen tập luyện.",
            surprisedMe: "Điều làm tôi ngạc nhiên là những thay đổi nhỏ có thể khiến chuyển động dễ hơn.",
            changed: "Điều thay đổi là tôi nhận ra lúc nào mình đang ép cơ thể thay vì lắng nghe.",
          },
        },
        {
          age: "52 tuổi",
          context: "Phụ huynh năng động, vai lệch, lưng dưới dễ dè chừng",
          label: "Câu chuyện 2",
          memberName: "Học viên B",
          previewLabel: "VIDEO - CẢM NHẬN HỌC VIÊN B",
          quote: {
            cameBecause: "Tôi đến vì giãn cơ chỉ giúp được một lúc, rồi cảm giác căng lại quay trở lại.",
            surprisedMe: "Điều làm tôi ngạc nhiên là hai bên cơ thể hoạt động khác nhau rõ rệt.",
            changed: "Điều thay đổi là cách tôi thực hành giữa các buổi.",
          },
        },
        {
          age: "61 tuổi",
          context: "Chơi thể thao cuối tuần, quan tâm thăng bằng, muốn duy trì khả năng lâu dài",
          label: "Câu chuyện 3",
          memberName: "Học viên C",
          previewLabel: "VIDEO - CẢM NHẬN HỌC VIÊN C",
          quote: {
            cameBecause: "Tôi đến vì muốn tiếp tục làm những điều mình yêu thích mà không phải đoán mò.",
            surprisedMe: "Điều làm tôi ngạc nhiên là phần đánh giá rất thực tế, không đáng sợ.",
            changed: "Điều thay đổi là sự tự tin rằng cơ thể tôi vẫn có thể tiếp tục học hỏi.",
          },
        },
      ],
    },
    whatIsNlf: {
      body: [
        "NLF là một phương pháp thực hành để hiểu chính cơ thể bạn thông qua chuyển động.",
        "Thay vì ép mọi người vào một dáng 'đúng' duy nhất, bạn khám phá cách hệ thần kinh, cấu trúc cơ thể và cơ bắp phối hợp với nhau.",
      ],
      heading: "Họ đang làm gì?",
      quote: "Tự do bắt đầu từ tự do trong chuyển động.",
      subheadline: "Đây không phải là một lớp thể dục.",
      videoLabel: "VIDEO - MONTAGE WORKSHOP",
    },
    workshopExperience: {
      heading: "Một ngày tại NLF diễn ra như thế nào",
      note: "Không tạo dáng. Workshop thật.",
      items: [
        { label: "Đến nơi / con người", path: "/images/workshop/arrival.jpg", type: "image" },
        { label: "Đánh giá", path: "/images/workshop/assessment.jpg", type: "image" },
        { label: "Khám phá chuyển động", path: "/videos/workshop/practice-loop.mp4", type: "video" },
        { label: "Huấn luyện cá nhân", path: "/images/workshop/coaching.jpg", type: "image" },
        { label: "Thực hành theo cặp", path: "/images/workshop/group.jpg", type: "image" },
        { label: "Phản chiếu / đánh giá lại", path: "/videos/workshop/reassessment-loop.mp4", type: "video" },
      ],
    },
    fundamentalWorkshop: {
      city: "Thành phố Hồ Chí Minh",
      cta: "Giữ chỗ của tôi",
      date: "[NGÀY]",
      description: "Một trải nghiệm thực hành để khám phá chính cơ thể bạn thông qua chuyển động.",
      duration: "09:00-17:30",
      heading: "Bắt đầu tại đây.",
      imageLabel: "HÌNH - WORKSHOP NLF FUNDAMENTAL THỰC TẾ",
      metaLabels: {
        date: "Ngày",
        investment: "Chi phí",
        location: "Địa điểm",
        time: "Thời gian",
      },
      price: "Trọn workshop: 10,000,000 VND",
      themes: ["Hệ thần kinh", "Xương / Bộ xương", "Cơ bắp"],
      title: "Workshop NLF Fundamental",
    },
    included: {
      heading: "Bao gồm những gì",
      imageLabel: "HÌNH - WORKSHOP / CỘNG ĐỒNG THỰC TẾ",
      items: [
        "Đo lường toàn thân trước + sau",
        "Kiểm tra chuyển động toàn thân",
        "Huấn luyện / hướng dẫn cá nhân",
        "Cung cấp thiết bị workshop",
        "Bữa trưa + đồ uống nhẹ",
        "Quyền truy cập cộng đồng/thành viên NLF",
        "Kế hoạch tích hợp 21 ngày sau workshop",
        "Quyền lợi thành viên cho các chương trình tương lai",
      ],
    },
    team: {
      heading: "Gặp những người đứng sau NLF",
      featured: {
        bio: "Travis dẫn dắt lớp qua quan sát, chuyển động và hướng dẫn thực tế. Trọng tâm luôn là những gì cơ thể mỗi người đang thể hiện ngay lúc đó.",
        imageLabel: "HÌNH - TRAVIS ĐANG DẠY / COACHING",
        name: "Travis",
        role: "Huấn luyện viên chính",
      },
      members: [
        {
          bio: "Hỗ trợ nhịp workshop, trải nghiệm học viên và phần thực hành.",
          imageLabel: "HÌNH - RUBY HỖ TRỢ WORKSHOP",
          name: "Ruby",
          role: "Đội ngũ workshop",
        },
        {
          bio: "Giúp học viên theo sát phần đánh giá và thực hành.",
          imageLabel: "HÌNH - NHI HỖ TRỢ COACHING",
          name: "Nhi",
          role: "Đội ngũ workshop",
        },
        {
          bio: "Hỗ trợ thực hành chuyển động, chuẩn bị không gian và chăm sóc học viên.",
          imageLabel: "HÌNH - HIEU HỖ TRỢ WORKSHOP",
          name: "Hieu",
          role: "Đội ngũ workshop",
        },
      ],
    },
    proofWall: {
      heading: "Những người đã đến trước bạn",
      subheadline: "Bức tường bằng chứng",
      items: [
        {
          detail: "Xoay vai trước + sau",
          kind: "beforeAfter",
          label: "Bằng chứng học viên 01",
          size: "large",
        },
        {
          detail: "Khoảnh khắc workshop",
          kind: "workshop",
          label: "Đánh giá nhóm",
          size: "medium",
        },
        {
          kind: "quote",
          label: "Ghi chú học viên",
          quote: "Tôi nhìn thấy sự khác biệt trước khi cần giải thích.",
          size: "small",
        },
        {
          detail: "Cảm nhận 20 giây",
          kind: "video",
          label: "Video cảm nhận",
          size: "tall",
        },
        {
          detail: "Vị trí hông trước + sau",
          kind: "beforeAfter",
          label: "Bằng chứng học viên 02",
          size: "wide",
        },
        {
          detail: "Ảnh hướng dẫn",
          kind: "still",
          label: "Travis coaching",
          size: "medium",
        },
        {
          detail: "Khám phá chuyển động",
          kind: "workshop",
          label: "Thực hành trên sàn",
          size: "small",
        },
        {
          kind: "quote",
          label: "Ghi chú học viên",
          quote: "Rất thực tế, không giống một buổi tập phải cố vượt qua.",
          size: "medium",
        },
        {
          detail: "Gập người trước + sau",
          kind: "beforeAfter",
          label: "Bằng chứng học viên 03",
          size: "tall",
        },
        {
          detail: "Ảnh cộng đồng",
          kind: "still",
          label: "Không gian workshop",
          size: "wide",
        },
        {
          detail: "Cảm nhận 45 giây",
          kind: "video",
          label: "Câu chuyện học viên",
          size: "medium",
        },
        {
          detail: "Kiểm tra thăng bằng trước + sau",
          kind: "beforeAfter",
          label: "Bằng chứng học viên 04",
          size: "small",
        },
        {
          detail: "Thực hành theo cặp",
          kind: "workshop",
          label: "Thực hành có hướng dẫn",
          size: "medium",
        },
        {
          kind: "quote",
          label: "Ghi chú học viên",
          quote: "Một bên cơ thể tôi đang kể một câu chuyện hoàn toàn khác.",
          size: "wide",
        },
        {
          detail: "Đánh giá lại sau thực hành",
          kind: "beforeAfter",
          label: "Bằng chứng học viên 05",
          size: "medium",
        },
      ],
    },
    notSure: {
      heading: "Bạn vẫn chưa chắc chắn?",
      policies: [
        { label: "Điều khoản đặt chỗ", todo: "TODO: Thêm điều khoản đặt chỗ chính xác." },
        { label: "Chính sách hủy", todo: "TODO: Thêm chính sách hủy chính xác." },
        { label: "Chính sách hoàn tiền", todo: "TODO: Thêm chính sách hoàn tiền chính xác." },
      ],
      primaryCta: "Giữ chỗ của tôi",
      primaryMessage: "Đừng chỉ tin vào trang này. Hãy trải nghiệm phương pháp thực hành.",
      secondaryCta: "Trao đổi với NLF trước",
      supportingText: ["Giữ chỗ của bạn.", "Đến trải nghiệm NLF.", "Tự cơ thể bạn sẽ quyết định."],
    },
    registration: {
      ageRangeLabel: "Độ tuổi",
      ageRanges: ["Dưới 30", "30-39", "40-49", "50-59", "60+"],
      closeLabel: "Đóng form đăng ký",
      contactMethodLabel: "Cách liên hệ ưu tiên",
      contactMethods: ["Điện thoại", "Email", "Zalo"],
      emailLabel: "Email",
      heading: "Giữ chỗ của bạn",
      nameLabel: "Họ và tên",
      note: "Một thành viên đội ngũ NLF sẽ liên hệ để xác nhận chỗ của bạn.",
      phoneLabel: "Số điện thoại",
      reasonLabel: "Điều gì đưa bạn đến với NLF?",
      submit: "Giữ chỗ của tôi",
    },
    finalCta: {
      city: "Thành phố Hồ Chí Minh",
      dates: "[NGÀY]",
      heading: "Cơ thể bạn vẫn đang học hỏi.",
      imageLabel: "HÌNH - CON NGƯỜI CHUYỂN ĐỘNG / WORKSHOP NLF",
      primaryCta: "Giữ chỗ của tôi",
      program: "NLF Fundamental",
      secondaryCta: "Trao đổi với NLF",
      subcopy: "Hãy đến khám phá điều gì là có thể.",
    },
    footer: {
      logoLabel: "NLF",
      links: [
        { href: "#", label: "Instagram" },
        { href: "#", label: "Facebook" },
        { href: "#", label: "Zalo" },
        { href: "#contact", label: "Liên hệ" },
      ],
    },
  },
};
