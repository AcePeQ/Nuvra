// src/content/pages.en.ts
export type PageSection =
  | {
      type: "hero";
      title: string;
      subtitle: string;
      cta?: { label: string; href: string };
    }
  | { type: "richText"; title?: string; paragraphs: string[] }
  | { type: "cards"; title: string; items: { title: string; text: string }[] }
  | { type: "steps"; title: string; items: { title: string; text: string }[] }
  | { type: "faq"; title: string; items: { q: string; a: string }[] }
  | {
      type: "policy";
      title: string;
      blocks: { heading: string; body: string[] }[];
    };

export type PageContent = {
  slug: string;
  seoTitle: string;
  sections: PageSection[];
};

export const PAGES: Record<string, PageContent> = {
  about: {
    slug: "about",
    seoTitle: "About Nuvra",
    sections: [
      {
        type: "hero",
        title: "About Nuvra",
        subtitle:
          "Modern essentials and everyday statement pieces-designed to mix easily, feel comfortable, and look sharp.",
        cta: { label: "Shop New Arrivals", href: "/collections/new" },
      },
      {
        type: "richText",
        title: "Our approach",
        paragraphs: [
          "Nuvra is an online clothing store built around simple silhouettes, wearable fabrics, and details that elevate the basics.",
          "We curate collections with one rule: items should work together. That means fewer 'one-time' pieces and more outfits you can repeat in different ways.",
        ],
      },
      {
        type: "cards",
        title: "What we care about",
        items: [
          {
            title: "Fit first",
            text: "Clear sizing guidance, real photos, and cuts that flatter without trying too hard.",
          },
          {
            title: "Effortless styling",
            text: "Pieces that layer well and match across the collection.",
          },
          {
            title: "A smooth experience",
            text: "Fast checkout, transparent shipping, and straightforward returns.",
          },
        ],
      },
    ],
  },

  features: {
    slug: "features",
    seoTitle: "Features",
    sections: [
      {
        type: "hero",
        title: "Store Features",
        subtitle:
          "Everything you need for quick, confident shopping-size guidance, secure payments, and delivery updates.",
      },
      {
        type: "cards",
        title: "Shopping made simple",
        items: [
          {
            title: "Smart size guidance",
            text: "Size charts and fit notes on every product to reduce guesswork.",
          },
          {
            title: "Secure payments",
            text: "Trusted payment methods with encrypted checkout.",
          },
          {
            title: "Order tracking",
            text: "Get delivery updates and track your shipment from dispatch to arrival.",
          },
          {
            title: "Easy returns",
            text: "Clear return steps and support when something isn't right.",
          },
          {
            title: "Customer support",
            text: "Help with sizing, order changes, and delivery questions.",
          },
          {
            title: "Drop alerts",
            text: "New arrivals and limited releases-stay updated.",
          },
        ],
      },
      {
        type: "richText",
        paragraphs: [
          "Tip: If you're between sizes, choose the larger one for a relaxed fit-or contact support for a quick recommendation.",
        ],
      },
    ],
  },

  works: {
    slug: "works",
    seoTitle: "How It Works",
    sections: [
      {
        type: "hero",
        title: "How Nuvra Works",
        subtitle:
          "From choosing your size to tracking delivery-here's the full flow in minutes.",
      },
      {
        type: "steps",
        title: "Shopping in 4 steps",
        items: [
          {
            title: "1) Choose your pieces",
            text: "Browse collections, check fit notes, and pick your size.",
          },
          {
            title: "2) Checkout securely",
            text: "Pay with your preferred method-fast and encrypted.",
          },
          {
            title: "3) We pack & dispatch",
            text: "Orders are typically prepared quickly on business days.",
          },
          {
            title: "4) Track & enjoy",
            text: "You'll receive tracking details as soon as it ships.",
          },
        ],
      },
      {
        type: "cards",
        title: "Good to know",
        items: [
          {
            title: "Order changes",
            text: "Need an address update? Message us ASAP-before packing starts.",
          },
          {
            title: "Returns",
            text: "If it doesn't fit, follow the return instructions in your order email.",
          },
          {
            title: "Support",
            text: "We're here for sizing advice, product questions, and delivery help.",
          },
        ],
      },
    ],
  },

  career: {
    slug: "career",
    seoTitle: "Careers",
    sections: [
      {
        type: "hero",
        title: "Careers at Nuvra",
        subtitle:
          "We're building a modern fashion brand with strong fundamentals: product, experience, and customer care.",
        cta: { label: "Contact us", href: "/support" },
      },
      {
        type: "richText",
        title: "Work with us",
        paragraphs: [
          "We occasionally open roles in e-commerce operations, creative, customer support, and marketing.",
          "If you don't see a position listed, you can still send a short intro with your portfolio or experience-when there's a match, we'll reach out.",
        ],
      },
      {
        type: "cards",
        title: "What we value",
        items: [
          {
            title: "Ownership",
            text: "You care about outcomes, not just tasks.",
          },
          {
            title: "Clarity",
            text: "Simple, honest communication beats noise.",
          },
          {
            title: "Taste + precision",
            text: "Good style and operational details matter equally.",
          },
        ],
      },
    ],
  },

  support: {
    slug: "support",
    seoTitle: "Customer Support",
    sections: [
      {
        type: "hero",
        title: "Customer Support",
        subtitle:
          "Sizing help, order updates, returns, and delivery questions-reach out anytime.",
      },
      {
        type: "cards",
        title: "Common topics",
        items: [
          {
            title: "Sizing advice",
            text: "Tell us your height and usual size-we'll suggest the best fit.",
          },
          {
            title: "Order changes",
            text: "We can help before the package is packed and shipped.",
          },
          {
            title: "Delivery issues",
            text: "If tracking stalls, message us and we'll investigate.",
          },
          {
            title: "Returns & exchanges",
            text: "We'll guide you through the steps quickly.",
          },
        ],
      },
      {
        type: "richText",
        paragraphs: [
          "Response times depend on volume, but we aim to reply as quickly as possible on business days.",
          "Include your order number for faster help.",
        ],
      },
    ],
  },

  delivery: {
    slug: "delivery",
    seoTitle: "Delivery Details",
    sections: [
      {
        type: "hero",
        title: "Delivery Details",
        subtitle:
          "Shipping options, dispatch times, and tracking-everything in one place.",
      },
      {
        type: "policy",
        title: "Shipping overview",
        blocks: [
          {
            heading: "Dispatch time",
            body: [
              "Orders are typically prepared and dispatched on business days.",
              "Once dispatched, you'll receive a shipping confirmation with tracking details.",
            ],
          },
          {
            heading: "Shipping methods",
            body: [
              "Available methods are shown at checkout (e.g., courier, pickup point, parcel locker-depending on your location).",
              "Shipping fees and thresholds (if any) are displayed before payment.",
            ],
          },
          {
            heading: "Tracking",
            body: [
              "Tracking links are sent by email once the parcel is handed to the carrier.",
              "If you don't receive tracking within a reasonable time, contact support with your order number.",
            ],
          },
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    seoTitle: "Terms & Conditions",
    sections: [
      {
        type: "hero",
        title: "Terms & Conditions",
        subtitle:
          "This page is a template for a store policy. Replace with legally reviewed terms for your jurisdiction.",
      },
      {
        type: "policy",
        title: "Key sections (template)",
        blocks: [
          {
            heading: "Orders",
            body: [
              "By placing an order, you confirm that the information provided is accurate and complete.",
              "We may contact you if we need additional details to fulfill the order.",
            ],
          },
          {
            heading: "Pricing & availability",
            body: [
              "Prices are shown on product pages and at checkout.",
              "Availability can change; if an item becomes unavailable, we will notify you and offer a solution.",
            ],
          },
          {
            heading: "Returns",
            body: [
              "Return eligibility and time limits depend on local consumer laws and your store rules.",
              "Items should be returned in original condition unless otherwise required by law.",
            ],
          },
          {
            heading: "Liability",
            body: [
              "We are not responsible for delays caused by carriers or events outside our reasonable control.",
              "Nothing in these terms affects your statutory consumer rights.",
            ],
          },
        ],
      },
      {
        type: "richText",
        paragraphs: [
          "Important: This is not legal advice. If you're launching commercially, have a lawyer review and adapt the terms to your country and payment/shipping setup.",
        ],
      },
    ],
  },

  privacy: {
    slug: "privacy",
    seoTitle: "Privacy Policy",
    sections: [
      {
        type: "hero",
        title: "Privacy Policy",
        subtitle:
          "This is a template policy. Replace details (company name, data processors, contact) and get legal review if needed.",
      },
      {
        type: "policy",
        title: "Privacy (template)",
        blocks: [
          {
            heading: "What we collect",
            body: [
              "Account and order details (name, email, delivery address) needed to process purchases.",
              "Payment details are handled by payment providers; we do not store full card data.",
              "Technical data (device, browser) to improve performance and prevent fraud.",
            ],
          },
          {
            heading: "Why we use it",
            body: [
              "To fulfill orders, deliver parcels, and provide customer support.",
              "To communicate about your purchase (confirmation, shipping updates, returns).",
              "To improve our store experience and security.",
            ],
          },
          {
            heading: "Your choices",
            body: [
              "You may request access, correction, or deletion of your personal data, subject to legal requirements.",
              "You can opt out of marketing communications at any time.",
            ],
          },
        ],
      },
    ],
  },

  faq: {
    slug: "faq",
    seoTitle: "FAQ",
    sections: [
      {
        type: "hero",
        title: "Frequently Asked Questions",
        subtitle:
          "Quick answers about sizing, shipping, returns, and payments.",
      },
      {
        type: "faq",
        title: "Top questions",
        items: [
          {
            q: "How do I choose the right size?",
            a: "Check the size chart and fit notes on the product page. If you're between sizes, choose the larger one for a relaxed fit.",
          },
          {
            q: "When will my order ship?",
            a: "Orders are typically dispatched on business days. You'll receive a shipping confirmation with tracking once it's handed to the carrier.",
          },
          {
            q: "Can I change my order?",
            a: "If the order hasn't been packed yet, contact support as soon as possible with your order number.",
          },
          {
            q: "How do returns work?",
            a: "Follow the return instructions provided in your order email. Items should be returned in original condition unless local law states otherwise.",
          },
          {
            q: "Do you offer exchanges?",
            a: "Depending on availability, we can help you exchange sizes. In some cases, placing a new order and returning the original is faster.",
          },
          {
            q: "Why do colors look slightly different?",
            a: "Screens can display colors differently. We aim for accurate photos, but slight variations can happen.",
          },
          {
            q: "Do you issue invoices?",
            a: "If your store supports invoices, you can provide billing details during checkout.",
          },
          {
            q: "How can I contact you?",
            a: "Use the support page and include your order number for the fastest response.",
          },
        ],
      },
    ],
  },

  "manage-deliveries": {
    slug: "manage-deliveries",
    seoTitle: "Manage Deliveries",
    sections: [
      {
        type: "hero",
        title: "Manage Deliveries",
        subtitle:
          "Track shipments, update delivery preferences, and get help if something goes wrong.",
      },
      {
        type: "cards",
        title: "Delivery tools",
        items: [
          {
            title: "Track your parcel",
            text: "Use the tracking link from your shipping confirmation email.",
          },
          {
            title: "Delivery instructions",
            text: "Some carriers allow safe place notes or pickup point changes.",
          },
          {
            title: "Missed delivery",
            text: "Check tracking for the next attempt or pickup instructions.",
          },
          {
            title: "Delay or lost parcel",
            text: "Message support-we'll contact the carrier and advise next steps.",
          },
        ],
      },
      {
        type: "richText",
        paragraphs: [
          "If your tracking hasn't updated for several days, it usually helps to share your order number and the last tracking event with support.",
        ],
      },
    ],
  },

  orders: {
    slug: "orders",
    seoTitle: "Orders",
    sections: [
      {
        type: "hero",
        title: "Orders",
        subtitle:
          "Everything about placing, updating, and understanding your order status.",
      },
      {
        type: "steps",
        title: "Order lifecycle",
        items: [
          {
            title: "Confirmed",
            text: "Payment received and your order is queued for processing.",
          },
          {
            title: "Processing",
            text: "We pick, verify, and pack your items.",
          },
          {
            title: "Dispatched",
            text: "Handed to the carrier; tracking is sent by email.",
          },
          {
            title: "Delivered",
            text: "Arrived-enjoy your pieces (and tell us how it fits!).",
          },
        ],
      },
      {
        type: "cards",
        title: "Need changes?",
        items: [
          {
            title: "Address update",
            text: "Possible before packing begins-contact support quickly.",
          },
          {
            title: "Cancelation",
            text: "If the order hasn't shipped, we may be able to cancel it.",
          },
          {
            title: "Billing details",
            text: "Add them during checkout if your store supports invoices.",
          },
        ],
      },
    ],
  },

  payments: {
    slug: "payments",
    seoTitle: "Payments",
    sections: [
      {
        type: "hero",
        title: "Payments",
        subtitle:
          "Secure checkout, trusted methods, and transparent payment confirmations.",
      },
      {
        type: "policy",
        title: "Payment information",
        blocks: [
          {
            heading: "Available methods",
            body: [
              "Methods shown at checkout may include card payments, instant bank transfers, and local options (depending on your setup).",
              "All payment steps are encrypted and handled by trusted payment providers.",
            ],
          },
          {
            heading: "Payment confirmation",
            body: [
              "You'll receive an email confirmation after a successful payment.",
              "If payment fails, you can try again or use a different method.",
            ],
          },
          {
            heading: "Refunds",
            body: [
              "Refund timing depends on the payment method and your bank/provider.",
              "If a refund is taking longer than expected, contact support with your order number.",
            ],
          },
        ],
      },
    ],
  },

  ebooks: {
    slug: "ebooks",
    seoTitle: "Free eBooks",
    sections: [
      {
        type: "hero",
        title: "Free eBooks",
        subtitle:
          "Quick, practical guides to help you build outfits and buy with confidence.",
      },
      {
        type: "cards",
        title: "Downloadable guides (templates)",
        items: [
          {
            title: "Size & fit quick guide",
            text: "How to measure yourself and pick the best fit.",
          },
          {
            title: "Capsule wardrobe basics",
            text: "A simple checklist of essentials that mix well.",
          },
          {
            title: "Fabric care 101",
            text: "Washing, drying, and storing clothes to make them last.",
          },
          {
            title: "Outfit formulas",
            text: "Repeatable combinations for work, weekend, and evenings.",
          },
        ],
      },
      {
        type: "richText",
        paragraphs: [
          "Add real download links when you're ready (PDFs or a mailing list flow).",
        ],
      },
    ],
  },

  "dev-tutorial": {
    slug: "dev-tutorial",
    seoTitle: "Development Tutorial",
    sections: [
      {
        type: "hero",
        title: "Development Tutorial",
        subtitle:
          "A short guide for developers integrating Nuvra pages and UI components (template content).",
      },
      {
        type: "steps",
        title: "Quick setup",
        items: [
          {
            title: "1) Add routes",
            text: "Create routes for each static page slug (e.g., /about, /terms).",
          },
          {
            title: "2) Use the page map",
            text: "Render sections from a single content file to keep everything consistent.",
          },
          {
            title: "3) Keep styles modular",
            text: "Use CSS Modules for predictable, scoped styling.",
          },
          {
            title: "4) Extend sections",
            text: "Add new section types (e.g., gallery) without rewriting layouts.",
          },
        ],
      },
      {
        type: "richText",
        paragraphs: [
          "This page is mainly a placeholder. Replace it with your actual docs or hide it before launch if it's not needed publicly.",
        ],
      },
    ],
  },

  blog: {
    slug: "blog",
    seoTitle: "How to - Blog",
    sections: [
      {
        type: "hero",
        title: "How-To Blog",
        subtitle: "Styling tips, fabric care, and practical guides-no fluff.",
        cta: { label: "Browse articles", href: "/blog" },
      },
      {
        type: "cards",
        title: "Popular categories (template)",
        items: [
          {
            title: "Fit & sizing",
            text: "How to pick the right size and understand fit notes.",
          },
          {
            title: "Outfit ideas",
            text: "Simple formulas you can repeat all season.",
          },
          {
            title: "Care & longevity",
            text: "Make your clothes last longer with the right care.",
          },
          {
            title: "Trends, but wearable",
            text: "What's new-and how to wear it without overdoing it.",
          },
        ],
      },
    ],
  },

  youtube: {
    slug: "youtube",
    seoTitle: "YouTube Playlist",
    sections: [
      {
        type: "hero",
        title: "YouTube Playlist",
        subtitle:
          "Lookbooks, unboxings, and quick styling videos-watch and shop the vibe.",
      },
      {
        type: "richText",
        paragraphs: [
          "Embed your playlist here or link out to your channel.",
          "Tip: Keep videos short and focused (1-3 minutes) for higher completion rates.",
        ],
      },
      {
        type: "cards",
        title: "What you'll find",
        items: [
          {
            title: "Seasonal lookbooks",
            text: "Outfits built around the newest drops.",
          },
          {
            title: "How to style",
            text: "One piece, three outfits-fast and practical.",
          },
          {
            title: "Product close-ups",
            text: "Fabric texture, fit, and details up close.",
          },
        ],
      },
    ],
  },
};
