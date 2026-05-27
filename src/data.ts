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
    company: "Stackline Media",
    text: "Mark deployed an autonomous AI Agent for Facebook using n8n that handles all our incoming customer inquiries. Implementing intelligent intent detection and instant FAQ replies slashed customer response times to under 10 seconds. Highly recommended!",
    initials: "AQ"
  },
  {
    name: "Gino Resuello",
    role: "Creative Director",
    company: "Payband Media & Co.",
    text: "The Automated Content Repurposing Engine built by Mark in Zapier and Make.com is a pure game-changer. It translates raw audio and video files into SEO-ready blog posts and platform-tuned social updates instantly. Repurposing overhead dropped from hours to under 5 minutes!",
    initials: "GR"
  },
  {
    name: "Sarah Jenkins",
    role: "Finance Operations Lead",
    company: "Vanguard Bookkeeping",
    text: "Our bookkeeping team used to waste precious hours exporting ledger files from Xero and attaching them to Asana tasks. Mark's automated transaction archive pipeline on Make.com made transaction reconciliation 100% accurate, running flawlessly behind the scenes.",
    initials: "SJ"
  },
  {
    name: "JR Gonzalez",
    role: "Managing Director",
    company: "Lumio Academy",
    text: "We automated our student onboarding pipelines using Mark's Jotform, Zapier, and ClickFunnels enrollment system. Registrations trigger instant course platform delivery and user sync directly with ActiveCampaign. Fast, seamless, and completely hands-off.",
    initials: "JG"
  },
  {
    name: "Michael Chen",
    role: "Sales Enablement Head",
    company: "NovaSphere Tech",
    text: "Our sales team struggled with manual prospect qualification. Mark engineered our Automated Lead Enrichment pipeline in Zapier with Apollo.io. Incoming leads are now structured, scored, and prioritized immediately, with AI-driven email drafts generated on the spot.",
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
    description: "A fully autonomous, webhook-triggered AI agent built with n8n that handles incoming customer inquiries and applications. Classifies intent, answers FAQs in real time, extracts and structures application data, saves records cleanly, and sends personalized confirmation emails — all without human involvement.",
    category: "AI Agents",
    metrics: { label: "Response Time", value: "< 10s" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1V-IBgEhwbfVipquN5ASSwjcNYJSQfyQI",
    tags: ["n8n", "Gemini AI", "Facebook API", "Webhooks"],
    details: [
      "Problem: Manual inquiry processing creates slow response times, leading to missed client conversion and inconsistent messaging.",
      "Solution: Uses webhook triggers to parse comments, queries Gemini AI to identify intent and reply with branded facts, and extracts structured records.",
      "Impact: Response speed slashed to under 10 seconds; removes 80–95% of manual customer service workload."
    ],
    projectName: "AI Agent for Facebook",
    projectOverview: "A fully autonomous, webhook-triggered AI agent built with n8n that handles incoming customer inquiries and applications. Classifies intent, answers FAQs in real time, extracts and structures application data, saves records cleanly, and sends personalized confirmation emails — all without human involvement.",
    problem: "Manual processing of customer inquiries and applications creates major bottlenecks: slow response times frustrate users and lose leads; inconsistent answers damage brand trust; fragmented data entry leads to errors; delayed follow-ups reduce conversion rates.",
    solution: [
      "Analyzes incoming messages with AI to detect intent",
      "Instantly replies to common FAQs with accurate, branded responses",
      "Extracts key data from applications (name, email, preferences, documents)",
      "Structures and stores clean records (Google Sheets, Airtable, database)",
      "Triggers personalized confirmation & next-step emails via SMTP/Mailgun",
      "All executed in seconds, 24/7, with zero manual touch"
    ],
    impact: [
      "Response time reduced from hours/days to under 10 seconds for most inquiries",
      "100% structured data collection — eliminated missed or incomplete submissions",
      "Removed 80–95% of repetitive inquiry/application handling work",
      "Instant, consistent, professional communication → higher satisfaction and trust"
    ],
    tools: ["n8n", "Gemini AI", "Facebook API", "Webhooks"]
  },
  {
    id: "project-2",
    title: "AI Jobs Scraper & Resume Optimizer",
    description: "Built with n8n. An intelligent automation pipeline that monitors incoming job requests via Messaging, scrapes tailored job listings, uses AI to customize resumes for each role, stores optimized versions in Google Drive, drafts personalized application emails, and sends completion reports — fully automated.",
    category: "AI Workflows",
    metrics: { label: "Application Time", value: "Minutes" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/15CI410ZsAa8SCjrj_ExwFWSDiHm_agYv",
    tags: ["n8n", "Slack", "OpenAI", "Google Sheets", "Gmail", "HTTP Request"],
    details: [
      "Problem: Tailoring resumes, scouring job boards, drafting application bodies, and filing docs takes hours, leading to application fatigue.",
      "Solution: Monitors incoming job requests, scrapes targeted online job postings, enlists AI for ATS keyword optimization, updates PDFs, and drafts Gmails.",
      "Impact: 10x improvement in application volume; optimizes keywords automatically for ATS tools, improving callback conversion rates."
    ],
    projectName: "AI Jobs Scraper & Resume Optimizer",
    projectOverview: "Built with n8n. An intelligent automation pipeline that monitors incoming job requests via Messaging, scrapes tailored job listings, uses AI to customize resumes for each role, stores optimized versions in Google Drive, drafts personalized application emails, and sends completion reports — fully automated.",
    problem: "Manual job applications are highly repetitive and inefficient. Searching for listings, tailoring resumes to match job descriptions, organizing files, and writing customized emails take hours per application — leading to fatigue, inconsistent tailoring, and missed opportunities.",
    solution: [
      "Triggers on Messaging job requests",
      "Scrapes and filters relevant job postings",
      "Analyzes job descriptions with AI to tailor resumes (keyword optimization, skill highlighting, ATS-friendly)",
      "Saves customized resumes to Google Drive with clear naming conventions",
      "Generates draft application emails",
      "Notifies results via Messaging"
    ],
    impact: [
      "Reduced application time from hours to minutes per job — enabling 10x more applications",
      "AI-driven tailoring improves ATS compatibility and interview callback rates",
      "Supports high-volume job searches while keeping applications professional and organized",
      "Frees up time for interviews, skill-building, and networking"
    ],
    tools: ["n8n", "Slack", "OpenAI", "Google Sheets", "Gmail", "HTTP Request", "Loop Over Items", "PDF Generation"]
  },
  {
    id: "project-3",
    title: "AI Content Repurposing Engine",
    description: "Automated Content Repurposing Engine built in both Zapier and Make.com. Transforms raw audio/video files into 2 blog posts, Instagram & LinkedIn posts, plus logging — fully no-code with AI transcription, generation, conditional paths, and multi-platform distribution.",
    category: "Social Automation",
    metrics: { label: "Repurposing Time", value: "~5-10 mins" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1nWDL0nntG_PDqFInjrPIf9eO7miMl_fe",
    tags: ["Zapier", "Google Drive", "AI by Zapier", "LinkedIn", "Facebook"],
    details: [
      "Problem: Content creators spend 4–6 hours manually transcribing, formatting, and posting each media file, causing delays and inconsistent output.",
      "Solution: Automated folder watch in Google Drive triggers AI transcription, generates 2 blog variants, crafts social posts for LinkedIn/Instagram, logs stats to Sheets, and runs conditional paths.",
      "Impact: Repurposing time reduced to 5–10 minutes of review; scaled output of 1 media file automatically to 2 blogs + 2 social posts + logging."
    ],
    projectName: "AI Content Repurposing Engine",
    projectOverview: "Automated Content Repurposing Engine built in both Zapier and Make.com. Transforms raw audio/video files into 2 blog posts, Instagram & LinkedIn posts, plus logging — fully no-code with AI transcription, generation, conditional paths, and multi-platform distribution.",
    problem: "Content creators and teams spend 4–6 hours manually transcribing, rewriting, formatting, and posting each audio/video piece — leading to inconsistent output, burnout, delayed distribution, and missed reach across blogs and social channels.",
    solution: [
      "Trigger: New file in Google Drive / OneDrive folder",
      "AI transcription → Generate 2 unique blog variants",
      "Create platform-specific social posts (Instagram + LinkedIn)",
      "Log everything to Google Sheets",
      "Conditional Paths/Router: Filter by keywords or quality to control auto-posting",
      "Identical logic implemented in Zapier and Make.com with strong AI prompt engineering."
    ],
    impact: [
      "Reduced repurposing time from hours to ~5–10 minutes of review",
      "Scaled output: 1 file → 2 blogs + 2 social posts + log automatically",
      "Improved consistency, brand alignment, and weekly reach",
      "Enabled safe, reliable automation with filters preventing unwanted posts"
    ],
    tools: ["Zapier", "Google Drive", "AI by Zapier", "LinkedIn", "Facebook"]
  },
  {
    id: "project-4",
    title: "Asana CRM Lead Engagement Pipeline",
    description: "Five Zapier automations that keep an Asana sales pipeline running — new leads become tasks automatically, follow-ups trigger on stage changes, and closed deals kick off the next steps.",
    category: "CRM Pipelines",
    metrics: { label: "Pipeline Accuracy", value: "100% Updated" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1pBs-9LXhn8P9dfB8eeLnpWvkqLagknnm",
    tags: ["Zapier", "Asana", "Gmail", "Google Drive", "Delay by Zapier", "Filter by Zapier"],
    details: [
      "Problem: Team wasted hours on manual CRM upkeep like task creation and follow-up email logging, resulting in outdated boards.",
      "Solution: Set up automated pipeline task creation, contextual email sequences on stage changes, onboarding task generation on approval, and auto-logging to Google Drive.",
      "Impact: Asana pipeline board stays 100% current without manual upkeep, and lead nurturing emails deliver with exact trigger timing."
    ],
    projectName: "Asana CRM Lead Engagement Pipeline",
    projectOverview: "Five Zapier automations that keep an Asana sales pipeline running — new leads become tasks automatically, follow-ups trigger on stage changes, and closed deals kick off the next steps.",
    problem: "A small sales team was spending a chunk of their day on CRM upkeep — manually creating tasks for leads, sending follow-ups, and logging closed deals. The board was only accurate when someone remembered to update it.",
    solution: [
      "Built five Zapier automations: auto-create Asana tasks for new leads",
      "Trigger email sequences on stage changes (with filters to stop if the lead replies)",
      "Generate onboarding tasks when a deal is approved",
      "Log closed deals to Google Drive",
      "Send follow-up nudges after no response"
    ],
    impact: [
      "The Asana board stays current without manual updates",
      "Follow-ups go out on time",
      "Closing a deal automatically kicks off what comes next"
    ],
    tools: ["Zapier", "Asana", "Gmail", "Google Drive", "Delay & Filter by Zapier"]
  },
  {
    id: "project-5",
    title: "Autonomous ASMR Video Production Suite",
    description: "A completely autonomous pipeline built with n8n that turns high-level ideas into ready-to-watch short-form ASMR videos and publishes them across platforms. Auto-generates creative prompts, renders videos using AI, validates output quality, converts formats, adds metadata, and uploads directly to YouTube and Facebook — fully hands-free.",
    category: "Content Tech",
    metrics: { label: "Weekly Output", value: "10-30x Boost" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1dFRm5I8jJH7s3YzxeNEX0KzwpIRKjTev",
    tags: ["n8n", "Gemini AI", "YouTube API", "Google Drive"],
    details: [
      "Problem: Creating schedules, drafting rendering prompts, checking files, and uploading metadata to social pages is highly repetitive.",
      "Solution: Schedules content brainstorms, writes rendering prompts via Gemini, monitors status loops, prepares tags, and automatically uploads files.",
      "Impact: Boosts weekly short-form video creation by 10x to 30x; automates over 95% of tedious video editing and publishing procedures."
    ],
    projectName: "Autonomous ASMR Video Production Suite",
    projectOverview: "A completely autonomous pipeline built with n8n that turns high-level ideas into ready-to-watch short-form ASMR videos and publishes them across platforms. Auto-generates creative prompts, renders videos using AI, validates output quality, converts formats, adds metadata, and uploads directly to YouTube and Facebook — fully hands-free.",
    problem: "Creating and distributing short-form ASMR content is extremely labor-intensive: manually writing detailed prompts; waiting for renders; checking quality; editing/exporting in correct formats; and uploading with metadata to multiple platforms — limiting output and causing burnout.",
    solution: [
      "Generates varied, high-quality ASMR prompts (triggers, themes, durations)",
      "Submits to AI video generation engine and monitors rendering status",
      "Validates successful output (length, audio presence, no errors)",
      "Converts & optimizes files for platform specs",
      "Auto-uploads with SEO-optimized titles, descriptions, tags, thumbnails",
      "Publishes simultaneously to YouTube Shorts and Facebook Reels"
    ],
    impact: [
      "From idea to published video in minutes instead of hours/days",
      "10–30× increase in weekly content output",
      "Eliminated 95%+ of manual creative and publishing labor",
      "Enables rapid experimentation and sustained high-frequency posting"
    ],
    tools: ["n8n", "Gemini AI", "YouTube API", "Google Drive"]
  },
  {
    id: "project-6",
    title: "Gmail Attachment to Drive Sync with Automated Logs",
    description: "Intelligent Gmail Attachment Processor built with Make.com. Monitors incoming Gmail emails, analyzes attachments (PDFs, XLSX, CSV, DOCX) with Google Gemini AI, renames files descriptively based on content, uploads to Google Drive, logs details in Google Sheets, and optionally sends confirmation emails.",
    category: "Data Archiving",
    metrics: { label: "Processing Speed", value: "Near-Zero Time" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1M_5uOgLXfssN9n8GsLvb6k1mQTn0wd0e",
    tags: ["Make", "Make.com", "Gmail", "Gemini AI", "Google Drive", "Google Sheets"],
    details: [
      "Problem: Compiling and renaming inbox attachments manually consumed excessive time and caused inconsistent organization.",
      "Solution: Scans emails, downloads attachment files, uses Gemini AI to analyze summaries, applies structured renaming, updates Drive, and appends logs in Sheets.",
      "Impact: Reduced processing time to near-zero; ensured consistent searchable indexing with a direct audit log in Google Sheets."
    ],
    projectName: "Gmail Attachment to Drive Sync with Automated Logs",
    projectOverview: "Intelligent Gmail Attachment Processor built with Make.com. Monitors incoming Gmail emails, analyzes attachments (PDFs, XLSX, CSV, DOCX) with Google Gemini AI, renames files descriptively based on content, uploads to Google Drive, logs details in Google Sheets, and optionally sends confirmation emails.",
    problem: "Manual handling of incoming email attachments was time-consuming and error-prone — requiring constant Gmail monitoring, manual renaming, uploading to the correct folder, and tracking. This led to delays, misfiled documents, lost time, and inconsistent organization.",
    solution: [
      "Trigger: Gmail Watch Emails for new messages with attachments",
      "Extract: List attachments and download file data",
      "AI Analysis: Upload file to Google Gemini to generate a short, descriptive content summary",
      "Rename: Dynamically create intelligent filenames (e.g., Q4_Invoice_ClientX_2025.pdf)",
      "Store: Upload renamed file to specific Google Drive folder",
      "Log: Append timestamp, original & new filename, file type, AI summary to Google Sheet",
      "Notify (optional): Send Gmail confirmation after successful processing"
    ],
    impact: [
      "Reduced manual processing from 5–10 minutes per attachment to near-zero hands-on time",
      "AI-driven renaming eliminated guesswork and ensured uniform, searchable filenames",
      "Centralized, properly named files in Drive + full audit trail in Sheets",
      "Handles high volumes 24/7 with zero missed files"
    ],
    tools: ["Make", "Gmail", "Gemini AI", "Google Drive", "Google Sheets"]
  },
  {
    id: "project-7",
    title: "Basic RAG Demo",
    description: "AI assistant answers questions grounded 100% in your own documents — zero hallucinations.",
    category: "AI Workflows",
    metrics: { label: "Hallucinations", value: "0%" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1yKjmjlOVFXv0g2t45MMgbk9aXRlxL0Lq",
    tags: ["n8n", "Supabase Vector Store", "Google Gemini Chat", "Google Drive", "Agent Platform API", "Vertex Embeddings"],
    details: [
      "Problem: Finding specific information in fragmented support documents takes excessive time, often leading to slow onboarding or inaccurate replies.",
      "Solution: Connects n8n chat interfaces to a Supabase Vector Store, performs high-speed semantic similarity searches, and synthesizes grounded answers.",
      "Impact: Slashes search resolution speeds to instantaneous; maintains 100% accurate grounded responses with zero LLM hallucinations."
    ],
    projectName: "Basic RAG Demo",
    projectOverview: "AI assistant answers questions grounded 100% in your own documents — zero hallucinations.",
    problem: "Teams waste hours answering the same questions or give wrong answers because they can't locate the right document fast enough. Onboarding new staff takes weeks because knowledge is scattered.",
    solution: [
      "Chat message received by the n8n AI Agent",
      "Supabase Vector Store queried semantically for relevant content",
      "Most relevant document sections retrieved",
      "Gemini generates a grounded, cited response",
      "New files in Google Drive sync automatically to the knowledge base"
    ],
    impact: [
      "Instant, accurate answers from verified documents. Zero hallucinations.",
      "Knowledge base updates itself."
    ],
    tools: ["n8n", "Supabase Vector Store", "Google Gemini Chat", "Google Drive", "Agent Platform API", "Vertex Embeddings"]
  },
  {
    id: "project-8",
    title: "Automated Lead Enrichment",
    description: "Automated B2B Lead Qualification & Outreach Workflow built in Zapier. Triggers in real-time via Webhooks, enriches leads using Apollo.io, scores/prioritizes based on firmographics (company size, revenue, industry fit), stores high-priority leads in SQL, notifies the sales team, and generates personalized email drafts via AI.",
    category: "Lead Tech",
    metrics: { label: "Processing Speed", value: "Instant" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/17nEMo_U9AJzB9s1ncdvNmQgji7tKDXBe",
    tags: ["Zapier", "Apollo", "Google Sheets", "Gmail", "Slack"],
    details: [
      "Problem: Inbound leads require manual enrichment, qualification, and outreach; manual processing delays response and leads to inefficient client pipelines.",
      "Solution: Real-time webhooks pass lead data to Apollo.io for firmographic enrichment, scores prospects using Zapier Paths, logs premium fits to SQL, notifies the team, and drafts custom outbound emails.",
      "Impact: Manual processing reduced from hours to seconds; sales teams can focus on top 20–30% conversion potential with AI-personalized data-enriched templates."
    ],
    projectName: "Automated Lead Enrichment",
    projectOverview: "Automated B2B Lead Qualification & Outreach Workflow built in Zapier. Triggers in real-time via Webhooks, enriches leads using Apollo.io, scores/prioritizes based on firmographics (company size, revenue, industry fit), stores high-priority leads in SQL, notifies the sales team, and generates personalized email drafts via AI.",
    problem: "Sales teams receive real-time inbound leads but spend excessive time on manual enrichment, qualification, prioritization, and personalized outreach. Without automation, low-fit leads waste resources, high-value opportunities get delayed, and outreach lacks consistency — resulting in inefficient pipelines and lost revenue.",
    solution: [
      "Trigger: Webhook trigger receives real-time lead data (name, email, company, size, website, source)",
      "Apollo.io enrichment: revenue, employee count, industry, tech stack via API",
      "Scoring via Formatter + Paths by Zapier — based on company size, revenue bands, industry ICP match",
      "High-priority path: save to SQL database, notify team, generate AI email draft",
      "Low-priority path: basic notification or log only",
      "AI by Zapier (OpenAI/Gemini) creates short, context-aware outreach emails"
    ],
    impact: [
      "Reduced manual lead processing from hours to seconds per lead",
      "Automatically prioritized high-fit leads — focusing sales on the top 20–30% conversion potential",
      "Boosted outreach quality and response rates via AI-personalized, data-enriched email drafts",
      "Centralized SQL storage for clean reporting, CRM syncing, and pipeline analytics"
    ],
    tools: ["Zapier", "Apollo", "Google Sheets", "Gmail", "Slack"]
  },
  {
    id: "project-9",
    title: "Xero to Asana Transaction Export",
    description: "Automated Xero General Ledger Attachment to Asana Tasks using Make.com. Triggers when an Asana task is marked complete, pulls detailed transaction data from Xero API, formats it into a standard CSV mirroring the Account Transactions report, and attaches the CSV directly to the completed Asana task for archival.",
    category: "Financial Sync",
    metrics: { label: "Reconciliation", value: "100% Accurate" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/1Qa0r2Ne04AS29NeBrfdPo2uAFMlnq9I2",
    tags: ["Make", "Make.com", "Asana", "Xero API", "Google Sheets", "Iterator", "Router"],
    details: [
      "Problem: Manually compiling double-entry transaction listings, exporting CSV sheets from Xero, and attaching them to finished Asana cards was time-consuming.",
      "Solution: Hooked into completed Asana cards, parsed transaction data over Xero API, and compiled standard CSV reports to attach directly to tasks.",
      "Impact: Saved 10-20 minutes of manual bookkeeping per task; archived files now perfectly mirror direct Xero reports with zero manual overhead."
    ],
    projectName: "Xero to Asana Transaction Export",
    projectOverview: "Automated Xero General Ledger Attachment to Asana Tasks using Make.com. Triggers when an Asana task is marked complete, pulls detailed transaction data from Xero API, formats it into a standard CSV mirroring the Account Transactions report, and attaches the CSV directly to the completed Asana task for archival.",
    problem: "Manual Xero report exports required logging in, navigating Reports > Account Transactions, filtering for the desired period, downloading CSV, and uploading to Asana — repetitive, time-consuming, and prone to oversight.",
    solution: [
      "Trigger: Asana Watch Completed Tasks",
      "Fetch Data: Xero API call to retrieve transaction-level data for the last calendar year",
      "Process & Format: Router, Iterators, Google Sheets staging, Text Aggregator to structure CSV",
      "Attach: Asana Upload Attachment — CSV attached directly to the completed task",
      "Cleanup: Clear temp Google Sheets ranges and add logging/sleeps for reliability"
    ],
    impact: [
      "Eliminated 10–20 minutes of manual Xero navigation per completed task",
      "CSV mirrors exact Xero report format — zero formatting errors, reliable audit trail",
      "Automatic attachment ensures financial history is preserved in project context",
      "Handles multiple tasks daily with no added effort"
    ],
    tools: ["Make", "Asana", "Xero API", "Google Sheets", "Iterator", "Router"]
  },
  {
    id: "project-10",
    title: "Simple Online Course Enrollment Automation",
    description: "This automation helps online course businesses automatically enroll students after they submit a registration form. It connects Jotform, Zapier, ClickFunnels, ActiveCampaign, and Gmail to reduce manual work and speed up the enrollment process.",
    category: "EdTech Pipelines",
    metrics: { label: "Provisioning Speed", value: "Instant" },
    workflowImageUrl: "https://lh3.googleusercontent.com/d/17w2HbWGiogCP1eEfzE3lh-ZRiH_MrESq",
    tags: ["Zapier", "Jotform", "ClickFunnels", "ActiveCampaign", "Gmail"],
    details: [
      "Problem: Student registration, course platform enrolling, contact sorting, and welcome emails were done manually, leading to access delays and mistakes.",
      "Solution: Forms submitted in Jotform trigger Zapier to sync to ClickFunnels and ActiveCampaign, enrolling the student instantly and adding tags for specific lists.",
      "Impact: Immediate course delivery, zero data entry mistakes, and precise marketing segmentation based on tags."
    ],
    projectName: "Simple Online Course Enrollment Automation",
    projectOverview: "This automation helps online course businesses automatically enroll students after they submit a registration form. It connects Jotform, Zapier, ClickFunnels, ActiveCampaign, and Gmail to reduce manual work and speed up the enrollment process.",
    problem: "Many online course businesses still handle student enrollments manually, which can slow down operations and create unnecessary repetitive work. Admins often need to transfer student information between different platforms, manually enroll users into courses, organize contacts, and send confirmation emails one by one. This process not only takes time but also increases the chances of data entry errors, delayed course access, and poor customer experience.",
    solution: [
      "Trigger: Student submits the enrollment form through Jotform",
      "Zapier automatically triggers the workflow",
      "Student information is sent to ClickFunnels",
      "Contact is created or updated in ClickFunnels",
      "Student is automatically enrolled into selected course",
      "Contact details are synced to ActiveCampaign",
      "Tags are automatically added for organization and email marketing",
      "Gmail sends an automatic confirmation or welcome email to the student"
    ],
    impact: [
      "Faster student enrollment process",
      "Reduced manual work",
      "Instant course access for students",
      "Improved contact organization",
      "Fewer data entry mistakes",
      "Better email marketing segmentation",
      "More efficient workflow management"
    ],
    tools: ["Zapier", "Jotform", "ClickFunnels", "ActiveCampaign", "Gmail"]
  }
];
