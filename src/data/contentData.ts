import projectSmartCampus from "@/assets/project-smart-campus.png";
import projectShopBilling from "@/assets/project-shop-billing.png";
import projectAiCrop from "@/assets/project-ai-crop.png";
import projectEcomStore from "@/assets/project-ecom-store.png";
import projectPdfHub from "@/assets/project-pdf-hub.jpg";
import projectMediaDl from "@/assets/project-media-dl.png";
import projectPulseGuard from "@/assets/project-pulse-guard.jpg";
import techIndiaCert from "@/assets/techindia-certificate.png";

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  technologies: string[];
  targetAudience: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Final Year" | "Websites" | "AI & ML" | "MERN Stack" | "Shop Websites";
  technology: string[];
  shortDesc: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  responsibilities: string[];
  linkedin?: string;
  github?: string;
  avatar: string;
  isFounder?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  recipient: string;
  year: string;
  image: string;
  verificationUrl?: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  clientType: "College Student" | "Shop Owner" | "Small Business" | "Individual" | "Freelancer" | "Startup Founder" | "Business Owner" | "Local Business Owner";
  serviceUsed: string;
  rating: number;
  reviewText: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "TECHINDIA SOLUTIONS",
  headline: "Building Digital Solutions for Students, Businesses & Individuals.",
  subtext: "TECHINDIA SOLUTIONS provides project development, website development, AI solutions and technical support tailored to your requirements.",
  tagline: "Projects • Websites • AI Solutions • Tech Support",
  whatsappNumber: "+918010048483", // Standard WhatsApp link target format
  whatsappFormatted: "+91 80100 48483",
  email: "techindiasolution7@gmail.com",
  phone: "+91 80100 48483",
  address: "TechIndia Solutions, Digital Innovation Hub, India",
  googleFormUrl: "https://forms.gle/CHbEUWuazxzmGtmC7",
  socialLinks: {
    whatsapp: "https://wa.me/918010048483?text=Hi%20TECHINDIA%20SOLUTIONS,%20I%20have%20a%20project%20requirement.",
    linkedin: "https://linkedin.com/company/techindia-solutions",
    github: "https://github.com/techindia-solutions",
    instagram: "https://instagram.com/techindia_solutions",
  },
};

export const QUICK_STATS = [
  { label: "Projects & Deliverables", value: "100+", suffix: "Built" },
  { label: "Students & Clients Served", value: "50+", suffix: "Happy Clients" },
  { label: "Websites Delivered", value: "25+", suffix: "Live Sites" },
  { label: "Core Team Members", value: "2", suffix: "Dedicated Experts" },
];

