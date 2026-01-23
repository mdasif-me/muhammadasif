import { IProject } from "../interface"

export const projects: IProject[] = [
  {
    id: "1",
    name: "Digital Librarium",
    type: "Institutional Software Platform",
    role: "Full Stack Developer",
    techStack: ["Next.js", "Tailwind CSS", "REST APIs", "Database Design"],
    price: "$120",
    url: "https://www.digitallibrarium.com/",
    images: [
      "/images/projects/digital-library-website-hero.png",
      "/images/projects/digital-library-projects.png",
    ],
    overview:
      "Digital Librarium is a modern, production-ready library automation platform built to help educational institutions, corporate libraries, and public organizations transition from manual, paper-based operations to a fully digital system. The platform is designed with a strong focus on performance, security, and scalability, enabling institutions to manage books, members, visitors, and access control from a single, centralized system. By replacing outdated workflows with streamlined digital processes, Digital Librarium significantly improves operational efficiency and data accuracy.",
    problem:
      "Many libraries relied heavily on manual cataloging, handwritten visitor logs, and disconnected record systems. This resulted in slow book circulation, frequent inventory mismatches, limited visibility into visitor activity, and increased security risks. Staff spent excessive time on administrative tasks instead of focusing on service quality.",
    approach:
      "I worked closely with librarians and administrative staff to understand real-world workflows and daily pain points. Based on these insights, I designed role-based access flows and intuitive interfaces that prioritized speed and ease of use. From the start, the system was architected for scalability, maintainability, and reliable performance, even in environments with limited technical infrastructure.",
    solution:
      "The final solution includes digital book cataloging, member and staff management, barcode-based book issuing and returns, visitor tracking, automated fine calculation, and detailed reporting. Role-based access control ensures that sensitive data remains protected while allowing staff to perform their responsibilities efficiently.",
    results:
      "The platform reduced average book checkout time by 40 percent, improved inventory accuracy by 95 percent, and significantly strengthened security and reporting within the first three months of active use.",
    businessImpact:
      "Digital Librarium helped institutions modernize their operations, reduce administrative overhead, minimize human error, and gain real-time insights into library usage and asset management.",
    learning:
      "This project reinforced the importance of building offline-aware and resilient systems for institutions operating in regions with unstable or limited internet connectivity.",
  },
  {
    id: "2",
    name: "Document Management System (DMS)",
    type: "Enterprise SaaS Application",
    role: "Frontend Software Engineer",
    techStack: [
      "Next.js",
      "TypeScript",
      "State Management",
      "Performance Optimization",
    ],
    price: "$800",
    url: "https://dms.intertechbd.com/",
    images: [
      "/images/projects/document-management-system-files.png",
      "/images/projects/document-management-system-repository.png",
    ],
    overview:
      "This project involved building a high-performance, enterprise-grade frontend for a Document Management System used by corporate teams to securely store, organize, and retrieve business-critical documents. The frontend was designed to handle large volumes of files while maintaining fast response times, intuitive navigation, and strict access control policies suitable for enterprise environments.",
    problem:
      "Corporate users struggled with slow document retrieval, poorly organized file structures, unclear permission settings, and low adoption of legacy document systems. These issues reduced productivity and increased the risk of mismanaged or unauthorized document access.",
    approach:
      "I analyzed real user workflows to identify bottlenecks in document discovery and daily usage. The UI was designed around familiar folder-based navigation while optimizing performance for large datasets. Special attention was given to state management, rendering efficiency, and predictable user interactions.",
    solution:
      "The frontend includes advanced search and filtering, drag-and-drop file organization, granular role-based permission controls, and optimistic UI updates that provide instant feedback to users. The result is a fast, reliable, and user-friendly document management experience.",
    results:
      "Document retrieval speed improved by 300 percent, and the system achieved a 90 percent user adoption rate within the first week of deployment.",
    businessImpact:
      "The solution increased overall team productivity by reducing time spent searching for documents and helped organizations maintain better compliance through improved access control and auditability.",
    learning:
      "This project highlighted the importance of virtualization, caching, and structured state management when building enterprise applications that handle large and complex data sets.",
  },
  {
    id: "3",
    name: "Let's Chat",
    type: "Cross-Platform Communication Application",
    role: "Frontend Software Engineer",
    techStack: ["Next.js", "Electron.js", "WebSockets"],
    price: "$500",
    url: "https://dms.intertechbd.com",
    images: [
      "/images/projects/lets-chat-dashboard.png",
      "/images/projects/lets-chat-gallery.png",
    ],
    overview:
      "Let's Chat is a real-time messaging application built to support both web and desktop platforms using a single shared codebase. The application is designed for secure, low-latency communication and delivers a consistent user experience across devices, making it suitable for both personal use and professional team collaboration.",
    problem:
      "Users needed a messaging solution that worked seamlessly across desktop and web platforms while maintaining fast message delivery, reliable connectivity, and strong privacy protections.",
    approach:
      "I designed a shared architecture that allowed web and desktop clients to reuse the same core logic. Performance and security were treated as first-class concerns, with a strong emphasis on real-time communication reliability and scalable message handling.",
    solution:
      "The application supports real-time socket-based messaging, secure authentication, file sharing, encrypted message storage, and cross-platform desktop deployment using Electron. This approach ensured consistent behavior across platforms while reducing development complexity.",
    results:
      "The system consistently achieved message latency below 50 milliseconds and was successfully deployed across Windows, macOS, and web platforms using a unified codebase.",
    businessImpact:
      "By consolidating multiple platforms into a single codebase, the project reduced development and maintenance costs while enabling faster feature delivery.",
    learning:
      "Building real-time applications requires careful balancing between performance, background processing, and resource usage, particularly on desktop environments.",
  },
]
