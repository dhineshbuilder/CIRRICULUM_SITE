const curriculum = {
  stages: [
    ["Stage 0", "Engineering Foundations", "Logic, math, CS, Python, Git, Linux."],
    ["Stage 1", "Problem Solving and DSA", "Patterns, dry runs, DSA consistency."],
    ["Stage 2", "Backend Engineering", "APIs, databases, auth, testing."],
    ["Stage 3", "Frontend for Product Builders", "React interfaces that consume APIs."],
    ["Stage 4", "Cloud and Deployment", "Docker, AWS, CI/CD, production basics."],
    ["Stage 5", "Product Engineering", "Requirements, MVPs, metrics, iteration."],
    ["Stage 6", "AI Product Engineering", "LLMs, embeddings, vector DBs, RAG."],
    ["Stage 7", "Agentic AI Engineering", "Tools, memory, workflows, LangGraph."],
    ["Stage 8", "AI Systems Engineering", "Evaluation, cost, inference, observability."]
  ],
  priorities: [
    "Python",
    "Basic DSA",
    "Git and GitHub",
    "Linux",
    "SQL",
    "HTTP and API Consumption",
    "FastAPI",
    "PostgreSQL",
    "Testing",
    "Docker",
    "AWS",
    "React",
    "System Design",
    "Product Thinking",
    "LLMs",
    "Embeddings",
    "Vector Databases",
    "RAG",
    "LangGraph",
    "Agentic AI",
    "MCP"
  ],
  volumes: [
    {
      id: "v1",
      category: "foundation",
      title: "Engineering Foundations",
      duration: "12 to 16 weeks",
      color: "#147d73",
      goal: "Build the base required to become a serious software engineer.",
      parts: [
        ["Career Intelligence", ["Product companies", "Startups", "GCCs", "Hiring process", "Salary structures", "Company research"]],
        ["Engineering Mathematics", ["Logic", "Sets", "Functions", "Probability", "Statistics", "Vectors", "Matrices", "Cosine similarity"]],
        ["Computer Science Foundations", ["CPU", "RAM", "Storage", "Storage hierarchy", "File systems", "Directories", "Inodes basics", "OS", "Processes", "Threads", "Scheduling", "Networking"]],
        ["Programming Logic", ["Problem decomposition", "Flowcharts", "Pseudocode", "Dry runs", "Time complexity", "Space complexity", "Big O basics", "Tradeoffs", "Complexity intuition", "Edge cases"]],
        ["Python Mastery", ["Development environment", "VS Code", "Extensions", "Debugger", "Terminal usage", "Workspace setup", "Linting", "Formatting", "Variables", "Data structures", "Functions", "Modules", "Packages", "Virtual environments", "Pip", "OOP", "Files", "Exceptions", "Context managers", "Dataclasses", "Decorators", "Generators", "Async", "Type hints"]],
        ["Git and GitHub", ["Commits", "Branches", "Merge", "Rebase basics", "Pull requests", "Conflicts", "Markdown", "README writing", "Project documentation", "Technical documentation", "Code review"]],
        ["Linux", ["Terminal", "Permissions", "Processes", "SSH", "curl", "grep", "find", "Shell scripts", "Logs"]],
        ["Networking", ["IP", "DNS", "Ports", "HTTP", "HTTPS", "Headers", "Cookies", "CORS", "Rate limits"]],
        ["API Consumption and Developer Tools", ["JSON", "REST APIs", "Postman", "HTTP requests", "Authentication tokens", "Status codes", "API testing", "Environment variables"]],
        ["SQL Foundations", ["Tables", "Keys", "Joins", "Aggregation", "Indexes", "Transactions", "Normalization"]],
        ["DSA Foundations", ["Arrays", "Strings", "Hash maps", "Stacks", "Queues", "Two pointers", "Sliding window", "Binary search", "Recursion basics", "Sorting", "Searching", "Complexity analysis"]],
        ["Testing Foundations", ["Assertions", "Unit testing", "Pytest", "Test cases", "Edge cases", "Regression testing"]],
        ["Debugging and Code Reading", ["Stack traces", "Breakpoints", "Logging", "Reading existing code", "Debugging APIs", "Root cause analysis", "Error reproduction", "Refactoring", "Code smells", "Code reviews"]]
      ],
      projects: ["Calculator CLI", "Contact Manager CLI", "Expense Tracker CLI", "File Analyzer", "Student Result Manager", "Learning Tracker", "Password Manager CLI", "Log Analyzer CLI"],
      projectArchitecture: ["Input layer", "Business logic layer", "Storage layer", "Error handling layer"],
      produces: ["Write Python confidently", "Read and understand existing code", "Use Git professionally", "Work in Linux", "Consume APIs", "Design SQL databases", "Solve basic DSA problems", "Write tests", "Debug programs", "Build production-quality CLI applications", "Maintain a GitHub portfolio"],
      gate: "You can build a production-ready CLI system using classes, functions, file handling, error handling, logging, unit tests, SQL storage, a Git repository, a README, and documentation. Example systems: Personal Finance Manager, Student Management System, Inventory Manager, or Task Manager."
    },
    {
      id: "v2",
      category: "engineering",
      title: "Backend Engineering",
      duration: "12 to 16 weeks",
      color: "#356fa8",
      goal: "Become employable as a backend engineer.",
      parts: [
        ["API Consumption", ["Request", "Response", "Headers", "Postman", "Python requests", "API keys", "Bearer tokens", "Pagination", "Retries", "Timeouts"]],
        ["FastAPI", ["Routes", "Pydantic", "Validation", "Dependency injection", "Routers", "Middleware", "OpenAPI docs", "File uploads", "Background tasks"]],
        ["API Design", ["REST design", "Versioning", "Pagination patterns", "Filtering", "Sorting", "Idempotency", "Rate limits", "Error standards", "OpenAPI standards", "Swagger usage", "API documentation writing", "Endpoint contracts"]],
        ["PostgreSQL", ["Schema design", "Relationships", "Indexes", "Migrations", "SQLAlchemy", "Alembic", "Transactions", "Query analysis", "EXPLAIN basics", "Slow queries", "Index tradeoffs"]],
        ["Authentication and Authorization", ["Password hashing", "JWT", "Refresh tokens", "Sessions", "OAuth basics", "RBAC"]],
        ["Testing", ["Unit tests", "Integration tests", "pytest", "Fixtures", "Mocking", "Test database", "Coverage"]],
        ["Redis", ["Caching", "TTL", "Rate limiting", "Sessions", "Queues basics", "Cache invalidation"]],
        ["Backend Architecture", ["Controllers", "Services", "Repositories", "DTOs", "Environment configuration", ".env files", "Configuration classes", "Settings management", "Secrets separation", "Development vs production config", "Config", "Error handling", "Pagination"]],
        ["Security", ["OWASP", "Input validation", "SQL injection", "XSS basics", "CSRF basics", "Secrets management"]],
        ["Async Backend Engineering", ["Async IO", "await", "Concurrency", "Background tasks", "Connection pools"]],
        ["File Storage", ["File uploads", "Image uploads", "Object storage concepts", "Local storage", "Validation"]],
        ["Docker", ["Docker", "Dockerfile", "Images", "Containers", "Volumes", "Docker Compose"]],
        ["CI/CD", ["GitHub Actions", "Build pipelines", "Deployment pipelines", "Environment variables", "Secrets"]],
        ["Deployment", ["Linux server", "Nginx basics", "Domain", "SSL", "Deployment workflow"]],
        ["Logging and Monitoring", ["Structured logs", "Request IDs", "Health checks", "Metrics", "Latency", "Alerting basics"]],
        ["Queues and Background Jobs", ["Queues", "Pub/sub", "Event-driven systems", "Background jobs", "Redis queues"]]
      ],
      projects: ["Inventory API", "Job Application Tracker API", "Authentication Platform", "SaaS Billing Backend", "Multi-tenant CRM Backend"],
      produces: ["Design production APIs", "Build production APIs", "Use PostgreSQL professionally", "Implement authentication", "Write tests", "Use Redis", "Containerize applications", "Deploy applications", "Monitor applications", "Document APIs", "Handle production issues", "Build SaaS backends", "Prepare for backend internships", "Prepare for junior backend roles"],
      gate: "You can build, test, document, containerize, deploy, monitor, and troubleshoot production issues in a backend API with authentication, PostgreSQL, Redis, Docker, CI/CD basics, clean architecture, logging, and production-ready documentation."
    },
    {
      id: "v3",
      category: "engineering",
      title: "Cloud, DevOps, and System Design",
      duration: "8 to 12 weeks",
      color: "#c7821b",
      goal: "Deploy real applications and understand scalable systems.",
      parts: [
        ["Docker", ["Images", "Containers", "Dockerfile", "Layers", "Volumes", "Networks", "Docker Compose", "Environment variables", "Multi-container apps", "Container logs", "Image optimization"]],
        ["CI/CD", ["CI vs CD", "GitHub Actions", "Linting", "Formatting", "Automated tests", "Build pipeline", "Deployment pipeline", "Environment secrets", "Rollback basics"]],
        ["AWS Basics", ["IAM", "EC2", "S3", "RDS", "VPC basics", "Security groups", "Load balancer basics", "CloudWatch", "Lambda basics", "Cost monitoring"]],
        ["Production Deployment", ["Linux server setup", "SSH", "Nginx", "Reverse proxy", "Uvicorn and Gunicorn", "SSL", "Domain setup", "Environment variables", "Database migrations", "Backups", "Logs", "Monitoring"]],
        ["Observability", ["Logs", "Metrics", "Tracing", "Dashboards", "Monitoring strategy", "Alerting basics", "Incident basics"]],
        ["Reliability Engineering", ["Health checks", "Retries", "Circuit breakers", "Timeouts", "Failure handling", "Graceful degradation", "Fault tolerance"]],
        ["Kubernetes Fundamentals", ["What is Kubernetes", "Containers vs Kubernetes", "Pods", "Deployments", "Services", "Ingress basics", "kubectl basics"]],
        ["Architecture Patterns", ["Monolith", "Modular monolith", "Microservices basics", "Event-driven systems", "Service boundaries", "When to choose each pattern"]],
        ["System Design Foundations", ["Client-server architecture", "Load balancer", "Cache", "Queue", "Replication", "Sharding basics", "CDN", "Scalability", "Reliability", "Availability", "Latency", "Throughput", "Consistency", "CAP theorem intuition", "Rate limiting", "Idempotency"]],
        ["System Design Interview Basics", ["Design URL Shortener", "Design Notification System", "Design Chat System", "Design File Storage", "Requirements", "Capacity estimation", "API design", "Data model", "High-level design", "Bottlenecks", "Tradeoffs"]]
      ],
      projects: ["Dockerized FastAPI App", "GitHub Actions Pipeline", "AWS Deployment", "Notification System", "URL Shortener"],
      gate: "You can deploy, monitor, scale, troubleshoot, explain architecture, estimate traffic, and handle failures in a production backend system."
    },
    {
      id: "v4",
      category: "engineering",
      title: "Frontend for Product Builders",
      duration: "8 to 10 weeks",
      color: "#4f8b45",
      goal: "Build enough frontend skill to ship complete products.",
      parts: [
        ["HTML", ["Semantic HTML", "Forms", "Inputs", "Tables", "Accessibility basics", "SEO basics"]],
        ["CSS", ["Box model", "Flexbox", "Grid", "Responsive design", "Typography", "Colors", "Spacing", "Forms", "Layout systems"]],
        ["JavaScript", ["Variables", "Functions", "Arrays", "Objects", "DOM", "Events", "Fetch API", "Promises", "Async/await", "Modules", "Error handling"]],
        ["TypeScript", ["Types", "Interfaces", "Generics basics", "Union types", "Optional types", "Type narrowing", "API response typing"]],
        ["React", ["Components", "Props", "State", "Effects", "Hooks", "Context", "Routing", "Component composition"]],
        ["State Management", ["Local state", "Lifting state", "Context API", "Custom hooks", "Server state intuition"]],
        ["API Integration", ["Axios", "Fetch patterns", "Authentication tokens", "Refresh tokens", "Error handling", "Loading states", "Pagination"]],
        ["Forms and Validation", ["Controlled forms", "Validation rules", "Error messages", "Form UX", "Submit handling"]],
        ["Frontend Architecture", ["Folder structure", "Components", "Reusable UI", "Feature organization", "Separation of concerns", "Route organization"]],
        ["Next.js", ["App router basics", "Pages", "Layouts", "Server components intuition", "Client components", "API routes basics", "Authentication integration", "Deployment basics"]],
        ["UI and UX Basics", ["User flows", "Empty states", "Loading states", "Error states", "Dashboard layout", "Navigation", "Accessibility", "Usability testing"]],
        ["Frontend Performance", ["Memoization intuition", "Lazy loading", "Code splitting", "Image optimization"]]
      ],
      projects: ["Portfolio", "SaaS Landing Page", "Admin Dashboard", "CRM Frontend", "AI Chat Interface"],
      gate: "You can build, deploy, and maintain a responsive frontend that consumes backend APIs, handles authentication, manages state, validates forms, and delivers a usable product experience."
    },
    {
      id: "v5",
      category: "engineering",
      title: "Product Engineering",
      duration: "6 to 8 weeks",
      color: "#b94d5f",
      goal: "Learn to build useful products, not only technical demos.",
      parts: [
        ["Product Discovery", ["Customer interviews", "Problem validation", "Market research", "Competitor analysis", "Feature prioritization"]],
        ["Product Thinking", ["User problems", "Customer segments", "Requirements", "User stories", "Acceptance criteria", "MVP design", "Roadmaps"]],
        ["Product Metrics", ["North Star metric", "Activation", "Retention", "Engagement", "Conversion", "Churn", "Funnels", "Analytics"]],
        ["Product Architecture Decisions", ["Build vs buy", "Technical tradeoffs", "Cost tradeoffs", "Scalability decisions", "Feature prioritization"]],
        ["Real Product Lifecycle", ["Validate", "Requirements", "Design", "Development", "Testing", "Deployment", "Measure", "Improve", "Repeat"]],
        ["User Feedback Systems", ["Bug reports", "Feature requests", "Support tickets", "Feedback loops", "Iteration planning"]],
        ["Product Documentation", ["PRD", "Technical design doc", "API docs", "User docs", "Release notes", "Decision logs"]],
        ["Product Launch Basics", ["Beta testing", "Release planning", "Rollout strategy", "Monitoring", "Post launch review"]]
      ],
      projects: ["Habit Tracker SaaS", "Invoice Management App", "Team Task Manager", "Finance Dashboard", "Job Application CRM"],
      gate: "You can take an idea from problem discovery to deployed product, measure adoption, collect feedback, and iterate using product metrics."
    },
    {
      id: "v6",
      category: "ai",
      title: "AI Product Engineering",
      duration: "12 to 16 weeks",
      color: "#6d62a8",
      goal: "Integrate AI into real products.",
      parts: [
        ["AI Foundations", ["What AI is", "ML vs DL vs GenAI", "Supervised learning", "Unsupervised learning", "Classification", "Regression", "Clustering", "Training vs inference", "Model evaluation basics", "Overfitting intuition", "Data quality"]],
        ["ML Foundations", ["Features", "Labels", "Train/test split", "Accuracy", "Precision", "Recall", "F1 score", "Confusion matrix", "Linear regression intuition", "Logistic regression intuition", "Decision trees intuition"]],
        ["Deep Learning Basics", ["Neural network intuition", "Weights", "Bias", "Activation functions", "Backpropagation intuition", "Embeddings intuition", "GPU basics"]],
        ["Transformers and LLMs", ["Tokenization", "Attention intuition", "Transformer architecture", "Context window", "Temperature", "Top-p", "System prompts", "User prompts", "Tool calling", "Structured outputs", "Model limitations"]],
        ["Prompt Engineering", ["Instruction clarity", "Role prompting", "Few-shot examples", "Output schemas", "Chain-of-thought caution", "Prompt testing", "Prompt versioning", "Guardrails"]],
        ["Embeddings", ["Embedding models", "Vector representation", "Semantic similarity", "Cosine similarity", "Chunk embeddings", "Document embeddings", "Query embeddings"]],
        ["Vector Databases", ["Chroma", "Qdrant", "Pinecone", "Weaviate", "pgvector", "Indexes", "Similarity search", "Metadata filtering", "Hybrid search"]],
        ["RAG", ["Document loading", "Chunking", "Chunk size", "Chunk overlap", "Retrieval", "Reranking", "Context building", "Citation generation", "Hallucination control", "Evaluation", "Dataset creation", "Answer faithfulness"]],
        ["AI Application Architecture", ["Prompt layer", "Retrieval layer", "LLM layer", "Tool layer", "Memory layer", "Evaluation layer"]],
        ["AI Evaluation and Safety", ["LLM evals", "Golden datasets", "Human evaluation", "Automated evaluation", "Safety filters", "Prompt injection", "Data leakage", "PII handling", "Bias basics", "Reliability"]],
        ["AI Cost Optimization", ["Token usage", "Caching", "Prompt compression", "Model routing", "Cost monitoring"]],
        ["AI Product Reliability", ["Fallback models", "Retry logic", "Guardrails", "Output validation", "Structured outputs", "Error recovery"]],
        ["Multimodal AI", ["Images", "Vision models", "OCR", "Audio models", "Speech-to-text", "Text-to-speech"]],
        ["AI Frameworks", ["OpenAI API", "LangChain", "LangGraph", "LlamaIndex", "Model Context Protocol (MCP)", "FastAPI integration", "Background AI jobs", "Streaming responses"]],
        ["Model Selection and Tradeoffs", ["GPT models", "Claude models", "Gemini models", "Open source models", "Latency tradeoffs", "Cost tradeoffs", "Quality tradeoffs"]]
      ],
      projects: ["Resume Analyzer", "Document Q&A System", "Knowledge Base Chatbot", "Customer Support AI", "Research Assistant", "RAG Assistant", "AI Workflow Assistant"],
      gate: "You can build a deployed AI product with retrieval, evaluation, cost controls, reliability handling, model-selection tradeoffs, and backend integration."
    },
    {
      id: "v7",
      category: "ai",
      title: "Agentic AI and AI Systems",
      duration: "8 to 12 weeks",
      color: "#7a6a2a",
      goal: "Build advanced AI workflows after the software engineering base is strong.",
      parts: [
        ["Agentic AI Fundamentals", ["Agents", "Tools", "Function calling", "Planning", "Reflection", "State", "Human-in-the-loop", "Error recovery"]],
        ["Memory Systems", ["Short-term memory", "Long-term memory", "Conversation memory", "Knowledge memory", "Memory retrieval", "Memory persistence"]],
        ["Workflow Engineering", ["Sequential workflows", "Parallel workflows", "Approvals", "Escalations", "Retries", "Fallback paths"]],
        ["LangGraph", ["Graph state", "Nodes", "Edges", "Conditional routing", "Checkpointing", "Memory", "Tool nodes", "Human approval", "Streaming", "Deployment basics"]],
        ["MCP", ["What MCP is", "MCP clients", "MCP servers", "Tools", "Resources", "Prompts", "Authentication basics", "Local tool integration", "Security risks", "Use cases"]],
        ["Multi-Agent Systems", ["Agent roles", "Coordinator agent", "Worker agents", "Delegation", "Communication", "Conflict resolution"]],
        ["Agent Evaluation", ["Task success rate", "Tool success rate", "Failure analysis", "Benchmark tasks", "Regression testing"]],
        ["Agent Observability", ["Execution traces", "Tool logs", "Memory logs", "Cost tracking", "Latency tracking"]],
        ["A2A Fundamentals", ["Agent communication", "Message passing", "Task handoffs", "Agent collaboration"]],
        ["AI Infrastructure", ["Inference basics", "Latency", "Throughput", "Model serving", "Quantization basics", "Batching", "Caching", "Cost optimization", "GPU basics", "Observability for AI systems"]]
      ],
      projects: ["Agentic Knowledge System", "Research Agent", "Coding Assistant", "Multi-tool Business Assistant", "AI Employee"],
      gate: "You can design, evaluate, monitor, and deploy agentic workflows with memory, tools, MCP integrations, and production safeguards."
    },
    {
      id: "v8",
      category: "career",
      title: "Placement and Career Operating System",
      duration: "Ongoing from month 3",
      color: "#2f6b5f",
      goal: "Convert skills into internships, interviews, offers, and growth.",
      parts: [
        ["Advanced DSA", ["Linked lists", "Trees", "Binary search trees", "Heaps", "Graphs", "BFS", "DFS", "Topological sort", "Greedy", "Backtracking", "Dynamic programming", "Tries", "Intervals", "Bit manipulation basics"]],
        ["CS Interview Subjects", ["Operating systems", "DBMS", "Computer networks", "OOP", "System design basics", "API design", "Security basics"]],
        ["Resume Engineering", ["One-page resume", "Project descriptions", "Impact bullets", "Metrics", "ATS basics", "Skills section", "GitHub links", "Deployed links", "Custom resume per role"]],
        ["Portfolio Engineering", ["Portfolio website", "Case studies", "Project storytelling", "Project screenshots", "Project videos"]],
        ["LinkedIn and GitHub", ["LinkedIn headline", "About section", "Featured projects", "Weekly posts", "GitHub pinned repositories", "README quality", "Contribution graph", "Open-source contributions"]],
        ["Internship Acquisition", ["Cold outreach", "Founder outreach", "Referral requests", "Email templates", "LinkedIn messaging", "Internship tracking"]],
        ["Job Search System", ["Target companies", "Application strategy", "Weekly targets", "Follow-ups", "Referral strategy", "Offer tracking"]],
        ["Interview Preparation", ["Technical interviews", "DSA interviews", "Backend interviews", "Project deep dives", "System design discussions", "HR interviews", "Behavioral answers", "STAR method", "Salary negotiation", "Offer comparison"]],
        ["Company Playbooks", ["Big tech", "Indian product companies", "GCCs", "SaaS startups", "AI startups", "Fintech", "Company-wise preparation", "Role expectations", "Interview patterns"]],
        ["Communication Skills", ["Technical communication", "Presentation skills", "Meeting skills", "Written communication", "Stakeholder communication"]],
        ["Career Growth System", ["Performance reviews", "Promotion basics", "Learning systems", "Networking", "Personal brand", "Career planning"]]
      ],
      projects: ["Resume v1", "Application Tracker", "Mock Interview Log", "Target Company List", "Open-source Contribution", "Portfolio Website"],
      gate: "You can build a repeatable system for internships, interviews, offers, and career growth."
    }
  ],
  projectLevels: [
    ["Foundation Projects", "#147d73", ["Calculator CLI", "Contact Manager CLI", "Expense Tracker CLI", "File Analyzer", "Student Result Manager"]],
    ["Backend Projects", "#356fa8", ["Task API", "Blog API", "Authentication Service", "Expense Tracker API", "Job Tracker API"]],
    ["Production Backend Projects", "#c7821b", ["Multi-tenant CRM Backend", "SaaS Billing Backend", "Inventory Management System", "URL Shortener", "Notification System"]],
    ["Full Product Projects", "#4f8b45", ["Habit Tracker SaaS", "Invoice Management App", "Team Task Manager", "Finance Dashboard", "Job Application CRM"]],
    ["AI Product Projects", "#6d62a8", ["Resume Analyzer", "Document Q&A System", "Knowledge Base Chatbot", "Customer Support AI", "Research Assistant", "RAG Assistant", "AI Workflow Assistant"]],
    ["Advanced AI Systems", "#b94d5f", ["Agentic Knowledge System", "Research Agent", "Coding Assistant", "Multi-tool Business Assistant", "AI Employee"]]
  ],
  projectStandards: {
    portfolio: ["GitHub repo", "README", "Screenshots", "Architecture diagram", "Test instructions", "Deployment or run guide", "Lessons learned"],
    rubric: ["Functionality", "Code quality", "Testing", "Documentation", "Architecture", "Business usefulness", "Deployment readiness"],
    capstones: [
      ["Backend Capstone", "Multi-tenant CRM Backend"],
      ["Product Capstone", "Job Application CRM"],
      ["AI Product Capstone", "RAG Assistant"],
      ["Agentic AI Capstone", "AI Employee"]
    ]
  },
  projectDetails: {
    "Calculator CLI": {
      difficulty: "Beginner",
      skills: ["Python basics", "Functions", "Conditionals"],
      mustHave: ["Add, subtract, multiply, divide", "Input validation", "Clear error messages"],
      done: ["Runs from terminal", "Handles invalid input", "README explains usage"]
    },
    "Contact Manager CLI": {
      difficulty: "Beginner",
      skills: ["Files", "Lists", "Search", "CRUD"],
      mustHave: ["Add contact", "View contacts", "Search contacts", "Delete contacts", "Save to file"],
      done: ["Data persists", "Invalid input handled", "Git history is clean"]
    },
    "Expense Tracker CLI": {
      difficulty: "Beginner",
      skills: ["Python", "File storage", "Basic reports"],
      mustHave: ["Add expense", "List expenses", "Category totals", "Monthly total"],
      done: ["Uses functions", "Exports or stores data", "README has examples"]
    },
    "File Analyzer": {
      difficulty: "Beginner",
      skills: ["File handling", "Parsing", "Errors"],
      mustHave: ["Read text files", "Count lines", "Count words", "Show common words"],
      done: ["Handles missing files", "Handles empty files", "Includes sample files"]
    },
    "Student Result Manager": {
      difficulty: "Foundation Capstone",
      skills: ["Classes", "SQL basics", "Testing"],
      mustHave: ["Add students", "Add marks", "Calculate grade", "Store records", "Search results"],
      done: ["Uses layered CLI structure", "Includes tests", "Includes README and schema"]
    },
    "Task API": {
      difficulty: "Intermediate",
      skills: ["FastAPI", "REST", "Pydantic"],
      mustHave: ["Create task", "List tasks", "Update task", "Delete task", "Status filter"],
      done: ["OpenAPI docs work", "Validation works", "Basic tests pass"]
    },
    "Blog API": {
      difficulty: "Intermediate",
      skills: ["FastAPI", "SQL", "Relationships"],
      mustHave: ["Posts", "Authors", "Comments", "Pagination", "Filtering"],
      done: ["Database schema documented", "CRUD tested", "README has API examples"]
    },
    "Authentication Service": {
      difficulty: "Intermediate",
      skills: ["Auth", "JWT", "Security"],
      mustHave: ["Signup", "Login", "Password hashing", "JWT access token", "Protected route"],
      done: ["Invalid login handled", "Secrets use env vars", "Auth flow documented"]
    },
    "Expense Tracker API": {
      difficulty: "Intermediate",
      skills: ["FastAPI", "PostgreSQL", "Auth"],
      mustHave: ["User expenses", "Categories", "Monthly summaries", "Pagination", "Auth"],
      done: ["Test database works", "Queries are documented", "Docker compose runs app"]
    },
    "Job Tracker API": {
      difficulty: "Intermediate",
      skills: ["Backend architecture", "SQL", "Filtering"],
      mustHave: ["Applications", "Statuses", "Company records", "Notes", "Follow-up dates"],
      done: ["Clean routes and services", "Filtering works", "API docs are complete"]
    },
    "Multi-tenant CRM Backend": {
      difficulty: "Backend Capstone",
      skills: ["Multi-tenancy", "RBAC", "PostgreSQL", "Testing"],
      mustHave: ["Organizations", "Users", "Roles", "Customers", "Tenant isolation"],
      done: ["Tenant leakage tested", "Architecture diagram included", "Deployment notes included"]
    },
    "SaaS Billing Backend": {
      difficulty: "Advanced",
      skills: ["Billing logic", "Webhooks", "SQL"],
      mustHave: ["Plans", "Subscriptions", "Invoices", "Payment status", "Webhook handling"],
      done: ["Edge cases documented", "Tests cover billing states", "Admin endpoints exist"]
    },
    "Inventory Management System": {
      difficulty: "Advanced",
      skills: ["Transactions", "Reports", "Stock logic"],
      mustHave: ["Products", "Stock in/out", "Low-stock alert", "Supplier records", "Reports"],
      done: ["Prevents negative stock", "Uses transactions", "Includes dashboard or API docs"]
    },
    "URL Shortener": {
      difficulty: "Advanced",
      skills: ["System design", "Caching", "Rate limits"],
      mustHave: ["Short URL creation", "Redirect", "Analytics", "Expiry", "Rate limiting"],
      done: ["Traffic estimate included", "Cache strategy explained", "Load concerns documented"]
    },
    "Notification System": {
      difficulty: "Advanced",
      skills: ["Queues", "Retries", "Reliability"],
      mustHave: ["Email or mock channel", "Queue", "Retry logic", "Status tracking", "Templates"],
      done: ["Failure handling documented", "Worker tested", "Observability basics included"]
    },
    "Habit Tracker SaaS": {
      difficulty: "Product Beginner",
      skills: ["Full stack", "Auth", "UX"],
      mustHave: ["User habits", "Daily check-ins", "Streaks", "Dashboard", "Responsive UI"],
      done: ["Deployed frontend and backend", "Screenshots included", "User flow documented"]
    },
    "Invoice Management App": {
      difficulty: "Product Intermediate",
      skills: ["Forms", "PDF/export", "Product workflows"],
      mustHave: ["Clients", "Invoices", "Line items", "Status tracking", "Export"],
      done: ["Form validation works", "Business rules documented", "Demo data included"]
    },
    "Team Task Manager": {
      difficulty: "Product Intermediate",
      skills: ["Collaboration", "Roles", "Dashboards"],
      mustHave: ["Teams", "Tasks", "Assignments", "Statuses", "Comments"],
      done: ["Role behavior tested", "Responsive dashboard works", "Project story included"]
    },
    "Finance Dashboard": {
      difficulty: "Product Advanced",
      skills: ["Charts", "Analytics", "Product metrics"],
      mustHave: ["Income", "Expenses", "Charts", "Filters", "Insights"],
      done: ["Empty/loading/error states exist", "Metrics explained", "Screenshots included"]
    },
    "Job Application CRM": {
      difficulty: "Product Capstone",
      skills: ["CRM workflows", "Analytics", "Frontend architecture"],
      mustHave: ["Applications", "Pipeline stages", "Reminders", "Analytics", "Notes"],
      done: ["Case study written", "Dashboard polished", "Demo video or walkthrough included"]
    },
    "Resume Analyzer": {
      difficulty: "AI Beginner",
      skills: ["LLM API", "Structured outputs", "Prompting"],
      mustHave: ["Resume upload/text", "Role input", "Strengths", "Weaknesses", "Improvement suggestions"],
      done: ["Outputs structured JSON", "Prompt versions saved", "Safety limits documented"]
    },
    "Document Q&A System": {
      difficulty: "AI Intermediate",
      skills: ["Embeddings", "RAG", "Citations"],
      mustHave: ["Document upload", "Chunking", "Retrieval", "Answer with citations", "No-answer handling"],
      done: ["Evaluation set included", "Chunking choice explained", "Latency measured"]
    },
    "Knowledge Base Chatbot": {
      difficulty: "AI Intermediate",
      skills: ["RAG", "Vector DB", "Conversation UI"],
      mustHave: ["Knowledge ingestion", "Chat UI", "Metadata filters", "Citations", "Feedback button"],
      done: ["Retrieval quality tested", "README explains data flow", "Deployed demo works"]
    },
    "Customer Support AI": {
      difficulty: "AI Advanced",
      skills: ["Support workflows", "Guardrails", "Escalation"],
      mustHave: ["Ticket context", "Suggested replies", "Escalation rule", "Tone control", "Feedback logging"],
      done: ["Bad-answer handling exists", "Support metrics defined", "Human review flow documented"]
    },
    "Research Assistant": {
      difficulty: "AI Advanced",
      skills: ["Search", "Summarization", "Citations"],
      mustHave: ["Research query", "Source collection", "Summary", "Citations", "Exportable report"],
      done: ["Sources traceable", "Hallucination risks documented", "Evaluation examples included"]
    },
    "RAG Assistant": {
      difficulty: "AI Product Capstone",
      skills: ["RAG architecture", "Evaluation", "Cost control"],
      mustHave: ["Ingestion pipeline", "Hybrid retrieval or reranking", "Citations", "Eval dataset", "Cost tracking"],
      done: ["Architecture diagram included", "Eval results recorded", "Deployment and monitoring notes included"]
    },
    "AI Workflow Assistant": {
      difficulty: "AI Bridge Project",
      skills: ["Tool calling", "Memory", "Workflow automation"],
      mustHave: ["Tool calling", "Structured outputs", "API integration", "Memory", "Workflow automation"],
      done: ["Tool failures handled", "State diagram included", "Bridge to V7 explained"]
    },
    "Agentic Knowledge System": {
      difficulty: "Agentic Beginner",
      skills: ["Agents", "Tools", "Memory"],
      mustHave: ["Knowledge retrieval", "Tool use", "Conversation memory", "Trace log", "Answer citations"],
      done: ["Agent steps visible", "Memory behavior documented", "Failure cases tested"]
    },
    "Research Agent": {
      difficulty: "Agentic Intermediate",
      skills: ["Planning", "Tool use", "Evaluation"],
      mustHave: ["Plan generation", "Search tool", "Source review", "Report writing", "Citation checking"],
      done: ["Task success measured", "Tool logs saved", "Manual review checklist included"]
    },
    "Coding Assistant": {
      difficulty: "Agentic Intermediate",
      skills: ["Code tools", "Tests", "Guardrails"],
      mustHave: ["Read code", "Suggest fix", "Run tests or mock tests", "Explain changes", "Safety boundary"],
      done: ["Never edits blindly", "Regression examples included", "Prompt/tool policy documented"]
    },
    "Multi-tool Business Assistant": {
      difficulty: "Agentic Advanced",
      skills: ["MCP", "Workflow orchestration", "Approvals"],
      mustHave: ["Multiple tools", "Approval step", "Fallback path", "Audit log", "Structured output"],
      done: ["Tool permissions documented", "Observability included", "Escalation flow works"]
    },
    "AI Employee": {
      difficulty: "Agentic AI Capstone",
      skills: ["Multi-agent systems", "Memory", "Observability"],
      mustHave: ["Role definition", "Memory system", "Tool suite", "Task workflow", "Evaluation dashboard"],
      done: ["Production safeguards included", "Cost/latency tracked", "Capstone case study written"]
    }
  },
  timeline: [
    ["Month 1", "Python basics and logic", "CLI calculator and foundation notes."],
    ["Month 2", "Python, SQL, and Linux", "Contact manager, SQL schemas, terminal confidence."],
    ["Month 3", "DSA foundations and APIs", "First FastAPI app and 100 DSA problems."],
    ["Month 4", "PostgreSQL and auth", "Authentication API with database integration."],
    ["Month 5", "Testing and Redis", "Tested backend app with cache/rate limit."],
    ["Month 6", "Docker and architecture", "Dockerized backend with clean structure."],
    ["Month 7", "AWS and deployment", "Live backend with logs and deployment notes."],
    ["Month 8", "React basics", "Frontend dashboard consuming APIs."],
    ["Month 9", "Full-stack app", "Deployed product with backend and frontend."],
    ["Month 10", "Product engineering", "Improved product with metrics and docs."],
    ["Month 11", "LLMs and embeddings", "AI feature inside an existing product."],
    ["Month 12", "RAG", "RAG product with retrieval and evaluation."],
    ["Month 13", "Advanced DSA", "Interview pattern depth and problem log."],
    ["Month 14", "System design", "Design practice and architecture diagrams."],
    ["Month 15", "LangGraph", "Agent workflow with state and tools."],
    ["Month 16", "AI systems", "Production AI project with monitoring."],
    ["Month 17", "Applications", "Internship and job application pipeline."],
    ["Month 18", "Interviews", "Mock interviews, offers, and negotiation."]
  ],
  gates: [
    ["Before Backend", ["Python functions are comfortable", "Lists, dictionaries, sets, and strings are usable", "Easy DSA problems are consistent", "Git/GitHub basics work", "Linux basics are clear", "Basic SQL is clear", "HTTP request/response is clear"]],
    ["Before Cloud", ["FastAPI routes are comfortable", "PostgreSQL integration works", "Authentication is implemented", "Tests are written", "Redis basics are usable", "Backend code is structured cleanly"]],
    ["Before AI Product Engineering", ["Backend app is deployed", "Docker is usable", "System design basics are clear", "Frontend consumes APIs", "Product requirements are documented", "GitHub portfolio is clean"]],
    ["Before Agentic AI", ["LLM app is built", "RAG pipeline is built", "AI outputs are evaluated", "Prompt injection basics are understood", "AI behavior is logged", "Cost and latency tradeoffs are explainable"]]
  ],
  placement: [
    ["Technical", ["Python strong", "DSA foundations strong", "SQL strong", "OS and networking basics clear", "Backend projects deeply understood", "System design basics clear"]],
    ["Project", ["At least 3 serious projects", "At least 2 deployed projects", "At least 1 tested backend project", "At least 1 AI product", "Clean READMEs", "Architecture diagrams"]],
    ["Career", ["One-page resume", "Portfolio website", "LinkedIn complete", "Pinned GitHub repositories", "50 target companies", "Application tracker", "Internship outreach tracker", "Mock interviews"]],
    ["Resume Project Standards", ["Problem statement", "Tech stack", "Architecture", "Database schema", "API documentation", "Tests", "Deployment link", "Screenshots", "Lessons learned"]]
  ]
};

