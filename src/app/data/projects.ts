export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: {
    backend: string[];
    frontend: string[];
    databases: string[];
    tools: string[];
  };
  architecture: string;
  features: string[];
  futureScope: string[];
}

export const projects: Project[] = [
  {
    id: "digilocker",
    title: "DigiLocker - Digital Document Management System",
    description: "A comprehensive UX/UI design for DigiLocker, India's official digital document storage and authentication platform. This design showcases a modern, secure, and user-friendly interface for managing digital documents, government certificates, and identity proofs with enterprise-grade security.",
    problem: "Citizens faced challenges in managing multiple physical and digital documents, government certificates, and identity proofs. There was no centralized, secure, and easily accessible platform for document storage and verification. The lack of a unified digital document system led to inefficiency, security concerns, and difficulty in document authentication for various official and institutional purposes.",
    solution: "A comprehensive digital document management platform that provides users with a secure cloud-based vault for storing, organizing, and sharing important documents. The interface features intuitive navigation, document categorization by type, one-click sharing capabilities, and integration with government databases for certificate verification. The design emphasizes security, accessibility, and user trust through clear information hierarchy, transparent security indicators, and simplified authentication flows.",
    techStack: {
      backend: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "AWS S3 Storage", "Government APIs"],
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux State Management"],
      databases: ["MongoDB", "Redis Caching"],
      tools: ["Figma", "Adobe Creative Suite", "Stripe for Paid Services", "AWS KMS", "TLS/SSL Encryption"]
    },
    architecture: "Enterprise-scale 3-tier architecture with a Node.js/Express backend providing RESTful APIs with government database integrations, a React/TypeScript frontend featuring responsive design patterns, and MongoDB for flexible document metadata storage. The system implements zero-knowledge encryption for document privacy, government API integrations for certificate verification, and S3-based cloud storage for reliable document backup. The UI design includes role-based access controls, audit logs, and comprehensive security indicators.",
    features: [
      "Digital Document Storage & Organization - Categorize documents by type (certificates, licenses, IDs, etc.)",
      "Secure One-Click Sharing - Share documents with organizations and institutions with time-limited access",
      "Document Verification - Real-time validation of government certificates and identity proofs",
      "Multi-Factor Authentication - Enhanced security with OTP, biometric, and email verification",
      "Document Timeline & History - Track document uploads, edits, and access logs",
      "Mobile-Responsive Interface - Seamless experience across all devices and screen sizes",
      "Bulk Upload & Organization - Organize documents using intelligent tagging and search",
      "Integration with Government Databases - Auto-fetch and verify official certificates",
      "QR Code Sharing - Generate secure QR codes for easy document sharing",
      "Notification System - Real-time alerts for document shares and access requests"
    ],
    futureScope: [
      "AI-powered Document Recognition - Automatic document type detection and categorization",
      "Blockchain Integration - Immutable document verification and smart contracts",
      "Multi-language Support - Regional language interfaces for wider accessibility",
      "Mobile App Development - Native iOS and Android applications with offline access",
      "Advanced Analytics - User insights and document usage patterns for institutions",
      "API Marketplace - Third-party integrations for educational and financial institutions",
      "Document Template Library - Pre-filled forms and auto-complete capabilities",
      "Video Identity Verification - Live verification for enhanced security",
      "Decentralized Storage Option - IPFS integration for users prioritizing privacy",
      "Accessibility Features - Enhanced support for users with disabilities"
    ]
  },
  {
    id: "presentation-analyzer",
    title: "Presentation Analyzer",
    description: "A comprehensive 2-tier web application for analyzing presentations using AI. The system evaluates both audio delivery and slide content, providing detailed feedback and professional PDF reports.",
    problem: "Presenters lack real-time feedback on their delivery quality and content accuracy. Manual evaluation of presentations is time-consuming and subjective, making it difficult for speakers to identify specific areas for improvement in both their vocal delivery and slide content.",
    solution: "An AI-powered platform that automatically analyzes presentations from multiple dimensions. It processes audio to evaluate pacing, emphasis, and vocal variety while simultaneously analyzing slides for accuracy, completeness, and visual appeal. The system generates comprehensive PDF reports with actionable feedback and a professional grading system (A+ to D).",
    techStack: {
      backend: ["Python 3.10+", "FastAPI", "SQLAlchemy", "Whisper AI", "ReportLab"],
      frontend: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "Axios", "React Router"],
      databases: ["SQLite"],
      tools: ["FFmpeg", "python-pptx"]
    },
    architecture: "2-tier architecture with a Python FastAPI backend handling AI analysis and PDF generation, and a React TypeScript frontend providing an interactive user interface. The backend uses SQLite for lightweight data persistence, Whisper AI for audio transcription and analysis, and integrates with python-pptx for PowerPoint processing. The frontend communicates with the backend via RESTful APIs, displaying analysis results with visual charts using Recharts.",
    features: [
      "Audio Analysis: Pacing, rhythm, strategic pause detection, keyword emphasis",
      "Presentation Analysis: Accuracy validation, completeness checking, relevance scoring",
      "Slide-by-slide synchronization with audio",
      "Professional grading system (A+ to D)",
      "PDF report generation",
      "User authentication and management",
      "Analysis history and archival",
      "Downloadable reports"
    ],
    futureScope: [
      "Real-time feedback with browser-based audio processing",
      "Support for multiple languages and accents",
      "Integration with video platforms for live presentations",
      "Advanced NLP for content sentiment analysis",
      "Mobile app for on-the-go presentation review",
      "Comparison analytics across multiple presentations"
    ]
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    description: "A full-stack booking platform that enables seamless reservations across multiple hotel locations with real-time availability tracking and comprehensive property management features.",
    problem: "Hotel chains struggle with managing reservations, inventory, and guest information across multiple properties. Traditional systems lack real-time availability updates, suffer from double-bookings, and provide poor user experience for both guests and staff managing complex booking scenarios.",
    solution: "A comprehensive web-based hotel management system that provides a unified platform for room inventory management, guest reservations, and property administration. The system offers real-time availability synchronization across all properties, automated booking confirmation, and an intuitive admin dashboard for hotel staff to manage rooms, rates, and guest information.",
    techStack: {
      backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      frontend: ["React", "TypeScript", "Tailwind CSS", "State Management"],
      databases: ["PostgreSQL"],
      tools: ["Stripe/Payment Gateway", "Email Notifications", "Figma"]
    },
    architecture: "3-tier architecture with a Node.js/Express backend providing RESTful APIs, a React/TypeScript frontend for guest and admin interfaces, and PostgreSQL as the primary database. The system implements JWT-based authentication for secure access control, provides real-time room availability through database synchronization, and integrates payment processing for booking confirmation. Separate user interfaces are maintained for guests (booking) and administrators (property management).",
    features: [
      "Real-time room availability and booking",
      "Multi-property management",
      "Guest profile management",
      "Automated booking confirmations",
      "Admin dashboard with analytics",
      "Payment processing and invoicing",
      "Room maintenance tracking",
      "Guest review and rating system"
    ],
    futureScope: [
      "Mobile app for iOS and Android",
      "Integration with third-party booking platforms",
      "AI-powered dynamic pricing",
      "In-room automation controls",
      "Loyalty program integration",
      "Advanced reporting and business intelligence"
    ]
  },
  {
    id: "insurance-predictor",
    title: "Insurance Cost Predictor",
    description: "A machine learning model that predicts medical insurance costs based on patient data, providing real-world actionable insights for insurance companies and individuals planning healthcare expenses.",
    problem: "Insurance companies and individuals need accurate predictions of medical insurance premiums to make informed decisions. Traditional actuarial methods are complex and not easily accessible. There is a need for a data-driven solution that can consider multiple patient factors to provide reliable cost estimates.",
    solution: "A machine learning-based predictive system that analyzes patient demographics, health metrics, and lifestyle factors to accurately predict medical insurance costs. The model is trained on historical insurance data and provides both point predictions and confidence intervals, helping stakeholders understand the key factors driving insurance premiums.",
    techStack: {
      backend: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy"],
      frontend: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
      databases: ["SQLite"],
      tools: ["Jupyter Notebook", "Matplotlib", "Seaborn"]
    },
    architecture: "A two-tier web application with a Python Flask backend that hosts the trained machine learning model and provides prediction APIs. The frontend is a responsive web interface built with HTML5, CSS3, and JavaScript that allows users to input patient data and receive cost predictions. The model is trained using Scikit-learn on historical datasets and includes feature engineering for age, BMI, smoking status, region, and other relevant factors.",
    features: [
      "Accurate cost prediction using machine learning",
      "Multiple input parameters for comprehensive analysis",
      "Feature importance visualization",
      "Confidence interval generation",
      "Historical data tracking",
      "User-friendly prediction interface",
      "Export predictions to CSV",
      "Model performance metrics display"
    ],
    futureScope: [
      "Integration with insurance company databases",
      "Real-time model retraining with new data",
      "Advanced ensemble methods for higher accuracy",
      "Risk categorization and stratification",
      "Mobile app for individual users",
      "Integration with health tracking APIs (Fitbit, Apple Health)",
      "Compliance with healthcare regulations (HIPAA)"
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectIds(): string[] {
  return projects.map(project => project.id);
}
