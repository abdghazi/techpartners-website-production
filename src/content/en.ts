import type { Service, ServiceGroup } from "@/content/site";

const serviceGroups: ServiceGroup[] = [
  {
    id: "run",
    title: "Run and protect",
    text: "Keep the systems you depend on operating, staffed, secure, and connected.",
  },
  {
    id: "build",
    title: "Build what's next",
    text: "Custom software and AI that fits how the business actually works.",
  },
];

const services: Service[] = [
  {
    id: "managed",
    title: "Managed services",
    kicker: "Run",
    group: "run",
    icon: "server",
    summary:
      "A named team that keeps your systems up, patched, and supported long after the project ends.",
    problem:
      "The build ships, then the same people who asked for it are left watching alerts and chasing vendors.",
    deliver: [
      "Day-to-day operation of the systems we agree to own",
      "Database administration, monitoring, and a clear escalation path",
      "A monthly report on what ran, what failed, and what should change",
    ],
  },
  {
    id: "outsource",
    title: "IT outsourcing",
    kicker: "Deliver",
    group: "run",
    icon: "users",
    summary:
      "A dedicated delivery team you can hand a defined scope to, for a build, an operation, or both.",
    problem:
      "The work is real and the in-house team is already at capacity. Hiring for a single project is the slow path.",
    deliver: [
      "A defined scope, a sequence, and the people assigned to it",
      "Build or operate against that plan with progress you can see",
      "A structured handoff when you want the work back in-house",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity",
    kicker: "Protect",
    group: "run",
    icon: "shield",
    summary:
      "Monitor the systems you run, find the gaps, and respond quickly when something goes wrong.",
    problem:
      "Security often arrives as a tool purchase, while the real risk sits in access, backups, and everyday habits.",
    deliver: [
      "Threat detection, vulnerability assessment, and continuous monitoring",
      "Incident response, from the first alert through remediation",
      "Configuration, policy, and regulatory compliance audits",
      "Training so your team can keep the controls in place",
    ],
  },
  {
    id: "erp",
    title: "ERP systems",
    kicker: "Operate",
    group: "run",
    icon: "layers",
    summary:
      "Select and roll out one system for finance, people, sales, inventory, and the work between them.",
    problem:
      "Spreadsheets and disconnected tools are doing the job of one system, and every new process makes it worse.",
    deliver: [
      "Financials, HR, CRM, supply chain, and point of sale in one platform",
      "Governance, risk, and compliance built into the same system",
      "A rollout plan covering data, roles, and the go-live sequence",
      "Implementation, then support while your people adopt it",
    ],
  },
  {
    id: "telecom",
    title: "IT & telecom service management",
    kicker: "Connect",
    group: "run",
    icon: "signal",
    summary:
      "ITSM, service operations, performance management, and operational excellence for IT and telecom.",
    problem:
      "Networks and platforms grow faster than the processes around them, so the same incidents return and nobody can say which services are healthy.",
    deliver: [
      "ITSM processes for incidents, problems, changes, and service requests",
      "Service operations and NOC practices with clear ownership and escalation",
      "Performance and service-level reporting across network and IT",
      "BSS and OSS advisory for billing, provisioning, and service assurance",
    ],
  },
  {
    id: "software",
    title: "Custom software",
    kicker: "Engineer",
    group: "build",
    icon: "code",
    summary:
      "Web, mobile, and custom applications shaped around how your business actually runs.",
    problem:
      "Off-the-shelf tools stop fitting, and a full rebuild with no sequence is how projects stall.",
    deliver: [
      "Product scope, users, and a clear definition of done",
      "A phased build plan instead of a single big-bang launch",
      "The application, tested against that plan",
    ],
  },
  {
    id: "ai",
    title: "AI solutions",
    kicker: "Apply",
    group: "build",
    icon: "sparkles",
    summary:
      "Put AI to work inside a real product, with a plan for the data, the risk, and the first release.",
    problem:
      "The goal is clear and the data exists, but there is no reliable path from a demo to something people use.",
    deliver: [
      "The use cases worth building now, and the ones to leave for later",
      "An architecture showing how the model, data, and product fit together",
      "A written plan, then the working system in production",
    ],
  },
  {
    id: "agentic",
    title: "Agentic AI",
    kicker: "Automate",
    group: "build",
    icon: "workflow",
    summary:
      "AI agents and workflows that handle a defined job, with a person still accountable for the outcome.",
    problem:
      "The same handoff happens every day: collect, decide, update a system, notify someone. It does not need another dashboard.",
    deliver: [
      "The job the agent owns, and exactly where a person steps in",
      "The tools, data access, and safeguards the agent works with",
      "The workflow running on real work, with results you can review",
    ],
  },
];

export const en = {
  site: {
    tagline: "Better together in tech",
    description:
      "TechPartners is an IT consultancy for managed services, outsourcing, cybersecurity, IT and telecom service management, ERP, and AI. Every engagement starts with a written plan, then one accountable team delivers and runs it.",
  },
  meta: {
    homeTitle: "TechPartners · IT consultancy",
    ogLocale: "en_US",
    keywords: [
      "IT consultancy",
      "managed services",
      "outsourcing",
      "cybersecurity",
      "ERP",
      "telecom service management",
      "ITSM",
      "AI solutions",
      "TechPartners",
    ],
    pages: {
      services: {
        title: "Services",
        description:
          "Managed services, IT outsourcing, cybersecurity, IT and telecom service management, ERP, custom software, and AI. Each engagement starts with a written plan.",
      },
      approach: {
        title: "Approach",
        description:
          "Discover the problem, agree on a written plan, deliver in usable phases, and stay on after launch.",
      },
      about: {
        title: "About",
        description:
          "TechPartners is an IT consultancy for managed services, outsourcing, cybersecurity, IT and telecom service management, ERP, and AI.",
      },
      contact: {
        title: "Contact",
        description:
          "Request a proposal for managed services, outsourcing, cybersecurity, telecom service management, ERP, software, or AI.",
      },
    },
  },
  countries: { ca: "Canada", sa: "Saudi Arabia", sy: "Syria" },
  nav: [
    { href: "/services", label: "Services" },
    { href: "/approach", label: "Approach" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  header: {
    primaryNav: "Primary",
    homeAria: "TechPartners home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "العربية",
    switchAria: "View this page in Arabic",
    switchLang: "ar",
    themeToggle: "Switch between day and night view",
  },
  footer: {
    blurb:
      "IT consultancy for managed services, outsourcing, cybersecurity, telecom, ERP, and AI.",
    runTitle: "Run and protect",
    buildTitle: "Build",
    companyTitle: "Company",
    company: [
      { href: "/approach", label: "Our approach" },
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Request a proposal" },
    ],
    rights: "All rights reserved.",
  },
  common: {
    requestProposal: "Request a proposal",
    learnMore: "Learn more",
    whatsapp: "Message on WhatsApp",
    linkedin: "Follow us on LinkedIn",
  },
  serviceGroups,
  services,
  steps: [
    {
      title: "Discover",
      text: "We learn the business problem, who it affects, and what a useful result looks like.",
      outputs: ["Stakeholder interviews", "Current-state review", "Success criteria"],
    },
    {
      title: "Plan",
      text: "You receive a written plan: scope, sequence, team, and what we will deliberately leave for later.",
      outputs: ["Written proposal", "Phased roadmap", "Fixed scope per phase"],
    },
    {
      title: "Deliver",
      text: "We build in the order the plan sets, so each phase is usable before the next one starts.",
      outputs: ["Working releases", "Progress reporting", "Phase sign-off"],
    },
    {
      title: "Support",
      text: "After launch we stay on to run it, fix what breaks, and improve what the work taught us.",
      outputs: ["Operations and monitoring", "Monthly reporting", "Ongoing improvements"],
    },
  ],
  principles: [
    {
      title: "A plan before a contract",
      text: "You see the scope, the sequence, and the trade-offs in writing before any work begins.",
    },
    {
      title: "One accountable team",
      text: "A named team owns the outcome from first conversation through ongoing support.",
    },
    {
      title: "Delivered in usable phases",
      text: "Each phase delivers something your people can use, instead of one risky launch.",
    },
    {
      title: "We stay after launch",
      text: "We operate, secure, and improve what we build, so nothing is left without an owner.",
    },
  ],
  proposalIncludes: [
    "The business problem, stated in your terms",
    "Scope and a phased delivery sequence",
    "The team assigned to the work",
    "What is deliberately out of scope for now",
    "How we will support it after launch",
  ],
  faqs: [
    {
      q: "What happens after I request a proposal?",
      a: "We schedule a short discovery conversation to understand the problem and the people it affects. From there we write a plan with scope, sequence, and team for you to review.",
    },
    {
      q: "Do we have to commit to the whole plan up front?",
      a: "No. The plan is phased so each step is usable on its own. You approve each phase before it starts.",
    },
    {
      q: "Can you work alongside our in-house team?",
      a: "Yes. We can take on a defined scope, work side by side with your staff, or hand the work back to your team when you are ready.",
    },
    {
      q: "Is AI the right fit for our business?",
      a: "Not always. Part of the plan is naming the AI use cases worth building now and the ones that are better left for later.",
    },
    {
      q: "Do you support systems after they launch?",
      a: "Yes. Managed services are a core part of what we do. We can run, monitor, and secure what we build, or what is already in place.",
    },
  ],
  cta: {
    title: "Tell us what you need run, secured, or built.",
    text: "Share the problem. We will come back with a written plan: scope, sequence, team, and what we would leave for later.",
    servicesTitle: "Not sure which service fits?",
    servicesText:
      "Describe the problem. We will tell you what we would do first, what can wait, and who would do the work.",
  },
  home: {
    hero: {
      badge: "IT & telecom consultancy",
      badgeDetail: "· Managed services · Security · ERP · AI",
      titleStart: "Technology partners who plan it, build it, and",
      titleHighlight: "keep it running.",
      text: "TechPartners runs, protects, and builds the systems your business depends on. Every engagement starts with a written plan you approve. Then one accountable team delivers it.",
      explore: "Explore services",
      checks: ["Written plan first", "One accountable team", "Support after launch"],
    },
    pillars: [
      { title: "Run", text: "Managed services and outsourcing" },
      { title: "Protect", text: "Detection, response, and compliance" },
      { title: "Operate", text: "ERP that connects the business" },
      { title: "Build", text: "Software, AI, and agentic workflows" },
    ],
    services: {
      eyebrow: "Services",
      title: "One partner across operations, security, and new builds.",
      text: "Most firms do one of these. We cover the full lifecycle, so the team that builds your system is the team that runs and protects it.",
      all: "All services",
    },
    why: {
      eyebrow: "Why TechPartners",
      title: "Accountable from the first plan to the last support ticket.",
      text: "Technology projects rarely fail on code. They fail on unclear scope, missing owners, and nobody staying after launch. Our model is built to remove those gaps.",
      about: "About us",
    },
    process: {
      eyebrow: "How we work",
      title: "A clear path from first call to ongoing support.",
      text: "The same four-step sequence covers a managed service, a security program, an ERP rollout, or a new build.",
      button: "Our approach",
    },
    proposal: {
      docTitle: "Proposal",
      docSubtitle: "Prepared for your team",
      draft: "Draft v1",
      headings: ["Problem", "Scope and phases", "Team", "Out of scope", "Support"],
      eyebrow: "Your proposal",
      title: "You see the whole plan before anything starts.",
      text: "A proposal from us is a working document, not a sales deck. It tells you exactly what we will do, in what order, and with whom.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      text: "Anything else, call us or send a request and we will answer it directly.",
    },
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Run it, protect it, or build it. One team, one plan.",
    intro:
      "We cover the full technology lifecycle: operating and securing the systems you already have, and building the software and AI that comes next.",
    navLabel: "Services",
    challenge: "The challenge",
    deliver: "What we deliver",
  },
  approachPage: {
    eyebrow: "Our approach",
    title: "A written plan first. The work starts once you agree.",
    intro:
      "The same four-step sequence covers a managed service, an outsourced team, a security program, an ERP rollout, or a new build. You always know what is happening, what comes next, and who owns it.",
    receive: "You receive",
    principlesEyebrow: "Principles",
    principlesTitle: "What you can expect from every engagement.",
    principlesText:
      "These hold whether the work is a two-month security review or a multi-year managed service.",
  },
  aboutPage: {
    eyebrow: "About us",
    title: "An IT partner that stays accountable after the project ends.",
    intro:
      "TechPartners is an IT consultancy. We run systems, staff delivery, close security gaps, roll out ERP, and build the software and AI around that work.",
    whoEyebrow: "Who we are",
    whoTitle: "Better together in tech.",
    whoParagraphs: [
      "Clients come to us when they need systems run reliably, delivery they cannot staff, security gaps closed, an ERP put in place, or new software and AI built around the way they work.",
      "A written plan always comes first, so every engagement has a scope, an order, and a clear finish line. Then we build or run that plan alongside your team, and we stay on to support it.",
    ],
    operateEyebrow: "How we operate",
    operateTitle: "Four commitments behind every engagement.",
    whatEyebrow: "What we do",
    whatTitle: "Eight services, one accountable team.",
    founder: {
      eyebrow: "Leadership",
      title: "Meet our founder",
      name: "Marwan Ghazi",
      role: "Founder & CEO",
      photoAlt: "Marwan Ghazi, founder and CEO of TechPartners",
      paragraphs: [
        "Marwan founded TechPartners after more than three decades in IT and telecom, much of it leading delivery for large operators and enterprises in Saudi Arabia and Africa.",
        "At IBM he was a Delivery Project Executive, running IT operations for major accounts and owning service delivery, SLAs, cost, and the client relationship. At Huawei he led BSS work, guiding operators across billing, provisioning, and service fulfillment, and shaping tenders with technical designs and total-cost-of-ownership models.",
        "He brings the same discipline to every TechPartners engagement: a clear plan, agreed service levels, and one team that answers for the result.",
      ],
      careerTitle: "Experience",
      career: [
        { role: "Director of Management Services", org: "CSG" },
        { role: "Delivery Project Executive", org: "IBM" },
        { role: "BSS Director", org: "Huawei" },
        { role: "Principal Consultant", org: "International Turnkey Systems" },
      ],
      educationTitle: "Education",
      education: "Damascus University",
      linkedin: "View Marwan's LinkedIn profile",
    },
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Request a proposal",
    intro:
      "Tell us what you need run, staffed, secured, or built. Your proposal starts from that: the problem, the sequence, and what we would leave for later.",
    talk: "Prefer to talk?",
    nextTitle: "What happens next",
    next: [
      {
        title: "We review your request",
        text: "We read what you sent and come back with any questions.",
      },
      {
        title: "Discovery conversation",
        text: "A short call to understand the problem and who it affects.",
      },
      {
        title: "You receive a written plan",
        text: "Scope, sequence, team, and what we would leave for later.",
      },
    ],
  },
  form: {
    title: "Tell us about the work",
    subtitle: "Fields marked optional can be left blank.",
    name: "Full name",
    email: "Work email",
    company: "Company",
    service: "Service of interest",
    optional: "(optional)",
    notSure: "Not sure yet",
    need: "What do you need?",
    needPlaceholder:
      "Describe the problem, the systems involved, and any timing that matters.",
    privacy: "We use this only to respond to your request.",
    submit: "Request a proposal",
    sending: "Sending…",
    thanks: "Thanks, {name}.",
    received:
      "Your request is in, and a confirmation is on its way to your inbox. We will review it and get back to you to schedule a short discovery conversation.",
    another: "Send another request",
    genericError: "We could not send that request. Please call us instead.",
  },
  validation: {
    name: "Enter your name.",
    email: "Enter a valid email.",
    needShort: "Describe the work in at least a sentence or two.",
    needLong: "Keep the description under {max} characters.",
  },
  api: {
    invalid: "Invalid request.",
    notConfigured:
      "Proposal delivery is not configured yet. Please call us, or try again later.",
    failed: "We could not send that request. Please call us instead.",
  },
  autoReply: {
    subject: "We received your request – TechPartners",
    greeting: "Hi {name},",
    intro:
      "Thank you for contacting TechPartners. We have received your proposal request and will review it shortly.",
    nextTitle: "What happens next:",
    next: [
      "We review your request and come back with any questions.",
      "A short discovery call to understand the problem and who it affects.",
      "You receive a written plan: scope, sequence, team, and what we would leave for later.",
    ],
    reach: "If you need to reach us sooner, reply to this email or call:",
    follow: "Follow us on LinkedIn:",
    signoff: "The TechPartners team",
  },
  notFound: {
    title: "That page is not here.",
    text: "The link may be outdated, or the page may have moved.",
    home: "Back to home",
    contact: "Contact us",
  },
};

export type Content = typeof en;
