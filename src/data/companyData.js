// Data configuration for Harija Labs
// Phone: Primary contact: +91 63666 53022 (also referenced: 6366530022)
export const COMPANY_INFO = {
  name: "Harija Labs",
  legalName: "Harija Labs Private Limited",
  tagline: "Building Intelligence. Empowering People.",
  email: "harimohan.info@gmail.com",
  phone: "+91 63666 53022",
  phoneRaw: "916366653022",
  altPhone: "+91 63665 30022",
  location: "Bangalore, India",
  linkedInUrl: "https://www.linkedin.com/in/hari-m-47299b54/",
  instagramUrl: "https://www.instagram.com/er.harivibes",
  defaultWhatsAppMessage: "Hi Harija Labs, I'm interested in your AI services. I would like to discuss a potential project.",
};

export const getWhatsAppUrl = (customMessage) => {
  const message = customMessage || COMPANY_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
};

export const DIVISIONS = [
  {
    id: "services",
    tag: "Division 01",
    name: "Harija AI",
    title: "AI Services & Consulting",
    description: "Custom AI agents, intelligent automation pipelines, and robust full-stack software engineering for high-growth enterprises.",
    cta: "Explore AI Services",
    icon: "Cpu"
  },
  {
    id: "academy",
    tag: "Division 02",
    name: "Harija Academy",
    title: "AI Education & Training",
    description: "Practical, project-centric AI curriculum designed to empower developers and students with cutting-edge production skills.",
    cta: "Explore Academy Courses",
    icon: "GraduationCap"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    badge: "Core Expertise",
    description: "End-to-end intelligent systems, autonomous agents, and enterprise workflow transformations.",
    services: [
      {
        id: "ai-agents",
        title: "AI Agent Development",
        description: "Autonomous reasoning agents equipped with tool calling, self-correction, dynamic planning, and multi-step task execution.",
        tags: ["Multi-Agent", "LangGraph", "Tool Use", "AutoGPT"],
        whatsappMsg: "Hi Harija Labs, I am interested in building custom AI Agents for my business."
      },
      {
        id: "agentic-workflows",
        title: "Agentic AI Workflows",
        description: "Orchestrated multi-agent systems designed to coordinate complex business processes, document approvals, and data pipelines without human bottleneck.",
        tags: ["State Machines", "Human-in-the-Loop", "Async Workflows"],
        whatsappMsg: "Hi Harija Labs, I want to discuss automating our business processes with Agentic AI Workflows."
      },
      {
        id: "process-automation",
        title: "Business Process Automation",
        description: "Eliminate repetitive manual tasks through intelligent document processing, ERP/CRM integrations, and automated decision-making engines.",
        tags: ["RPA + LLM", "OCR", "Workflow Automation", "API Glue"],
        whatsappMsg: "Hi Harija Labs, we need help automating our business processes and manual operations."
      },
      {
        id: "genai-apps",
        title: "Generative AI Applications",
        description: "Production-ready enterprise GenAI applications tailored with guardrails, safety evals, prompt optimization, and intuitive UI.",
        tags: ["LLM Apps", "Content Engines", "Structured Outputs"],
        whatsappMsg: "Hi Harija Labs, I would like to develop a Generative AI application with production guardrails."
      },
      {
        id: "rag-systems",
        title: "Retrieval-Augmented Generation (RAG)",
        description: "High-accuracy knowledge retrieval systems combining hybrid semantic search, re-ranking, contextual chunking, and hallucination reduction.",
        tags: ["Vector DBs", "Hybrid Search", "Chunking", "Re-ranking"],
        whatsappMsg: "Hi Harija Labs, I want to implement a custom RAG solution on our proprietary company documents."
      },
      {
        id: "chatbots",
        title: "AI Chatbots & Virtual Assistants",
        description: "Context-aware conversational AI agents with voice/text support, conversational memory, CRM synchronization, and multi-channel integration.",
        tags: ["Omnichannel", "Memory Store", "Customer Support AI"],
        whatsappMsg: "Hi Harija Labs, we are looking to build a high-performance conversational AI assistant."
      },
      {
        id: "ml-solutions",
        title: "Machine Learning Solutions",
        description: "Predictive analytics, classification models, anomaly detection, and recommendation engines tailored for domain-specific business data.",
        tags: ["Predictive ML", "Anomaly Detection", "Scikit-learn", "PyTorch"],
        whatsappMsg: "Hi Harija Labs, I am looking for custom Machine Learning and predictive solutions."
      }
    ]
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    badge: "Enterprise Ready",
    description: "Robust, scalable, and resilient software backends, APIs, and modern frontend interfaces.",
    services: [
      {
        id: "python-backend",
        title: "Python Backend Development",
        description: "High-performance asynchronous backend services engineered with Python best practices, type safety, and clean architecture.",
        tags: ["Python 3.12+", "Asyncio", "Pydantic", "Clean Code"],
        whatsappMsg: "Hi Harija Labs, I need expert Python backend development services."
      },
      {
        id: "fastapi-dev",
        title: "FastAPI Development",
        description: "Ultra-fast RESTful and WebSocket microservices with automatic OpenAPI documentation, high concurrency, and data validation.",
        tags: ["FastAPI", "High Concurrency", "Async REST", "Swagger"],
        whatsappMsg: "Hi Harija Labs, I need production-grade FastAPI microservices development."
      },
      {
        id: "react-frontend",
        title: "React.js Frontend Development",
        description: "Modern, dynamic, and fluid user interfaces built with React, modular component systems, optimized rendering, and pixel-perfect design.",
        tags: ["React.js", "Responsive UI", "State Management", "Vite"],
        whatsappMsg: "Hi Harija Labs, I'm interested in custom React.js frontend development."
      },
      {
        id: "fullstack-apps",
        title: "Full-Stack Application Development",
        description: "Turnkey web applications delivered from architectural blueprint to database modeling, API implementation, and slick client UX.",
        tags: ["End-to-End", "Database Design", "Modern Stack"],
        whatsappMsg: "Hi Harija Labs, I'd like to discuss full-stack application development for our product."
      },
      {
        id: "rest-apis",
        title: "REST API Development",
        description: "Secure, versioned, and documented REST APIs designed for high availability, rate limiting, and seamless third-party consumption.",
        tags: ["API Design", "Rate Limiting", "OAuth2 / JWT", "Security"],
        whatsappMsg: "Hi Harija Labs, we need secure REST API development and integration."
      },
      {
        id: "microservices",
        title: "Microservices Architecture",
        description: "Decoupled distributed services communicating via message brokers (Kafka/RabbitMQ) and gRPC for resilient enterprise scale.",
        tags: ["Distributed Systems", "Message Brokers", "Resilience"],
        whatsappMsg: "Hi Harija Labs, I would like to design and implement a scalable Microservices Architecture."
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    badge: "Cloud Native",
    description: "Reliable cloud foundations, automated CI/CD pipelines, container orchestration, and dedicated MLOps.",
    services: [
      {
        id: "aws-engineering",
        title: "AWS Cloud Engineering",
        description: "Cloud-native architectures on AWS leveraging ECS/EKS, Lambda, S3, RDS, DynamoDB, API Gateway, and CloudFront.",
        tags: ["AWS ECS/EKS", "Serverless", "RDS", "Cost Optimization"],
        whatsappMsg: "Hi Harija Labs, we need AWS Cloud Engineering and architecture support."
      },
      {
        id: "docker-kubernetes",
        title: "Docker & Kubernetes",
        description: "Immutable containerization, Helm chart management, cluster auto-scaling, service meshes, and resilient multi-container orchestration.",
        tags: ["Containerization", "K8s Clusters", "Helm", "Auto-scaling"],
        whatsappMsg: "Hi Harija Labs, I need Docker and Kubernetes deployment & orchestration expertise."
      },
      {
        id: "cicd-automation",
        title: "CI/CD Automation",
        description: "Zero-downtime continuous integration and continuous deployment pipelines using GitHub Actions, GitLab CI, and automated testing.",
        tags: ["GitHub Actions", "Zero-Downtime", "Automated Evals"],
        whatsappMsg: "Hi Harija Labs, we want to streamline our deployments with automated CI/CD pipelines."
      },
      {
        id: "mlops-llmops",
        title: "MLOps & LLMOps",
        description: "Model registry, continuous evaluation, prompt versioning, observability (LangSmith/Traces), cost tracking, and automated fine-tuning.",
        tags: ["Observability", "Prompt Registry", "Cost Tracking", "Evals"],
        whatsappMsg: "Hi Harija Labs, I want to set up robust MLOps / LLMOps for our AI models."
      },
      {
        id: "ai-infrastructure",
        title: "AI Infrastructure",
        description: "High-throughput GPU inference serving (vLLM, Ollama, TensorRT-LLM), vector databases (Milvus, Qdrant, Pinecone), and private hosting.",
        tags: ["GPU Serving", "vLLM", "Vector Databases", "Private Cloud"],
        whatsappMsg: "Hi Harija Labs, we need specialized AI & GPU inference infrastructure setup."
      }
    ]
  }
];

export const ACADEMY_COURSES = [
  {
    id: "genai-agents",
    title: "Generative AI, LangChain & LangGraph",
    badge: "Flagship Program",
    duration: "8 Weeks • Hands-on Projects",
    level: "Intermediate to Advanced",
    description: "Master autonomous multi-agent systems, stateful graph architectures, tool calling, and production-grade agentic workflows.",
    highlights: [
      "LangChain v0.3+ & LangGraph core state machines",
      "Dynamic tool calling & multi-agent routing",
      "Memory systems (Short-term, Long-term, Vector)",
      "Building a complete autonomous research agent"
    ],
    whatsappMsg: "Hi Harija Academy, I would like to enroll in the Generative AI, LangChain & LangGraph program."
  },
  {
    id: "rag-ai-agents",
    title: "Advanced RAG & Enterprise AI Agents",
    badge: "High Demand",
    duration: "6 Weeks • Industry Capstone",
    level: "Intermediate",
    description: "Deep dive into production RAG architectures: hybrid search, document chunking heuristics, query transformations, and hallucination reduction.",
    highlights: [
      "Vector databases: Qdrant, Pinecone & Chroma",
      "Semantic chunking, ColBERT & re-ranking models",
      "Self-reflective RAG & Corrective RAG (CRAG)",
      "Deploying enterprise knowledge assistant"
    ],
    whatsappMsg: "Hi Harija Academy, I am interested in the Advanced RAG & Enterprise AI Agents course."
  },
  {
    id: "llm-engineering",
    title: "LLM Engineering & Fine-Tuning",
    badge: "Core Technical",
    duration: "6 Weeks • GPU Lab Included",
    level: "Advanced",
    description: "Understand the inner workings of Transformers, tokenizers, LoRA/QLoRA parameter-efficient fine-tuning, and model quantization.",
    highlights: [
      "Transformer mechanics, attention & tokenization",
      "PEFT / LoRA / QLoRA fine-tuning on custom datasets",
      "Quantization techniques (AWQ, GGUF, GPTQ)",
      "Model evaluation benchmarks & guardrails"
    ],
    whatsappMsg: "Hi Harija Academy, please share details for the LLM Engineering & Fine-Tuning course."
  },
  {
    id: "mlops-llmops",
    title: "MLOps & LLMOps in Production",
    badge: "Career Booster",
    duration: "6 Weeks • Cloud Deployments",
    level: "Intermediate",
    description: "Bridge the gap between experimental notebook code and production cloud deployments with automated monitoring and evaluation pipelines.",
    highlights: [
      "Dockerization & Kubernetes for AI workloads",
      "CI/CD with GitHub Actions for AI models",
      "LLM Tracing & latency monitoring (LangSmith/OpenTelemetry)",
      "Cost optimization & inference caching techniques"
    ],
    whatsappMsg: "Hi Harija Academy, I'm interested in learning MLOps & LLMOps for production AI."
  },
  {
    id: "python-fundamentals",
    title: "Python Programming for AI",
    badge: "Foundational",
    duration: "4 Weeks • Beginner to Pro",
    level: "Beginner",
    description: "Comprehensive foundation covering modern Python 3, object-oriented design, async programming, data structures, and NumPy/Pandas.",
    highlights: [
      "Core Python syntax, decorators & generators",
      "Object-oriented programming (OOP) & clean code",
      "Asyncio & asynchronous programming",
      "Data handling with Pandas, NumPy & JSON"
    ],
    whatsappMsg: "Hi Harija Academy, I want to enroll in the Python Programming for AI course."
  },
  {
    id: "ml-deeplearning",
    title: "Machine Learning & Deep Learning",
    badge: "Comprehensive",
    duration: "8 Weeks • Math & Code",
    level: "Beginner to Intermediate",
    description: "From linear algebra and classical algorithms (Regression, Random Forests) to Deep Neural Networks, CNNs, RNNs, and PyTorch fundamentals.",
    highlights: [
      "Supervised & unsupervised learning algorithms",
      "Feature engineering, regularization & cross-validation",
      "PyTorch deep neural network training",
      "Real-world computer vision & NLP projects"
    ],
    whatsappMsg: "Hi Harija Academy, I am interested in the Machine Learning & Deep Learning course."
  },
  {
    id: "realworld-projects",
    title: "Real-World AI Projects & Capstone",
    badge: "Portfolio Ready",
    duration: "4 Weeks • Portfolio Mentorship",
    level: "All Levels",
    description: "Build 3 end-to-end portfolio-grade AI products with live deployments, documentation, and code reviews ready for hiring managers and clients.",
    highlights: [
      "1-on-1 code reviews by senior AI architects",
      "Live AWS / Cloud deployed public demo",
      "GitHub portfolio polish & resume review",
      "Interview prep for AI Engineer & ML roles"
    ],
    whatsappMsg: "Hi Harija Academy, I want to join the Real-World AI Projects & Portfolio Capstone."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Engineering Team",
    description: "Led by senior engineers with deep hands-on expertise building production AI platforms and scalable cloud architectures.",
    icon: "ShieldCheck",
    stat: "Production Grade",
    statLabel: "Zero-compromise engineering"
  },
  {
    title: "Practical AI Implementation",
    description: "We don't build superficial toy demos. We deliver robust, reliable systems with strict evals, error handling, and business guardrails.",
    icon: "Cpu",
    stat: "High Reliability",
    statLabel: "Resilient agent workflows"
  },
  {
    title: "End-to-End Software Development",
    description: "Full lifecycle delivery: from data modeling and FastAPI backends to modern React frontends and cloud deployment.",
    icon: "Layers",
    stat: "Full Stack",
    statLabel: "Design, code & deploy"
  },
  {
    title: "Business-Focused Automation",
    description: "Every solution is targeted at real business ROI: slashing turnaround times, eliminating manual friction, and scaling operations.",
    icon: "TrendingUp",
    stat: "Measurable ROI",
    statLabel: "Speed & operational efficiency"
  },
  {
    title: "Industry-Oriented Training",
    description: "Harija Academy teaches modern production tech stacks—not outdated theory. Students graduate with actual deployed GitHub portfolios.",
    icon: "BookOpenCheck",
    stat: "Project-Centric",
    statLabel: "100% practical curriculum"
  },
  {
    title: "Scalable Technology Solutions",
    description: "Built for growth using modular microservices, containerized Docker/Kubernetes clusters, and battle-tested cloud standards.",
    icon: "Zap",
    stat: "Cloud Native",
    statLabel: "Elastic auto-scaling"
  }
];

export const TECH_STACK = [
  {
    category: "AI & LLM Frameworks",
    items: [
      { name: "LangChain", desc: "Composable LLM Chains", tag: "AI Framework" },
      { name: "LangGraph", desc: "Stateful Agent Graphs", tag: "Agentic AI" },
      { name: "OpenAI", desc: "GPT-4o & Embedding Models", tag: "LLM" },
      { name: "Python", desc: "Core AI & Data Science", tag: "Language" },
      { name: "Machine Learning", desc: "PyTorch, Scikit-Learn", tag: "ML/DL" }
    ]
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "FastAPI", desc: "High-throughput Async APIs", tag: "Backend" },
      { name: "PostgreSQL", desc: "Relational & Vector Data", tag: "Database" },
      { name: "REST APIs", desc: "Microservices & Webhooks", tag: "Architecture" },
      { name: "Pydantic", desc: "Data Validation & Types", tag: "Validation" }
    ]
  },
  {
    category: "Cloud & MLOps",
    items: [
      { name: "AWS", desc: "ECS, Lambda, S3, RDS", tag: "Cloud" },
      { name: "Docker", desc: "Containerized Workloads", tag: "DevOps" },
      { name: "Kubernetes", desc: "Cluster Orchestration", tag: "Scaling" },
      { name: "CI/CD", desc: "Automated Deployment Pipelines", tag: "Automation" }
    ]
  },
  {
    category: "Frontend & Interfaces",
    items: [
      { name: "React.js", desc: "Modern Interactive UIs", tag: "Frontend" },
      { name: "JavaScript", desc: "ESNext Ecosystem", tag: "Language" },
      { name: "HTML5 / CSS3", desc: "Responsive Design Systems", tag: "Web" }
    ]
  }
];