export const WHAT_WE_DO = {
  title: "Practical Technology Support & Development",
  description: "We are a small, transparent, founder-led engineering team. Whether you are a college student needing project guidance, a shop owner wanting an online catalog and billing website, or a business requiring AI features or bug fixing — we deliver practical, reliable digital code tailored to your exact scope.",
  highlights: [
    "Requirement-focused custom development",
    "Direct communication with actual developers",
    "Clean, readable code with deployment support",
    "Post-delivery guidance & troubleshooting",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "final-year-projects",
    title: "Final Year Projects",
    shortDesc: "End-to-end guidance, architecture, coding, and deployment for B.Tech, BCA, MCA, and M.Tech final year projects.",
    fullDesc: "Complete academic project execution including topic selection, system architecture, database design, full-stack code implementation, testing, and viva preparation assistance.",
    iconName: "GraduationCap",
    features: [
      "Complete Source Code with Documentation",
      "Database Schema & Architecture Diagrams",
      "PPT & Project Report Guidance",
      "Live Execution & Viva Preparation Support",
    ],
    technologies: ["Python", "MERN Stack", "Java", "Machine Learning", "PHP/MySQL"],
    targetAudience: "Engineering & IT Students (B.Tech, BCA, MCA, Diploma)",
  },
  {
    id: "mini-major-projects",
    title: "Mini & Major Projects",
    shortDesc: "Custom semester mini projects and major degree projects tailored to syllabus & technical requirements.",
    fullDesc: "Practical working projects designed according to college guidelines. We focus on clean code structure so students understand every line of code.",
    iconName: "FolderGit2",
    features: [
      "Custom Module Customization",
      "Bug-free Code Execution",
      "Step-by-step Setup Instructions",
      "Quick Turnaround & Affordable Guidance",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "HTML/CSS/JS"],
    targetAudience: "Computer Science & IT Students",
  },
  {
    id: "website-development",
    title: "Website Development",
    shortDesc: "Modern, high-performance, mobile-responsive websites for startups, institutions, and organizations.",
    fullDesc: "Professional web development using modern frameworks like React and Next.js. Optimized for ultra-fast loading speed, SEO visibility, and slick user interface experience.",
    iconName: "Globe",
    features: [
      "100% Mobile & Desktop Responsive Design",
      "Ultra-fast Loading Speed & Clean SEO",
      "Custom UI/UX & Dynamic Components",
      "Domain, Hosting & Deployment Setup",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
    targetAudience: "Schools, Colleges, Organizations & Startups",
  },
  {
    id: "shop-business-websites",
    title: "Shop / Business Websites",
    shortDesc: "Clean digital presence, online catalogs, product showcase & enquiry websites for retail shops and local businesses.",
    fullDesc: "Give your shop or local business an impressive online website. Include product/service listings, contact details, Google Map integration, and instant WhatsApp enquiry buttons.",
    iconName: "Store",
    features: [
      "Product & Services Showcase Grid",
      "Direct WhatsApp Order & Inquiry Buttons",
      "Google Maps & Location Integration",
      "Click-to-Call Contact Integration",
    ],
    technologies: ["React", "Tailwind CSS", "WhatsApp API", "Responsive Web Design"],
    targetAudience: "Retail Shops, Showrooms, Local Businesses & Service Providers",
  },
  {
    id: "ai-ml-solutions",
    title: "AI / ML Solutions",
    shortDesc: "Practical Artificial Intelligence, Machine Learning models, NLP, and Computer Vision implementations.",
    fullDesc: "Custom AI/ML model training, data analysis, image classification, sentiment analysis, and smart web integration for academic research or real-world tasks.",
    iconName: "BrainCircuit",
    features: [
      "Custom Machine Learning Classification & Regression",
      "Deep Learning & Image Processing (OpenCV / CNN)",
      "Natural Language Processing (NLP)",
      "Web Dashboard & API Integration for AI Models",
    ],
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "OpenCV", "Flask/FastAPI"],
    targetAudience: "AI Researchers, Final Year Students & Tech Innovations",
  },
  {
    id: "python-java-mern",
    title: "Python / Java / MERN Development",
    shortDesc: "Full-stack web applications, REST APIs, microservices, and custom software backend solutions.",
    fullDesc: "Robust web application development across Python (Django/Flask), Java (Spring Boot), and MERN (MongoDB, Express, React, Node.js) tech stacks.",
    iconName: "Code2",
    features: [
      "RESTful API Design & Database Integration",
      "User Authentication & Authorization",
      "Scalable Backend Architecture",
      "Clean Codebase with Detailed Comments",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Python", "Java"],
    targetAudience: "Businesses, Startups & Software Projects",
  },
  {
    id: "bug-fixing-technical-support",
    title: "Bug Fixing & Technical Support",
    shortDesc: "Debugging existing codebases, fixing broken web features, layout fixes, deployment errors & server configuration.",
    fullDesc: "Stuck with broken code or deployment issues? We diagnose error tracebacks, resolve syntax & logic bugs, optimize performance, and deploy your site smoothly.",
    iconName: "Wrench",
    features: [
      "Rapid Debugging & Error Resolution",
      "UI & Responsive Layout Patching",
      "Database & API Connection Fixes",
      "Server & Hosting Deployment Support",
    ],
    technologies: ["JavaScript/TypeScript", "Python", "Node.js", "CSS/Tailwind", "Git"],
    targetAudience: "Anyone with Existing Website or Codebase Issues",
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "smart-campus-portal",
    title: "Smart Campus & Student Project Portal",
    category: "MERN Stack",
    technology: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    shortDesc: "Web portal for students to submit project milestones, schedule reviews, and track progress.",
    problem: "Colleges lacked a streamlined central platform to track student project submissions and mentor reviews.",
    solution: "Built a responsive MERN web application with role-based authentication (Student, Mentor, Admin) and automated progress reports.",
    keyFeatures: [
      "Role-based Dashboard (Student / Mentor / Admin)",
      "Project Synopsis & Milestone File Uploads",
      "Live Evaluation & Feedback Logging",
      "Exportable Performance Analytics",
    ],
    image: projectSmartCampus,
    // liveUrl: "https://techindia-demo-campus.web.app",
    // githubUrl: "https://github.com/techindia-solutions/smart-campus-portal",
  },
  {
    id: "shop-inventory-billing",
    title: "Shop Inventory & Billing System",
    category: "Shop Websites",
    technology: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    shortDesc: "Responsive web billing app with digital receipt generation and WhatsApp invoice sharing for retail shops.",
    problem: "Local retail store required an easy-to-use billing interface that works on PC and mobile tablets without bulky software.",
    solution: "Developed a lightweight web app for instant barcode/search billing, stock alert tracking, and instant WhatsApp bill sharing.",
    keyFeatures: [
      "Instant Item Search & Barcode Billing",
      "Digital Tax Invoice & PDF Generation",
      "One-click WhatsApp Bill Sending",
      "Daily Sales & Low-Stock Alerts",
    ],
    image: projectShopBilling,
    // liveUrl: "https://techindia-shop-demo.web.app",
    // githubUrl: "https://github.com/techindia-solutions/retail-billing-web",
  },
  {
    id: "ai-crop-disease-detector",
    title: "AI Plant & Crop Disease Classifier",
    category: "AI & ML",
    technology: ["Python", "TensorFlow/Keras", "OpenCV", "Flask", "React"],
    shortDesc: "Deep learning computer vision application for detecting crop diseases from leaf photo uploads.",
    problem: "Agricultural final year project requiring high-accuracy ML model for detecting plant leaf pathogens.",
    solution: "Trained a Convolutional Neural Network (CNN) with 98.2% accuracy on 15,000+ plant image datasets, integrated into a sleek web portal.",
    keyFeatures: [
      "Upload Leaf Image or Camera Capture",
      "Instant Pathogen & Disease Identification",
      "Percentage Confidence Score Breakdown",
      "Actionable Treatment & Remedy Advisory",
    ],
    image: projectAiCrop,
    // liveUrl: "https://techindia-ai-crop.web.app",
    // githubUrl: "https://github.com/techindia-solutions/ai-crop-disease-web",
  },
  {
    id: "local-business-ecommerce",
    title: "Hardware & Tech Store Business Website",
    category: "Websites",
    technology: ["React", "Tailwind CSS", "WhatsApp API", "Framer Motion"],
    shortDesc: "High-converting online store & service showcase website for a regional hardware business.",
    problem: "Local business needed an online web showcase to receive orders from nearby customers digitally.",
    solution: "Designed a mobile-first catalog website with direct WhatsApp cart checkout, product filtering, and instant customer calling.",
    keyFeatures: [
      "Interactive Product Catalog with Search & Filter",
      "WhatsApp Cart & Direct Order Dispatch",
      "Google Maps Store Locator",
      "Fast Page Load Speed (< 1 Second)",
    ],
    image: projectEcomStore,
    // liveUrl: "https://techindia-hardware-store.web.app",
    // githubUrl: "https://github.com/techindia-solutions/hardware-store-web",
  },
  {
    id: "pdf-hub",
    title: "All-in-One PDF Hub",
    category: "MERN Stack",
    technology: ["Python", "React", "Flask", "TypeScript", "Tailwind CSS"],
    shortDesc: "12+ smart tools to manage, merge, split, compress, convert, and manipulate PDF documents in one unified platform.",
    problem: "Users needed multiple separate tools and websites to perform different PDF operations like merging, splitting, compressing, and converting files.",
    solution: "Built a full-stack PDF management platform with a Python backend for powerful PDF processing and a React frontend for a seamless, intuitive user experience.",
    keyFeatures: [
      "Merge, Split & Rearrange PDF Pages",
      "PDF Compression & File Size Optimization",
      "PDF to Image & Image to PDF Conversion",
      "Watermark, Password Protect & Unlock PDFs",
    ],
    image: projectPdfHub,
    // liveUrl: "https://techindia-pdf-hub.web.app",
    // githubUrl: "https://github.com/techindia-solutions/pdf-hub",
  },
  {
    id: "media-dl-downloader",
    title: "MediaDL – Social Media Downloader",
    category: "Websites",
    technology: ["React", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
    shortDesc: "Download audio, video, and photos from all major social media platforms in one click.",
    problem: "Downloading content from social media platforms like Instagram, TikTok, Facebook, and YouTube required visiting different sketchy websites with excessive ads.",
    solution: "Developed a clean, ad-free social media content downloader supporting 10+ platforms with instant URL-paste-and-download functionality.",
    keyFeatures: [
      "Support for Instagram, TikTok, Facebook, YouTube & More",
      "Download Videos, Reels, Stories & Audio",
      "Multiple Quality & Format Options",
      "No Login Required – Paste URL & Download",
    ],
    image: projectMediaDl,
    // liveUrl: "https://techindia-media-dl.web.app",
    // githubUrl: "https://github.com/techindia-solutions/media-dl",
  },
  {
    id: "pulse-guard-monitor",
    title: "PulseGuard – 24/7 Server Monitor",
    category: "Websites",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    shortDesc: "24/7 URL & API monitoring platform with real-time ping checks, uptime graphs, and instant alert notifications.",
    problem: "Developers and businesses needed an affordable, self-hostable solution to monitor their servers, APIs, and websites for downtime and performance issues.",
    solution: "Built a Next.js monitoring dashboard with automated ping checks, live status graphs, server keep-alive functionality, and multi-channel alert notifications.",
    keyFeatures: [
      "URL / API Monitoring with Real-Time Ping Checks",
      "Server Keep-Alive & Auto-Restart Triggers",
      "Live Uptime, Downtime & Performance Graphs",
      "Instant Alerts via Email, Telegram & Webhooks",
    ],
    image: projectPulseGuard,
      // liveUrl: "https://techindia-pulse-guard.web.app",
      // githubUrl: "https://github.com/techindia-solutions/pulse-guard",
  },
  {
    id: "student-attendance-system",
    title: "Smart Student Attendance System",
    category: "Final Year",
    technology: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    shortDesc: "Digital attendance platform for colleges with QR check-ins, faculty dashboards, and student reports.",
    problem: "Manual attendance registers made it difficult for faculty to track records accurately and prepare monthly reports.",
    solution: "Created a role-based attendance system with QR-based check-ins, course management, and downloadable attendance summaries.",
    keyFeatures: [
      "QR Code Attendance Check-in",
      "Faculty, Student & Admin Dashboards",
      "Subject-wise Attendance Reports",
      "Exportable Monthly Summary Reports",
    ],
    image: "https://qaptive.co.in/assets/images/quick_attendance.png",
  },
  {
    id: "restaurant-ordering-website",
    title: "Restaurant Ordering Website",
    category: "Websites",
    technology: ["React", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    shortDesc: "Mobile-first restaurant website with digital menu browsing, table enquiries, and WhatsApp ordering.",
    problem: "A local restaurant needed a simple way to showcase its menu and receive direct online orders without marketplace fees.",
    solution: "Built a fast, responsive menu website with category filters, product highlights, location details, and direct WhatsApp checkout.",
    keyFeatures: [
      "Digital Menu with Category Filters",
      "Direct WhatsApp Order Enquiries",
      "Offers, Combos & Featured Items",
      "Google Maps Location Integration",
    ],
    image: "https://us-en-cdn.square.ncms.io/content/uploads/2022/10/ECOM_Order-Online_Restaurant_Pro15_PF_SIMP_288dpi_03_CJE_Full.jpg.jpeg",
  },
  {
    id: "customer-feedback-analyzer",
    title: "AI Customer Feedback Analyzer",
    category: "AI & ML",
    technology: ["Python", "NLP", "scikit-learn", "Flask", "React"],
    shortDesc: "AI dashboard that analyzes customer reviews, detects sentiment, and highlights recurring business issues.",
    problem: "Businesses were collecting reviews but lacked a quick way to identify sentiment trends and common customer complaints.",
    solution: "Developed an NLP-powered dashboard that classifies feedback, summarizes themes, and visualizes sentiment changes over time.",
    keyFeatures: [
      "Positive, Neutral & Negative Sentiment Detection",
      "Keyword and Complaint Theme Extraction",
      "Trend Charts with Date Filtering",
      "CSV Review Upload and Export",
    ],
    image: "https://images.squarespace-cdn.com/content/v1/651ca6154636980de55dfdbe/b44db906-fe22-4027-985c-43cf516030ea/Screenshot%2B2025-04-26%2Bat%2B11.37.45%E2%80%AFPM.jpeg",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "founder-Rameshwar",
    name: "Rameshwar G.",
    role: "Co-Founder & Lead Technology Architect",
    isFounder: true,
    bio: "Co-Founder of TECHINDIA SOLUTIONS, focused on building practical digital solutions, web applications, and delivering technology solutions for students and small businesses.",
    skills: [
      "React & TypeScript",
      "Tailwind CSS & UI/UX",
      "Node.js & APIs",
      "Bug Fixing",
      "Deployment & Hosting",
    ],
    responsibilities: [
      "Frontend UI Component Implementation",
      "Responsive Web Design & Mobile Tuning",
      "Bug Diagnostics & Rapid Troubleshooting",
      "Deployment & Hosting Setup",
    ],
    linkedin:
      "https://www.linkedin.com/in/rameshwar-gaud-1bbbba341/",
    github: "https://github.com/simran519",
    avatar:
      "https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE=",
  },


  {
    id: "founder-Abhishek",
    name: "Abhishek Y.",
    role: "Co-Founder & Full-Stack Developer",
    isFounder: true,
    bio: "Co-Founder of TECHINDIA SOLUTIONS, focused on developing modern web applications, responsive interfaces, integrations, troubleshooting, and reliable deployment solutions.",
    skills: [
      "Full-Stack MERN",
      "Python & AI/ML",
      "React / Next.js",
      "Database Architecture",
      "Project Guidance",
    ],

    responsibilities: [
      "System Architecture & Core Development",
      "Client Requirement Analysis & Quotations",
      "Final Project Delivery & Quality Assurance",
      "Technical Guidance & Support",
    ],
    linkedin: "https://www.linkedin.com/in/abhishek-yadav-292ba9308/",
    github: "https://github.com/Abhishek-Coder-01r",
    avatar:
      "https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=DUKuRxK9OINHXt3_4m-GxraeoDDlhNuCbA9hp6FotFE=",
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "iso-9001-cert",
    title: "Enterprise Quality Management Certification",
    issuer: "ISO Quality Standards Organization",
    recipient: "TECHINDIA SOLUTIONS",
    year: "2025 - 2026",
    image: techIndiaCert,
    verificationUrl: "https://techindiasolutions.com/verify/ISO-9001-2025",
    description: "Verified compliance with quality standards for software engineering, website development, and IT support services.",
  },
  {
    id: "fullstack-excellence",
    title: "Web Engineering & Software Solution Recognition",
    issuer: "Digital Tech Alliance India",
    recipient: "TECHINDIA SOLUTIONS Team",
    year: "2025",
    image: techIndiaCert,
    verificationUrl: "https://techindiasolutions.com/verify/DTA-2025-DEV",
    description: "Recognized for high-quality web application development and student project mentoring excellence.",
  },
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    clientName: "Rahul Sharma",
    clientType: "College Student",
    serviceUsed: "Final Year B.Tech Project (MERN)",
    rating: 5.0,
    reviewText: "TECHINDIA SOLUTIONS guided me step by step through my final year project. The code was very clean, documented, and ran smoothly during my external viva presentation!",
    date: "Jan 2026",
  },
  {
    id: "rev-2",
    clientName: "Priya V.",
    clientType: "Shop Owner",
    serviceUsed: "Shop Website & Billing",
    rating: 5.0,
    reviewText: "They created a simple website for my retail shop. Now my local customers can check products online and send order requests directly on my WhatsApp. Excellent work!",
    date: "Feb 2026",
  },
  {
    id: "rev-3",
    clientName: "Amit Kumar",
    clientType: "Small Business",
    serviceUsed: "Website Development & Bug Fixing",
    rating: 5.0,
    reviewText: "My previous business website had broken layouts on mobile. TECHINDIA SOLUTIONS fixed all bugs within 24 hours and modernized the entire look. Highly recommended!",
    date: "Dec 2025",
  },
  {
    id: "rev-4",
    clientName: "Sneha Patel",
    clientType: "College Student",
    serviceUsed: "AI / ML Major Project",
    rating: 5.0,
    reviewText: "The AI disease detection model developed by TechIndia achieved great accuracy. The team explained the entire Python code so well that I scored top grade!",
    date: "Nov 2025",
  },

  {
    id: "rev-5",
    clientName: "Vikash Singh",
    clientType: "College Student",
    serviceUsed: "Java Full Stack Project",
    rating: 5.0,
    reviewText: "I was struggling with my Java project and needed help understanding the backend. The team explained everything clearly and helped me make my project much more professional.",
    date: "Mar 2026",
  },
  {
    id: "rev-6",
    clientName: "Neha Joshi",
    clientType: "Freelancer",
    serviceUsed: "Portfolio Website",
    rating: 5.0,
    reviewText: "My new portfolio website looks modern and professional. The design is responsive, loads quickly, and perfectly represents my work. Really happy with the final result!",
    date: "Mar 2026",
  },
  {
    id: "rev-7",
    clientName: "Rohit Verma",
    clientType: "Small Business",
    serviceUsed: "E-Commerce Website",
    rating: 5.0,
    reviewText: "TECHINDIA SOLUTIONS built an easy-to-manage online store for my business. Product management and order handling are now much easier for me.",
    date: "Apr 2026",
  },
  {
    id: "rev-8",
    clientName: "Kavita Deshmukh",
    clientType: "College Student",
    serviceUsed: "Python Project Development",
    rating: 5.0,
    reviewText: "The Python project was completed with clean code and proper documentation. I also received excellent guidance for explaining the project during my presentation.",
    date: "Apr 2026",
  },
  {
    id: "rev-9",
    clientName: "Arjun Mehta",
    clientType: "Startup Founder",
    serviceUsed: "Business Website",
    rating: 5.0,
    reviewText: "They understood our startup requirements quickly and delivered a clean business website. Communication was smooth and the website works perfectly on mobile devices.",
    date: "May 2026",
  },
  {
    id: "rev-10",
    clientName: "Pooja Yadav",
    clientType: "College Student",
    serviceUsed: "React.js Project",
    rating: 5.0,
    reviewText: "I needed help with my React project and the team made the difficult concepts very easy to understand. The final project looked professional and worked without any major issues.",
    date: "May 2026",
  },
  {
    id: "rev-11",
    clientName: "Saurabh Gupta",
    clientType: "Business Owner",
    serviceUsed: "Website Redesign",
    rating: 5.0,
    reviewText: "Our old website looked outdated and was difficult to use. TECHINDIA SOLUTIONS redesigned it with a fresh interface and made the entire website responsive.",
    date: "Jun 2026",
  },
  {
    id: "rev-12",
    clientName: "Anjali Rao",
    clientType: "College Student",
    serviceUsed: "Final Year Android App",
    rating: 5.0,
    reviewText: "The Android application project was exactly what I needed for my final year submission. The team provided excellent technical guidance and helped me understand every feature.",
    date: "Jun 2026",
  },
  {
    id: "rev-13",
    clientName: "Manish Tiwari",
    clientType: "Local Business Owner",
    serviceUsed: "Inventory Management System",
    rating: 5.0,
    reviewText: "The inventory system has made it much easier to track our products and stock levels. Everything is simple to use and the team was very supportive throughout the project.",
    date: "Jul 2026",
  },
  {
    id: "rev-14",
    clientName: "Simran Kaur",
    clientType: "College Student",
    serviceUsed: "Data Science Project",
    rating: 5.0,
    reviewText: "I received great support with my data science project. The team explained the dataset, Python implementation, and results in a way that was easy for me to present confidently.",
    date: "Jul 2026",
  },
]; 

export const WHY_CHOOSE_US = [
  {
    title: "Requirement-Focused Development",
    description: "We build exactly what you need without bloated costs or unnecessary features.",
    icon: "Target",
  },
  {
    title: "Mobile-First & Responsive",
    description: "Every website and web application looks flawless on phones, tablets, and desktops.",
    icon: "Smartphone",
  },
  {
    title: "Practical Technical Support",
    description: "Get direct assistance from developers who wrote the code, not automated support bots.",
    icon: "Headphones",
  },
  {
    title: "Transparent & Fair Pricing",
    description: "No hidden charges. Clear project scopes with milestone-based fair quotes.",
    icon: "ShieldCheck",
  },
  {
    title: "Project Guidance & Viva Support",
    description: "Complete explanations of code logic so students can confidently explain their work.",
    icon: "BookOpenCheck",
  },
  {
    title: "Post-Delivery Support",
    description: "We don't leave after handover. Enjoy post-delivery troubleshooting and maintenance.",
    icon: "Clock",
  },
];

export const HOW_IT_WORKS = [
  { step: 1, title: "Submit Requirement", desc: "Fill our quick form or message us on WhatsApp with your project ideas or website details." },
  { step: 2, title: "Discuss Requirements", desc: "Our tech team reviews your requirement and connects with you to clarify scope & features." },
  { step: 3, title: "Plan & Quote", desc: "We provide a clear development roadmap, estimated timeline, and fair quotation." },
  { step: 4, title: "Development", desc: "We build your project using modern, clean code standards with regular progress updates." },
  { step: 5, title: "Testing", desc: "Comprehensive testing across devices, mobile screens, database checks, and error fixes." },
  { step: 6, title: "Delivery & Support", desc: "Final source code delivery, deployment to live server, setup guide, and post-delivery support." },
];

export const WHO_WE_SERVE = [
  { title: "Students", desc: "B.Tech, BCA, MCA, and Diploma students needing mini/major project guidance and clean code.", icon: "GraduationCap" },
  { title: "Schools & Colleges", desc: "Educational institutions needing modern informative websites and event portals.", icon: "School" },
  { title: "Retail Shops", desc: "Local shops seeking product catalog websites with WhatsApp quick ordering.", icon: "Store" },
  { title: "Small Businesses", desc: "Growing local companies needing professional web presence to attract customers.", icon: "Building2" },
  { title: "Startups & Enterprises", desc: "Early stage startups needing MVP web apps, APIs, and AI integrations.", icon: "Rocket" },
  { title: "Individuals", desc: "Professionals needing personal portfolio sites, resume web apps, or custom scripts.", icon: "User" },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "What services does TECHINDIA SOLUTIONS provide?",
    answer: "TECHINDIA SOLUTIONS provides end-to-end Final Year Projects, Mini & Major College Projects, Custom Website Development, Shop & Business Websites, AI / ML Solutions, Full-Stack Python/Java/MERN Development, and Bug Fixing & Technical Support.",
  },
  {
    question: "Do you build websites for shops and small businesses?",
    answer: "Yes! We specialize in lightweight, fast, mobile-friendly shop websites that showcase your products and services, include direct WhatsApp order/enquiry buttons, and display your location on Google Maps.",
  },
  {
    question: "Do you work with college/final-year projects?",
    answer: "Absolutely. We help Computer Science, IT, and Engineering students (B.Tech, BCA, MCA, Diploma) build working final year and semester projects in MERN stack, Python, AI/ML, Java, and PHP with clean code and viva guidance.",
  },
  {
    question: "Can you update an existing website?",
    answer: "Yes. If your current website has broken layouts, slow speed, old content, or bugs, our team can fix issues, modernize the UI design, and optimize performance while keeping your domain.",
  },
  {
    question: "Which technologies do you work with?",
    answer: "We work with modern technology stacks including React, TypeScript, Node.js, Express, MongoDB, Python (Flask/FastAPI, Machine Learning, TensorFlow, OpenCV), Java (Spring Boot), HTML5, CSS3, Tailwind CSS, and Git.",
  },
  {
    question: "How can I submit my requirements?",
    answer: "You can click on 'Request a Project' to fill out our quick requirement form, or directly message us on WhatsApp with your project title or details.",
  },
  {
    question: "How does the project quotation process work?",
    answer: "After receiving your requirements, we review the scope of work and send you a clear, transparent quotation with broken-down milestones and estimated delivery timeline. There are no hidden fees.",
  },
  {
    question: "Do you provide post-delivery support?",
    answer: "Yes, all our projects and websites come with post-delivery technical support to ensure your website runs smoothly, hosting setup is verified, and any questions are answered.",
  },
];
