export interface ProjectHero {
  title: string;
  subtitle: string;
  images: { id: string; title: string; img: string }[];
}

export interface ProjectProblem {
  title_1st_half: string;
  title_2nd_half: string;
  subtitle: string;
  description: string;
  painPoints: { id: string; label: string; description: string }[];
  images: string[];
}

export interface ProjectConstraints {
  header: { protocol: string; title: string; highlight: string; desc: string };
  constraints: { label: string; value: string; tag: string }[];
  gallery: string[];
  verdict: { headline: string; highlightWord: string; quote: string };
}

export interface ProjectStrategy {
  header: { phase: string; title: string; highlight: string; desc: string };
  steps: {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    image: string;
    logo: string;
  }[];
  finale: {
    image: string;
    stats: { label: string; val: string }[];
    title: string;
    highlightWord: string;
    quote: string;
  };
}

export interface ProjectExecution {
  header: { protocol: string; title: string; highlight: string; desc: string };
  stats: { label: string; val: string; detail: string; symbol: string }[];
  images: { primary: string; secondary: string };
  conclusion: { title: string; highlightWord: string; quote: string };
}

export interface ProjectSEO {
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;
  category: string;
  title: string;
  tech: string;
  seo: ProjectSEO;
  hero: ProjectHero;
  problem: ProjectProblem;
  constraints: ProjectConstraints;
  strategy: ProjectStrategy;
  execution: ProjectExecution;
  relatedProjects: {
    title: string;
    client: string;
    outcome: string;
    img: string;
    id: string;
  }[];
}

