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
      "The Document Management System is an enterprise-grade web application designed to help organizations securely store, organize, and manage large volumes of business-critical documents. The frontend was built with a strong emphasis on performance, usability, and access control, ensuring that employees can quickly locate and work with documents while maintaining compliance and data security. The system is tailored for corporate environments where reliability, scalability, and clear permission boundaries are essential for daily operations.",
    problem:
      "Organizations were relying on legacy document systems that were slow, difficult to navigate, and poorly structured. Users faced long search times, unclear access permissions, and inconsistent file organization, which negatively impacted productivity and increased the risk of unauthorized access or data mismanagement.",
    approach:
      "I closely analyzed how different teams interacted with documents on a daily basis to identify usability and performance bottlenecks. The interface was designed around familiar folder-based patterns while focusing heavily on rendering optimization, predictable state management, and smooth user interactions, even when handling large document repositories.",
    solution:
      "The final frontend solution includes advanced search and filtering, drag-and-drop file management, granular role-based permission control, and optimistic UI updates to ensure instant feedback. These features work together to create a fast, intuitive, and enterprise-ready document management experience.",
    results:
      "Document retrieval speed increased by 300 percent, and the platform achieved a 90 percent user adoption rate within the first week of deployment across internal teams.",
    businessImpact:
      "The system improved team efficiency, reduced operational friction, and strengthened compliance by giving organizations better control and visibility over their document assets.",
    learning:
      "This project emphasized the importance of performance optimization techniques such as virtualization, caching, and structured state management in large-scale enterprise applications.",
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
      "Let's Chat is a cross-platform, real-time messaging application developed to provide fast, secure, and reliable communication across both web and desktop environments. Built using a single shared codebase, the application delivers a consistent user experience while supporting real-time messaging, file sharing, and secure authentication. The product is suitable for personal communication as well as professional team collaboration where speed, privacy, and stability are critical.",
    problem:
      "Users required a messaging solution that could operate seamlessly across multiple platforms without sacrificing performance, reliability, or privacy. Existing solutions often introduced latency, inconsistent experiences between devices, or limited cross-platform support.",
    approach:
      "I designed a shared application architecture that allowed web and desktop clients to reuse the same core logic and UI patterns. Special attention was given to real-time performance, efficient message handling, and maintaining secure communication channels across platforms.",
    solution:
      "The application was built with real-time socket-based messaging, secure authentication, encrypted message storage, file sharing functionality, and Electron-based desktop deployment. This approach ensured consistent behavior and performance across all supported platforms.",
    results:
      "The system consistently delivered message latency below 50 milliseconds and was successfully deployed on Windows, macOS, and web platforms using a unified codebase.",
    businessImpact:
      "By maintaining a single cross-platform codebase, the project reduced development and maintenance costs while enabling faster iteration and feature delivery.",
    learning:
      "This project highlighted the importance of balancing real-time performance with system resource usage, particularly when building desktop applications that run continuously in the background.",
  },
]
