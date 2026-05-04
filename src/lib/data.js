export const personalInfo = {
  name: "Numaan Ali",
  title: "MERN Stack Developer",
  tagline: "Building high-quality, scalable web experiences",
  email: "alinumaan35@gmail.com",
  phone: "+923365370090",
  github: "https://github.com/numaan750",
  linkedin: "https://www.linkedin.com/in/im-numaan-ali/",
  location: "Lahore, Pakistan",
  summary:
    "Full-stack MERN developer with 2+ years of experience building scalable, production-ready web applications. Proficient in RESTful API development, state management (Redux/Context API), and server-side rendering with Next.js. Experienced in integrating AI APIs — including Claude (Anthropic) and OpenAI — to build intelligent features such as AI-powered search, content generation, smart recommendations, and streaming-based LLM interfaces. Strong foundation in responsive UI/UX design and clean, maintainable code.",
};

export const skills = [
  { name: "Next.js", level: 90, category: "Frontend", icon: "SiNextdotjs" },
  { name: "React.js", level: 92, category: "Frontend", icon: "SiReact" },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend",
    icon: "SiTailwindcss",
  },
  {
    name: "Redux / Context API",
    level: 88,
    category: "State Mgmt",
    icon: "SiRedux",
  },
  { name: "Node.js", level: 85, category: "Backend", icon: "SiNodedotjs" },
  { name: "Express.js", level: 83, category: "Backend", icon: "SiExpress" },
  { name: "MongoDB", level: 82, category: "Database", icon: "SiMongodb" },
  { name: "RESTful APIs", level: 87, category: "Backend", icon: "TbApi" },
  {
    name: "JWT / Auth",
    level: 82,
    category: "Security",
    icon: "SiJsonwebtokens",
  },
  { name: "Git & GitHub", level: 88, category: "Tools", icon: "SiGithub" },
  { name: "Cloudinary", level: 80, category: "Tools", icon: "SiCloudinary" },
  { name: "Stripe", level: 75, category: "Payments", icon: "SiStripe" },
];

