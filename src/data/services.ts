export interface ServiceHero {
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface ServicePersona {
  title: string;
  desc: string;
  points: string[];
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface TechCategory {
  id: string;
  label: string;
  techs: { name: string; icon: string; color: string }[];
}

export interface ServiceCaseStudy {
  tag: string;
  title: string;
  desc: string;
  image: string;
  link: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  seo: { title: string; description: string };
  hero: ServiceHero;
  personas: ServicePersona[];
  requirementsList: string[];
  features: ServiceFeature[];
  deliverables: ServiceDeliverable[];
  techStack: {
    title: string;
    titleAccent: string;
    categories: TechCategory[];
  };
  caseStudies: {
    title: string;
    titleAccent: string;
    projects: ServiceCaseStudy[];
  };
  faqs: {
    title: string;
    titleAccent: string;
    items: ServiceFAQ[];
  };
}

const ICONS = {
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  globe: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  server: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  cart: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  lightning: "M13 10V3L4 14h7v7l9-11h-7z",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  database: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  gear: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  chart: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  puzzle: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  pencil: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  lock: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  mobile: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  layout: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  refresh: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  upload: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
  cursor: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
  terminal: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  palette: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
};

const services: Record<string, ServiceData> = {

  "business-websites": {
    slug: "business-websites",
    seo: {
      title: "Business Websites - Professional Corporate Web Presence",
      description: "Premium business website development with conversion-focused design, SEO optimization, and enterprise-grade performance."
    },
    hero: {
      title: "CORPORATE",
      subtitle: "PRESENCE.",
      tag: "Business_Architecture_v3",
      description: "Engineering authoritative corporate digital platforms that command market respect. Conversion-driven design fused with institutional credibility.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      specs: [
        { label: "Conversion", value: "+340%" },
        { label: "Load Time", value: "<1.2s" },
        { label: "SEO Score", value: "98/100" }
      ]
    },
    personas: [
      {
        title: "Growth-Stage Startups",
        desc: "Founders who've outgrown their template site and need a digital presence that reflects their evolved brand positioning.",
        points: ["Brand Authority", "Lead Generation", "Investor Ready"]
      },
      {
        title: "Established Enterprises",
        desc: "Organizations requiring a corporate web platform that mirrors their institutional credibility and market dominance.",
        points: ["Multi-Department", "Compliance", "Global Scale"]
      }
    ],
    requirementsList: [
      "Professional Brand Representation",
      "Lead Capture & Conversion Flow",
      "Mobile-First Responsive Design",
      "Enterprise-Grade Security"
    ],
    features: [
      { title: "Conversion Architecture", description: "Strategically mapped user flows designed to transform visitors into qualified leads.", icon: ICONS.chart },
      { title: "Responsive Framework", description: "Pixel-perfect layouts across every device, from mobile to 4K displays.", icon: ICONS.mobile },
      { title: "SEO Foundation", description: "Technical SEO baked into the architecture — schema markup, meta optimization, and speed.", icon: ICONS.search },
      { title: "Brand System Integration", description: "Your visual identity translated into a cohesive digital design system.", icon: ICONS.palette },
      { title: "Analytics Dashboard", description: "Real-time tracking of visitor behavior, conversion funnels, and engagement metrics.", icon: ICONS.eye },
      { title: "Content Management", description: "Intuitive editing interface so your team can update content without developer dependency.", icon: ICONS.pencil }
    ],
    deliverables: [
      { title: "Design System", description: "Complete component library with brand guidelines, typography scales, and color tokens." },
      { title: "Responsive Website", description: "Fully developed multi-page website with responsive breakpoints for all devices." },
      { title: "SEO Configuration", description: "Technical SEO setup including sitemaps, robots.txt, schema markup, and meta tags." },
      { title: "Performance Audit", description: "Lighthouse optimization report with 90+ scores across all Core Web Vitals." },
      { title: "Analytics Integration", description: "Google Analytics 4, conversion tracking, and custom event monitoring setup." },
      { title: "CMS Training", description: "Comprehensive training documentation and live session for your content team." }
    ],
    techStack: {
      title: "DIGITAL",
      titleAccent: "ARSENAL.",
      categories: [
        {
          id: "01", label: "Frontend_Framework",
          techs: [
            { name: "Next.js", icon: "nextdotjs", color: "000000" },
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Astro", icon: "astro", color: "BC52EE" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" }
          ]
        },
        {
          id: "02", label: "CMS_Integration",
          techs: [
            { name: "WordPress", icon: "wordpress", color: "21759B" },
            { name: "Sanity", icon: "sanity", color: "F03E2F" },
            { name: "Strapi", icon: "strapi", color: "4945FF" },
            { name: "Contentful", icon: "contentful", color: "2478CC" }
          ]
        },
        {
          id: "03", label: "Infrastructure",
          techs: [
            { name: "Vercel", icon: "vercel", color: "000000" },
            { name: "Cloudflare", icon: "cloudflare", color: "F38020" },
            { name: "Google Analytics", icon: "googleanalytics", color: "E37400" },
            { name: "Figma", icon: "figma", color: "F24E1E" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "CORPORATE",
      titleAccent: "LAUNCHES.",
      projects: [
        {
          tag: "Corporate Rebrand",
          title: "Meridian Finance",
          desc: "Redesigned a 200-page financial services portal resulting in 4.2x lead generation increase.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Growth Platform",
          title: "Vertex Consulting",
          desc: "Built an authority-establishing web presence that reduced cost-per-acquisition by 62%.",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "BUSINESS",
      titleAccent: "INTEL.",
      items: [
        { question: "How long does a business website take to build?", answer: "Typical delivery is 4–6 weeks from design approval. Complex enterprise sites with 50+ pages may extend to 8–10 weeks. We provide a real-time project tracker so you can monitor every milestone." },
        { question: "Will my site rank on Google?", answer: "We engineer every site with technical SEO as a foundational layer — structured data, Core Web Vitals optimization, semantic HTML, and proper indexing. Content strategy guidance is included to accelerate organic growth." },
        { question: "Can I update content myself?", answer: "Absolutely. Every business site ships with an intuitive CMS interface. We also provide comprehensive training docs and a live walkthrough session for your team." },
        { question: "Do you handle domain and hosting setup?", answer: "Yes. We configure your DNS, SSL certificates, CDN, and hosting infrastructure. Most clients are deployed on Vercel or Cloudflare for maximum performance and uptime." }
      ]
    }
  },

  "ecommerce-stores": {
    slug: "ecommerce-stores",
    seo: {
      title: "E-Commerce Stores - High-Converting Online Storefronts",
      description: "Build powerful e-commerce experiences with seamless checkout, inventory management, and revenue-maximizing UX design."
    },
    hero: {
      title: "COMMERCE",
      subtitle: "ENGINE.",
      tag: "Revenue_Architecture_v2",
      description: "Engineering high-velocity storefronts that convert browsers into buyers. Every pixel optimized for maximum average order value and repeat purchase rate.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800",
      specs: [
        { label: "AOV Lift", value: "+48%" },
        { label: "Checkout", value: "<30s" },
        { label: "Uptime", value: "99.99%" }
      ]
    },
    personas: [
      {
        title: "DTC Brand Founders",
        desc: "Brands ready to own their customer relationship with a premium direct-to-consumer storefront.",
        points: ["Brand Experience", "Subscription Ready", "Global Shipping"]
      },
      {
        title: "Scaling Retailers",
        desc: "Established retailers migrating from marketplaces to their own high-margin commerce platform.",
        points: ["Multi-Channel", "Inventory Sync", "High Volume"]
      }
    ],
    requirementsList: [
      "Product Catalog Management",
      "Secure Payment Processing",
      "Inventory & Order Tracking",
      "Mobile Shopping Experience"
    ],
    features: [
      { title: "Checkout Optimization", description: "Frictionless one-page checkout engineered to minimize cart abandonment below 20%.", icon: ICONS.cart },
      { title: "Payment Gateway", description: "Multi-provider payment integration — Stripe, PayPal, Apple Pay, and local methods.", icon: ICONS.shield },
      { title: "Inventory Engine", description: "Real-time stock management with automated low-stock alerts and supplier notifications.", icon: ICONS.database },
      { title: "Product Showcase", description: "Rich media product pages with zoom, 360° views, and variant switching.", icon: ICONS.eye },
      { title: "Revenue Analytics", description: "Live dashboards tracking conversion funnels, average order value, and customer lifetime value.", icon: ICONS.chart },
      { title: "Search & Filtering", description: "AI-powered product search with faceted filtering and personalized recommendations.", icon: ICONS.search }
    ],
    deliverables: [
      { title: "Storefront Application", description: "Fully responsive e-commerce storefront with product catalog and category navigation." },
      { title: "Checkout System", description: "Optimized multi-step checkout with guest checkout, saved addresses, and order confirmation." },
      { title: "Admin Dashboard", description: "Complete merchant panel for orders, inventory, customers, and discount management." },
      { title: "Payment Integration", description: "Stripe and/or PayPal integration with webhook handling and refund processing." },
      { title: "Email Automation", description: "Transactional email flows — order confirmation, shipping updates, and abandoned cart recovery." },
      { title: "SEO & Analytics", description: "Product schema markup, Google Shopping feed, and conversion tracking setup." }
    ],
    techStack: {
      title: "COMMERCE",
      titleAccent: "STACK.",
      categories: [
        {
          id: "01", label: "Commerce_Platform",
          techs: [
            { name: "Shopify", icon: "shopify", color: "7AB55C" },
            { name: "Medusa.js", icon: "medusa", color: "1A1A2E" },
            { name: "Saleor", icon: "graphql", color: "E10098" },
            { name: "Stripe", icon: "stripe", color: "008CDD" }
          ]
        },
        {
          id: "02", label: "Frontend_Layer",
          techs: [
            { name: "Next.js", icon: "nextdotjs", color: "000000" },
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "TypeScript", icon: "typescript", color: "3178C6" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" }
          ]
        },
        {
          id: "03", label: "Data_&_Payments",
          techs: [
            { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
            { name: "Redis", icon: "redis", color: "FF4438" },
            { name: "Algolia", icon: "algolia", color: "003DFF" },
            { name: "PayPal", icon: "paypal", color: "003087" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "REVENUE",
      titleAccent: "MACHINES.",
      projects: [
        {
          tag: "DTC Launch",
          title: "Luxe Botanica",
          desc: "Launched a premium skincare DTC store generating $1.2M revenue in the first quarter.",
          image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Platform Migration",
          title: "Atlas Outdoor",
          desc: "Migrated from WooCommerce to headless Shopify, increasing page speed by 380% and conversions by 67%.",
          image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "COMMERCE",
      titleAccent: "LOGISTICS.",
      items: [
        { question: "Which e-commerce platform do you recommend?", answer: "It depends on your scale. For rapid launch, Shopify is unmatched. For full customization and ownership, we build headless storefronts with Medusa.js or Saleor backed by Next.js frontends." },
        { question: "How do you handle payment security?", answer: "All payment processing goes through PCI-DSS Level 1 compliant providers like Stripe. We never store raw card data — tokens handle everything with AES-256 encryption in transit." },
        { question: "Can you integrate with my existing inventory system?", answer: "Yes. We build custom API integrations to sync with ERP systems, warehouse management tools, and third-party fulfillment providers like ShipBob or Flexport." },
        { question: "What about international selling?", answer: "We configure multi-currency checkout, localized tax calculation, international shipping rules, and multilingual storefronts to support global expansion." }
      ]
    }
  },

  "custom-web-apps": {
    slug: "custom-web-apps",
    seo: {
      title: "Custom Web Apps - Tailored Software Solutions",
      description: "Bespoke web application development with modern architecture, real-time features, and scalable infrastructure."
    },
    hero: {
      title: "BESPOKE",
      subtitle: "SOFTWARE.",
      tag: "Application_Engineering_v4",
      description: "Architecting purpose-built web applications that solve problems no off-the-shelf product can touch. Your business logic, our engineering precision.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800",
      specs: [
        { label: "Uptime", value: "99.99%" },
        { label: "Response", value: "<80ms" },
        { label: "Coverage", value: "95%+" }
      ]
    },
    personas: [
      {
        title: "Product Founders",
        desc: "Visionaries with a validated concept who need a technical co-pilot to architect their MVP into a scalable product.",
        points: ["MVP to Scale", "Product-Market Fit", "Rapid Iteration"]
      },
      {
        title: "Enterprise Operations",
        desc: "Operations leaders drowning in spreadsheets who need custom internal tools to automate complex workflows.",
        points: ["Process Automation", "Data Pipelines", "Legacy Replacement"]
      }
    ],
    requirementsList: [
      "Complex Business Logic Requirements",
      "Real-Time Data Processing Needs",
      "Multi-User Role-Based Access",
      "Third-Party API Integrations"
    ],
    features: [
      { title: "Custom Architecture", description: "Modular, event-driven architecture designed specifically for your unique business processes.", icon: ICONS.puzzle },
      { title: "Real-Time Systems", description: "WebSocket-powered live updates for dashboards, notifications, and collaborative features.", icon: ICONS.lightning },
      { title: "Authentication & RBAC", description: "Enterprise-grade auth with role-based access control, SSO, and audit logging.", icon: ICONS.lock },
      { title: "API Design", description: "RESTful and GraphQL APIs with comprehensive documentation and versioning strategy.", icon: ICONS.code },
      { title: "Database Architecture", description: "Optimized data models with proper indexing, migrations, and backup strategies.", icon: ICONS.database },
      { title: "Testing Suite", description: "Automated unit, integration, and E2E tests ensuring 95%+ code coverage.", icon: ICONS.shield }
    ],
    deliverables: [
      { title: "Web Application", description: "Production-ready web app with responsive UI, state management, and error handling." },
      { title: "API Layer", description: "Documented REST/GraphQL API with authentication, rate limiting, and error responses." },
      { title: "Admin Panel", description: "Management dashboard for users, content, settings, and system monitoring." },
      { title: "Database Schema", description: "Optimized database with migrations, seed data, and backup automation." },
      { title: "CI/CD Pipeline", description: "Automated testing, staging deployments, and production release workflows." },
      { title: "Technical Documentation", description: "Architecture diagrams, API docs, deployment guides, and onboarding materials." }
    ],
    techStack: {
      title: "APP",
      titleAccent: "ENGINE.",
      categories: [
        {
          id: "01", label: "Application_Layer",
          techs: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Next.js", icon: "nextdotjs", color: "000000" },
            { name: "TypeScript", icon: "typescript", color: "3178C6" },
            { name: "Vue.js", icon: "vuedotjs", color: "4FC08D" }
          ]
        },
        {
          id: "02", label: "Backend_Runtime",
          techs: [
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "Python", icon: "python", color: "3776AB" },
            { name: "Go", icon: "go", color: "00ADD8" },
            { name: "Prisma", icon: "prisma", color: "2D3748" }
          ]
        },
        {
          id: "03", label: "Data_&_Infra",
          techs: [
            { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
            { name: "Redis", icon: "redis", color: "FF4438" },
            { name: "Docker", icon: "docker", color: "2496ED" },
            { name: "Google Cloud", icon: "googlecloud", color: "4285F4" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "PRODUCT",
      titleAccent: "LAUNCHES.",
      projects: [
        {
          tag: "SaaS Platform",
          title: "Nexus Analytics",
          desc: "Built a real-time analytics dashboard processing 10M+ events daily with sub-100ms query responses.",
          image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Internal Tool",
          title: "Prism Workflow",
          desc: "Automated a 40-step manual process into a streamlined app, saving 120 hours per week for a logistics firm.",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "APP",
      titleAccent: "INTEL.",
      items: [
        { question: "How do you scope a custom web app?", answer: "We start with a 2-week discovery sprint — mapping your workflows, data models, and user journeys. This produces a detailed technical specification with architecture diagrams, timeline, and precise cost estimate." },
        { question: "Can you build an MVP first?", answer: "Absolutely. We specialize in lean MVPs that validate your concept with real users in 6–8 weeks, then iterate based on actual usage data. No over-engineering, no wasted spend." },
        { question: "How do you ensure code quality?", answer: "Every pull request goes through automated linting, unit tests, integration tests, and manual code review. We maintain 95%+ test coverage and use TypeScript for type safety across the entire stack." },
        { question: "What happens after launch?", answer: "We offer ongoing maintenance plans that include bug fixes, performance monitoring, feature iterations, and infrastructure management. Your app doesn't stop evolving after v1." }
      ]
    }
  },

  "landing-pages": {
    slug: "landing-pages",
    seo: {
      title: "Landing Pages - High-Converting Campaign Pages",
      description: "Conversion-optimized landing pages designed to maximize ROI on every marketing dollar you spend."
    },
    hero: {
      title: "CONVERSION",
      subtitle: "MACHINES.",
      tag: "Campaign_Architecture_v2",
      description: "Precision-engineered landing pages where every headline, CTA, and visual element is calibrated for maximum conversion rate.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800",
      specs: [
        { label: "CVR Avg", value: "12.4%" },
        { label: "Load", value: "<0.8s" },
        { label: "A/B Tests", value: "∞" }
      ]
    },
    personas: [
      {
        title: "Performance Marketers",
        desc: "Media buyers running paid campaigns who need landing pages that maximize ROAS and minimize bounce rates.",
        points: ["Ad Alignment", "Speed Critical", "CRO Focus"]
      },
      {
        title: "Launch Strategists",
        desc: "Product teams orchestrating launches who need a high-impact page to capture early adopters and build waitlists.",
        points: ["Waitlist Capture", "Social Proof", "Urgency Design"]
      }
    ],
    requirementsList: [
      "Campaign-Specific Messaging",
      "A/B Testing Infrastructure",
      "Sub-Second Page Load Speed",
      "Multi-Variant CTA Optimization"
    ],
    features: [
      { title: "Headline Engineering", description: "Psychologically crafted headlines using proven copywriting frameworks — PAS, AIDA, and BAB.", icon: ICONS.pencil },
      { title: "CTA Optimization", description: "Strategically placed calls-to-action with color psychology and urgency triggers.", icon: ICONS.cursor },
      { title: "Speed Architecture", description: "Sub-second load times with static generation, CDN delivery, and zero render-blocking.", icon: ICONS.lightning },
      { title: "A/B Testing", description: "Built-in split testing infrastructure to continuously optimize conversion rates.", icon: ICONS.chart },
      { title: "Form Engineering", description: "Progressive disclosure forms that maximize completion rates without overwhelming visitors.", icon: ICONS.document },
      { title: "Social Proof System", description: "Dynamic testimonials, trust badges, and real-time activity notifications.", icon: ICONS.users }
    ],
    deliverables: [
      { title: "Landing Page", description: "Pixel-perfect, responsive landing page optimized for your target conversion action." },
      { title: "Copywriting", description: "Conversion-focused copy with headlines, body text, CTAs, and social proof sections." },
      { title: "A/B Variants", description: "Two additional page variants for split testing headlines, CTAs, and layouts." },
      { title: "Form Integration", description: "Lead capture forms connected to your CRM, email platform, or webhook." },
      { title: "Analytics Setup", description: "Conversion tracking, heatmap integration, and funnel analysis configuration." },
      { title: "Speed Report", description: "Performance audit ensuring sub-second load times and 95+ Lighthouse scores." }
    ],
    techStack: {
      title: "CONVERSION",
      titleAccent: "TOOLS.",
      categories: [
        {
          id: "01", label: "Build_Framework",
          techs: [
            { name: "Astro", icon: "astro", color: "BC52EE" },
            { name: "Next.js", icon: "nextdotjs", color: "000000" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
            { name: "TypeScript", icon: "typescript", color: "3178C6" }
          ]
        },
        {
          id: "02", label: "Analytics_&_CRO",
          techs: [
            { name: "Google Analytics", icon: "googleanalytics", color: "E37400" },
            { name: "Hotjar", icon: "hotjar", color: "FF3C00" },
            { name: "Vercel", icon: "vercel", color: "000000" },
            { name: "Figma", icon: "figma", color: "F24E1E" }
          ]
        },
        {
          id: "03", label: "Integration_Layer",
          techs: [
            { name: "HubSpot", icon: "hubspot", color: "FF7A59" },
            { name: "Mailchimp", icon: "mailchimp", color: "FFE01B" },
            { name: "Zapier", icon: "zapier", color: "FF4A00" },
            { name: "Cloudflare", icon: "cloudflare", color: "F38020" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "CAMPAIGN",
      titleAccent: "WINS.",
      projects: [
        {
          tag: "SaaS Launch",
          title: "Pulse CRM",
          desc: "Built a waitlist page that captured 14,000 signups in 72 hours during a Product Hunt launch.",
          image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Lead Generation",
          title: "Apex Legal",
          desc: "Designed a legal services landing page achieving 18.2% conversion rate, 3x above industry average.",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "CAMPAIGN",
      titleAccent: "FAQ.",
      items: [
        { question: "How fast can you deliver a landing page?", answer: "Standard delivery is 5–7 business days from approved copy and brand assets. Rush delivery in 48 hours is available for an expedited fee. Every page ships with mobile optimization." },
        { question: "Do you write the copy too?", answer: "Yes. Our conversion copywriters craft every headline, subhead, and CTA using proven frameworks. We also offer copy-only packages if you have an existing design." },
        { question: "How do you optimize for conversions?", answer: "We use a data-driven approach — heatmap analysis, scroll depth tracking, A/B testing, and session recordings. Post-launch, we iterate based on real user behavior, not assumptions." },
        { question: "Can you connect to my CRM?", answer: "Absolutely. We integrate with HubSpot, Salesforce, Mailchimp, ActiveCampaign, and any platform with an API or Zapier connection." }
      ]
    }
  },

  "frontend-development": {
    slug: "frontend-development",
    seo: {
      title: "Frontend Development - Modern UI Engineering",
      description: "Cutting-edge frontend development with React, Next.js, and modern frameworks. Pixel-perfect interfaces with seamless interactions."
    },
    hero: {
      title: "INTERFACE",
      subtitle: "CRAFT.",
      tag: "UI_Engineering_v5",
      description: "Sculpting pixel-perfect user interfaces with surgical precision. Where design meets engineering to create experiences users remember.",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800",
      specs: [
        { label: "FPS", value: "60fps" },
        { label: "A11y", value: "WCAG AA" },
        { label: "Bundle", value: "<50KB" }
      ]
    },
    personas: [
      {
        title: "Design Teams",
        desc: "Design studios who need a frontend specialist to translate their Figma masterpieces into production-grade code.",
        points: ["Design Fidelity", "Animation", "Component Systems"]
      },
      {
        title: "Product Teams",
        desc: "Engineering teams needing a frontend architect to build scalable component libraries and design systems.",
        points: ["Design Systems", "Performance", "Accessibility"]
      }
    ],
    requirementsList: [
      "Complex UI/UX Requirements",
      "Animation & Micro-Interactions",
      "Design System Architecture",
      "Cross-Browser Compatibility"
    ],
    features: [
      { title: "Component Architecture", description: "Atomic design system with reusable, composable components and consistent API contracts.", icon: ICONS.puzzle },
      { title: "Motion Design", description: "Buttery-smooth 60fps animations using Framer Motion, GSAP, and CSS transitions.", icon: ICONS.cursor },
      { title: "Responsive Engineering", description: "Fluid layouts that adapt seamlessly from 320px mobile to 4K ultra-wide displays.", icon: ICONS.mobile },
      { title: "Performance Tuning", description: "Code splitting, lazy loading, and tree shaking for minimal bundle sizes under 50KB.", icon: ICONS.lightning },
      { title: "Accessibility", description: "WCAG 2.1 AA compliance with semantic HTML, ARIA labels, and keyboard navigation.", icon: ICONS.users },
      { title: "State Management", description: "Predictable state architecture using Zustand, Redux Toolkit, or React Context.", icon: ICONS.gear }
    ],
    deliverables: [
      { title: "Component Library", description: "Documented Storybook-driven component library with variants, states, and usage examples." },
      { title: "Frontend Application", description: "Production-ready application with routing, state management, and API integration." },
      { title: "Design System Tokens", description: "CSS custom properties and Tailwind config for colors, spacing, typography, and shadows." },
      { title: "Animation Library", description: "Reusable animation presets for page transitions, micro-interactions, and scroll effects." },
      { title: "Testing Suite", description: "Jest/Vitest unit tests and Playwright E2E tests for critical user flows." },
      { title: "Performance Report", description: "Lighthouse audit with bundle analysis, paint metrics, and optimization recommendations." }
    ],
    techStack: {
      title: "FRONTEND",
      titleAccent: "ARSENAL.",
      categories: [
        {
          id: "01", label: "Core_Framework",
          techs: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Next.js", icon: "nextdotjs", color: "000000" },
            { name: "Svelte", icon: "svelte", color: "FF3E00" },
            { name: "Astro", icon: "astro", color: "BC52EE" }
          ]
        },
        {
          id: "02", label: "Styling_&_Motion",
          techs: [
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
            { name: "Framer Motion", icon: "framer", color: "0055FF" },
            { name: "GSAP", icon: "greensock", color: "88CE02" },
            { name: "Sass", icon: "sass", color: "CC6699" }
          ]
        },
        {
          id: "03", label: "Tooling_&_QA",
          techs: [
            { name: "TypeScript", icon: "typescript", color: "3178C6" },
            { name: "Storybook", icon: "storybook", color: "FF4785" },
            { name: "Cypress", icon: "cypress", color: "69D3A7" },
            { name: "Vite", icon: "vite", color: "646CFF" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "INTERFACE",
      titleAccent: "GALLERY.",
      projects: [
        {
          tag: "Design System",
          title: "Nova UI Kit",
          desc: "Built a 200+ component design system adopted across 8 product teams, reducing dev time by 60%.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Interactive Experience",
          title: "Orbital Portfolio",
          desc: "Crafted an award-winning portfolio with WebGL animations achieving 98 Lighthouse performance score.",
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "FRONTEND",
      titleAccent: "QUERIES.",
      items: [
        { question: "Which frontend framework do you recommend?", answer: "It depends on the project. React/Next.js for complex SPAs, Astro for content-heavy sites, Svelte for lightweight interactive apps. We choose the tool that best fits your performance and complexity requirements." },
        { question: "How do you ensure pixel-perfect implementation?", answer: "We overlay Figma designs with the built UI at every breakpoint, use visual regression testing, and maintain a 2px tolerance policy. Every component is reviewed against the design spec before merge." },
        { question: "Can you work with our existing codebase?", answer: "Yes. We regularly audit existing codebases, refactor incrementally, and introduce modern patterns without disrupting current functionality. We can also migrate legacy jQuery/Angular apps to React." },
        { question: "Do you handle animations?", answer: "Animation is one of our specialties. From subtle micro-interactions to complex page transitions and scroll-triggered sequences — we use Framer Motion, GSAP, and CSS for performant 60fps motion." }
      ]
    }
  },

  "backend-development": {
    slug: "backend-development",
    seo: {
      title: "Backend Development - Robust Server Solutions",
      description: "High-performance backend engineering with scalable APIs, secure infrastructure, and battle-tested architectures."
    },
    hero: {
      title: "BACKEND",
      subtitle: "SYSTEMS.",
      tag: "Core_Infrastructure_v2",
      description: "Architecting high-concurrency server environments with 99.9% uptime. We build the engine that powers your digital scale.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
      specs: [
        { label: "Latency", value: "<40ms" },
        { label: "Protocol", value: "gRPC/REST" },
        { label: "Security", value: "AES-256" }
      ]
    },
    personas: [
      {
        title: "Enterprise Architecture",
        desc: "CTOs looking to offload core infrastructure complexity and scale without compromising security.",
        points: ["Scalability", "Legacy Migration", "Compliance"]
      },
      {
        title: "SaaS Founders",
        desc: "Founders needing a rock-solid API foundation that can handle exponential user growth.",
        points: ["API-First", "Multi-tenancy", "Webhooks"]
      }
    ],
    requirementsList: [
      "High Traffic Potential",
      "Security Compliance Standards",
      "Cloud Native Architecture",
      "Real-Time Data Processing"
    ],
    features: [
      { title: "RESTful & GraphQL APIs", description: "High-performance endpoints with comprehensive documentation, versioning, and error handling.", icon: ICONS.terminal },
      { title: "Database Architecture", description: "Optimized schemas with proper indexing, sharding strategies, and replication.", icon: ICONS.database },
      { title: "Authentication Systems", description: "JWT, OAuth 2.0, and RBAC with session management, MFA, and audit logging.", icon: ICONS.lock },
      { title: "Microservices", description: "Event-driven microservice architecture with message queues and service mesh.", icon: ICONS.server },
      { title: "Caching Layer", description: "Multi-tier caching with Redis for sub-millisecond data retrieval at scale.", icon: ICONS.lightning },
      { title: "CI/CD Automation", description: "Containerized deployments with automated testing, staging, and rollback capabilities.", icon: ICONS.gear }
    ],
    deliverables: [
      { title: "Production API", description: "Well-documented, secure REST/GraphQL API built for high-scale environments." },
      { title: "Cloud Infrastructure", description: "Dockerized environments with Terraform configurations for AWS/GCP." },
      { title: "Security Suite", description: "Integrated authentication, encryption at rest/transit, and automated security scanning." },
      { title: "Database Layer", description: "Optimized PostgreSQL/MongoDB setup with migrations, backups, and monitoring." },
      { title: "Message Queue System", description: "Event-driven architecture with RabbitMQ/Redis for async processing." },
      { title: "Monitoring Stack", description: "Grafana dashboards, error tracking, and automated alerting for production issues." }
    ],
    techStack: {
      title: "ENGINE",
      titleAccent: "STACK.",
      categories: [
        {
          id: "01", label: "Runtime_Environments",
          techs: [
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "Go", icon: "go", color: "00ADD8" },
            { name: "Python", icon: "python", color: "3776AB" },
            { name: "Rust", icon: "rust", color: "000000" }
          ]
        },
        {
          id: "02", label: "Data_Architecture",
          techs: [
            { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
            { name: "Redis", icon: "redis", color: "FF4438" },
            { name: "MongoDB", icon: "mongodb", color: "47A248" },
            { name: "Elasticsearch", icon: "elasticsearch", color: "005571" }
          ]
        },
        {
          id: "03", label: "Cloud_Infrastructure",
          techs: [
            { name: "Google Cloud", icon: "googlecloud", color: "4285F4" },
            { name: "Docker", icon: "docker", color: "2496ED" },
            { name: "Kubernetes", icon: "kubernetes", color: "326CE5" },
            { name: "Terraform", icon: "terraform", color: "7B42BC" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "SYSTEM",
      titleAccent: "RELEASES.",
      projects: [
        {
          tag: "FinTech Architecture",
          title: "Apex Ledger",
          desc: "Engineered a high-frequency banking dashboard processing 50k transactions/second with sub-40ms latency.",
          image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Infrastructure Scale",
          title: "Vanguard Core",
          desc: "Architected a global distribution network handling real-time asset tracking across 30 countries.",
          image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "SYSTEM",
      titleAccent: "LOGISTICS.",
      items: [
        { question: "How do you handle massive scaling?", answer: "We utilize Kubernetes-based auto-scaling coupled with Go-based microservices to ensure sub-100ms response times even at 100k+ concurrent users. Horizontal scaling is built into the architecture from day one." },
        { question: "Is my data secure?", answer: "Every deployment includes AES-256 encryption at rest and TLS 1.3 in transit, following ISO 27001 compliance standards. We also implement automated security scanning in the CI/CD pipeline." },
        { question: "Do you provide API documentation?", answer: "Absolutely. We provide comprehensive Swagger/OpenAPI documentation with every deployment, plus SDK generation for popular languages and a Postman collection for testing." },
        { question: "Can you migrate our legacy backend?", answer: "Yes. We specialize in incremental migration strategies — the strangler fig pattern — that let you modernize piece by piece without downtime or big-bang rewrites." }
      ]
    }
  },

  "maintenance-support": {
    slug: "maintenance-support",
    seo: {
      title: "Maintenance & Support - Ongoing Digital Care",
      description: "Proactive website maintenance, monitoring, and technical support to keep your digital products running at peak performance."
    },
    hero: {
      title: "ONGOING",
      subtitle: "CARE.",
      tag: "Support_Protocol_v3",
      description: "Proactive monitoring, rapid incident response, and continuous optimization. Your digital infrastructure under 24/7 surgical watch.",
      image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=800",
      specs: [
        { label: "Response", value: "<2hr" },
        { label: "Uptime", value: "99.9%" },
        { label: "Updates", value: "Weekly" }
      ]
    },
    personas: [
      {
        title: "Growing Businesses",
        desc: "Companies whose websites generate revenue and can't afford downtime, slow performance, or security vulnerabilities.",
        points: ["Revenue Critical", "Zero Downtime", "Growth Phase"]
      },
      {
        title: "Legacy System Owners",
        desc: "Organizations running aging codebases that need expert hands to keep systems stable while planning modernization.",
        points: ["Legacy Code", "Gradual Migration", "Stability Focus"]
      }
    ],
    requirementsList: [
      "Business-Critical Web Applications",
      "Regular Security Patch Requirements",
      "Performance Degradation Concerns",
      "Content Update Frequency"
    ],
    features: [
      { title: "24/7 Monitoring", description: "Real-time uptime, performance, and error monitoring with instant alert escalation.", icon: ICONS.eye },
      { title: "Security Patching", description: "Proactive vulnerability scanning and dependency updates to prevent exploits.", icon: ICONS.shield },
      { title: "Performance Audits", description: "Monthly Lighthouse audits with actionable optimization recommendations.", icon: ICONS.chart },
      { title: "Backup Systems", description: "Automated daily backups with point-in-time recovery and disaster recovery plans.", icon: ICONS.database },
      { title: "Content Updates", description: "Regular content changes, image optimization, and CMS maintenance.", icon: ICONS.pencil },
      { title: "Priority Support", description: "Dedicated Slack channel with <2 hour response time for critical issues.", icon: ICONS.clock }
    ],
    deliverables: [
      { title: "Monitoring Setup", description: "Uptime monitoring, error tracking, and performance dashboards configured and live." },
      { title: "Monthly Reports", description: "Detailed analytics on uptime, performance trends, security status, and recommendations." },
      { title: "Security Audits", description: "Quarterly security scans with vulnerability reports and remediation actions." },
      { title: "Backup Infrastructure", description: "Automated backup system with tested restore procedures and disaster recovery plan." },
      { title: "Update Schedule", description: "Managed dependency updates, CMS patches, and framework upgrades." },
      { title: "Support Portal", description: "Dedicated ticket system with SLA tracking and priority escalation workflows." }
    ],
    techStack: {
      title: "SUPPORT",
      titleAccent: "OPS.",
      categories: [
        {
          id: "01", label: "Monitoring_Stack",
          techs: [
            { name: "Grafana", icon: "grafana", color: "F46800" },
            { name: "Sentry", icon: "sentry", color: "362D59" },
            { name: "Datadog", icon: "datadog", color: "632CA6" },
            { name: "Prometheus", icon: "prometheus", color: "E6522C" }
          ]
        },
        {
          id: "02", label: "DevOps_Tools",
          techs: [
            { name: "GitHub", icon: "github", color: "181717" },
            { name: "Docker", icon: "docker", color: "2496ED" },
            { name: "Terraform", icon: "terraform", color: "7B42BC" },
            { name: "Ansible", icon: "ansible", color: "EE0000" }
          ]
        },
        {
          id: "03", label: "Security_Suite",
          techs: [
            { name: "Cloudflare", icon: "cloudflare", color: "F38020" },
            { name: "Snyk", icon: "snyk", color: "4C4A73" },
            { name: "Let's Encrypt", icon: "letsencrypt", color: "003A70" },
            { name: "Dependabot", icon: "dependabot", color: "025E8C" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "SUPPORT",
      titleAccent: "RESULTS.",
      projects: [
        {
          tag: "E-Commerce Stability",
          title: "Nova Retail",
          desc: "Maintained 99.99% uptime during Black Friday traffic spikes handling 500k concurrent sessions.",
          image: "https://images.unsplash.com/photo-1612103198005-b238154f4590?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Legacy Rescue",
          title: "Fortis Healthcare",
          desc: "Stabilized a degrading healthcare portal, reducing critical incidents from 12/month to zero.",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "SUPPORT",
      titleAccent: "PROTOCOL.",
      items: [
        { question: "What's included in your maintenance plans?", answer: "Every plan includes uptime monitoring, weekly backups, monthly security scans, dependency updates, performance audits, and a dedicated support channel. Premium tiers add 24/7 response and proactive optimization." },
        { question: "How fast do you respond to emergencies?", answer: "Critical issues (site down, security breach) get a <30 minute response. High-priority bugs get <2 hours. Standard requests are handled within 24 hours. All tracked via SLA dashboards." },
        { question: "Do you support sites you didn't build?", answer: "Absolutely. We onboard third-party codebases regularly. We start with a comprehensive audit to understand the architecture, identify risks, and establish a maintenance baseline." },
        { question: "Can you help us gradually modernize?", answer: "Yes. Our maintenance plans include incremental modernization — replacing legacy components, upgrading frameworks, and improving performance without full rebuilds." }
      ]
    }
  },

  "speed-optimization": {
    slug: "speed-optimization",
    seo: {
      title: "Speed Optimization - Lightning-Fast Performance",
      description: "Transform slow websites into sub-second experiences with Core Web Vitals optimization, caching strategies, and code splitting."
    },
    hero: {
      title: "VELOCITY",
      subtitle: "PROTOCOL.",
      tag: "Performance_Engineering_v4",
      description: "Eliminating every millisecond of waste. We dissect your stack layer-by-layer to achieve sub-second load times and 90+ Lighthouse scores.",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800",
      specs: [
        { label: "LCP", value: "<1.2s" },
        { label: "CLS", value: "<0.01" },
        { label: "FID", value: "<50ms" }
      ]
    },
    personas: [
      {
        title: "SEO-Dependent Businesses",
        desc: "Companies whose organic traffic is declining due to poor Core Web Vitals and Google's page experience signals.",
        points: ["SEO Recovery", "Core Web Vitals", "Ranking Boost"]
      },
      {
        title: "High-Traffic Platforms",
        desc: "Applications where every 100ms of latency costs measurable revenue and user engagement drops.",
        points: ["Revenue Impact", "Scale Critical", "Global CDN"]
      }
    ],
    requirementsList: [
      "Failing Core Web Vitals",
      "High Bounce Rate From Speed",
      "Mobile Performance Issues",
      "Image & Asset Optimization Needs"
    ],
    features: [
      { title: "Core Web Vitals", description: "Surgical optimization of LCP, CLS, and FID to achieve green scores across all metrics.", icon: ICONS.chart },
      { title: "Code Splitting", description: "Route-based and component-level splitting to eliminate unused JavaScript from critical paths.", icon: ICONS.code },
      { title: "Image Pipeline", description: "Automated WebP/AVIF conversion, responsive srcsets, and lazy loading with blur placeholders.", icon: ICONS.eye },
      { title: "Caching Strategy", description: "Multi-layer caching — CDN edge, service worker, browser cache, and server-side with stale-while-revalidate.", icon: ICONS.lightning },
      { title: "Bundle Analysis", description: "Deep-dive into JS/CSS bundles to eliminate bloat, tree-shake dead code, and optimize dependencies.", icon: ICONS.search },
      { title: "Server Optimization", description: "Edge computing, HTTP/3, Brotli compression, and resource hints for maximum TTFB reduction.", icon: ICONS.server }
    ],
    deliverables: [
      { title: "Performance Audit", description: "Comprehensive report with waterfall analysis, bottleneck identification, and priority-ranked fixes." },
      { title: "Optimization Implementation", description: "All identified fixes applied — code splitting, image optimization, caching, and compression." },
      { title: "CDN Configuration", description: "Edge caching rules, geo-routing, and asset optimization configured on your CDN provider." },
      { title: "Monitoring Dashboard", description: "Real-time performance tracking with automated regression alerts and trend analysis." },
      { title: "Before/After Report", description: "Documented metrics comparison showing measurable improvements across all Core Web Vitals." },
      { title: "Optimization Guide", description: "Team guidelines for maintaining performance standards in future development." }
    ],
    techStack: {
      title: "SPEED",
      titleAccent: "TOOLS.",
      categories: [
        {
          id: "01", label: "Analysis_Tools",
          techs: [
            { name: "Lighthouse", icon: "lighthouse", color: "F44B21" },
            { name: "Selenium", icon: "selenium", color: "43B02A" },
            { name: "Chrome DevTools", icon: "googlechrome", color: "4285F4" },
            { name: "Bundlephobia", icon: "npm", color: "CB3837" }
          ]
        },
        {
          id: "02", label: "Optimization_Stack",
          techs: [
            { name: "Webpack", icon: "webpack", color: "8DD6F9" },
            { name: "Vite", icon: "vite", color: "646CFF" },
            { name: "sharp", icon: "sharp", color: "99CC00" },
            { name: "esbuild", icon: "esbuild", color: "FFCF00" }
          ]
        },
        {
          id: "03", label: "Delivery_Network",
          techs: [
            { name: "Cloudflare", icon: "cloudflare", color: "F38020" },
            { name: "Vercel", icon: "vercel", color: "000000" },
            { name: "Fastly", icon: "fastly", color: "FF282D" },
            { name: "Akamai", icon: "akamai", color: "009ACD" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "SPEED",
      titleAccent: "RESULTS.",
      projects: [
        {
          tag: "E-Commerce Speed",
          title: "Zenith Fashion",
          desc: "Reduced page load from 8.2s to 0.9s, resulting in 142% increase in mobile conversions.",
          image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "SaaS Performance",
          title: "DataSync Pro",
          desc: "Optimized a React dashboard from 45 Lighthouse score to 97, cutting customer churn by 23%.",
          image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "SPEED",
      titleAccent: "FAQ.",
      items: [
        { question: "How much faster can you make my site?", answer: "On average, we achieve 3–5x speed improvements. Most sites go from 4–8 second loads to under 1.5 seconds. We provide a free preliminary audit so you can see exact improvement potential before committing." },
        { question: "Will speed optimization break my site?", answer: "No. We implement changes incrementally with automated testing at each step. Every optimization is validated against your existing functionality before deployment. We maintain staging environments for safe testing." },
        { question: "How do you measure improvement?", answer: "We use Lighthouse, WebPageTest, and real-user monitoring (RUM) data. You'll receive before/after reports with LCP, CLS, FID, TTFB, and total blocking time comparisons." },
        { question: "Is this a one-time fix or ongoing?", answer: "We offer both. A one-time deep optimization typically yields 3–6 months of sustained performance. For ongoing protection, our monitoring plan catches regressions as new features ship." }
      ]
    }
  },

  "cms-development": {
    slug: "cms-development",
    seo: {
      title: "CMS Development - Custom Content Management",
      description: "Build powerful content management systems that empower your team to publish, manage, and scale content effortlessly."
    },
    hero: {
      title: "CONTENT",
      subtitle: "COMMAND.",
      tag: "CMS_Architecture_v3",
      description: "Building intelligent content management systems that empower your team to publish at scale without touching a line of code.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800",
      specs: [
        { label: "Publish", value: "<3 clicks" },
        { label: "Media", value: "Auto-CDN" },
        { label: "Locales", value: "40+" }
      ]
    },
    personas: [
      {
        title: "Content-Heavy Organizations",
        desc: "Media companies, blogs, and publications needing a scalable editorial workflow for high-volume content production.",
        points: ["Editorial Workflow", "Multi-Author", "Scheduled Publishing"]
      },
      {
        title: "Marketing Teams",
        desc: "Marketing departments who need autonomy to create landing pages, blog posts, and campaigns without dev tickets.",
        points: ["No-Code Editing", "Template System", "A/B Content"]
      }
    ],
    requirementsList: [
      "Frequent Content Publishing",
      "Multi-Author Editorial Workflow",
      "SEO-Optimized Content Delivery",
      "Media Asset Management"
    ],
    features: [
      { title: "Visual Editor", description: "WYSIWYG editing with live preview, drag-and-drop blocks, and real-time collaboration.", icon: ICONS.pencil },
      { title: "Content Modeling", description: "Flexible schema definitions with relationships, validations, and computed fields.", icon: ICONS.database },
      { title: "Media Library", description: "Centralized DAM with automatic image optimization, CDN delivery, and format conversion.", icon: ICONS.eye },
      { title: "Publishing Workflow", description: "Draft → Review → Approve → Publish pipeline with role-based permissions and scheduling.", icon: ICONS.document },
      { title: "Localization", description: "Multi-language content management with locale fallbacks and translation workflow.", icon: ICONS.globe },
      { title: "API-First Delivery", description: "Headless architecture delivering content via REST/GraphQL to any frontend or channel.", icon: ICONS.code }
    ],
    deliverables: [
      { title: "CMS Platform", description: "Fully configured content management system with custom content types and taxonomies." },
      { title: "Content Models", description: "Structured schemas for all content types with validations, references, and computed fields." },
      { title: "Editorial Dashboard", description: "Custom author dashboard with content calendar, publishing queue, and analytics." },
      { title: "Media Pipeline", description: "Automated image optimization, CDN integration, and media library organization." },
      { title: "Frontend Integration", description: "API-connected frontend with incremental static regeneration and preview mode." },
      { title: "Migration Script", description: "Automated content migration from your existing CMS with data integrity validation." }
    ],
    techStack: {
      title: "CMS",
      titleAccent: "STACK.",
      categories: [
        {
          id: "01", label: "CMS_Platform",
          techs: [
            { name: "Sanity", icon: "sanity", color: "F03E2F" },
            { name: "Strapi", icon: "strapi", color: "4945FF" },
            { name: "WordPress", icon: "wordpress", color: "21759B" },
            { name: "Payload CMS", icon: "payloadcms", color: "000000" }
          ]
        },
        {
          id: "02", label: "Frontend_Delivery",
          techs: [
            { name: "Next.js", icon: "nextdotjs", color: "000000" },
            { name: "Astro", icon: "astro", color: "BC52EE" },
            { name: "Nuxt", icon: "nuxt", color: "00DC82" },
            { name: "Gatsby", icon: "gatsby", color: "663399" }
          ]
        },
        {
          id: "03", label: "Media_&_Search",
          techs: [
            { name: "Cloudinary", icon: "cloudinary", color: "3448C5" },
            { name: "Algolia", icon: "algolia", color: "003DFF" },
            { name: "Unsplash", icon: "unsplash", color: "000000" },
            { name: "sharp", icon: "sharp", color: "99CC00" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "CONTENT",
      titleAccent: "SYSTEMS.",
      projects: [
        {
          tag: "Editorial Platform",
          title: "Cipher Magazine",
          desc: "Built a headless editorial CMS powering 200+ articles/month with automated SEO optimization.",
          image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "Enterprise CMS",
          title: "Helios Education",
          desc: "Migrated 50,000 pages from WordPress to headless Sanity, improving editorial velocity by 5x.",
          image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "CMS",
      titleAccent: "QUERIES.",
      items: [
        { question: "Should I go headless or traditional CMS?", answer: "Headless is ideal for multi-channel delivery, performance-critical sites, and developer-friendly workflows. Traditional WordPress works great for simpler sites where editorial teams need WYSIWYG editing without technical complexity." },
        { question: "Can you migrate from our current CMS?", answer: "Yes. We build automated migration scripts that transfer content, media, metadata, and URL structures. We handle WordPress, Drupal, Ghost, and any CMS with an export API." },
        { question: "How do non-technical users manage content?", answer: "We build intuitive editing interfaces with visual editors, real-time previews, and guided workflows. Your content team gets custom-built dashboards tailored to their exact publishing needs." },
        { question: "Can the CMS handle multiple languages?", answer: "Absolutely. We configure multi-locale content models with translation workflows, locale-specific SEO, and automatic fallback chains for unpublished translations." }
      ]
    }
  },

  "deployment-hosting": {
    slug: "deployment-hosting",
    seo: {
      title: "Deployment & Hosting - Reliable Infrastructure",
      description: "Enterprise-grade deployment pipelines and hosting solutions with automated CI/CD, SSL, CDN, and 99.99% uptime guarantee."
    },
    hero: {
      title: "DEPLOY",
      subtitle: "PROTOCOL.",
      tag: "Infrastructure_Ops_v5",
      description: "From zero to production in minutes. Automated deployment pipelines, battle-tested hosting, and infrastructure that scales with your ambition.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      specs: [
        { label: "Deploy", value: "<90s" },
        { label: "SSL", value: "Auto" },
        { label: "CDN Nodes", value: "300+" }
      ]
    },
    personas: [
      {
        title: "Development Teams",
        desc: "Engineering teams needing reliable CI/CD pipelines, staging environments, and zero-downtime deployments.",
        points: ["CI/CD", "Preview Deploys", "Rollback Ready"]
      },
      {
        title: "Non-Technical Founders",
        desc: "Business owners who need their application deployed, secured, and maintained without managing servers themselves.",
        points: ["Managed Hosting", "Auto-Scaling", "DNS Setup"]
      }
    ],
    requirementsList: [
      "Automated Deployment Pipelines",
      "SSL & Security Configuration",
      "Global CDN Distribution",
      "Staging & Preview Environments"
    ],
    features: [
      { title: "CI/CD Pipeline", description: "Push-to-deploy automation with build checks, test gates, and branch-based deployments.", icon: ICONS.gear },
      { title: "Edge Network", description: "Global CDN with 300+ points of presence for sub-50ms asset delivery worldwide.", icon: ICONS.globe },
      { title: "SSL & Security", description: "Automated SSL provisioning, WAF rules, DDoS protection, and security headers.", icon: ICONS.shield },
      { title: "Preview Deployments", description: "Every pull request gets a unique preview URL for stakeholder review before production.", icon: ICONS.eye },
      { title: "Auto-Scaling", description: "Infrastructure that scales dynamically with traffic — from zero to millions of requests.", icon: ICONS.chart },
      { title: "Disaster Recovery", description: "Multi-region failover, automated backups, and one-click rollback to any previous deployment.", icon: ICONS.refresh }
    ],
    deliverables: [
      { title: "CI/CD Setup", description: "Complete deployment pipeline with GitHub Actions/GitLab CI, build optimization, and test gates." },
      { title: "Hosting Configuration", description: "Production environment on Vercel, AWS, or Cloudflare with auto-scaling and monitoring." },
      { title: "Domain & DNS", description: "Domain configuration, DNS propagation, and SSL certificate provisioning." },
      { title: "CDN & Caching", description: "Global CDN setup with cache rules, purge strategies, and edge function configuration." },
      { title: "Staging Environment", description: "Mirror production environment for safe testing with database seeding and feature flags." },
      { title: "Runbook Documentation", description: "Deployment guides, rollback procedures, incident response playbooks, and architecture diagrams." }
    ],
    techStack: {
      title: "INFRA",
      titleAccent: "STACK.",
      categories: [
        {
          id: "01", label: "Hosting_Platform",
          techs: [
            { name: "Vercel", icon: "vercel", color: "000000" },
            { name: "Google Cloud", icon: "googlecloud", color: "4285F4" },
            { name: "Cloudflare", icon: "cloudflare", color: "F38020" },
            { name: "Netlify", icon: "netlify", color: "00C7B7" }
          ]
        },
        {
          id: "02", label: "CI/CD_Pipeline",
          techs: [
            { name: "GitHub Actions", icon: "githubactions", color: "2088FF" },
            { name: "Docker", icon: "docker", color: "2496ED" },
            { name: "Terraform", icon: "terraform", color: "7B42BC" },
            { name: "Turborepo", icon: "turborepo", color: "EF4444" }
          ]
        },
        {
          id: "03", label: "Monitoring_&_DNS",
          techs: [
            { name: "Grafana", icon: "grafana", color: "F46800" },
            { name: "Sentry", icon: "sentry", color: "362D59" },
            { name: "Cloudflare DNS", icon: "cloudflare", color: "F38020" },
            { name: "New Relic", icon: "newrelic", color: "1CE783" }
          ]
        }
      ]
    },
    caseStudies: {
      title: "DEPLOY",
      titleAccent: "WINS.",
      projects: [
        {
          tag: "Enterprise Migration",
          title: "Stratos Platform",
          desc: "Migrated from on-premise servers to edge-deployed architecture, reducing hosting costs by 73%.",
          image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=800",
          link: "/portfolio"
        },
        {
          tag: "DevOps Automation",
          title: "Quantum Labs",
          desc: "Built a CI/CD pipeline reducing deployment time from 45 minutes to 87 seconds with zero-downtime releases.",
          image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?q=80&w=800",
          link: "/portfolio"
        }
      ]
    },
    faqs: {
      title: "HOSTING",
      titleAccent: "INTEL.",
      items: [
        { question: "Which hosting platform should I choose?", answer: "For most modern web apps, Vercel or Cloudflare Pages offer the best performance-to-cost ratio. For complex backend services, AWS with Docker/Kubernetes provides maximum flexibility. We recommend based on your specific stack and traffic patterns." },
        { question: "How do you handle zero-downtime deployments?", answer: "We use blue-green deployments or rolling updates. New versions are deployed alongside the current one, health-checked, then traffic is seamlessly shifted. If anything fails, instant rollback occurs automatically." },
        { question: "Can you manage our existing hosting?", answer: "Yes. We onboard existing infrastructure, audit the setup, optimize configurations, and implement proper CI/CD pipelines. We work with any cloud provider — AWS, GCP, Azure, DigitalOcean, or dedicated servers." },
        { question: "What about costs at scale?", answer: "We design infrastructure for cost efficiency — serverless functions, edge caching, and auto-scaling that scales down to zero when idle. Most clients see 40–60% cost reduction after our optimization." }
      ]
    }
  }

};

export function getService(slug: string): ServiceData | undefined {
  return services[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(services);
}

export function getAllServices(): ServiceData[] {
  return Object.values(services);
}
