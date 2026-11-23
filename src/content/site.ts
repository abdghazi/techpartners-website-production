export const site = {
  name: "TechPartners",
  url: "https://techpartnersconsulting.com",
  tagline: "Better together in tech",
  description:
    "TechPartners is an IT consultancy for managed services, outsourcing, cybersecurity, ERP, and AI. Every engagement starts with a written plan, then one accountable team delivers and runs it.",
  phone: "+1 514 998 9496",
  phoneHref: "tel:+15149989496",
  email: "marwan.ghazi@techpartnersconsulting.com",
  emailHref: "mailto:marwan.ghazi@techpartnersconsulting.com",
  phones: [
    {
      country: "Canada",
      number: "+1 514 998 9496",
      href: "tel:+15149989496",
      whatsapp: null,
    },
    {
      country: "Saudi Arabia",
      number: "+966 59 244 5001",
      href: "tel:+966592445001",
      whatsapp: "https://wa.me/966592445001",
    },
    {
      country: "Syria",
      number: "+963 99 2222 199",
      href: "tel:+963992222199",
      whatsapp: "https://wa.me/963992222199",
    },
  ],
  year: 2026,
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type IconName =
  | "server"
  | "users"
  | "shield"
  | "layers"
  | "sparkles"
  | "code"
  | "workflow";

export type Service = {
  id: string;
  title: string;
  kicker: string;
  group: "run" | "build";
  icon: IconName;
  summary: string;
  problem: string;
  deliver: string[];
};

export const serviceGroups = [
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
] as const;

export const services: Service[] = [
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

export const steps = [
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
];

export const principles = [
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
];

export const proposalIncludes = [
  "The business problem, stated in your terms",
  "Scope and a phased delivery sequence",
  "The team assigned to the work",
  "What is deliberately out of scope for now",
  "How we will support it after launch",
];

export const faqs = [
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
];