export const projects = [
  {
    id: 1,
    title: "AI Soulmate Drawings",
    description:
      "AI platform that creates personalized soulmate portraits with user login, image uploads, and smooth checkout.",
    url: "https://www.aisoulmatedrawings.com/",
    tech: [
      "Next.js",
      "AI API",
      "Cloudinary",
      "Creem Payment",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    category: "AI / Full-Stack",
    gradient: "from-violet-500 to-pink-500",
  },
  {
    id: 2,
    title: "Eliteimage Ai",
    description:
      "Elite Image is an AI-powered real estate image enhancement platform for HDR, object removal, and photo improvement etc.",
    url: "https://elite-image-frontend.vercel.app/",
    tech: ["Next.js", "AI API", "Cloudinary", "MongoDB", "Node.js", "Express"],
    category: "Real Estate",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "AI Home Aura",
    description:
      "AI Home Aura: Upload your room photo and get instant AI-powered redesigns in multiple styles.",
    url: "https://www.aihomeaura.com/",
    tech: [
      "Next.js",
      "AI API",
      "Cloudinary",
      "Creem Payment",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    category: "Real Estate",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    title: "Noor Pak",
    description:
      "Noor Pak website is an online platform showcasing handcrafted products, highlighting traditional craftsmanship and unique handmade items.",
    url: "https://noor-pak-website-fpdc.vercel.app/",
    tech: ["Next.js"],
    category: "SaaS / Productivity",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 5,
    title: "Ananda",
    description:
      "Ananda Beryl is an event planning platform for creating and managing memorable events.",
    url: "https://ananda-beryl.vercel.app/",
    tech: ["React.js"],
    category: "SaaS / Productivity",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    title: "AI Photo Enhancer",
    description:
      "AI photo enhancer with sharpening, upscaling, object removal, and one-click creative presets.",
    url: "https://www.aienhancephoto.com/",
    tech: [
      "Next.js",
      "AI API",
      "Cloudinary",
      "Creem Payment",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    category: "AI / Full-Stack",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 7,
    title: "Burger",
    description:
      "A modern burger ordering app with a sleek UI and seamless checkout experience.",
    url: "https://burger-site-ten.vercel.app/",
    tech: ["Next.js"],
    category: "SaaS / Productivity",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 8,
    title: "Ai Garden Design",
    description:
      "AI garden design platform that instantly transforms outdoor spaces with photorealistic redesigns, object removal, and style-based layouts.",
    url: "https://www.aidesigngardens.com/",
    tech: ["Next.js"],
    category: "AI / Full-Stack",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 9,
    title: "filim 6",
    description:
      "FILM6.ai is an AI-powered filmmaking platform that enables creators to produce cinematic content using collaborative and generative AI tools.",
    url: "https://film6.ai/",
    tech: [
      "REact.js",
      "Cloudinary",
      "MongoDB",
      "Node.js",
      "Express",
      "video animation",
      "image animation",
    ],
    category: "AI / Full-Stack",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 10,
    title: "Invoice Maker",
    description:
      "Invoice SaaS to create, manage, and send invoices with PDF export, multi-currency support, and client management.",
    url: "https://invoice-maker-web.vercel.app/us",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "PDF.js"],
    category: "SaaS / Productivity",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 11,
    title: "AR Drawing",
    description:
      "AR Drawings is an AR-based app for learning and creating sketches through guided tracing.",
    url: "https://www.ar-drawings.com/",
    tech: ["Next.js"],
    category: "AI / Full-Stack",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 12,
    title: "V-Shop E-Commerce",
    description:
      "Full-featured e-commerce store with products, cart, order tracking, and secure Stripe checkout.",
    url: "https://v-shop-flax.vercel.app/",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    category: "E-Commerce",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 13,
    title: "Kashaf Textile E-Commerce",
    description:
      "Full-featured e-commerce Website with products, cart, order, and secure paymnets.",
    url: "https://kashaftextile.com/",
    tech: ["Wordpress"],
    category: "E-Commerce",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 14,
    title: "VShop Admin Dashboard",
    description:
      "Admin panel for VShop with product management, order tracking, analytics, and role-based users.",
    url: "https://vshop-admin-eta.vercel.app/login",
    tech: ["Next.js", "Redux", "Node.js", "Express", "MongoDB"],
    category: "Dashboard / Admin",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 15,
    title: "sAp App Admin Dashboard",
    description:
      "SAP App Admin Dashboard is a control panel for managing users, data, and app operations efficiently.",
    url: "https://sap-work-admin.vercel.app/login",
    tech: ["Next.js", "Redux", "Node.js", "Express", "MongoDB"],
    category: "Dashboard / Admin",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 16,
    title: "Seven App Admin Dashboard",
    description:
      "Seven Admin Panel is a business dashboard for managing website content, users, and operations.",
    url: "https://seven-website-admin.vercel.app/login",
    tech: ["Next.js", "Redux", "Node.js", "Express", "MongoDB"],
    category: "Dashboard / Admin",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 17,
    title: "Trust Property",
    description:
      "Real estate platform with property search, filters, agent contact, and clean listing pages.",
    url: "https://trust-property.vercel.app/",
    tech: ["Next.js", "React", "MongoDB", "Express", "Node.js"],
    category: "Real Estate",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    id: 18,
    title: "sAp App",
    description:
      "S-AP App is a services website for accessing and managing business services in one place.",
    url: "https://s-ap-app.vercel.app/",
    tech: ["Next.js", "React", "MongoDB", "Express", "Node.js"],
    category: "SaaS / Productivity",
    gradient: "from-sky-500 to-indigo-500",
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "MERN Stack Developer",
    company: "DevsRank",
    period: "August 2025 – Present",
    points: [
      "Collaborated with UI/UX teams to build clean and responsive interfaces using React & Next.js.",
      "Developed and integrated RESTful APIs with Node.js and Express for smooth data flow.",
      "Built and maintained full-stack MERN applications, improving performance and scalability.",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Web Developer Intern",
    company: "DevsRank",
    period: "May 2025 – July 2025",
    points: [
      "Built and maintained responsive web interfaces using Next.js and React.js.",
      "Delivered front-end features on time in a fast-paced team environment.",
    ],
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Computer Science",
    company: "Lahore Leads University, Lahore",
    period: "2021 – 2025",
    points: [
      "Graduated with a Bachelor's degree in Computer Science.",
      "Focused on software engineering, algorithms, data structures, and web technologies.",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager @ TechFlow",
    content:
      "Numaan transformed our vision into reality. His expertise in Next.js and AI integrations helped us launch weeks ahead of schedule. Truly an exceptional developer!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder @ EstatePro",
    content:
      "Working with Numaan was a breeze. He rebuilt our entire real estate platform with a flawless UI and lightning-fast performance. Highly recommend for any complex MERN project.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director @ Studio Nine",
    content:
      "The AI-powered features Numaan built for us are mind-blowing. He doesn't just write code; he understands the user experience and business goals perfectly.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js. I also have extensive experience integrating AI APIs like OpenAI and Anthropic, as well as working with Tailwind CSS, Redux, and payment gateways like Stripe & Creem.",
  },
  {
    id: 2,
    question: "Are you available for freelance work or full-time roles?",
    answer: "Yes, I am currently open to both freelance opportunities and full-time remote roles. Feel free to reach out via the contact form to discuss your project or job opening.",
  },
  {
    id: 3,
    question: "How long does it typically take to build a website?",
    answer: "The timeline depends on the complexity of the project. A standard landing page or portfolio might take 1-2 weeks, while a full-stack SaaS or e-commerce platform can take 4-8 weeks. We can discuss your specific timeline during our initial chat.",
  },
  {
    id: 4,
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely! I provide ongoing support, bug fixes, and feature updates after the launch to ensure your application runs smoothly and scales efficiently.",
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "Understanding your goals, target audience, and project requirements to create a solid foundation.",
    icon: "FaSearch",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating wireframes and modern, aesthetic visual designs that ensure a seamless user experience.",
    icon: "FaPaintBrush",
  },
  {
    id: 3,
    title: "Development",
    description: "Writing clean, scalable, and optimized code using the latest MERN stack and Next.js technologies.",
    icon: "FaCode",
  },
  {
    id: 4,
    title: "Testing & Launch",
    description: "Rigorous testing across devices followed by a smooth deployment and post-launch support.",
    icon: "FaRocket",
  },
];