export const TARGET_AUDIENCES = [
  { title: "Startups", desc: "Fast-track MVP launch with AI agents & production software." },
  { title: "Small & Medium Businesses", desc: "Automate repetitive workflows to cut overhead." },
  { title: "Enterprises", desc: "Deploy secure, enterprise-grade RAG & AI microservices." },
  { title: "Entrepreneurs", desc: "Bring AI product concepts to market with full-stack execution." },
  { title: "Working Professionals", desc: "Upskill in Generative AI, LangGraph, and MLOps to elevate career." },
  { title: "Students", desc: "Gain practical, project-based engineering experience." }
];

export const FOUNDER_INFO = {
  name: "Hari M.",
  role: "Founder & Lead AI Engineer",
  company: "Harija Labs",
  linkedInUrl: "https://www.linkedin.com/in/hari-m-47299b54/",
  summary: "Senior AI & Full-Stack Engineer with extensive experience architecting production-grade AI platforms, LLM agent workflows, high-concurrency microservices, and modern cloud systems. Passionate about both deploying business-critical AI and educating the next generation of engineers through Harija Academy.",
  skills: [
    "AI Agent Architecture",
    "LangChain & LangGraph",
    "RAG & Semantic Retrieval",
    "FastAPI & Python Backend",
    "React.js & Full-Stack Engineering",
    "AWS & MLOps Pipelines"
  ]
};
