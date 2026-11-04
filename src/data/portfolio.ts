export type Project = {
  number: string;
  slug: string;
  href: string;
  name: string;
  ownership: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  metric: string;
  visualIcon: string;
  highlights: string[];
  images?: string[];
  androidUrl?: string;
  iosUrl?: string;
};
export const projects = [
  {
    number: "01",
    slug: "cubezixone",
    href: "/projects/cubezixone",
    name: "CubeZixOne",
    logo: "https://play-lh.googleusercontent.com/S4qFGYLWEa1KFHOcPrH0SwVzzpfRjrr81UoU3TtfYG7E6nIfCPFOle-7yHTTCo-QUOlw2jdz0Nyx1z_e6TPMiEo=w240-h480-rw",
    ownership: "Office Project",
    category: "Enterprise · ERP",
    description: "A business operations application connecting teams to procurement, payments, expenses, leave and document approval workflows.",
    stack: ["Flutter", "Dart", "ERPNext", "REST APIs", "Provider MVVM"],
    accent: "blue",
    metric: "10+ modules",
    visualIcon: "building",
    highlights: [
      "50+ application users",
      "10+ business modules",
      "20+ REST API integrations",
      "Role-based enterprise workflows",
    ],

    images: [
      "https://play-lh.googleusercontent.com/a5Aft7stvovjzRToAsyYTHIeICFdTnfypWQEwX6xSwQ0z9DpBarXB9lia99jVacjjETplER_3US_kLbVdkxK=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/u5nLX2P68VRIqdTGJVvBXJmkTgcT0m0BSG5zCU5haQTx-brS0E4u67KDLjW8DbrBujIWqWqaXFgteBoa-VNIfg=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/riRYd-zjkCLfkYk3KGBt1mP6Ch1Ej_PvPTEat7tker5doERFgR_a70tuZs8kpDTe4snFux9CuXyKrUfxmZZO=w2560-h1440-rw",
    ],

    androidUrl: "https://play.google.com/store/apps/details?id=com.cubezixServiceDelivery.app",
    iosUrl: "https://apps.apple.com/in/app/cubezixone/id6759085040",
  },
  {
    number: "02",
    slug: "tsi",
    href: "/projects/tsi",
    name: "TSI",
    logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b5/97/ac/b597ac6d-bb89-aea5-2202-58ce51f5e0f5/Placeholder.mill/200x200Icon.ApSiOS01-75.webp",
    ownership: "Office Project",
    category: "Enterprise · Mobile",
    description:
      "Contributed to enterprise mobile application development through business workflow implementation, REST API integration and reusable Flutter components.",
    stack: ["Flutter", "Dart", "REST APIs", "Firebase"],
    accent: "violet",
    metric: "Enterprise application",
    visualIcon: "layers",
    highlights: [
      "Business workflow implementation",
      "API integration",
      "Reusable Flutter components",
    ],
    images: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a6/7c/90/a67c9014-9bda-22e9-bd41-dff94c8fc413/Untitled_design.jpg/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/45/6f/f4/456ff4a9-9bd3-d59f-934a-03a24b107861/9.jpg/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4a/f3/72/4af37291-33d9-d44d-ac75-c225cfea458c/3.jpg/230x498bb.webp",
    ],

    androidUrl: "",
    iosUrl: "https://apps.apple.com/in/app/tsi-cubezixone/id6759711915",
  },
  {
    number: "03",
    slug: "document-signature",
    href: "/projects/document-signature",
    name: "Document Approval & Digital Signature",
    ownership: "Office Project",
    category: "Enterprise · Document Management",
    description:
      "An enterprise document approval workflow with role-based actions, PDF and image rendering, saved signatures and interactive signature placement.",
    stack: ["Flutter", "Dart", "ERPNext", "Dio", "PDFx"],
    accent: "blue",
    metric: "Digital signatures",
    visualIcon: "file-signature",
    highlights: [
      "Workflow transitions",
      "PDF and image rendering",
      "Locally saved signatures",
      "Interactive signature placement",
    ],
  },
  {
    number: "04",
    slug: "knowledge-fund-crm",
    href: "/projects/knowledge-fund-crm",
    name: "Knowledge Fund CRM",
    logo: "https://play-lh.googleusercontent.com/SagMAfgGeEv-mzzjw96B5RTbvyPWYYclbtJI7f3PmeXRRokjaOVXdLLm2YOJqN37Qzh1n1hxXwz3XKagvdPm0w=w240-h480-rw",
    ownership: "Office Project",
    category: "Enterprise · CRM",
    description:
      "Contributed to CRM mobile application development, focusing on API integration, reusable Flutter components, authentication and debugging.",
    stack: ["Flutter", "Dart", "REST APIs", "Firebase"],
    accent: "orange",
    metric: "CRM application",
    visualIcon: "users",
    highlights: [
      "CRM application development",
      "Authentication integration",
      "Reusable components",
    ],
    images: [
      "https://play-lh.googleusercontent.com/6aBOBbSDV4DYHbwj6B7ooF1zvswxwDHFaCMmvp4dw2E4SbOYEeBZeuGEoUq3YTXOODpIRdH2kIX4pRo0klETjfU=w526-h296-rw",
      "https://play-lh.googleusercontent.com/A5KgEG6NiZvFT-vI3vpEP-lxYlmNjFmoZbZQrsjCMJk5JAGfqfwfmishSRYbbjYrvdRRCWJT7v2ATI0aHJWiYg=w526-h296-rw",
      "https://play-lh.googleusercontent.com/fkEkJrWuMBKCiD0ej8GlkXx12WbErxhG2GAAVD9m5FtpNWj9m3TYPl7EXFSfGq52bweXRHlzQIl3F19zQ67I=w526-h296-rw",
    ],

    androidUrl: "https://play.google.com/store/apps/details?id=com.kf.app",
    iosUrl: "",
  },
  {
    number: "05",
    slug: "cubezix-common-erp",
    href: "/projects/cubezix-common-erp",
    name: "CubeZix Common ERP",
    ownership: "Office Project",
    category: "Enterprise · ERP",
    description:
      "Contributed to ERP mobile application development, including business workflows, API integrations, reusable UI components and debugging.",
    stack: ["Flutter", "Dart", "ERPNext", "Frappe", "REST APIs"],
    accent: "cyan",
    metric: "ERP integration",
    visualIcon: "database",
    highlights: [
      "ERP business workflows",
      "REST API integration",
      "Reusable UI components",
    ],
  },

  {
    number: "06",
    slug: "plan-my-day",
    href: "/projects/plan-my-day",
    name: "Plan My Day",
    ownership: "Independent Project",
    category: "Productivity · Mobile",
    description:
      "A task-management application exploring clean architecture, predictable state management and focused daily workflows.",
    stack: ["Flutter", "Riverpod", "Clean Architecture"],
    accent: "cyan",
    metric: "Riverpod architecture",
    visualIcon: "calendar",
    highlights: [
      "Task management",
      "Riverpod state management",
      "Clean Architecture",
    ],
  },
  {
    number: "07",
    slug: "voicesync",
    href: "/projects/voicesync",
    name: "VoiceSync",
    logo: "https://play-lh.googleusercontent.com/IOUj0_1lvnBZmfxdHXXbQZ3Xn2EfoajB9K2FKG1eSAzKIVoX0Hzf3dNpWzKV9bAkFjX2u3Ou9MqYK_lUnaZHNg=w240-h480-rw",
    ownership: "Independent Project",
    category: "Voice · Utility",
    description:
      "A voice-focused application concept bringing speech-to-text and text-to-speech interactions into one experience.",
    stack: ["Flutter", "Speech APIs", "Audio"],
    accent: "orange",
    metric: "Voice workflows",
    visualIcon: "audio",
    highlights: [
      "Speech-to-text",
      "Text-to-speech",
      "Audio interactions",
    ],

    images: [
      "https://play-lh.googleusercontent.com/1yP7_KrzIfLxm4WXmRTnZGZy3nsc2c83MX95iNHeUIWjiGjGJkb0oBvmrjt_oXZb-9dZYgr_lFvvCl-C01aavw=w526-h296-rw",
      "https://play-lh.googleusercontent.com/142ZqcCHy7jASJrCDH_v2qjhFGmpNP-eXWIwWkj13L1TtwjqfqU2lDxQI42NgmlDGAOV-T1nWXC1BZaJQl6LJg=w2560-h1440-rw",
    ],

    androidUrl: "https://play.google.com/store/apps/details?id=com.textToSpeech.app",
    iosUrl: "",
  },
  {
    number: "08",
    slug: "spinesavior",
    href: "/projects/spinesavior",
    name: "SpineSavior", logo: "https://play-lh.googleusercontent.com/bxJCSbia25BhlFHkxLakRQLJFN6IiwltDs_v0JMHxClkXW9Ssrgc3Byfo3N586Dyhf5nJMvfoErvBJXgnXTxlA=w240-h480-rw",
    ownership: "Independent Project",
    category: "Mobile · Application",
    description:
      "An independent Flutter application project exploring mobile application development and feature implementation.",
    stack: ["Flutter", "Dart", "Firebase", "REST APIs"],
    accent: "blue",
    metric: "Independent development",
    visualIcon: "activity",
    highlights: [
      "Flutter application development",
      "Feature implementation",
      "Mobile application experience",
    ],

    images: [
      "https://play-lh.googleusercontent.com/bxJCSbia25BhlFHkxLakRQLJFN6IiwltDs_v0JMHxClkXW9Ssrgc3Byfo3N586Dyhf5nJMvfoErvBJXgnXTxlA=w240-h480-rw",
      "https://play-lh.googleusercontent.com/Nx9vP3me8XHJLeyJjTBYWQJiIXLE6p8c7YHsfeL42e_Rrk1kqIiWa4s9XZLKggsiVHTq0WH4OIK_XUmAS5mE=w526-h296-rw",
      // "https://play-lh.googleusercontent.com/riRYd-zjkCLfkYk3KGBt1mP6Ch1Ej_PvPTEat7tker5doERFgR_a70tuZs8kpDTe4snFux9CuXyKrUfxmZZO=w2560-h1440-rw",
    ],

    androidUrl: "https://play.google.com/store/apps/details?id=com.spineSavior.app",
    iosUrl: "",
  },
  {
    number: "09",
    slug: "crypto-tracker",
    href: "/projects/crypto-tracker",
    name: "Crypto Tracker",
    logo: "https://play-lh.googleusercontent.com/9Q32Z_TtL_TOkxyH5C7CmejrCDcgupY6ONepYpOlTAKdY1wIRjzmPqHffhh0S7vqNlDBkRAPEJaFi287sl1TDA=w240-h480-rw",
    ownership: "Independent Project",
    category: "Finance · Mobile",
    description:
      "An independent Flutter application project focused on cryptocurrency-related mobile application development.",
    stack: ["Flutter", "Dart", "REST APIs"],
    accent: "violet",
    metric: "Finance application",
    visualIcon: "chart",
    highlights: [
      "Cryptocurrency tracking concept",
      "API integration",
      "Financial information interface",
    ], images: [
      "https://play-lh.googleusercontent.com/PYtP5sTWqdEkTxyjtSg9VZalHuv705bIpnlg0rwzC_N2Cn4etmHe4U_l_47kNI_O4EFN4dJk5bd2WTbPc-_gdQ=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/SnAx-GrVOrYCM_bofK17dzxFekeJOD61QSIyBWwFGXwwM8aTe_LF0Ypa8adaGWyGmPUJy_d3Ut9lyU4dy5P0=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/kq_nGOWxKSwWIlASiX938YM17tyZVa43ICLW9Uf323vy_BpswxJlb13VLdvUwaA7EzWX_oY8G_8qJ7gL2qaKng=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/ynVMt4uz-9gb00XZbqvoq0Ybv6kMNzb0MMNt2_efGbZC6GY22TR21HIFAaF9CEKP7kt09Qqw6t6T_NABxaXKzTM=w2560-h1440-rw",
    ],

    androidUrl: "https://play.google.com/store/apps/details?id=com.bitcoinTracker.app",
    iosUrl: "",
  },
];

export const skills = [
  { name: "Flutter & Dart", level: "Core", width: "94%" },
  { name: "REST API integration", level: "Advanced", width: "90%" },
  { name: "Provider / MVVM", level: "Advanced", width: "88%" },
  { name: "Riverpod", level: "Working knowledge", width: "76%" },
  { name: "Firebase", level: "Working knowledge", width: "78%" },
  { name: "React / Next.js", level: "Growing", width: "68%" },
];
