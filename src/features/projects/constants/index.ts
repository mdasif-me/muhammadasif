import { IProject } from "../interface"

export const projects: IProject[] = [
  {
    id: "aungsha",
    name: "Aungsha",
    type: "Digital Real Estate Investment Platform",
    status: "In Progress",
    role: "Frontend Software Engineer",
    techStack: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "TanStack Query",
      "Tailwind CSS",
      "Next I18n",
      "GraphQL",
    ],
    price: "$1400",
    url: "http://aungsha.com/",
    images: [
      "/images/projects/aungsha/hero.png",
      "/images/projects/aungsha/about.png",
    ],
    overview:
      "Aungsha is a digital real estate investment platform built to make property investing more accessible, transparent, and secure. The platform allows investors to explore vetted real estate projects, review clear financial details, and invest digitally with confidence. By removing traditional barriers such as high entry costs, limited information access, and manual processes, Aungsha introduces a modern, structured approach to real estate investment focused on long-term value and responsible growth.",
    problem:
      "Traditional real estate investing often involves high capital requirements, limited transparency, fragmented information, and reliance on manual or offline processes. Many potential investors struggle to access verified projects, understand investment timelines, or track progress after investing. This lack of clarity creates trust issues, increases risk, and discourages long-term participation in real estate markets.",
    approach:
      "The platform was designed with a strong emphasis on clarity, trust, and usability. I focused on building a clean, intuitive frontend experience that clearly communicates project details, investment structures, timelines, and progress updates. Close collaboration with stakeholders ensured that real-world investor concerns were reflected in the interface. The frontend architecture was planned for scalability, multilingual support, and long-term maintainability, enabling future expansion as the platform grows.",
    solution:
      "Aungsha delivers a secure digital investment experience where users can explore carefully vetted real estate projects, access transparent financial data, and complete investments through structured digital flows. The platform presents clear project descriptions, investment terms, timelines, and ongoing updates. Secure infrastructure and verified transaction processes protect investor data and records, while a responsive, accessible UI ensures usability across devices. The system prioritizes long-term, responsible investment opportunities over short-term speculation.",
    results:
      "The platform provides investors with a clear understanding of where and how their money is invested, improving confidence and decision-making. Users benefit from simplified onboarding, transparent project visibility, and structured investment tracking. Early adoption shows strong engagement from investors seeking a trustworthy digital alternative to traditional real estate investment methods.",
    businessImpact:
      "Aungsha connects capital with carefully selected real estate projects, supporting responsible development and long-term value creation. The platform helps developers reach qualified investors while offering investors a reliable, transparent way to participate in real estate growth. By digitizing the investment process, Aungsha reduces operational friction, increases trust, and strengthens participation in the real estate investment ecosystem.",
    learning:
      "This project reinforced the importance of trust-driven design, clear information architecture, and transparency when building financial and investment platforms. It highlighted how thoughtful UI, structured data presentation, and secure digital flows directly influence user confidence and long-term platform adoption.",
  },
  {
    id: "bms",
    name: "Biswas Management Software (BMS)",
    type: "Construction Management & Monitoring Platform",
    role: "Frontend Software Engineer",
    status: "On Hold",
    techStack: [
      "Next.js",
      "TypeScript",
      "Mapbox GL JS",
      "3D Map Visualization",
      "Tailwind CSS",
      "GraphQL",
      "State Management",
    ],
    price: "$2200",
    url: "",
    images: [
      "/images/projects/bms/login.png",
      "/images/projects/bms/dashboard.png",
    ],
    overview:
      "Biswas Management Software (BMS) is a comprehensive construction management platform designed to manage the entire building lifecycle from pre-agreement stages to final asset handover. The system centralizes project workflows, financial controls, material tracking, and real-time site monitoring into a single digital solution. With advanced 3D map visualization and intelligent fraud detection, BMS enables management teams to maintain full visibility, accountability, and control across complex construction projects.",
    problem:
      "Construction projects often suffer from fragmented processes, manual reporting, limited site visibility, and delayed detection of financial or material discrepancies. Senior management typically relies on delayed reports, making it difficult to identify risks, fraud, or project delays in real time. Lack of role-based accountability and disconnected workflows further increase operational inefficiencies and cost overruns.",
    approach:
      "The platform was architected to reflect real-world construction workflows and approval chains. I focused on building a role-driven interface where each stakeholder sees relevant data, actions, and alerts based on their responsibility. Special emphasis was placed on real-time visualization, budget intelligence, and step-by-step process enforcement to ensure that no phase of construction is skipped or mismanaged. The frontend was designed for scalability, performance, and clarity in high-data environments.",
    solution:
      "BMS delivers a modular construction management system covering every stage of the building process. The platform includes structured workflows such as Before Agreement, Land Verification, Agreement Meetings, Agreement Finalization, After Agreement processes, and Role Selection. A centralized dashboard provides real-time project insights, including task progress, financial health, and automated fraud alerts based on budget benchmarks, bill submissions, and BBQ comparisons. Real-time project locations are visualized using Mapbox with 3D views, enabling management to monitor site progress geographically. The system also manages project tasks, material requests, finance tracking, purchasing, inventory control, bill submissions, document management, and asset tracking through a unified interface.",
    results:
      "The system enabled management teams to detect budget anomalies and operational risks at early stages through automated fraud alerts and real-time data visualization. Project transparency improved significantly, reducing dependency on manual reporting. Teams experienced faster decision-making, clearer accountability, and improved coordination across departments.",
    businessImpact:
      "BMS helps construction firms reduce financial leakage, prevent fraud, and maintain tighter control over large-scale projects. By digitizing workflows and enforcing structured processes, the platform minimizes human error, improves compliance, and increases overall project efficiency. Real-time insights empower leadership to make informed decisions, protecting both timelines and budgets.",
    learning:
      "This project strengthened my understanding of domain-driven UI design for complex enterprise systems. It highlighted the importance of data visualization, role-based access control, and proactive alert systems when building software for high-risk, high-cost industries like construction.",
  },
  {
    id: "property-chain-platform",
    name: "Property Chain",
    type: "PropTech SaaS Platform",
    role: "Frontend Software Engineer",
    status: "In Progress",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "State Management",
      "QR Code Integration",
      "Responsive Web Architecture",
    ],
    price: "$1800",
    url: "",
    images: [
      "/images/projects/pms/dashboard.png",
      "/images/projects/pms/project-view.png",
    ],
    overview:
      "This platform is a comprehensive property sales and chain management system designed to digitally manage complex real estate transactions across web and mobile applications. It centralizes property listings, sales workflows, agent operations, revenue tracking, and approvals while managing interconnected property chains where multiple buyers and sellers depend on one another. The system introduces transparency, traceability, and real-time status monitoring to reduce transaction risk and sales collapse.",
    problem:
      "Traditional property transactions often rely on disconnected tools, manual verification, and delayed communication between agents, clients, and management. Property chains are especially fragile, where a single delay in approval, documentation, or payment can break the entire sequence and collapse multiple sales. Additionally, verifying the authenticity of property sales and preventing fraudulent listings remains a major challenge in real estate operations.",
    approach:
      "The software was designed as a unified digital ecosystem connected across a website and mobile applications. I focused on creating a role-based experience for administrators, sales agents, employees, and clients, ensuring each user has clear visibility into their responsibilities and transaction status. The UI architecture emphasizes real-time updates, traceable workflows, and frictionless navigation across complex sales pipelines.",
    solution:
      "The platform manages the entire property sales lifecycle, including dashboards, projects, sales tracking, revenue management, agents and employees, client records, withdrawals, approvals, and system settings. Property chain logic links dependent transactions together, allowing management to monitor chain health and identify risks early. Every sale is verified through a QR code system, enabling instant validation of original property records, transaction authenticity, and approval status via web or mobile scanning. This ensures trust, reduces fraud, and accelerates decision-making.",
    results:
      "The system significantly reduced failed transactions caused by broken property chains by improving visibility and early risk detection. Sales verification became faster and more reliable through QR-based validation. Teams reported improved coordination between agents, management, and clients, resulting in smoother transaction flows and higher deal completion rates.",
    businessImpact:
      "This platform helps real estate companies protect revenue, improve sales reliability, and build trust with clients. By digitizing approvals, tracking dependencies, and verifying transactions, the software minimizes fraud, operational delays, and costly deal collapses. The result is a more resilient, transparent, and scalable real estate sales operation.",
    learning:
      "This project deepened my understanding of transactional systems, dependency-based workflows, and trust mechanisms in real estate software. It reinforced the importance of real-time state synchronization, role-based access control, and verification layers when building high-stakes financial platforms.",
  },
  {
    id: "digital-librarium",
    name: "Digital Librarium",
    type: "Institutional Software Platform",
    role: "Full Stack Developer",
    status: "Completed",
    techStack: ["Next.js", "Tailwind CSS", "REST APIs", "Database Design"],
    price: "$120",
    url: "https://www.digitallibrarium.com/",
    images: [
      "/images/projects/dl/digital-library-website-hero.png",
      "/images/projects/dl/digital-library-projects.png",
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
    id: "document-management-system",
    name: "Document Management System (DMS)",
    type: "Enterprise SaaS Application",
    role: "Frontend Software Engineer",
    status: "Completed",
    techStack: [
      "Next.js",
      "TypeScript",
      "State Management",
      "Performance Optimization",
    ],
    price: "$800",
    url: "https://dms.intertechbd.com/",
    images: [
      "/images/projects/dms/document-management-system-files.png",
      "/images/projects/dms/document-management-system-repository.png",
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
    id: "lets-chat",
    name: "Let's Chat",
    type: "Cross-Platform Communication Application",
    role: "Frontend Software Engineer",
    status: "Completed",
    techStack: ["Next.js", "Electron.js", "WebSockets"],
    price: "$500",
    url: "https://dms.intertechbd.com",
    images: [
      "/images/projects/lc/lets-chat-dashboard.png",
      "/images/projects/lc/lets-chat-gallery.png",
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