const storageKeys = {
  progress: "curriculum-progress",
  sidebarCollapsed: "sidebar-collapsed",
  openParts: "curriculum-open-parts",
  lastVolume: "curriculum-last-volume"
};

const state = {
  filter: "all",
  search: "",
  completed: new Set(readStoredArray(storageKeys.progress)),
  openPartsByVolume: readStoredObject(storageKeys.openParts)
};

const colors = ["#147d73", "#356fa8", "#c7821b", "#4f8b45", "#b94d5f", "#6d62a8"];

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function readStoredArray(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function readStoredObject(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function writeStoredValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createCheckItem(label, id) {
  const template = document.getElementById("checkItemTemplate");
  const node = template.content.firstElementChild.cloneNode(true);
  const input = node.querySelector("input");
  const text = node.querySelector("span");
  input.checked = state.completed.has(id);
  input.dataset.progressId = id;
  text.textContent = label;
  return node;
}

function getProgressIds() {
  const volumeIds = curriculum.volumes.flatMap((volume) =>
    volume.parts.map(([name]) => `${volume.id}-${slug(name)}`)
  );
  const projectIds = curriculum.projectLevels.flatMap(([title, , projects]) =>
    projects.map((project) => `project-${slug(title)}-${slug(project)}`)
  );
  return new Set([...volumeIds, ...projectIds]);
}

function saveProgress() {
  writeStoredValue(storageKeys.progress, [...state.completed]);
  updateProgress();
}

function saveOpenParts() {
  writeStoredValue(storageKeys.openParts, state.openPartsByVolume);
}

function updateProgress() {
  const progressLabel = document.getElementById("savedProgress");
  const progressBar = document.getElementById("savedProgressBar");
  if (!progressLabel || !progressBar) return;

  const validIds = getProgressIds();
  const total = validIds.size;
  const done = [...state.completed].filter((id) => validIds.has(id)).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  progressLabel.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;
}

function renderStages() {
  const container = document.getElementById("stageTrack");
  container.innerHTML = "";
  curriculum.stages.forEach(([stage, title, detail], index) => {
    const card = el("article", "stage-card");
    const number = el("span", "stage-number", String(index));
    number.style.background = colors[index % colors.length];
    card.append(number, el("strong", "", title), el("span", "", detail));
    card.setAttribute("aria-label", `${stage}: ${title}`);
    container.append(card);
  });
}

function renderPriorities() {
  const container = document.getElementById("priorityGrid");
  container.innerHTML = "";
  curriculum.priorities.forEach((item, index) => {
    const chip = el("div", "priority-chip");
    chip.append(el("span", "", String(index + 1)), document.createTextNode(item));
    container.append(chip);
  });
}

function volumeMatches(volume) {
  const filterMatch = state.filter === "all" || volume.category === state.filter;
  if (!filterMatch) return false;
  if (!state.search) return true;
  const haystack = [
    volume.title,
    volume.goal,
    volume.duration,
    volume.gate,
    volume.projects.join(" "),
    volume.parts.map(([name, topics]) => `${name} ${topics.join(" ")}`).join(" ")
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(state.search.toLowerCase());
}

function renderVolumes() {
  const container = document.getElementById("volumeList");
  if (!container) return;
  container.innerHTML = "";
  curriculum.volumes.forEach((volume, index) => {
    const card = el("article", "volume-card");
    card.dataset.category = volume.category;
    card.style.setProperty("--volume-color", volume.color);
    if (!volumeMatches(volume)) card.classList.add("is-hidden");

    const link = document.createElement("a");
    link.className = "volume-summary volume-link";
    link.href = `volume.html?id=${volume.id}`;
    link.setAttribute("aria-label", `Open ${volume.title}`);
    link.innerHTML = `
      <span class="volume-index">V${index + 1}</span>
      <span class="volume-title">
        <strong>${volume.title}</strong>
        <span>${volume.goal}</span>
      </span>
      <span class="chevron" aria-hidden="true">-&gt;</span>
    `;

    card.append(link);
    container.append(card);
  });
  updateProgress();
}

function renderVolumeDetail() {
  const container = document.getElementById("volumeDetail");
  if (!container) return false;

  const requestedId = new URLSearchParams(window.location.search).get("id") || "v1";
  const volumeIndex = curriculum.volumes.findIndex((item) => item.id === requestedId);
  const volume = curriculum.volumes[volumeIndex];

  if (!volume) {
    document.title = "Volume not found";
    container.innerHTML = `
      <section class="volume-detail-hero">
        <p class="eyebrow">Missing volume</p>
        <h1>That volume does not exist.</h1>
        <p class="lead">Return to the curriculum and choose a valid volume.</p>
      </section>
    `;
    return true;
  }

  document.title = `V${volumeIndex + 1}: ${volume.title}`;
  localStorage.setItem(storageKeys.lastVolume, volume.id);
  container.style.setProperty("--volume-color", volume.color);
  container.innerHTML = "";

  const hero = el("section", "volume-detail-hero");
  hero.style.setProperty("--volume-color", volume.color);
  hero.innerHTML = `
    <div class="volume-detail-badge">V${volumeIndex + 1}</div>
    <div>
      <p class="eyebrow">${volume.category} volume</p>
      <h1>${volume.title}</h1>
      <p class="lead">${volume.goal}</p>
      <div class="volume-meta detail-meta">
        <span>${volume.duration}</span>
        <span>${volume.parts.length} parts</span>
        <span>${volume.projects.length} projects</span>
      </div>
    </div>
  `;

  const partsSection = el("section", "detail-section");
  partsSection.append(el("h2", "", "Parts and Subtopics"));
  const parts = el("div", "detail-part-list");
  const storedOpenParts = Array.isArray(state.openPartsByVolume[volume.id])
    ? new Set(state.openPartsByVolume[volume.id])
    : null;

  volume.parts.forEach(([name, topics], partIndex) => {
    const part = document.createElement("details");
    part.className = "part-card detail-part-card part-dropdown";
    const partId = `${volume.id}-${slug(name)}`;
    part.dataset.openPartId = partId;
    part.open = storedOpenParts ? storedOpenParts.has(partId) : partIndex === 0;
    part.addEventListener("toggle", () => {
      state.openPartsByVolume[volume.id] = [...parts.querySelectorAll(".part-dropdown")]
        .filter((item) => item.open)
        .map((item) => item.dataset.openPartId);
      saveOpenParts();
    });

    const summary = el("summary", "part-summary");
    const summaryText = el("div", "part-summary-text");
    summaryText.append(el("h3", "", name), el("span", "", `${topics.length} subtopics`));
    summary.append(summaryText, el("span", "part-arrow", "->"));

    const checkWrap = el("div", "part-check-row");
    checkWrap.append(createCheckItem(`Complete ${name}`, `${volume.id}-${slug(name)}`));

    const topicList = el("div", "subtopic-list");
    topics.forEach((topic) => {
      topicList.append(el("span", "subtopic-item", topic));
    });

    part.append(summary, checkWrap, topicList);
    parts.append(part);
  });
  partsSection.append(parts);

  const lowerGrid = el("section", "detail-lower-grid");

  const projects = el("article", "part-card detail-panel projects-panel");
  projects.append(el("h2", "", "Projects"));
  const projectPills = el("div", "topic-pills");
  volume.projects.forEach((project) => projectPills.append(el("span", "topic-pill", project)));
  projects.append(projectPills);

  const gate = el("article", "part-card detail-panel gate-panel");
  gate.append(el("h2", "", "Exit Gate"), el("p", "part-meta", volume.gate));

  lowerGrid.append(projects, gate);

  if (volume.projectArchitecture?.length) {
    lowerGrid.classList.add("has-architecture");
    const architecture = el("article", "part-card detail-panel architecture-panel");
    architecture.append(el("h2", "", "CLI Architecture"));
    const architecturePills = el("div", "topic-pills");
    volume.projectArchitecture.forEach((item) => architecturePills.append(el("span", "topic-pill", item)));
    architecture.append(architecturePills);
    lowerGrid.append(architecture);
  }

  const outputSection = volume.produces?.length ? el("section", "detail-section") : null;
  if (outputSection) {
    const outputHeader = el("div", "output-header");
    outputHeader.append(
      el("h2", "", "What This Volume Produces"),
      el("p", "", "By the end of this volume, these should be visible in your code, projects, and GitHub portfolio.")
    );
    outputSection.append(outputHeader);
    const outputGrid = el("div", "output-grid");
    volume.produces.forEach((item, index) => {
      const output = el("div", "output-item");
      const marker = el("span", "output-marker");
      marker.dataset.index = String(index + 1).padStart(2, "0");
      output.append(marker, document.createTextNode(item));
      outputGrid.append(output);
    });
    outputSection.append(outputGrid);
  }

  container.append(hero, partsSection, lowerGrid);
  if (outputSection) container.append(outputSection);
  updateProgress();
  return true;
}

function renderProjectLadder() {
  const container = document.getElementById("projectLadder");
  container.innerHTML = "";
  let projectCount = 0;

  const standards = el("article", "project-standards part-card");
  standards.append(el("h3", "", "Project Ladder Standards"));
  const standardsGrid = el("div", "project-standard-grid");
  [
    ["Portfolio Standard", curriculum.projectStandards.portfolio],
    ["Evaluation Rubric", curriculum.projectStandards.rubric],
    ["Capstones", curriculum.projectStandards.capstones.map(([label, project]) => `${label}: ${project}`)]
  ].forEach(([title, items]) => {
    const panel = el("div", "project-standard-panel");
    panel.append(el("h4", "", title));
    const list = el("ul");
    items.forEach((item) => list.append(el("li", "", item)));
    panel.append(list);
    standardsGrid.append(panel);
  });
  standards.append(standardsGrid);
  container.append(standards);

  curriculum.projectLevels.forEach(([title, color, projects]) => {
    projectCount += projects.length;
    const card = el("article", "project-level");
    card.style.setProperty("--level-color", color);
    const header = el("div", "project-level-header");
    header.append(el("h3", "", title), el("span", "", `${projects.length} projects`));
    card.append(header);
    const list = el("div", "project-list");
    projects.forEach((project) => {
      const detail = curriculum.projectDetails[project] || {};
      const item = document.createElement("details");
      item.className = "project-item";

      const summary = el("summary", "project-summary");
      summary.append(el("span", "project-dot"));
      const check = createCheckItem(project, `project-${slug(title)}-${slug(project)}`);
      check.addEventListener("click", (event) => event.stopPropagation());
      summary.append(check, el("span", "project-difficulty", detail.difficulty || "Project"));

      const body = el("div", "project-detail-body");
      const skills = el("div", "project-tags");
      (detail.skills || []).forEach((skill) => skills.append(el("span", "project-tag", skill)));
      body.append(el("h4", "", "Skills"), skills);

      [
        ["Must Have", detail.mustHave || []],
        ["Done When", detail.done || []]
      ].forEach(([heading, items]) => {
        const block = el("div", "project-detail-block");
        block.append(el("h4", "", heading));
        const detailList = el("ul");
        items.forEach((itemText) => detailList.append(el("li", "", itemText)));
        block.append(detailList);
        body.append(block);
      });

      item.append(summary, body);
      list.append(item);
    });
    card.append(list);
    container.append(card);
  });
  document.getElementById("projectCount").textContent = String(projectCount);
}

function renderTimeline() {
  const container = document.getElementById("timelineList");
  container.innerHTML = "";
  curriculum.timeline.forEach(([month, title, output], index) => {
    const card = el("article", "timeline-item");
    card.style.setProperty("--timeline-color", colors[index % colors.length]);
    card.append(el("span", "", month), el("strong", "", title), el("p", "", output));
    container.append(card);
  });
}

function renderGates() {
  const container = document.getElementById("gateGrid");
  container.innerHTML = "";
  curriculum.gates.forEach(([title, items]) => {
    const card = el("article", "gate-card");
    card.append(el("h3", "", title));
    const list = el("ul");
    items.forEach((item) => list.append(el("li", "", item)));
    card.append(list);
    container.append(card);
  });
}

function renderPlacement() {
  const container = document.getElementById("placementGrid");
  container.innerHTML = "";
  curriculum.placement.forEach(([title, items]) => {
    const card = el("article", "placement-card");
    card.append(el("h3", "", title));
    const list = el("ul");
    items.forEach((item) => list.append(el("li", "", item)));
    card.append(list);
    container.append(card);
  });
}

function bindEvents() {
  const shell = document.querySelector(".app-shell");
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (shell && sidebarToggle) {
    const setSidebarCollapsed = (collapsed) => {
      shell.classList.toggle("sidebar-collapsed", collapsed);
      sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
      sidebarToggle.setAttribute("aria-label", collapsed ? "Open sidebar" : "Close sidebar");
      localStorage.setItem(storageKeys.sidebarCollapsed, String(collapsed));
    };

    setSidebarCollapsed(localStorage.getItem(storageKeys.sidebarCollapsed) === "true");
    sidebarToggle.addEventListener("click", () => {
      setSidebarCollapsed(!shell.classList.contains("sidebar-collapsed"));
    });
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value.trim();
      renderVolumes();
    });
  }

  document.querySelectorAll(".filter-tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((tab) => tab.classList.remove("is-selected"));
      button.classList.add("is-selected");
      state.filter = button.dataset.filter;
      renderVolumes();
    });
  });

  const expandAll = document.getElementById("expandAll");
  if (expandAll) {
    expandAll.addEventListener("click", () => {
      document.querySelectorAll(".volume-card:not(.is-hidden)").forEach((card) => {
        card.open = true;
      });
    });
  }

  const collapseAll = document.getElementById("collapseAll");
  if (collapseAll) {
    collapseAll.addEventListener("click", () => {
      document.querySelectorAll(".volume-card").forEach((card) => {
        card.open = false;
      });
    });
  }

  const resetProgress = document.getElementById("resetProgress");
  if (resetProgress) {
    resetProgress.addEventListener("click", () => {
      state.completed.clear();
      document.querySelectorAll("[data-progress-id]").forEach((input) => {
        input.checked = false;
      });
      saveProgress();
    });
  }

  document.addEventListener("change", (event) => {
    if (!event.target.matches("[data-progress-id]")) return;
    const id = event.target.dataset.progressId;
    if (event.target.checked) state.completed.add(id);
    else state.completed.delete(id);
    saveProgress();
  });

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.3, 0.6] }
  );
  sections.forEach((section) => observer.observe(section));
}

function init() {
  if (renderVolumeDetail()) {
    bindEvents();
    return;
  }

  renderStages();
  renderPriorities();
  renderVolumes();
  renderProjectLadder();
  renderTimeline();
  renderGates();
  renderPlacement();
  bindEvents();
  updateProgress();
  document.getElementById("volumeCount").textContent = String(curriculum.volumes.length);
}

init();
