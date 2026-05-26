import { Service, Project, ProcessStep, Testimonial, Certification } from "./types";

export const SERVICES: Service[] = [
  {
    id: "ai-implementation",
    title: "AI & Custom Agent Architecture",
    description: "Deployment of sophisticated conversational agents and automated data processing pipelines. I transform raw business data into actionable insights and autonomous agents.",
    nodeNumber: "NODE 01"
  },
  {
    id: "crm-pipeline",
    title: "CRM & Pipeline Automation",
    description: "End-to-end sales funnel automation that ensures no lead is left behind. I synchronize your customer touchpoints to create a seamless journey from cold outreach to closing.",
    nodeNumber: "NODE 02"
  },
  {
    id: "custom-api",
    title: "Custom API Integrations",
    description: "Connecting disparate software ecosystems through custom-built middleware. I build the robust bridges that allow your entire tech stack to speak the same language in real-time.",
    nodeNumber: "NODE 03"
  },
  {
    id: "workflow-audit",
    title: "Workflow Audit & Optimization",
    description: "A clinical analysis of your existing processes. I identify bottlenecks, eliminate redundancies, and re-engineer your operations for maximum efficiency and scale.",
    nodeNumber: "NODE 04"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    phase: "PHASE 01",
    title: "Audit & Analysis",
    description: "Deep-dive analysis of your current manual tasks and technical debt. I surface hidden bottlenecks and map operational inefficiencies."
  },
  {
    phase: "PHASE 02",
    title: "Blueprint & Design",
    description: "I blueprint the complete automation architecture, mapping every node, standard trigger point, and data flow carefully."
  },
  {
    phase: "PHASE 03",
    title: "Implement & Integrate",
    description: "Deploy the full automation stack, custom scripts, webhook paths, and AI LLM configurations. Thoroughly tested, documented, and production-ready."
  },
  {
    phase: "PHASE 04",
    title: "Optimize & Monitor",
    description: "Active execution logging, error handling systems, and dashboard monitoring. Continuous, data-driven optimization to scale as you grow."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Athena Quinio",
    role: "Head of Operations",
    company: "Stackline",
    text: "Before working with Mark, our support team was buried in repetitive tickets. After he deployed the autonomous AI job & lead scraper, 80% of our pipeline was hands-free. Genuinely changed how we operate.",
    initials: "AQ"
  },
  {
    name: "JR Gonzalez",
    role: "Sales Director",
    company: "Lumio Commerce",
    text: "Our lead pipeline was a mess—leads fell through the cracks constantly. Mark rebuilt the entire sync in Make.com and HubSpot. Our response times went from 4 hours to 3 minutes, and sales conversion surged.",
    initials: "JG"
  },
  {
    name: "Gino Resuello",
    role: "COO",
    company: "Payband Fintech",
    text: "We had six legacy systems that never talked to each other. Mark built custom API middleware connecting them in real-time. We eliminated 40 hours a week of manual logging overnight. The ROI was instant.",
    initials: "GR"
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Vanguard Agents",
    text: "Mark's custom GoHighLevel and Zapier CRM automated systems are masterfully built. He saved our intake coordinators at least 20 hours a week, and lead tracking accuracy peaked.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Lead Platform Engineer",
    company: "NovaSphere Tech",
    text: "Mark's automated workflows are exceptionally well-documented and robust. He solved our backend syncing delays between multiple databases in just a few days of work.",
    initials: "MC"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AI Automation with n8n Full Training",
    issuer: "Technical Virtual Assistants PH",
    date: "Completed: May 20, 2026"
  },
  {
    title: "No Code Automation with Make.com",
    issuer: "Technical Virtual Assistants PH",
    date: "Completed: May 7, 2026"
  },
  {
    title: "No Code Automation with Zapier",
    issuer: "Technical Virtual Assistants PH",
    date: "Completed: April 6, 2026"
  },
  {
    title: "Prompt Engineering Full Training",
    issuer: "Technical Virtual Assistants PH",
    date: "Completed: May 20, 2026"
  },
  {
    title: "High Level CRM Full Training",
    issuer: "CRM Academy",
    date: "Completed: 2026"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "AI Agent for Facebook",
    description: "Webhook-triggered autonomous n8n agent that queries relevant files in Google Drive, analyzes user comments with Google Gemini Chat Models, maintains session memory buffers, and executes instant action routes via custom HTTP steps.",
    category: "AI Agents",
    metrics: { label: "Response Time", value: "< 3s" },
    tags: ["n8n", "Google Gemini", "Webhooks", "HTTP Requests"],
    details: [
      "Deploys structured webhooks to instantly capture real-time incoming events.",
      "Integrates a strict condition filter to direct operations into appropriate paths.",
      "Queries specific reference document templates dynamically using vector lookup.",
      "Applies Google Gemini reasoning with custom system prompts to maintain absolute accuracy.",
      "Maintains direct conversation memory to handle multi-step user dialogues perfectly."
    ]
  },
  {
    id: "project-2",
    title: "AI Jobs Scraper & Resume Optimizer",
    description: "End-to-end Slack-triggered pipeline that scrapes target employment boards via Rapid API, filters job roles, fetches corresponding client documents, and utilizes AI to automatically redesign and tailor resumes before drafting a client Gmail.",
    category: "AI Workflows",
    metrics: { label: "Daily Output", value: "300+ Scrapes" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/15CI410ZsAa8SCjrj_ExwFWSDiHm_agYv",
    tags: ["n8n", "Slack integration", "OpenRouter", "Gmail API", "Rapid API"],
    details: [
      "Listens on custom Slack commands to trigger automatic job lookups.",
      "Fetches listings through high-speed Rapid API endpoints, sorting and scraping specific key terms.",
      "Downloads base resume configurations from Google Drive dynamically.",
      "Passes resume draft and job details through custom Structured Output Parser using OpenRouter.",
      "Pre-populates corresponding cover letters and drafts high-impact cold emails directly in Gmail.",
      "Sends real-time slack notifications summarizing the generated files and drafts."
    ]
  },
  {
    id: "project-3",
    title: "AI Content Repurposing Engine",
    description: "Fully automated folder-watch Zapier workflow that transcribes raw audio/video files placed in Google Drive, leverages Claude AI models to write multi-channel blog and social posts, then splits outputs to LinkedIn and Facebook Pages.",
    category: "Social Automation",
    metrics: { label: "Time Saved", value: "15 hrs/wk" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1nWDL0nntG_PDqFInjrPIf9eO7miMl_fe",
    tags: ["Zapier", "Claude AI", "Facebook Pages", "LinkedIn SDK"],
    details: [
      "Monitors dedicated folders to instantly trigger upon new video/audio uploads.",
      "Extracts and transcribes audio securely before parsing the core transcript.",
      "Generates specific channel-optimized outputs: highly professional LinkedIn articles, punchy Facebook updates, and detailed summary blogs.",
      "Handles long text array constraints seamlessly through custom looping modules.",
      "Automatically routes drafts through strict safety filters before scheduling the live social posts."
    ]
  },
  {
    id: "project-4",
    title: "Asana CRM Lead Engagement Pipeline",
    description: "Comprehensive 22-step lead routing solution. Upon task updates, the engine evaluates conditions, makes folder structures on Google Drive, configures delay modules for staggered delivery, and triggers custom lead nurturing sequences.",
    category: "CRM Pipelines",
    metrics: { label: "Lead Capture Failures", value: "0%" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1pBs-9LXhn8P9dfB8eeLnpWvkqLagknnm",
    tags: ["Zapier", "Asana", "Google Drive", "Gmail API", "Workflow Paths"],
    details: [
      "Captures lead entry status from CRM platforms or static forms automatically.",
      "Applies complex path logic to divide candidates based on budget, priority, and interest.",
      "Initializes secure folder nodes and copies specific technical templates in Drive.",
      "Implements Zapier delay sequences to orchestrate a systematic follow-up cadence (1, 3, and 7 days).",
      "Drafts custom quote calculations, approval warnings, and introductory emails dynamically."
    ]
  },
  {
    id: "project-5",
    title: "Autonomous ASMR Video Production Suite",
    description: "Highly automated n8n pipeline that schedules daily visual/audio content brainstorms, writes bespoke script instructions, communicates with text-to-video API models, runs completion-polling checks, and uploads to YouTube.",
    category: "Content Tech",
    metrics: { label: "Daily Videos", value: "100% Autonomous" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1dFRm5I8jJH7s3YzxeNEX0KzwpIRKjTev",
    tags: ["n8n", "OpenRouter", "YouTube API", "JWT Auth", "HTTP Polling"],
    details: [
      "Operates on a continuous daily schedule block using trigger modules.",
      "Spins up creative prompt requests through OpenRouter (Claude/ChatGPT blend).",
      "Issues secure JWT signatures to authenticate against cloud video rendering engines.",
      "Establishes recursive wait states and HTTP polling loops to safely detect asset readiness.",
      "Transfers rendered files, populates automated SEO keywords, and posts directly to YouTube."
    ]
  },
  {
    id: "project-6",
    title: "Gmail Attachment-to-Drive Sync with automated Logs",
    description: "Multi-point Make.com scenario that continuously scans inbox items, extracts raw attachments, analyzes document summaries with OpenAI, generates intelligent clean filenames, uploads to Google Drive, and updates sheets.",
    category: "Data Archiving",
    metrics: { label: "File Organization", value: "Instant" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1M_5uOgLXfssN9n8GsLvb6k1mQTn0wd0e",
    tags: ["Make.com", "OpenAI API", "Google Sheets", "Google Drive"],
    details: [
      "Stays live to examine each individual incoming email attachment immediately.",
      "Applies OpenAI document summarization to identify contract numbers, invoice totals, and client names.",
      "Renames disorganized attachments (e.g. 'unnamed-12.pdf') into highly structured files (e.g. 'INV_2026_Stackline_Athena.pdf').",
      "Saves organized assets directly to dedicated client directory nodes in Drive.",
      "Appends row histories in Google Sheets and fires transactional confirmation emails."
    ]
  },
  {
    id: "project-7",
    title: "Basic RAG Demo",
    description: "An intelligent retrieval-augmented generation (RAG) system that processes unstructured knowledge databases, vectors files dynamically, and queries indexed intelligence to respond with contextualized, zero-hallucination accuracy.",
    category: "AI Workflows",
    metrics: { label: "Query Context", value: "Verified" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1yKjmjlOVFXv0g2t45MMgbk9aXRlxL0Lq",
    tags: ["n8n", "Vector DB", "OpenRouter", "AI Systems", "Knowledge Base"],
    details: [
      "Extracts unstructured text data from Google Docs, PDF archives, or custom APIs automatically.",
      "Generates high-dimensional vector embeddings dynamically to catalog knowledge nodes.",
      "Performs real-time similarity search across vector indexes to retrieve context chunks.",
      "Synthesizes extracted data chunks inside custom AI model instructions to prevent prompt hallucinations.",
      "Appends action execution tracking logs and formats secure chatbot prompt responses."
    ]
  },
  {
    id: "project-8",
    title: "Automated Lead Enrichment",
    description: "A fast-response contact enrichment pipeline that intercepts inbound sales leads, polls third-party identity tools, queries social profile vectors, and returns structured business insights straight to the CRM.",
    category: "Lead Tech",
    metrics: { label: "Enriched Leads", value: "Instant" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/17nEMo_U9AJzB9s1ncdvNmQgji7tKDXBe",
    tags: ["n8n", "Clearbit API", "GoHighLevel", "Social Parsing", "API Middlewares"],
    details: [
      "Monitors real-time webhook payloads from custom website forms or inbound ad channels.",
      "Triggers instant API calls to public directories and business enrichment brokers (Clearbit/Apollo).",
      "Translates unstructured biographical and company data into normalized JSON properties.",
      "Pushes structured demographic data (such as size, industry, or role) back into GHL contacts.",
      "Generates highlighted internal slack briefs to flag high-fit pipeline prospects."
    ]
  },
  {
    id: "project-9",
    title: "Xero to Asana Transactions Export",
    description: "Synchronized billing ecosystem that monitors new invoices or bank payouts, maps accounting double-entries into cross-functional project lists, and tracks reconciliation states inside Asana transparently.",
    category: "Financial Sync",
    metrics: { label: "Ledger Sync Accuracy", value: "100%" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1Qa0r2Ne04AS29NeBrfdPo2uAFMlnq9I2",
    tags: ["Make.com", "Xero API", "Asana API", "JSON Parsing", "Ledger Logs"],
    details: [
      "Hooks deeply into live Xero organization triggers for newly finalized invoice streams.",
      "Extracts tax splits, service headings, and line-item totals into a unified transfer schema.",
      "Uses Make.com mapping engines to route distinct customer profiles to specific Asana project boards.",
      "Ensures zero double-entry errors through unique transactional tracking token IDs.",
      "Auto-checks ledger state files to mark tasks fully reconciled when payment webhooks match."
    ]
  },
  {
    id: "project-10",
    title: "Simple Online Course Automation",
    description: "Elegant customer journey experience spanning subscription purchase, learning-management portal provisioning, tailored emails, and automatic course module delivery cadences.",
    category: "EdTech Pipelines",
    metrics: { label: "Logins Sent", value: "Zero Delay" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/17w2HbWGiogCP1eEfzE3lh-ZRiH_MrESq",
    tags: ["Zapier", "Webhooks", "Stripe API", "GoHighLevel", "Gmail API", "Auth Pipelines"],
    details: [
      "Stays alert to successful Stripe checkout completion parameters in real time.",
      "Provisions user login records inside target membership platforms without manual oversight.",
      "Schedules a series of timed email transmissions containing educational material over multiple weeks.",
      "Monitors client learning velocity and grants certifications on custom completion hooks.",
      "Monitors subscription termination statuses to deactivate learning access nodes instantly."
    ]
  }
];