const projects: Record<string, ProjectData> = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SAAS SYSTEMS — 01, 02, 03
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "01": {
    id: "01",
    category: "saas",
    title: "Vortex Analytics",
    tech: "Next.js // AWS",
    seo: {
      title: "Vortex Analytics — Real-Time Enterprise Dashboard | Case Study",
      description:
        "How we built a sub-200ms real-time analytics platform processing 4.2B daily events for enterprise clients using Next.js and AWS infrastructure.",
    },
    hero: {
      title: "Vortex Analytics",
      subtitle:
        "Engineering a real-time analytics engine that processes 4.2 billion daily events with sub-200ms latency.",
      images: [
        {
          id: "01",
          title: "Dashboard",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
        },
        {
          id: "02",
          title: "Data Flow",
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        },
        {
          id: "03",
          title: "Analytics",
          img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Data ",
      title_2nd_half: "Blindness",
      subtitle: "Drowning in Numbers, Starving for Insight",
      description:
        "Enterprise teams were spending 14+ hours weekly assembling reports from fragmented data sources, making decisions on stale information while competitors moved in real time.",
      painPoints: [
        {
          id: "01",
          label: "Report Latency",
          description:
            "Critical business decisions delayed by 48–72 hours due to manual data aggregation across 12 disconnected tools.",
        },
        {
          id: "02",
          label: "Data Fragmentation",
          description:
            "Revenue, user behavior, and infrastructure metrics siloed across Salesforce, GA4, and internal databases.",
        },
        {
          id: "03",
          label: "Scaling Ceiling",
          description:
            "Legacy Tableau setup collapsed at 500K concurrent queries, costing $2.3M in lost insight windows annually.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Infrastructure",
        highlight: "Bottlenecks",
        desc: "Twelve data sources. One broken pipeline. Zero real-time capability.",
      },
      constraints: [
        { label: "Query Latency", value: "4.2s", tag: "PERFORMANCE" },
        { label: "Data Staleness", value: "72hr", tag: "FRESHNESS" },
        { label: "Pipeline Failures", value: "34%", tag: "RELIABILITY" },
        { label: "Cost Overrun", value: "$2.3M", tag: "BUDGET" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      ],
      verdict: {
        headline: "Speed is the only ",
        highlightWord: "currency.",
        quote:
          "Until the data pipeline operates in real time, every dashboard is a rearview mirror. We didn't build analytics—we built a nervous system.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Architectural Blueprint",
        title: "Pipeline",
        highlight: "Engineering",
        desc: "A zero-latency data mesh replacing 12 fragmented sources with a unified real-time stream.",
      },
      steps: [
        {
          id: "01",
          title: "Stream Ingestion Layer",
          subtitle: "KINESIS + KAFKA",
          desc: "We replaced batch ETL jobs with a real-time event stream architecture. Every click, transaction, and API call now flows through a unified Kafka backbone with sub-50ms ingestion.",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
          logo: "https://www.svgrepo.com/show/376356/aws.svg",
        },
        {
          id: "02",
          title: "Compute & Aggregation",
          subtitle: "SERVERLESS MESH",
          desc: "AWS Lambda functions process and aggregate 4.2B daily events through a serverless compute mesh. Auto-scaling from 0 to 50K concurrent executions with zero cold-start latency.",
          image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800",
          logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
        },
        {
          id: "03",
          title: "Visual Intelligence Layer",
          subtitle: "INTERACTIVE DASHBOARDS",
          desc: "Custom Next.js dashboards with WebSocket-driven live updates. Every chart, metric, and KPI refreshes in real time—no page reloads, no stale data, no waiting.",
          image:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800",
          logo: "https://cdn.simpleicons.org/vercel/000000",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        stats: [
          { label: "QUERY_SPEED", val: "< 200ms" },
          { label: "DAILY_EVENTS", val: "4.2B" },
          { label: "UPTIME_SLA", val: "99.99%" },
        ],
        title: "Real-Time ",
        highlightWord: "Intelligence.",
        quote:
          "The transition from batch processing to live streaming analytics eliminated a 72-hour decision gap permanently.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Measurable",
        highlight: "Impact",
        desc: "From 72-hour data delays to sub-200ms live dashboards. A complete operational transformation.",
      },
      stats: [
        {
          label: "Query Speed",
          val: "21x",
          detail: "Faster Than Legacy",
          symbol: "↑",
        },
        {
          label: "Uptime",
          val: "99.99%",
          detail: "Zero Downtime",
          symbol: "✓",
        },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Decision ",
        highlightWord: "Velocity.",
        quote:
          "We didn't just build dashboards; we compressed a 72-hour insight cycle into 200 milliseconds. Every executive now operates on live truth.",
      },
    },
    relatedProjects: [
      {
        title: "Lumina Admin",
        client: "SaaS Enterprise",
        outcome: "60% Faster Ops",
        img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800",
        id: "02",
      },
      {
        title: "ScaleFlow CRM",
        client: "Growth Teams",
        outcome: "+45% Conversions",
        img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800",
        id: "03",
      },
      {
        title: "GeniusAI Content",
        client: "AI Platform",
        outcome: "8x Output",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
        id: "04",
      },
    ],
  },

  "02": {
    id: "02",
    category: "saas",
    title: "Lumina Admin",
    tech: "Vue // Firebase",
    seo: {
      title: "Lumina Admin — Intelligent Admin Panel System | Case Study",
      description:
        "How we designed a self-adapting admin panel that reduced operational overhead by 60% using Vue.js and Firebase real-time infrastructure.",
    },
    hero: {
      title: "Lumina Admin",
      subtitle:
        "Designing an intelligent admin ecosystem that adapts to operator behavior in real time.",
      images: [
        {
          id: "01",
          title: "Interface",
          img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
        },
        {
          id: "02",
          title: "Workflows",
          img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
        },
        {
          id: "03",
          title: "Permissions",
          img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Admin ",
      title_2nd_half: "Chaos",
      subtitle: "Bloated Interfaces, Buried Controls",
      description:
        "Support teams navigated through 47 different screens to complete a single customer escalation. The admin panel had become the very bottleneck it was meant to eliminate.",
      painPoints: [
        {
          id: "01",
          label: "Screen Overload",
          description:
            "47 disconnected views with no contextual linking—operators spent 40% of their time just navigating.",
        },
        {
          id: "02",
          label: "Permission Fog",
          description:
            "Role-based access was hardcoded and required developer intervention for every permission change.",
        },
        {
          id: "03",
          label: "Sync Failures",
          description:
            "Firebase real-time listeners leaked memory, causing cascading UI freezes during peak hours.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=800",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Operational",
        highlight: "Friction",
        desc: "47 screens. Zero contextual flow. Maximum operator burnout.",
      },
      constraints: [
        { label: "Navigation Time", value: "40%", tag: "UX DEBT" },
        { label: "Support Tickets", value: "2.1K", tag: "MONTHLY" },
        { label: "Permission Bugs", value: "89", tag: "CRITICAL" },
        { label: "Memory Leaks", value: "12GB", tag: "RUNTIME" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800",
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800",
      ],
      verdict: {
        headline: "Simplicity is the ultimate ",
        highlightWord: "sophistication.",
        quote:
          "An admin panel should amplify human judgment, not bury it under 47 tabs. We rebuilt the interface around the operator's mind, not the database schema.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Interface Overhaul",
        title: "Adaptive",
        highlight: "Architecture",
        desc: "A context-aware admin system that surfaces the right tools at the right moment.",
      },
      steps: [
        {
          id: "01",
          title: "Contextual Navigation",
          subtitle: "SMART ROUTING",
          desc: "We replaced the 47-screen maze with a 5-hub contextual system. Every panel dynamically loads based on operator intent, reducing average task completion from 12 clicks to 3.",
          image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
          logo: "https://www.svgrepo.com/show/452130/vue.svg",
        },
        {
          id: "02",
          title: "Dynamic Permissions Engine",
          subtitle: "RBAC 2.0",
          desc: "A visual permission builder that lets non-technical admins create, modify, and audit role hierarchies in real time. Zero developer dependency for access control changes.",
          image:
            "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800",
          logo: "https://www.svgrepo.com/show/373595/firebase.svg",
        },
        {
          id: "03",
          title: "Real-Time Sync Layer",
          subtitle: "ZERO MEMORY LEAKS",
          desc: "Custom Firebase subscription management with automatic cleanup, connection pooling, and smart reconnection. Memory usage dropped from 12GB peaks to a stable 800MB.",
          image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
          logo: "https://www.svgrepo.com/show/353735/firebase.svg",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
        stats: [
          { label: "TASK_SPEED", val: "-60%" },
          { label: "MEMORY_USE", val: "800MB" },
          { label: "SUPPORT_LOAD", val: "-74%" },
        ],
        title: "Operational ",
        highlightWord: "Clarity.",
        quote:
          "From a 47-screen labyrinth to a 5-hub command center. Operators now spend time solving problems, not finding buttons.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Operator",
        highlight: "Freedom",
        desc: "The admin panel went from the team's biggest frustration to their most powerful tool.",
      },
      stats: [
        {
          label: "Efficiency",
          val: "60%",
          detail: "Faster Operations",
          symbol: "+",
        },
        {
          label: "Tickets",
          val: "74%",
          detail: "Reduction in Support",
          symbol: "↓",
        },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Interface ",
        highlightWord: "Mastery.",
        quote:
          "We didn't redesign an admin panel; we eliminated the concept of 'admin friction.' Every operator now has a personalized command center that learns their workflow.",
      },
    },
    relatedProjects: [
      {
        title: "Vortex Analytics",
        client: "Enterprise Data",
        outcome: "21x Faster",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800",
        id: "01",
      },
      {
        title: "ScaleFlow CRM",
        client: "Growth Teams",
        outcome: "+45% Conversions",
        img: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=800",
        id: "03",
      },
      {
        title: "Visionary ML",
        client: "AI Vision",
        outcome: "99.7% Accuracy",
        img: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=800",
        id: "05",
      },
    ],
  },

  "03": {
    id: "03",
    category: "saas",
    title: "ScaleFlow CRM",
    tech: "React // Node",
    seo: {
      title: "ScaleFlow CRM — Intelligent Pipeline Management | Case Study",
      description:
        "How we engineered a CRM that increased conversion rates by 45% through AI-powered lead scoring and unified communication pipelines.",
    },
    hero: {
      title: "ScaleFlow CRM",
      subtitle:
        "Engineering an AI-augmented CRM that turns pipeline chaos into predictable revenue growth.",
      images: [
        {
          id: "01",
          title: "Pipeline",
          img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
        },
        {
          id: "02",
          title: "Leads",
          img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=800",
        },
        {
          id: "03",
          title: "Revenue",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Pipeline ",
      title_2nd_half: "Hemorrhage",
      subtitle: "Leads Lost in Translation",
      description:
        "Sales reps were losing 38% of qualified leads between first touch and close. Communication scattered across email, Slack, phone, and three different tools with zero unified timeline.",
      painPoints: [
        {
          id: "01",
          label: "Lead Leakage",
          description:
            "38% of qualified leads fell through cracks between handoffs—no single source of truth for deal progression.",
        },
        {
          id: "02",
          label: "Channel Chaos",
          description:
            "Customer conversations fragmented across email, Slack, WhatsApp, and phone with no unified thread.",
        },
        {
          id: "03",
          label: "Forecast Blindness",
          description:
            "Revenue projections were based on gut feel, not data. Pipeline accuracy was below 40%.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Revenue",
        highlight: "Leakage",
        desc: "Four communication channels. Zero unified timeline. 38% lead loss.",
      },
      constraints: [
        { label: "Lead Loss Rate", value: "38%", tag: "REVENUE" },
        { label: "Forecast Error", value: "60%", tag: "PLANNING" },
        { label: "Rep Overhead", value: "3.2hr", tag: "DAILY" },
        { label: "Tool Sprawl", value: "7+", tag: "PLATFORMS" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&q=80&w=800",
      ],
      verdict: {
        headline: "Revenue is a system, not a ",
        highlightWord: "prayer.",
        quote:
          "When 38% of qualified leads evaporate between first touch and close, you don't have a sales problem—you have an engineering problem. We treated it as one.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Revenue Architecture",
        title: "Conversion",
        highlight: "Engine",
        desc: "An AI-augmented pipeline that scores, routes, and nurtures every lead with zero human overhead.",
      },
      steps: [
        {
          id: "01",
          title: "Unified Communication Hub",
          subtitle: "OMNICHANNEL SYNC",
          desc: "Every email, call, Slack message, and WhatsApp thread auto-mapped to the right deal. Sales reps see a single timeline per prospect—no more context switching.",
          image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/354259/react.svg",
        },
        {
          id: "02",
          title: "Predictive Lead Scoring",
          subtitle: "ML PIPELINE",
          desc: "A custom scoring model trained on 2.4M historical touchpoints. Every lead gets a real-time conversion probability that updates with each interaction.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/376337/node-js.svg",
        },
        {
          id: "03",
          title: "Automated Nurture Sequences",
          subtitle: "BEHAVIORAL TRIGGERS",
          desc: "AI-generated follow-up sequences triggered by prospect behavior. Open rates climbed 340% because every message arrived at the exact right moment.",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/354259/react.svg",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
        stats: [
          { label: "CONVERSION_RATE", val: "+45%" },
          { label: "LEAD_RECOVERY", val: "94%" },
          { label: "FORECAST_ACCURACY", val: "91%" },
        ],
        title: "Predictable ",
        highlightWord: "Revenue.",
        quote:
          "The sales team went from gut-feel forecasting to 91% prediction accuracy. Every deal now moves through a system, not a hope.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Revenue",
        highlight: "Certainty",
        desc: "From 38% lead loss to 94% recovery. Pipeline is no longer a funnel—it's an engine.",
      },
      stats: [
        {
          label: "Conversions",
          val: "45%",
          detail: "Increase in Close Rate",
          symbol: "+",
        },
        {
          label: "Forecast",
          val: "91%",
          detail: "Prediction Accuracy",
          symbol: "✓",
        },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Pipeline ",
        highlightWord: "Certainty.",
        quote:
          "We didn't optimize a sales process; we engineered a revenue machine. 38% lead leakage compressed to under 6%. The pipeline now runs itself.",
      },
    },
    relatedProjects: [
      {
        title: "Vortex Analytics",
        client: "Enterprise Data",
        outcome: "21x Faster",
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&q=80&w=800",
        id: "01",
      },
      {
        title: "Lumina Admin",
        client: "SaaS Enterprise",
        outcome: "60% Faster Ops",
        img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&q=80&w=800",
        id: "02",
      },
      {
        title: "Neural Ledger",
        client: "Blockchain AI",
        outcome: "340% Detection",
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
        id: "06",
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AI NEURAL — 04, 05, 06
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "04": {
    id: "04",
    category: "ai",
    title: "GeniusAI Content",
    tech: "Python // GPT-4",
    seo: {
      title: "GeniusAI Content — AI-Powered Content Engine | Case Study",
      description:
        "How we built an AI content platform that produces 8x more brand-consistent content while reducing production costs by 73% using fine-tuned GPT-4 pipelines.",
    },
    hero: {
      title: "GeniusAI Content",
      subtitle:
        "Building an AI-native content engine that produces 8x output with 92% brand voice consistency.",
      images: [
        {
          id: "01",
          title: "Generation",
          img: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=800",
        },
        {
          id: "02",
          title: "Workflow",
          img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800",
        },
        {
          id: "03",
          title: "Output",
          img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Content ",
      title_2nd_half: "Bottleneck",
      subtitle: "Talent Shortage Meets Infinite Demand",
      description:
        "A 6-person content team was drowning under 200+ monthly content requests. Average turnaround: 11 days. Brand consistency across channels: barely 40%.",
      painPoints: [
        {
          id: "01",
          label: "Production Gap",
          description:
            "200+ monthly requests vs. 40 deliverables. An 80% fulfillment gap that starved every marketing channel.",
        },
        {
          id: "02",
          label: "Voice Drift",
          description:
            "Content published across 8 channels with zero brand voice governance—each piece sounded like a different company.",
        },
        {
          id: "03",
          label: "Turnaround Death",
          description:
            "11-day average from brief to publish. By the time content went live, the moment had passed.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800",
        "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=800",
        "https://images.unsplash.com/photo-1684369176170-463e84248b70?q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Creative",
        highlight: "Paralysis",
        desc: "200 requests. 40 deliverables. 11-day turnaround. Zero consistency.",
      },
      constraints: [
        { label: "Fulfillment Gap", value: "80%", tag: "CAPACITY" },
        { label: "Brand Drift", value: "60%", tag: "CONSISTENCY" },
        { label: "Avg. Turnaround", value: "11d", tag: "SPEED" },
        { label: "Cost Per Asset", value: "$840", tag: "BUDGET" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=800",
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800",
      ],
      verdict: {
        headline: "AI doesn't replace creativity—it ",
        highlightWord: "unleashes it.",
        quote:
          "The content team wasn't failing; they were structurally impossible to scale with humans alone. We gave them a co-pilot that never sleeps.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Intelligence Layer",
        title: "Generative",
        highlight: "Pipeline",
        desc: "A fine-tuned AI content engine trained on 5 years of brand assets, style guides, and top-performing content.",
      },
      steps: [
        {
          id: "01",
          title: "Brand DNA Extraction",
          subtitle: "VOICE FINGERPRINTING",
          desc: "We ingested 5 years of brand content—12,000 assets—to create a proprietary voice model. The AI doesn't just write; it writes as the brand.",
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
          logo: "https://cdn.simpleicons.org/python/000000",
        },
        {
          id: "02",
          title: "Editorial Orchestration",
          subtitle: "HUMAN-IN-THE-LOOP",
          desc: "AI generates first drafts in 90 seconds. Human editors refine in 15 minutes. The result: editorial-quality content at machine speed with human judgment.",
          image:
            "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=800",
          logo: "https://www.svgrepo.com/show/306500/openai.svg",
        },
        {
          id: "03",
          title: "Multi-Channel Distribution",
          subtitle: "ADAPTIVE FORMATTING",
          desc: "One content brief generates 8 channel-optimized versions—blog, social, email, ad copy, video script—each tailored to platform-specific engagement patterns.",
          image:
            "https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=800",
          logo: "https://cdn.simpleicons.org/python/000000",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1200",
        stats: [
          { label: "CONTENT_OUTPUT", val: "8x" },
          { label: "BRAND_MATCH", val: "92%" },
          { label: "COST_REDUCTION", val: "-73%" },
        ],
        title: "Creative ",
        highlightWord: "Velocity.",
        quote:
          "The content team transformed from a bottleneck into a content factory. 200 requests per month? Now they deliver 320.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Content",
        highlight: "Dominance",
        desc: "8x output. 92% brand consistency. Content is no longer the bottleneck—it's the competitive advantage.",
      },
      stats: [
        {
          label: "Output",
          val: "8x",
          detail: "Content Multiplier",
          symbol: "×",
        },
        {
          label: "Consistency",
          val: "92%",
          detail: "Brand Voice Match",
          symbol: "✓",
        },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Content ",
        highlightWord: "Supremacy.",
        quote:
          "We didn't automate content; we augmented an entire creative department. The AI handles volume, the humans handle vision. Together, they're unstoppable.",
      },
    },
    relatedProjects: [
      {
        title: "Visionary ML",
        client: "Computer Vision",
        outcome: "99.7% Accuracy",
        img: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=800",
        id: "05",
      },
      {
        title: "Neural Ledger",
        client: "Blockchain AI",
        outcome: "340% Detection",
        img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=800",
        id: "06",
      },
      {
        title: "Vortex Analytics",
        client: "Enterprise Data",
        outcome: "21x Faster",
        img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&q=80&w=800",
        id: "01",
      },
    ],
  },

  "05": {
    id: "05",
    category: "ai",
    title: "Visionary ML",
    tech: "PyTorch // AWS",
    seo: {
      title: "Visionary ML — Computer Vision Quality Control | Case Study",
      description:
        "How we deployed a custom computer vision system achieving 99.7% defect detection accuracy, reducing quality control costs by 70% in manufacturing.",
    },
    hero: {
      title: "Visionary ML",
      subtitle:
        "Deploying production-grade computer vision that detects defects invisible to the human eye at 99.7% accuracy.",
      images: [
        {
          id: "01",
          title: "Detection",
          img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
        },
        {
          id: "02",
          title: "Training",
          img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&q=80&w=800",
        },
        {
          id: "03",
          title: "Deployment",
          img: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Invisible ",
      title_2nd_half: "Defects",
      subtitle: "Human Eyes Have Human Limits",
      description:
        "Manual inspection caught only 82% of micro-defects on the production line. The remaining 18% resulted in $4.7M in annual returns, warranty claims, and brand damage.",
      painPoints: [
        {
          id: "01",
          label: "Detection Gap",
          description:
            "18% of micro-defects—scratches, hairline cracks, color drift—passed human inspection at production speed.",
        },
        {
          id: "02",
          label: "Inspector Fatigue",
          description:
            "After 4 hours of visual inspection, accuracy dropped 35%. Rotating shifts added $1.2M in annual labor costs.",
        },
        {
          id: "03",
          label: "Recall Risk",
          description:
            "Three product recalls in 18 months. Each costing $800K+ in logistics and immeasurable brand trust erosion.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Quality",
        highlight: "Blindspot",
        desc: "18% escape rate. $4.7M in returns. Three recalls in 18 months.",
      },
      constraints: [
        { label: "Escape Rate", value: "18%", tag: "DEFECTS" },
        { label: "Annual Returns", value: "$4.7M", tag: "COST" },
        { label: "Inspector Decay", value: "-35%", tag: "FATIGUE" },
        { label: "Recall Events", value: "3", tag: "CRITICAL" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1625314887424-9f190599bd56?auto=format&q=80&w=800",
      ],
      verdict: {
        headline: "Machines don't get ",
        highlightWord: "tired.",
        quote:
          "Human inspectors are excellent—for the first 4 hours. After that, defects slip through. We built eyes that never blink, never fatigue, and never miss.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Vision Architecture",
        title: "Neural",
        highlight: "Perception",
        desc: "A custom CNN pipeline trained on 2.4M annotated defect images, deployed at the edge for real-time inspection.",
      },
      steps: [
        {
          id: "01",
          title: "Dataset Engineering",
          subtitle: "SYNTHETIC + REAL DATA",
          desc: "2.4M images: 800K real production photos + 1.6M synthetic augmentations. We created defects that hadn't even occurred yet to build anticipatory detection.",
          image:
            "https://images.unsplash.com/photo-1684369176170-463e84248b70?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/354240/pytorch.svg",
        },
        {
          id: "02",
          title: "Custom Architecture",
          subtitle: "HYBRID CNN-TRANSFORMER",
          desc: "A proprietary hybrid model combining CNN spatial feature extraction with transformer attention mechanisms. Micro-defects that fooled standard models became trivially detectable.",
          image:
            "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/376356/aws.svg",
        },
        {
          id: "03",
          title: "Edge Deployment",
          subtitle: "REAL-TIME INFERENCE",
          desc: "Model quantized and deployed on NVIDIA Jetson edge devices directly on the production line. 15ms inference time per unit—faster than the conveyor belt moves.",
          image:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&q=80&w=800",
          logo: "https://cdn.simpleicons.org/nvidia/000000",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
        stats: [
          { label: "DETECTION_RATE", val: "99.7%" },
          { label: "INFERENCE_TIME", val: "15ms" },
          { label: "COST_SAVINGS", val: "-70%" },
        ],
        title: "Absolute ",
        highlightWord: "Precision.",
        quote:
          "Zero recalls since deployment. The model catches defects 200x smaller than what the human eye can detect at production speed.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Zero",
        highlight: "Defects",
        desc: "From 82% catch rate to 99.7%. Zero recalls. Quality is no longer a hope—it's a guarantee.",
      },
      stats: [
        {
          label: "Detection",
          val: "99.7%",
          detail: "Defect Accuracy",
          symbol: "✓",
        },
        { label: "Cost", val: "70%", detail: "QC Cost Reduction", symbol: "↓" },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Manufacturing ",
        highlightWord: "Perfection.",
        quote:
          "We replaced human uncertainty with machine certainty. 99.7% accuracy at 15ms per unit. Zero recalls in 14 months. The production line now polices itself.",
      },
    },
    relatedProjects: [
      {
        title: "GeniusAI Content",
        client: "AI Platform",
        outcome: "8x Output",
        img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=80&w=800",
        id: "04",
      },
      {
        title: "Neural Ledger",
        client: "Blockchain AI",
        outcome: "340% Detection",
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&q=80&w=800",
        id: "06",
      },
      {
        title: "ScaleFlow CRM",
        client: "Growth Teams",
        outcome: "+45% Conversions",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&q=80&w=800",
        id: "03",
      },
    ],
  },

  "06": {
    id: "06",
    category: "ai",
    title: "Neural Ledger",
    tech: "Solidity // AI",
    seo: {
      title: "Neural Ledger — AI-Powered Blockchain Analytics | Case Study",
      description:
        "How we built an on-chain intelligence platform that detects fraudulent transactions 340% faster using machine learning on blockchain data.",
    },
    hero: {
      title: "Neural Ledger",
      subtitle:
        "Fusing on-chain analytics with machine learning to detect fraud patterns invisible to rule-based systems.",
      images: [
        {
          id: "01",
          title: "On-Chain",
          img: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&q=80&w=800",
        },
        {
          id: "02",
          title: "Detection",
          img: "https://images.unsplash.com/photo-1526378787940-576a539ba69d?auto=format&q=80&w=800",
        },
        {
          id: "03",
          title: "Compliance",
          img: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Chain ",
      title_2nd_half: "Opacity",
      subtitle: "Transparent Ledger, Opaque Threats",
      description:
        "Blockchain promised transparency, but the sheer volume—2.4M daily transactions—made manual monitoring impossible. Rule-based systems caught only 23% of sophisticated fraud patterns.",
      painPoints: [
        {
          id: "01",
          label: "Detection Failure",
          description:
            "Rule-based systems missed 77% of novel attack vectors—mixer transactions, flash loan exploits, and layered obfuscation.",
        },
        {
          id: "02",
          label: "Compliance Gaps",
          description:
            "Regulatory audits required 6-week manual reviews. Each audit cost $180K and still left blind spots.",
        },
        {
          id: "03",
          label: "Volume Overload",
          description:
            "2.4M daily transactions across 12 chains. Human analysts could review 0.3% of total activity.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=compress",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Threat",
        highlight: "Surface",
        desc: "2.4M daily transactions. 12 chains. 77% of fraud invisible to current systems.",
      },
      constraints: [
        { label: "Detection Rate", value: "23%", tag: "FRAUD" },
        { label: "Audit Duration", value: "6wk", tag: "COMPLIANCE" },
        { label: "Coverage Gap", value: "99.7%", tag: "VOLUME" },
        { label: "Audit Cost", value: "$180K", tag: "PER REVIEW" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=800&auto=compress",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=compress",
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=compress",
      ],
      verdict: {
        headline: "Transparency without intelligence is just ",
        highlightWord: "noise.",
        quote:
          "A public ledger means nothing if you can't read it at scale. We taught machines to see the patterns that humans physically cannot process.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // On-Chain Intelligence",
        title: "Fraud",
        highlight: "Radar",
        desc: "A multi-chain ML system that monitors 2.4M daily transactions in real time across 12 blockchain networks.",
      },
      steps: [
        {
          id: "01",
          title: "Graph Neural Network",
          subtitle: "TRANSACTION TOPOLOGY",
          desc: "We model the entire transaction graph as a dynamic neural network. Every wallet, contract, and token flow becomes a node in a living intelligence map that detects anomalies by shape, not just value.",
          image:
            "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=compress",
          logo: "https://cdn.simpleicons.org/solidity/000000",
        },
        {
          id: "02",
          title: "Behavioral Fingerprinting",
          subtitle: "PATTERN RECOGNITION",
          desc: "Every wallet develops a behavioral signature over time. When a known wallet suddenly deviates from its pattern—even subtly—the system flags it before the transaction confirms.",
          image:
            "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=compress",
          logo: "https://www.svgrepo.com/show/354240/pytorch.svg",
        },
        {
          id: "03",
          title: "Compliance Automation",
          subtitle: "REGULATORY ENGINE",
          desc: "Automated audit reports generated in real time. What took 6 weeks of manual review now compiles in 4 hours with full transaction provenance and risk scoring.",
          image:
            "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=800&auto=compress",
          logo: "https://www.svgrepo.com/show/376356/aws.svg",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1200",
        stats: [
          { label: "FRAUD_SPEED", val: "340%" },
          { label: "COVERAGE", val: "100%" },
          { label: "AUDIT_TIME", val: "4hr" },
        ],
        title: "On-Chain ",
        highlightWord: "Omniscience.",
        quote:
          "From monitoring 0.3% of transactions to 100%. Every wallet, every chain, every second—nothing moves without Neural Ledger seeing it.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Absolute",
        highlight: "Coverage",
        desc: "340% faster fraud detection. 100% transaction coverage. Compliance audits in hours, not weeks.",
      },
      stats: [
        {
          label: "Detection",
          val: "340%",
          detail: "Faster Fraud Alerts",
          symbol: "↑",
        },
        {
          label: "Coverage",
          val: "100%",
          detail: "Transaction Monitoring",
          symbol: "✓",
        },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1526378787940-576a539ba69d?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Chain ",
        highlightWord: "Sovereignty.",
        quote:
          "We didn't build a monitoring tool; we built an immune system for the blockchain. 340% faster detection, zero blind spots, and compliance that runs itself.",
      },
    },
    relatedProjects: [
      {
        title: "GeniusAI Content",
        client: "AI Platform",
        outcome: "8x Output",
        img: "https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=800&auto=compress",
        id: "04",
      },
      {
        title: "Visionary ML",
        client: "Computer Vision",
        outcome: "99.7% Accuracy",
        img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=compress",
        id: "05",
      },
      {
        title: "Vortex Analytics",
        client: "Enterprise Data",
        outcome: "21x Faster",
        img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&q=80&w=800",
        id: "01",
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SHOPIFY PLUS — 07, 08, 09
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "07": {
    id: "07",
    category: "shopify",
    title: "Aura Home",
    tech: "Remix // Shopify",
    seo: {
      title: "Aura Home — Luxury E-Commerce Experience | Case Study",
      description:
        "How we built a headless Shopify Plus storefront that increased revenue by 180% and tripled conversion rates for a luxury home decor brand.",
    },
    hero: {
      title: "Aura Home",
      subtitle:
        "Crafting a luxury digital storefront that converts browsers into collectors with a 3x conversion lift.",
      images: [
        {
          id: "01",
          title: "Storefront",
          img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
        },
        {
          id: "02",
          title: "Product",
          img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800",
        },
        {
          id: "03",
          title: "Experience",
          img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Luxury ",
      title_2nd_half: "Disconnect",
      subtitle: "Premium Products, Bargain Experience",
      description:
        "A $4,200 average order value trapped inside a generic Shopify theme that loaded in 8 seconds on mobile. The digital experience contradicted every promise the brand made.",
      painPoints: [
        {
          id: "01",
          label: "Speed Crisis",
          description:
            "8.2-second mobile load time. 67% of luxury shoppers bounced before seeing a single product image.",
        },
        {
          id: "02",
          label: "Brand Erosion",
          description:
            "Generic template design destroyed perceived value. Customers questioned product quality based on site experience alone.",
        },
        {
          id: "03",
          label: "Checkout Abandonment",
          description:
            "78% cart abandonment rate. A 6-step checkout process designed for $20 products, not $4,200 investments.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Experience",
        highlight: "Deficit",
        desc: "$4,200 AOV. 8-second load. Generic theme. Maximum brand damage.",
      },
      constraints: [
        { label: "Load Time", value: "8.2s", tag: "MOBILE" },
        { label: "Bounce Rate", value: "67%", tag: "TRAFFIC" },
        { label: "Cart Abandon", value: "78%", tag: "REVENUE" },
        { label: "Conversion", value: "0.8%", tag: "RATE" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800",
      ],
      verdict: {
        headline: "Luxury is a ",
        highlightWord: "feeling.",
        quote:
          "When a customer spends $4,200, they're not buying furniture—they're buying a feeling. An 8-second load time with a generic theme tells them: 'We don't care.' We made the site care.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Experience Architecture",
        title: "Digital",
        highlight: "Luxury",
        desc: "A headless Shopify Plus storefront engineered to feel as premium as the $4,200 products it sells.",
      },
      steps: [
        {
          id: "01",
          title: "Headless Foundation",
          subtitle: "REMIX + STOREFRONT API",
          desc: "Complete decoupling from Shopify's Liquid theme engine. Remix handles the frontend with server-side rendering, delivering sub-1.2s load times on every page.",
          image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&q=80&w=800",
          logo: "https://cdn.simpleicons.org/remix/000000",
        },
        {
          id: "02",
          title: "Immersive Product Pages",
          subtitle: "SPATIAL STORYTELLING",
          desc: "Full-bleed imagery, scroll-triggered animations, and room-context photography that lets customers envision each piece in their own space. Every product page is a mini-experience.",
          image:
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&q=80&w=800",
          logo: "https://cdn.simpleicons.org/shopify/000000",
        },
        {
          id: "03",
          title: "Friction-Free Checkout",
          subtitle: "ONE-PAGE CLOSE",
          desc: "6 steps compressed to 1. Express checkout with Apple Pay, Google Pay, and financing options rendered inline. The checkout experience now matches the investment level.",
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&q=80&w=800",
          logo: "https://cdn.simpleicons.org/remix/000000",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200",
        stats: [
          { label: "LOAD_TIME", val: "1.1s" },
          { label: "CONVERSION", val: "3x" },
          { label: "REVENUE", val: "+180%" },
        ],
        title: "Premium ",
        highlightWord: "Presence.",
        quote:
          "The website went from the brand's weakest touchpoint to its strongest. Customers now say the online experience exceeds the showroom.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Revenue",
        highlight: "Explosion",
        desc: "180% revenue increase. 3x conversion rate. The digital experience now drives 62% of total brand revenue.",
      },
      stats: [
        {
          label: "Revenue",
          val: "180%",
          detail: "Year-Over-Year Growth",
          symbol: "+",
        },
        {
          label: "Conversion",
          val: "3x",
          detail: "Rate Improvement",
          symbol: "↑",
        },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Digital ",
        highlightWord: "Elegance.",
        quote:
          "We didn't just rebuild a website; we built the digital equivalent of walking into a curated showroom. 1.1-second loads, immersive storytelling, and a checkout that respects the investment.",
      },
    },
    relatedProjects: [
      {
        title: "Velo Gear",
        client: "Performance Cycling",
        outcome: "250% AOV",
        img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800",
        id: "08",
      },
      {
        title: "Moda Global",
        client: "International Fashion",
        outcome: "12 Markets",
        img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800",
        id: "09",
      },
      {
        title: "Lumina Admin",
        client: "SaaS Enterprise",
        outcome: "60% Faster Ops",
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&q=80&w=800",
        id: "02",
      },
    ],
  },

  "08": {
    id: "08",
    category: "shopify",
    title: "Velo Gear",
    tech: "Hydrogen // Node",
    seo: {
      title: "Velo Gear — High-Performance Cycling Commerce | Case Study",
      description:
        "How we built a custom product configurator and real-time inventory system that increased AOV by 250% for a premium cycling equipment brand.",
    },
    hero: {
      title: "Velo Gear",
      subtitle:
        "Engineering a product configuration experience that turns complex cycling builds into intuitive purchases.",
      images: [
        {
          id: "01",
          title: "Configurator",
          img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800",
        },
        {
          id: "02",
          title: "Inventory",
          img: "https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?q=80&w=800",
        },
        {
          id: "03",
          title: "Fulfillment",
          img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Configuration ",
      title_2nd_half: "Paralysis",
      subtitle: "Too Many Options, Zero Guidance",
      description:
        "Customers faced 14,000+ possible component combinations with no guided path. Average time-to-purchase: 47 minutes. Cart abandonment on configuration pages: 89%.",
      painPoints: [
        {
          id: "01",
          label: "Option Overload",
          description:
            "14,000+ valid configurations with zero compatibility guidance. Customers didn't know if their selections would actually work together.",
        },
        {
          id: "02",
          label: "Inventory Blindspot",
          description:
            "Real-time stock data was 4 hours stale. 23% of confirmed orders couldn't be fulfilled due to phantom inventory.",
        },
        {
          id: "03",
          label: "Return Chaos",
          description:
            "34% return rate on configured builds due to compatibility issues that the checkout process never flagged.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Purchase",
        highlight: "Friction",
        desc: "14,000 combinations. Zero guidance. 89% abandon rate on config pages.",
      },
      constraints: [
        { label: "Combinations", value: "14K+", tag: "COMPLEXITY" },
        { label: "Config Abandon", value: "89%", tag: "CONVERSION" },
        { label: "Phantom Stock", value: "23%", tag: "INVENTORY" },
        { label: "Return Rate", value: "34%", tag: "FULFILLMENT" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
        "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=800",
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&q=80&w=800",
      ],
      verdict: {
        headline: "Complexity without guidance is just ",
        highlightWord: "confusion.",
        quote:
          "14,000 options should be a strength, not a wall. We turned the configuration labyrinth into a guided journey that customers actually enjoy.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Commerce Engineering",
        title: "Guided",
        highlight: "Discovery",
        desc: "A real-time product configurator that validates compatibility, checks inventory, and recommends upgrades—all in one flow.",
      },
      steps: [
        {
          id: "01",
          title: "Smart Configurator",
          subtitle: "COMPATIBILITY ENGINE",
          desc: "A real-time rule engine that validates every selection against 847 compatibility constraints. Invalid combinations are prevented before they're even shown. Guided builds in under 5 minutes.",
          image:
            "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&q=80&w=800",
          logo: "https://cdn.simpleicons.org/shopify/000000",
        },
        {
          id: "02",
          title: "Live Inventory Mesh",
          subtitle: "REAL-TIME SYNC",
          desc: "WebSocket-connected inventory system across 3 warehouses and 12 supplier feeds. Stock accuracy moved from 77% to 99.8%. Zero phantom orders since launch.",
          image:
            "https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/376337/node-js.svg",
        },
        {
          id: "03",
          title: "Intelligent Upsell Engine",
          subtitle: "AOV OPTIMIZATION",
          desc: "ML-driven recommendations based on build context. When a customer selects racing wheels, the system suggests matching tires, cassettes, and brake pads—increasing AOV by 250%.",
          image:
            "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&q=80&w=800",
          logo: "https://cdn.simpleicons.org/shopify/000000",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=1200",
        stats: [
          { label: "AOV_INCREASE", val: "+250%" },
          { label: "RETURNS", val: "-82%" },
          { label: "CONFIG_TIME", val: "< 5min" },
        ],
        title: "Effortless ",
        highlightWord: "Complexity.",
        quote:
          "14,000 combinations distilled into a 5-minute guided experience. Every selection is validated, every recommendation is contextual, every order is fulfillable.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Commerce",
        highlight: "Precision",
        desc: "250% AOV increase. 82% fewer returns. Configuration went from the biggest pain point to the biggest differentiator.",
      },
      stats: [
        {
          label: "AOV",
          val: "250%",
          detail: "Average Order Value",
          symbol: "+",
        },
        { label: "Returns", val: "82%", detail: "Reduction Rate", symbol: "↓" },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "Build ",
        highlightWord: "Confidence.",
        quote:
          "We turned 14,000 confusing options into a guided adventure. Returns dropped 82%, AOV jumped 250%, and customers started sharing their build journeys on social media.",
      },
    },
    relatedProjects: [
      {
        title: "Aura Home",
        client: "Luxury Decor",
        outcome: "+180% Revenue",
        img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&q=80&w=800",
        id: "07",
      },
      {
        title: "Moda Global",
        client: "International Fashion",
        outcome: "12 Markets",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800",
        id: "09",
      },
      {
        title: "GeniusAI Content",
        client: "AI Platform",
        outcome: "8x Output",
        img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=compress",
        id: "04",
      },
    ],
  },

  "09": {
    id: "09",
    category: "shopify",
    title: "Moda Global",
    tech: "Next.js // Shopify",
    seo: {
      title:
        "Moda Global — International Fashion Commerce Platform | Case Study",
      description:
        "How we launched a fashion e-commerce platform across 12 international markets with localized experiences, reducing cart abandonment by 65%.",
    },
    hero: {
      title: "Moda Global",
      subtitle:
        "Launching a fashion commerce platform across 12 markets with localized experiences that feel native, not translated.",
      images: [
        {
          id: "01",
          title: "Global",
          img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800",
        },
        {
          id: "02",
          title: "Localization",
          img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
        },
        {
          id: "03",
          title: "Fashion",
          img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=800",
        },
      ],
    },
    problem: {
      title_1st_half: "Global ",
      title_2nd_half: "Fragmentation",
      subtitle: "One Brand, Twelve Broken Experiences",
      description:
        "Expanding to 12 markets meant 12 different storefronts, 12 currency converters, and 12 sets of shipping rules—all managed through spreadsheets and manual overrides.",
      painPoints: [
        {
          id: "01",
          label: "Localization Debt",
          description:
            "Machine-translated product descriptions that read like instruction manuals. Local conversion rates were 3x lower than domestic.",
        },
        {
          id: "02",
          label: "Currency Chaos",
          description:
            "Real-time currency conversion lagged 24 hours. Customers saw one price, were charged another. Trust evaporated.",
        },
        {
          id: "03",
          label: "Shipping Opacity",
          description:
            "International customers had zero visibility into duties, taxes, or delivery timelines until after purchase. 65% cart abandonment.",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
        "https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=800",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
      ],
    },
    constraints: {
      header: {
        protocol: "System Analysis // 02",
        title: "Market",
        highlight: "Barriers",
        desc: "12 markets. 12 currencies. Zero unified infrastructure. Maximum cart abandonment.",
      },
      constraints: [
        { label: "Cart Abandon", value: "65%", tag: "INTERNATIONAL" },
        { label: "Local CVR Gap", value: "3x", tag: "VS DOMESTIC" },
        { label: "Currency Lag", value: "24hr", tag: "STALE" },
        { label: "Markets Active", value: "2/12", tag: "LAUNCHED" },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800",
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&q=80&w=800",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&q=80&w=800",
      ],
      verdict: {
        headline: "Global reach requires local ",
        highlightWord: "intimacy.",
        quote:
          "You can't just translate a storefront and call it localization. True global commerce means every market feels like the home market. We built that infrastructure.",
      },
    },
    strategy: {
      header: {
        phase: "Phase 02 // Global Architecture",
        title: "Market",
        highlight: "Synthesis",
        desc: "A unified commerce platform that serves 12 markets from one codebase while delivering locally native experiences.",
      },
      steps: [
        {
          id: "01",
          title: "Unified Commerce Layer",
          subtitle: "ONE CODEBASE, 12 MARKETS",
          desc: "Next.js ISR with geo-aware routing. One codebase automatically serves localized content, pricing, and shipping based on the visitor's location—no separate storefronts needed.",
          image:
            "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
        },
        {
          id: "02",
          title: "Cultural Adaptation Engine",
          subtitle: "BEYOND TRANSLATION",
          desc: "Native copywriters for each market. Product descriptions, size guides, and brand tone adapted—not translated—for cultural resonance. Local conversion rates matched domestic within 90 days.",
          image:
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&q=80&w=800",
          logo: "https://cdn.simpleicons.org/shopify/000000",
        },
        {
          id: "03",
          title: "Transparent Global Checkout",
          subtitle: "DUTIES + TAXES UPFRONT",
          desc: "Real-time duty calculation, local payment methods (Klarna, iDEAL, Alipay), and guaranteed delivery dates shown before checkout. No surprises, no hidden costs, no abandonment.",
          image:
            "https://images.unsplash.com/photo-1529720317453-c8da503f2051?auto=format&q=80&w=800",
          logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
        },
      ],
      finale: {
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
        stats: [
          { label: "MARKETS_LIVE", val: "12" },
          { label: "CART_ABANDON", val: "-65%" },
          { label: "INTL_REVENUE", val: "+420%" },
        ],
        title: "Borderless ",
        highlightWord: "Commerce.",
        quote:
          "From 2 struggling markets to 12 thriving ones. International revenue now accounts for 58% of total brand sales.",
      },
    },
    execution: {
      header: {
        protocol: "Final Verdict // 03",
        title: "Global",
        highlight: "Dominance",
        desc: "12 markets. -65% cart abandonment. International revenue grew 420% in the first year.",
      },
      stats: [
        {
          label: "Markets",
          val: "12",
          detail: "Countries Launched",
          symbol: "→",
        },
        {
          label: "Abandonment",
          val: "65%",
          detail: "Cart Drop Reduction",
          symbol: "↓",
        },
      ],
      images: {
        primary:
          "https://images.unsplash.com/photo-1492892132812-a00a8b245c45?auto=format&fit=crop&q=80&w=1200",
        secondary:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      },
      conclusion: {
        title: "World ",
        highlightWord: "Stage.",
        quote:
          "We didn't just translate a store—we built a global commerce operating system. 12 markets, one platform, and every customer feels like they're shopping locally.",
      },
    },
    relatedProjects: [
      {
        title: "Aura Home",
        client: "Luxury Decor",
        outcome: "+180% Revenue",
        img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&q=80&w=800",
        id: "07",
      },
      {
        title: "Velo Gear",
        client: "Performance Cycling",
        outcome: "250% AOV",
        img: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&q=80&w=800",
        id: "08",
      },
      {
        title: "Vortex Analytics",
        client: "Enterprise Data",
        outcome: "21x Faster",
        img: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&q=80&w=800",
        id: "01",
      },
    ],
  },
};

export function getProject(id: string): ProjectData | undefined {
  return projects[id];
}

export function getAllProjectIds(): string[] {
  return Object.keys(projects);
}

export function getProjectsByCategory(category: string): ProjectData[] {
  return Object.values(projects).filter((p) => p.category === category);
}

export default projects;
