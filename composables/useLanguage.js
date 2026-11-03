import { ref, computed, watch } from 'vue'

// Language state - shared across all instances
const currentLang = ref('en')
let isInitialized = false

// Translations
const translations = {
  en: {
    nav: {
      home: 'Company',
      products: 'Our Products',
      about: 'About us',
      services: 'Services',
      portfolio: 'Projects',
      reviews: 'Reviews',
      review: 'Clients',
      team: 'Our Team',
      pricing: 'Pricing',
      blog: 'Last Updates',
      contact: 'Contact us',
      suppliers: 'Suppliers',
      companyMenu: {
        overview: 'Overview',
        mission: 'Mission',
        vision: 'Vision',

      },
      servicesMenu: {
        aiLLM: 'AI & LLM Integration',
        digitalTransformation: 'Digital Transformation',
        appDevelopment: 'Custom App Development',
        healthcare: 'Healthcare Management',
        aiCoaching: 'AI Coaching Platforms',
        ecommerce: 'E-commerce & Payments'
      }
    },
    hero: {
      title: 'ProCode Solutions: Redefining the Future through Intelligent Code.',
      subtitle: 'We don\'t just build software; we create AI-driven ecosystems that transform businesses.',
      description: 'From AI pet care to smart clinic management, we bring your vision to life.',
      typewriterWords: ['AI Solutions', 'Digital Transformation', 'Healthcare Systems', 'App Development']
    },
    about: {
      whoWeAre: 'Who We Are ?',
      title: 'ProCode Solutions',
      description: 'We are a forward-thinking technology company specializing in AI-integrated software and digital transformation. We believe that technology should do more than just function—it should change lives for the better.',
      visionTitle: 'Vision',
      vision: 'To be a global leader in AI-driven innovation, empowering businesses to reach their full potential through smart automation.',
      missionTitle: 'Mission',
      mission: 'To provide high-quality, scalable digital solutions (Mobile, Web, AI) that solve real-world problems and bridge the gap between technology and daily life.',

    },
    services: {
      whatWeDo: 'What We Do ?',
      title: 'Perfect Solution For Your Business',
      description: 'ProCode Solutions offers comprehensive AI-driven solutions tailored to meet your business needs and drive digital transformation.',
      readMore: 'Read More',
      workProcess: 'Work Process',
      digitalSystem: 'Digital Systems',
      digitalSystemDesc: 'Our digital systems and processes are designed to streamline your business operations and maximize efficiency through AI-powered automation.',
      aiLLMIntegration: {
        name: 'AI & LLM Integration',
        desc: 'Building smart systems like Dog Life AI that use Large Language Models to analyze behavior and provide deep insights.',
        fullDescription: 'Building smart systems like Dog Life AI that use Large Language Models to analyze behavior and provide deep insights. We leverage cutting-edge AI technology to create intelligent solutions that understand context, learn from data, and provide actionable insights for businesses across various industries.'
      },
      digitalTransformation: {
        name: 'Digital Transformation (LMENUS)',
        desc: 'Digitizing traditional businesses like restaurants with cloud-based ordering and management systems.',
        fullDescription: 'Digitizing traditional businesses like restaurants with cloud-based ordering and management systems. We transform legacy operations into modern, efficient digital ecosystems that streamline processes, reduce costs, and enhance customer experiences through innovative cloud-based solutions.'
      },
      customAppDevelopment: {
        name: 'Custom App Development',
        desc: 'Developing high-performance iOS and Android applications with secure payment integrations like Stripe.',
        fullDescription: 'Developing high-performance iOS and Android applications with secure payment integrations like Stripe. Our mobile apps are built with scalability, security, and user experience in mind, featuring seamless payment processing and robust backend infrastructure.'
      },
      healthcareManagement: {
        name: 'Healthcare Management',
        desc: 'Providing specialized systems like My Clinic System to manage patient data, scheduling, and medical records.',
        fullDescription: 'Providing specialized systems like My Clinic System to manage patient data, scheduling, and medical records. Our healthcare solutions ensure HIPAA compliance, secure data management, and streamlined workflows for medical professionals.'
      },
      aiCoachingPlatforms: {
        name: 'AI Coaching Platforms',
        desc: 'Creating personalized fitness and nutrition experiences powered by intelligent algorithms.',
        fullDescription: 'Creating personalized fitness and nutrition experiences powered by intelligent algorithms. Our AI coaching platforms analyze user data to provide customized workout plans, nutrition recommendations, and progress tracking for optimal health outcomes.'
      },
      ecommercePayments: {
        name: 'E-commerce & Payments',
        desc: 'Implementing robust financial integrations and in-app purchase systems for global markets.',
        fullDescription: 'Implementing robust financial integrations and in-app purchase systems for global markets. We integrate secure payment gateways, manage transactions across multiple currencies, and ensure compliance with international financial regulations.'
      },
      aiAnalysis: {
        name: 'AI Analysis & Data Science',
        desc: 'We utilize advanced AI to process data, whether it\'s pet behavior or fitness tracking.',
        fullDescription: 'We utilize advanced AI to process data, whether it\'s pet behavior or fitness tracking. Our data science team employs machine learning algorithms to extract meaningful patterns, predict trends, and provide actionable insights from complex datasets.'
      },
      cloudDashboards: {
        name: 'Real-time Cloud Dashboards',
        desc: 'We provide managers with full control over their business, from menu pricing to clinical financial reports.',
        fullDescription: 'We provide managers with full control over their business, from menu pricing to clinical financial reports. Our cloud-based dashboards offer real-time analytics, customizable reporting, and intuitive interfaces for comprehensive business management.'
      },
      paymentGateways: {
        name: 'Secure Payment Gateways',
        desc: 'Integration of Stripe and In-App purchases to ensure seamless global transactions.',
        fullDescription: 'Integration of Stripe and In-App purchases to ensure seamless global transactions. We implement secure, PCI-compliant payment processing systems that support multiple payment methods, currencies, and provide fraud protection for businesses worldwide.'
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Our Portfolio',
      description: 'Explore our portfolio of successful projects and see how ProCode Solutions delivers excellence in AI-driven innovation.',
      viewPortfolio: 'View Portfolio',
      readyToStart: 'Ready to start your next project with ProCode Solutions?',
      contactToday: 'Contact us today and let ProCode Solutions help you achieve your goals with our expertise and innovative AI solutions.',
      projectName: 'Project',
      projectCategory: 'Category',
      previousProjects: 'Previous Projects',
      projects: [
        'Madinatak - Multi-Vendor Delivery & Business Platform',
        'Taqrerk - AI Reports Platform for Samawah Tech',
        'Dog Life AI - Smart Pet Monitoring',
        'LMENUS - Digital Menu Ecosystem',
        'NutriFit - AI Personal Trainer',
        'My Clinic System - Healthcare Management',
        'Stripe & iOS Payment Integration modules',
        'Customized LLM Analysis Tools',
        'QVStyle - Fashion E-commerce Platform',
        'Turathna - Retail & Inventory System',
        'Herd Tracker - Livestock & Farm Management App'
      ],
      projectDetails: {
        projectDetail: 'Project Detail',
        projectInfo: 'Project Info',
        location: 'Platform',
        client: 'Client',
        category: 'Category',
        date: 'Date',
        url: 'Project Link',
        haveQuestion: 'Have Question ? Get in touch!',
        contactUs: 'Contact us',
        challenge: 'The Challenge',
        solution: 'Our Solution',
        keyFeatures: 'Key Features',
        techStack: 'Technology Stack',
        outcome: 'The Outcome',
        status: 'Status',
        statusLive: 'Live',
        statusDevelopment: 'In Development',
        visitWebsite: 'Visit Website',
        madinatak: {
          name: 'Madinatak (مدينتك بين إيديك)',
          location: 'Multi-App Platform (Customer, Delivery & Business Dashboard)',
          status: 'live',
          challenge: 'Local cities and areas lack a unified platform connecting businesses, customers, and delivery drivers — businesses struggle with digital menus, online ordering, and reliable delivery tracking, while customers want one app for ordering and support.',
          solution: 'ProCode built Madinatak, a complete multi-app ecosystem: a Flutter customer app for browsing and ordering from local businesses, a Flutter delivery app with live order tracking, and a Vue.js dashboard where each business manages its own entity, menu, and orders — powered by an AI chatbot, QR-code menus, integrated payments, and AI-based PDF menu extraction.',
          features: [
            'Multi-vendor business dashboard (Vue.js) to manage entities, pages, menus and orders',
            'Customer mobile app (Flutter) to browse, order and track deliveries',
            'Dedicated delivery driver app with live GPS order tracking',
            'AI-powered chatbot for customer support',
            'QR-code digital menus for restaurants',
            'Integrated payment gateway',
            'AI-based menu extraction directly from PDF files'
          ],
          techStack: ['Flutter', 'Vue.js', 'AI Chatbot', 'AI / LLM (PDF Menu Extraction)', 'Live GPS Tracking', 'Payment Gateway Integration'],
          outcome: 'Madinatak is ProCode\'s flagship production platform — a complete multi-app ecosystem connecting businesses, customers, and delivery drivers in one city-wide system.',
          url: 'https://play.google.com/store/search?q=%D9%85%D8%AF%D9%8A%D9%86%D8%AA%D9%83+%D8%A8%D9%8A%D9%86+%D8%A7%D9%8A%D8%AF%D9%8A%D9%83&c=apps&hl=en-US'
        },
        taqrerk: {
          name: 'Taqrerk (تقريرك)',
          location: 'Web Application (SaaS)',
          client: 'Samawah Tech (شركة سماوة)',
          status: 'live',
          challenge: 'Samawah Tech holds around 30,000 reports for its clients but had no efficient way to search, summarize, or extract insights from them — manual review was slow and costly.',
          solution: 'ProCode built Taqrerk for Samawah Tech, a SaaS platform that ingests and indexes around 30,000 reports, powered by a Python RAG system and an AI chatbot that can answer questions about the report archive, generate insights, and produce summaries — hosted on Google Cloud with an optimized architecture that keeps running costs very low.',
          features: [
            'Ingestion pipeline for ~30,000 reports',
            'AI chatbot (RAG-based) answering questions across the report archive',
            'Automated insights generation',
            'Automated report summarization',
            'Integrated Meeysar (ميسر) payment gateway',
            'Optimized cloud infrastructure for very low operating costs'
          ],
          techStack: ['.NET', 'PostgreSQL', 'Python (RAG / AI)', 'Google Cloud', 'Meeysar Payment Gateway'],
          outcome: 'Samawah Tech now offers its clients instant AI-powered access to insights across tens of thousands of reports, at a significantly lower running cost thanks to ProCode\'s optimized architecture.',
          url: 'https://taqrerk.sa/'
        },
        dogLifeAI: {
          name: 'Dog Life AI',
          location: 'Mobile & Web Application',
          status: 'live',
          challenge: 'Pet owners often miss early signs of stress, illness, or behavioral changes in their dogs because there is no easy way to interpret barking patterns and daily behavior.',
          solution: 'ProCode built an AI-powered mobile and web platform that uses LLM-based analysis to interpret bark patterns and behavioral data, giving owners real-time insights into their dog\'s health and emotional state.',
          features: [
            'AI-powered bark and sound analysis',
            'Health and behavior tracking dashboard',
            'Personalized care recommendations powered by LLM',
            'Daily activity and routine logging',
            'Cross-platform mobile and web experience',
            'Subscription payments via Stripe and Apple Pay'
          ],
          techStack: ['Flutter', 'AI / LLM Integration', 'Stripe', 'Apple Pay'],
          outcome: 'Pet owners gain early warning signs for potential health issues and continuous peace of mind through AI-driven monitoring.',
          url: 'https://play.google.com/store/apps/details?id=com.procode.doglifeai&hl=en'
        },
        lmenus: {
          name: 'LMENUS',
          location: 'Web & Mobile Application',
          status: 'live',
          challenge: 'Restaurants relying on printed menus face high reprinting costs, no real-time price updates, and no online ordering channel.',
          solution: 'ProCode developed a cloud-based digital menu and ordering ecosystem with a customer-facing app and a real-time management dashboard, deployed on a dedicated VPS.',
          features: [
            'QR-code based digital menus',
            'Real-time menu and price updates',
            'Online ordering and order management',
            'Multi-branch restaurant support',
            'Customer-facing mobile experience',
            'Order analytics and reporting'
          ],
          techStack: ['Python', 'PostgreSQL', 'VPS Deployment'],
          outcome: 'Restaurant owners eliminated printing costs and gained live control over their menu, pricing, and orders.'
        },
        nutriFit: {
          name: 'NutriFit',
          location: 'Mobile Application',
          status: 'live',
          challenge: 'Generic fitness apps offer one-size-fits-all plans that don\'t adapt to a user\'s goals, progress, or preferences.',
          solution: 'ProCode built an AI personal trainer app powered by a Python AI agent that generates personalized workout and nutrition plans, adapting as the user progresses.',
          features: [
            'AI-generated personalized workout plans',
            'Smart nutrition and diet recommendations',
            'Progress tracking and analytics',
            'Adaptive, goal-based plan adjustments',
            'Daily reminders and routines',
            'Subscription payments via Paymob'
          ],
          techStack: ['Flutter', 'Python AI Agent', 'Paymob'],
          outcome: 'Users get a personalized coaching experience that adapts to their progress, like having a trainer in their pocket.',
          url: 'https://play.google.com/store/apps/details?id=nutrifitai.u3.nutrifitaii&hl=en-US'
        },
        myClinicSystem: {
          name: 'My Clinic System (سيستم عيادتي)',
          location: 'Web & Mobile Application',
          status: 'development',
          challenge: 'Clinics manage appointments, patient records, and finances manually or across disconnected tools, causing errors and wasted staff time.',
          solution: 'ProCode is building a bilingual (Arabic/English) web and mobile platform that centralizes bookings, patient archives, and financial reporting for clinics.',
          features: [
            'Appointment scheduling and booking management',
            'Patient records and archive management',
            'Financial and revenue reports',
            'Secure patient data management',
            'Multi-staff access with role permissions',
            'Full Arabic and English support'
          ],
          techStack: ['.NET', 'Vue.js'],
          outcome: 'Once launched, clinics will streamline daily operations and reduce paperwork and scheduling conflicts.'
        },
        qvStyle: {
          name: 'QVStyle',
          location: 'Web & Mobile Application',
          status: 'live',
          challenge: 'Fashion retailers need a fast, mobile-first storefront alongside a powerful backend to manage inventory, suppliers, and orders at scale.',
          solution: 'ProCode built QVStyle, a modern fashion e-commerce platform with a mobile-first storefront and a powerful admin dashboard, built on a .NET API, PostgreSQL database, and Vue.js frontend.',
          features: [
            'Mobile-first, responsive storefront',
            'Admin dashboard for inventory, orders, suppliers and products',
            'Secure authentication',
            'Real-time stock tracking',
            'Barcode / QR code support',
            'Production-ready deployment'
          ],
          techStack: ['.NET', 'PostgreSQL', 'Vue.js'],
          outcome: 'QVStyle is live in market as a scalable, production-ready fashion e-commerce platform.',
          url: 'https://qvstyle.com/'
        },
        turathna: {
          name: 'Turathna',
          location: 'Web & Handheld Application',
          status: 'live',
          challenge: 'Traditional retail businesses lack real-time stock visibility and rely on manual, error-prone sales processes.',
          solution: 'ProCode built Turathna, a retail and inventory management system combining an admin dashboard, real-time stock control, and an integrated POS with barcode scanning, on a scalable .NET backend with a Vue.js frontend.',
          features: [
            'Admin dashboard for full business control',
            'Real-time inventory and stock control',
            'Integrated POS with barcode scanning',
            'Desktop and handheld device support',
            'Scalable .NET backend',
            'Secure authentication and production-ready deployment'
          ],
          techStack: ['.NET', 'Vue.js'],
          outcome: 'Turathna is live, helping retail businesses modernize daily sales and operations with real-time accuracy.',
          url: 'https://turathunas.com/'
        },
        herdTracker: {
          name: 'Herd Tracker (متابعة القطيع)',
          location: 'Mobile Application (Android)',
          status: 'live',
          challenge: 'Livestock farmers keep animal records, purchases and farm accounts on paper or in scattered notebooks, so it is hard to follow the history of each animal or to know how the farm is really doing financially.',
          solution: 'ProCode built Herd Tracker, a bilingual Arabic/English mobile app where farm owners register every animal bought or born on the farm, keep a full record for each one, and follow expenses, income and milk sales in one place, with separate accounts for farmers, veterinarians, sellers and buyers.',
          features: [
            'Record animals bought or born on the farm: cattle, sheep, goats and horses',
            'A full record for each animal: ID number, breed, name, birth date, age, sex and parents, with photos and documents',
            'Purchase details: seller, date, price, weight, number of animals and production purpose',
            'Farm expenses, income and milk sales, with an account summary',
            'Reports on purchased, sold and newborn animals',
            'Account types for farmers, veterinarians, sellers and buyers',
            'Full Arabic and English support'
          ],
          outcome: 'Farm owners keep their herd records and farm accounts together in one app, making daily follow-up easier and the data of every animal a tap away.',
          url: 'https://play.google.com/store/apps/details?id=com.procode.elan3am'
        },
        wavelink: {
          name: 'WaveLink',
          location: 'Web Application & WhatsApp',
          status: 'live',
          challenge: 'Businesses struggle to answer customer questions on WhatsApp instantly and consistently, tying up staff with repetitive queries around the clock.',
          solution: 'ProCode built WaveLink, an AI-powered WhatsApp assistant that answers customers automatically from a custom knowledge base. Teams upload their own documents (PDFs and files), and the assistant replies accurately in real time, all managed from an admin dashboard.',
          features: [
            'AI assistant that replies to customers on WhatsApp automatically',
            'Custom knowledge base built from uploaded PDFs and documents',
            'Admin dashboard to manage conversations and content',
            'Accurate, context-aware answers grounded in your own data',
            'Seamless WhatsApp integration for instant, 24/7 responses',
            'Secure, scalable FastAPI backend'
          ],
          techStack: ['FastAPI', 'Vue.js', 'WhatsApp API', 'AI / RAG'],
          outcome: 'WaveLink is live, helping businesses deliver instant, around-the-clock customer support on WhatsApp while reducing manual workload.',
          url: 'https://wavelink.procode-solutions.com/'
        }
      }
    },
    products: {
      subtitle: 'Our Products',
      title: 'Ready-made systems you can start using now',
      description: 'Besides building custom software, we make and run our own products for shops, restaurants and businesses.',
      items: [
        {
          key: 'storix',
          name: 'Storix',
          tag: 'For shops and chains',
          description: 'A complete system for your shop and all its branches, delivered under your own name and brand.',
          features: ['A POS (cashier) in every branch', 'Stock in every branch, and transfers between them', 'Your own online store, with orders and delivery'],
          button: 'Discover Storix'
        },
        {
          key: 'wavelink',
          name: 'Wavelink',
          tag: 'For businesses that sell on WhatsApp',
          description: 'An AI assistant that answers your customers on WhatsApp day and night, trained on your business. Plus an API for developers.',
          features: ['Answers your customers 24/7', 'You can step in and take over any chat', 'An API to send messages and login codes from your own system'],
          button: 'Start free'
        },
        {
          key: 'restora',
          name: 'Restora',
          tag: 'For restaurants and cafes',
          description: 'A website for your restaurant and a system that runs its orders: customers order online and every order reaches you.',
          features: ["A website in your restaurant's name", 'Dine-in, delivery and takeaway orders on one screen', 'Orders can also go to your WhatsApp'],
          button: 'Try it free for 14 days'
        }
      ]
    },
    buttons: {
      getStarted: 'Get Started',
      sendMessage: 'Send Message'
    },
    form: {
      name: 'Name :',
      email: 'Email :',
      subject: 'Subject :',
      message: 'Message :'
    },
    contact: {
      contactUs: 'Contact us',
      title: 'Get In Touch !',
      description: 'Get in touch with ProCode Solutions. We\'re here to help you with your projects and answer any questions you may have.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      whatsapp: 'Chat on WhatsApp'
    },
    footer: {
      copyright: 'ProCode Solutions. All rights reserved.'
    },
    clients: {
      title: 'Our Clients',
      subtitle: 'Trusted Partners',
      description: 'We are proud to work with leading companies and organizations across various industries.'
    },
    reviews: {
      title: 'Client Reviews',
      subtitle: 'What Our Clients Say',
      description: 'Real, verified reviews from our clients on Mostaql and Facebook.',
      viewReview: 'View Review'
    },
    suppliersForm: {
      title: 'Supplier Registration',
      subtitle: 'Join our network of trusted suppliers',
      description: 'Fill out the form below to register your company as a potential supplier for ProCode Solutions.',
      companyName: 'Company Name',
      commercialRegister: 'Commercial Register Number',
      employeeName: 'Responsible Employee Name',
      jobTitle: 'Job Title',
      phone: 'Mobile Number',
      products: 'Products or Services',
      submit: 'Send Application',
      invalidPhone: 'Please enter a valid Egyptian phone number (e.g., 01012345678)'
    }
  },
  ar: {
    nav: {
      home: 'الشركة',
      products: 'منتجاتنا',
      about: 'من نحن',
      services: 'الخدمات',
      portfolio: 'المشاريع',
      reviews: 'التقييمات',
      review: 'العملاء',
      team: 'فريقنا',
      pricing: 'الأسعار',
      blog: 'آخر التحديثات',
      contact: 'اتصل بنا',
      suppliers: 'الموردين',
      companyMenu: {
        overview: 'نظرة عامة',
        mission: 'المهمة',
        vision: 'الرؤية',

      },
      servicesMenu: {
        aiLLM: 'تكامل الذكاء الاصطناعي ونماذج اللغة الكبيرة',
        digitalTransformation: 'التحول الرقمي',
        appDevelopment: 'تطوير التطبيقات المخصصة',
        healthcare: 'إدارة الرعاية الصحية',
        aiCoaching: 'منصات التدريب بالذكاء الاصطناعي',
        ecommerce: 'التجارة الإلكترونية والمدفوعات'
      }
    },
    hero: {
      title: 'ProCode Solutions: إعادة تعريف المستقبل من خلال الكود الذكي.',
      subtitle: 'نحن لا نبني البرمجيات فحسب؛ بل نخلق أنظمة مدعومة بالذكاء الاصطناعي تحول الأعمال.',
      description: 'من رعاية الحيوانات الأليفة بالذكاء الاصطناعي إلى إدارة العيادات الذكية، نحقق رؤيتك.',
      typewriterWords: ['حلول الذكاء الاصطناعي', 'التحول الرقمي', 'أنظمة الرعاية الصحية', 'تطوير التطبيقات']
    },
    about: {
      whoWeAre: 'من نحن ؟',
      title: 'ProCode Solutions',
      description: 'نحن شركة تقنية متقدمة متخصصة في البرمجيات المدمجة بالذكاء الاصطناعي والتحول الرقمي. نؤمن أن التكنولوجيا يجب أن تفعل أكثر من مجرد العمل—يجب أن تغير الحياة للأفضل.',
      visionTitle: 'الرؤية',
      vision: 'أن نكون رائداً عالمياً في الابتكار المدعوم بالذكاء الاصطناعي، وتمكين الشركات من الوصول إلى إمكاناتها الكاملة من خلال الأتمتة الذكية.',
      missionTitle: 'الرسالة',
      mission: 'تقديم حلول رقمية عالية الجودة وقابلة للتطوير (موبايل، ويب، ذكاء اصطناعي) تحل المشاكل الحقيقية وتربط بين التكنولوجيا والحياة اليومية.',

    },
    services: {
      whatWeDo: 'ماذا نفعل ؟',
      title: 'الحل المثالي لعملك',
      description: 'تقدم ProCode Solutions حلولاً شاملة مدعومة بالذكاء الاصطناعي مصممة خصيصاً لتلبية احتياجات عملك وتحقيق التحول الرقمي.',
      readMore: 'اقرأ المزيد',
      workProcess: 'عملية العمل',
      digitalSystem: 'الأنظمة الرقمية',
      digitalSystemDesc: 'تم تصميم أنظمتنا وعملياتنا الرقمية لتبسيط عمليات عملك وتعظيم الكفاءة من خلال الأتمتة المدعومة بالذكاء الاصطناعي.',
      aiLLMIntegration: {
        name: 'تكامل الذكاء الاصطناعي ونماذج اللغة الكبيرة',
        desc: 'بناء أنظمة ذكية مثل Dog Life AI التي تستخدم نماذج اللغة الكبيرة لتحليل السلوك وتقديم رؤى عميقة.',
        fullDescription: 'بناء أنظمة ذكية مثل Dog Life AI التي تستخدم نماذج اللغة الكبيرة لتحليل السلوك وتقديم رؤى عميقة. نستفيد من تكنولوجيا الذكاء الاصطناعي المتطورة لإنشاء حلول ذكية تفهم السياق وتتعلم من البيانات وتقدم رؤى قابلة للتنفيذ للشركات في مختلف الصناعات.'
      },
      digitalTransformation: {
        name: 'التحول الرقمي (LMENUS)',
        desc: 'رقمنة الأعمال التقليدية مثل المطاعم مع أنظمة الطلب والإدارة المستندة إلى السحابة.',
        fullDescription: 'رقمنة الأعمال التقليدية مثل المطاعم مع أنظمة الطلب والإدارة المستندة إلى السحابة. نحول العمليات القديمة إلى أنظمة رقمية حديثة وفعالة تبسط العمليات وتقلل التكاليف وتعزز تجارب العملاء من خلال حلول مبتكرة مستندة إلى السحابة.'
      },
      customAppDevelopment: {
        name: 'تطوير التطبيقات المخصصة',
        desc: 'تطوير تطبيقات iOS و Android عالية الأداء مع تكاملات دفع آمنة مثل Stripe.',
        fullDescription: 'تطوير تطبيقات iOS و Android عالية الأداء مع تكاملات دفع آمنة مثل Stripe. تطبيقاتنا المحمولة مبنية مع مراعاة قابلية التوسع والأمان وتجربة المستخدم، وتتميز بمعالجة دفع سلسة وبنية تحتية خلفية قوية.'
      },
      healthcareManagement: {
        name: 'إدارة الرعاية الصحية',
        desc: 'تقديم أنظمة متخصصة مثل My Clinic System لإدارة بيانات المرضى والجدولة والسجلات الطبية.',
        fullDescription: 'تقديم أنظمة متخصصة مثل My Clinic System لإدارة بيانات المرضى والجدولة والسجلات الطبية. حلول الرعاية الصحية لدينا تضمن الامتثال لـ HIPAA وإدارة آمنة للبيانات وسير عمل مبسط للمهنيين الطبيين.'
      },
      aiCoachingPlatforms: {
        name: 'منصات التدريب بالذكاء الاصطناعي',
        desc: 'إنشاء تجارب لياقة وتغذية مخصصة مدعومة بخوارزميات ذكية.',
        fullDescription: 'إنشاء تجارب لياقة وتغذية مخصصة مدعومة بخوارزميات ذكية. منصات التدريب بالذكاء الاصطناعي لدينا تحلل بيانات المستخدم لتقديم خطط تمرين مخصصة وتوصيات غذائية وتتبع التقدم للحصول على نتائج صحية مثالية.'
      },
      ecommercePayments: {
        name: 'التجارة الإلكترونية والمدفوعات',
        desc: 'تنفيذ تكاملات مالية قوية وأنظمة شراء داخل التطبيق للأسواق العالمية.',
        fullDescription: 'تنفيذ تكاملات مالية قوية وأنظمة شراء داخل التطبيق للأسواق العالمية. ندمج بوابات دفع آمنة وندير المعاملات عبر عملات متعددة ونتأكد من الامتثال للوائح المالية الدولية.'
      },
      aiAnalysis: {
        name: 'تحليل الذكاء الاصطناعي وعلوم البيانات',
        desc: 'نستخدم الذكاء الاصطناعي المتقدم لمعالجة البيانات، سواء كان ذلك سلوك الحيوانات الأليفة أو تتبع اللياقة البدنية.',
        fullDescription: 'نستخدم الذكاء الاصطناعي المتقدم لمعالجة البيانات، سواء كان ذلك سلوك الحيوانات الأليفة أو تتبع اللياقة البدنية. فريق علوم البيانات لدينا يستخدم خوارزميات التعلم الآلي لاستخراج أنماط ذات معنى والتنبؤ بالاتجاهات وتقديم رؤى قابلة للتنفيذ من مجموعات البيانات المعقدة.'
      },
      cloudDashboards: {
        name: 'لوحات المعلومات السحابية في الوقت الفعلي',
        desc: 'نوفر للمديرين سيطرة كاملة على أعمالهم، من تسعير القوائم إلى التقارير المالية السريرية.',
        fullDescription: 'نوفر للمديرين سيطرة كاملة على أعمالهم، من تسعير القوائم إلى التقارير المالية السريرية. لوحات المعلومات المستندة إلى السحابة لدينا تقدم تحليلات في الوقت الفعلي وإعداد تقارير قابلة للتخصيص وواجهات بديهية لإدارة الأعمال الشاملة.'
      },
      paymentGateways: {
        name: 'بوابات الدفع الآمنة',
        desc: 'تكامل Stripe والشراء داخل التطبيق لضمان معاملات عالمية سلسة.',
        fullDescription: 'تكامل Stripe والشراء داخل التطبيق لضمان معاملات عالمية سلسة. ننفذ أنظمة معالجة دفع آمنة ومتوافقة مع PCI تدعم طرق دفع متعددة وعملات وتوفر حماية من الاحتيال للشركات في جميع أنحاء العالم.'
      }
    },
    portfolio: {
      title: 'المشاريع',
      subtitle: 'محفظتنا',
      description: 'استكشف محفظة مشاريعنا الناجحة وشاهد كيف تقدم ProCode Solutions التميز في الابتكار المدعوم بالذكاء الاصطناعي.',
      viewPortfolio: 'عرض المشاريع',
      readyToStart: 'هل أنت مستعد لبدء مشروعك القادم مع ProCode Solutions؟',
      contactToday: 'اتصل بنا اليوم ودع ProCode Solutions تساعدك في تحقيق أهدافك بخبرتنا وحلول الذكاء الاصطناعي المبتكرة.',
      projectName: 'مشروع',
      projectCategory: 'فئة',
      previousProjects: 'المشاريع السابقة',
      projects: [
        'مدينتك بين إيديك - منصة توصيل وإدارة محال متعددة',
        'تقريرك - منصة تقارير ذكية لشركة سماوة',
        'Dog Life AI - مراقبة الحيوانات الأليفة الذكية',
        'LMENUS - نظام القوائم الرقمية',
        'NutriFit - مدرب شخصي بالذكاء الاصطناعي',
        'My Clinic System - إدارة الرعاية الصحية',
        'وحدات تكامل Stripe و iOS للدفع',
        'أدوات تحليل LLM مخصصة',
        'QVStyle - منصة تجارة إلكترونية للأزياء',
        'Turathna - نظام إدارة التجزئة والمخزون',
        'متابعة القطيع - تطبيق إدارة الماشية والمزرعة'
      ],
      projectDetails: {
        projectDetail: 'تفاصيل المشروع',
        projectInfo: 'معلومات المشروع',
        location: 'المنصة',
        client: 'العميل',
        category: 'الفئة',
        date: 'التاريخ',
        url: 'رابط المشروع',
        haveQuestion: 'هل لديك سؤال؟ تواصل معنا!',
        contactUs: 'اتصل بنا',
        challenge: 'التحدي',
        solution: 'الحل',
        keyFeatures: 'أبرز المميزات',
        techStack: 'التقنيات المستخدمة',
        outcome: 'النتيجة',
        status: 'الحالة',
        statusLive: 'متاح الآن',
        statusDevelopment: 'قيد التطوير',
        visitWebsite: 'زيارة الموقع',
        madinatak: {
          name: 'مدينتك بين إيديك (Madinatak)',
          location: 'منصة متعددة التطبيقات (عملاء، توصيل، ولوحة تحكم للمحال)',
          status: 'live',
          challenge: 'تفتقر المدن والمناطق المحلية إلى منصة موحدة تربط بين المحال التجارية والعملاء وسائقي التوصيل، حيث تواجه المحال صعوبة في إدارة القوائم الرقمية والطلب أونلاين وتتبع التوصيل، بينما يرغب العملاء في تطبيق واحد للطلب والدعم.',
          solution: 'بنت ProCode منصة "مدينتك بين إيديك"، وهي نظام متكامل من عدة تطبيقات: تطبيق عملاء بـ Flutter لتصفح وطلب المنتجات من المحال المحلية، وتطبيق توصيل بـ Flutter مع تتبع مباشر للطلبات، ولوحة تحكم بـ Vue.js تتيح لكل محل إدارة كيانه وقوائمه وطلباته، مدعومة بروبوت محادثة ذكي وقوائم QR وبوابة دفع متكاملة ونظام استخراج قوائم بالذكاء الاصطناعي من ملفات PDF.',
          features: [
            'لوحة تحكم متعددة المحال (Vue.js) لإدارة الكيانات والصفحات والقوائم والطلبات',
            'تطبيق عملاء (Flutter) لتصفح وطلب المنتجات ومتابعة التوصيل',
            'تطبيق سائق توصيل مخصص مع تتبع GPS مباشر للطلبات',
            'روبوت محادثة ذكي لدعم العملاء',
            'قوائم رقمية عبر رمز QR للمطاعم',
            'بوابة دفع متكاملة',
            'نظام بالذكاء الاصطناعي لاستخراج القوائم من ملفات PDF'
          ],
          techStack: ['Flutter', 'Vue.js', 'روبوت محادثة ذكي', 'ذكاء اصطناعي / LLM لاستخراج القوائم', 'تتبع مباشر بـ GPS', 'تكامل بوابات الدفع'],
          outcome: 'مدينتك بين إيديك هو المنتج الرائد لـ ProCode في مرحلة الإنتاج — نظام متكامل من عدة تطبيقات يربط المحال التجارية والعملاء وسائقي التوصيل في منظومة واحدة على مستوى المدينة.',
          url: 'https://play.google.com/store/search?q=%D9%85%D8%AF%D9%8A%D9%86%D8%AA%D9%83+%D8%A8%D9%8A%D9%86+%D8%A7%D9%8A%D8%AF%D9%8A%D9%83&c=apps&hl=en-US'
        },
        taqrerk: {
          name: 'تقريرك (Taqrerk)',
          location: 'تطبيق ويب (SaaS)',
          client: 'شركة سماوة (Samawah Tech)',
          status: 'live',
          challenge: 'تمتلك شركة سماوة حوالي 30,000 تقرير لعملائها، دون وجود وسيلة فعالة للبحث فيها أو تلخيصها أو استخراج رؤى منها، مما جعل المراجعة اليدوية بطيئة ومكلفة.',
          solution: 'طورت ProCode منصة "تقريرك" لشركة سماوة، وهي منصة SaaS تستوعب وتفهرس حوالي 30,000 تقرير، مدعومة بنظام RAG مبني بـ Python وروبوت محادثة ذكي يجيب على الأسئلة المتعلقة بأرشيف التقارير، ويولّد رؤى وملخصات تلقائية - مستضافة على Google Cloud ببنية محسّنة تجعل تكاليف التشغيل منخفضة جداً.',
          features: [
            'نظام استيعاب لحوالي 30,000 تقرير',
            'روبوت محادثة ذكي (RAG) يجيب عن أسئلة حول أرشيف التقارير',
            'توليد رؤى تلقائي',
            'تلخيص تلقائي للتقارير',
            'تكامل بوابة دفع ميسر (Meeysar)',
            'بنية تحتية سحابية محسّنة لتكاليف تشغيل منخفضة جداً'
          ],
          techStack: ['.NET', 'PostgreSQL', 'Python (RAG / ذكاء اصطناعي)', 'Google Cloud', 'بوابة دفع ميسر'],
          outcome: 'أصبح لدى عملاء شركة سماوة وصول فوري مدعوم بالذكاء الاصطناعي إلى رؤى من عشرات آلاف التقارير، بتكلفة تشغيل أقل بكثير بفضل البنية المحسّنة من ProCode.',
          url: 'https://taqrerk.sa/'
        },
        dogLifeAI: {
          name: 'Dog Life AI',
          location: 'تطبيق موبايل ويب',
          status: 'live',
          challenge: 'غالباً ما يفوت أصحاب الحيوانات الأليفة العلامات المبكرة للتوتر أو المرض أو التغيرات السلوكية لدى كلابهم، نظراً لصعوبة تفسير أنماط النباح والسلوك اليومي.',
          solution: 'طورت ProCode منصة ذكاء اصطناعي للموبايل والويب تستخدم تقنية LLM لتحليل أنماط النباح والبيانات السلوكية، لتمنح الملاك رؤى فورية حول صحة كلابهم وحالتهم النفسية.',
          features: [
            'تحليل النباح والأصوات بالذكاء الاصطناعي',
            'لوحة متابعة الصحة والسلوك',
            'توصيات رعاية مخصصة مدعومة بـ LLM',
            'تسجيل النشاط اليومي والروتين',
            'تجربة متكاملة عبر الموبايل والويب',
            'دفع الاشتراكات عبر Stripe و Apple Pay'
          ],
          techStack: ['Flutter', 'تكامل الذكاء الاصطناعي / LLM', 'Stripe', 'Apple Pay'],
          outcome: 'يحصل أصحاب الحيوانات الأليفة على إنذار مبكر لأي مشاكل صحية محتملة وراحة بال مستمرة بفضل المراقبة الذكية.',
          url: 'https://play.google.com/store/apps/details?id=com.procode.doglifeai&hl=en'
        },
        lmenus: {
          name: 'LMENUS',
          location: 'تطبيق ويب وموبايل',
          status: 'live',
          challenge: 'تواجه المطاعم التي تعتمد على القوائم المطبوعة تكاليف إعادة طباعة مرتفعة، وعدم القدرة على تحديث الأسعار فورياً، وغياب قناة للطلب أونلاين.',
          solution: 'طورت ProCode نظام قوائم وطلبات رقمي يعمل على السحابة، يضم تطبيقاً للعملاء ولوحة تحكم إدارية فورية، تم نشره على خادم VPS مخصص.',
          features: [
            'قوائم رقمية عبر رمز QR',
            'تحديث القوائم والأسعار فورياً',
            'إدارة الطلبات والطلب أونلاين',
            'دعم الفروع المتعددة للمطاعم',
            'تجربة استخدام سهلة للعملاء عبر الموبايل',
            'تقارير وتحليلات للطلبات'
          ],
          techStack: ['Python', 'PostgreSQL', 'نشر على VPS'],
          outcome: 'تخلص أصحاب المطاعم من تكاليف الطباعة وأصبح لديهم تحكم مباشر في القائمة والأسعار والطلبات.'
        },
        nutriFit: {
          name: 'NutriFit',
          location: 'تطبيق موبايل',
          status: 'live',
          challenge: 'تقدم تطبيقات اللياقة العامة خططاً موحدة لا تتكيف مع أهداف المستخدم أو تقدمه أو تفضيلاته.',
          solution: 'بنت ProCode تطبيق مدرب شخصي بالذكاء الاصطناعي مدعوماً بوكيل ذكاء اصطناعي مبني بـ Python، يولّد خطط تمرين وتغذية مخصصة تتكيف مع تقدم المستخدم.',
          features: [
            'خطط تمرين مخصصة يولدها الذكاء الاصطناعي',
            'توصيات غذائية ذكية',
            'تتبع التقدم والتحليلات',
            'تعديل الخطط تلقائياً حسب الأهداف',
            'تذكيرات وروتين يومي',
            'دفع الاشتراكات عبر Paymob'
          ],
          techStack: ['Flutter', 'وكيل ذكاء اصطناعي بـ Python', 'Paymob'],
          outcome: 'يحصل المستخدمون على تجربة تدريب مخصصة تتكيف مع تقدمهم، كأن لديهم مدرباً شخصياً في جيبهم.',
          url: 'https://play.google.com/store/apps/details?id=nutrifitai.u3.nutrifitaii&hl=en-US'
        },
        myClinicSystem: {
          name: 'My Clinic System (سيستم عيادتي)',
          location: 'تطبيق ويب وموبايل',
          status: 'development',
          challenge: 'تدير العيادات الحجوزات وسجلات المرضى والتقارير المالية يدوياً أو عبر أدوات منفصلة، مما يسبب أخطاء وإهداراً لوقت الموظفين.',
          solution: 'تعمل ProCode على بناء منصة ويب وموبايل ثنائية اللغة (عربي/إنجليزي) تجمع الحجوزات وأرشيف المرضى والتقارير المالية في مكان واحد.',
          features: [
            'جدولة وإدارة الحجوزات',
            'إدارة سجلات وأرشيف المرضى',
            'تقارير مالية وإيرادات',
            'إدارة آمنة لبيانات المرضى',
            'صلاحيات متعددة لفريق العيادة',
            'دعم كامل للغتين العربية والإنجليزية'
          ],
          techStack: ['.NET', 'Vue.js'],
          outcome: 'بعد الإطلاق، ستتمكن العيادات من تبسيط عملياتها اليومية وتقليل الأعمال الورقية وتعارض المواعيد.'
        },
        qvStyle: {
          name: 'QVStyle',
          location: 'تطبيق ويب وموبايل',
          status: 'live',
          challenge: 'تحتاج متاجر الأزياء إلى واجهة سريعة تركز على الموبايل، إلى جانب نظام خلفي قوي لإدارة المخزون والموردين والطلبات على نطاق واسع.',
          solution: 'بنت ProCode منصة QVStyle، وهي منصة تجارة إلكترونية حديثة للأزياء بواجهة متجر تركز على الموبايل ولوحة تحكم إدارية قوية، مبنية على واجهات برمجة تطبيقات .NET وقاعدة بيانات PostgreSQL وواجهة Vue.js.',
          features: [
            'واجهة متجر متجاوبة تركز على الموبايل',
            'لوحة تحكم لإدارة المخزون والطلبات والموردين والمنتجات',
            'مصادقة آمنة',
            'تتبع المخزون في الوقت الفعلي',
            'دعم الباركود ورمز QR',
            'نشر جاهز للإنتاج'
          ],
          techStack: ['.NET', 'PostgreSQL', 'Vue.js'],
          outcome: 'QVStyle متاح الآن في السوق كمنصة تجارة إلكترونية للأزياء جاهزة للإنتاج وقابلة للتوسع.',
          url: 'https://qvstyle.com/'
        },
        turathna: {
          name: 'تراثنا',
          location: 'تطبيق ويب وأجهزة محمولة',
          status: 'live',
          challenge: 'تفتقر الأعمال التجارية التقليدية إلى رؤية فورية للمخزون وتعتمد على عمليات بيع يدوية عرضة للأخطاء.',
          solution: 'بنت ProCode نظام تراثنا، نظام إدارة تجزئة ومخزون يجمع بين لوحة تحكم إدارية، وتحكم في المخزون في الوقت الفعلي، ونظام نقاط بيع متكامل مع مسح الباركود، على نظام خلفي قابل للتوسع بـ .NET وواجهة Vue.js.',
          features: [
            'لوحة تحكم للتحكم الكامل في الأعمال',
            'تحكم في المخزون في الوقت الفعلي',
            'نظام نقاط بيع متكامل مع مسح الباركود',
            'دعم أجهزة سطح المكتب والأجهزة المحمولة',
            'نظام خلفي قابل للتوسع بـ .NET',
            'مصادقة آمنة ونشر جاهز للإنتاج'
          ],
          techStack: ['.NET', 'Vue.js'],
          outcome: 'تراثنا متاح الآن، ويساعد الشركات التجارية على تحديث عمليات البيع اليومية بدقة فورية.',
          url: 'https://turathunas.com/'
        },
        herdTracker: {
          name: 'متابعة القطيع (Herd Tracker)',
          location: 'تطبيق موبايل (أندرويد)',
          status: 'live',
          challenge: 'أصحاب المزارع ومربو الماشية يسجلون بيانات الحيوانات والمشتريات وحسابات المزرعة في الورق أو في دفاتر متفرقة، فيصعب متابعة تاريخ كل حيوان أو معرفة الوضع المالي الحقيقي للمزرعة.',
          solution: 'بنت ProCode تطبيق متابعة القطيع، تطبيق موبايل بالعربية والإنجليزية يسجّل فيه صاحب المزرعة كل حيوان يشتريه أو يولد في المزرعة، ويحتفظ بسجل كامل لكل حيوان، ويتابع المصروفات والإيرادات ومبيعات الحليب من مكان واحد، مع حسابات منفصلة للمزارع والطبيب البيطري والبائع والمشتري.',
          features: [
            'تسجيل الحيوانات المشتراة أو المولودة في المزرعة: أبقار وأغنام وماعز وخيل',
            'سجل كامل لكل حيوان: رقم التعريف والسلالة والاسم وتاريخ الميلاد والعمر والجنس والأب والأم، مع الصور والمستندات',
            'بيانات الشراء: البائع والتاريخ والسعر والوزن وعدد الحيوانات والهدف الإنتاجي',
            'مصروفات وإيرادات المزرعة ومبيعات الحليب، مع ملخص للحسابات',
            'تقارير الحيوانات المشتراة والمباعة والمولودة',
            'أنواع حسابات للمزارع والطبيب البيطري والبائع والمشتري',
            'دعم كامل للعربية والإنجليزية'
          ],
          outcome: 'يجمع أصحاب المزارع سجلات القطيع وحسابات المزرعة في تطبيق واحد، فتسهل المتابعة اليومية وتصبح بيانات كل حيوان في متناول اليد.',
          url: 'https://play.google.com/store/apps/details?id=com.procode.elan3am'
        },
        wavelink: {
          name: 'ويف لينك',
          location: 'تطبيق ويب وواتساب',
          status: 'live',
          challenge: 'تواجه الشركات صعوبة في الرد على استفسارات العملاء عبر واتساب بشكل فوري ومتسق، مما يستنزف وقت الموظفين في الأسئلة المتكررة على مدار الساعة.',
          solution: 'بنت ProCode نظام ويف لينك، وهو مساعد ذكاء اصطناعي عبر واتساب يرد على العملاء تلقائيًا اعتمادًا على قاعدة معرفة مخصصة. ترفع الفرق مستنداتها الخاصة (ملفات PDF وملفات أخرى)، ويرد المساعد بدقة وفي الوقت الفعلي، مع إدارة كل ذلك من لوحة تحكم إدارية.',
          features: [
            'مساعد ذكاء اصطناعي يرد على العملاء عبر واتساب تلقائيًا',
            'قاعدة معرفة مخصصة مبنية من ملفات PDF والمستندات المرفوعة',
            'لوحة تحكم إدارية لإدارة المحادثات والمحتوى',
            'إجابات دقيقة ومترابطة معتمدة على بياناتك الخاصة',
            'تكامل سلس مع واتساب لردود فورية على مدار الساعة',
            'نظام خلفي آمن وقابل للتوسع بـ FastAPI'
          ],
          techStack: ['FastAPI', 'Vue.js', 'واتساب API', 'ذكاء اصطناعي / RAG'],
          outcome: 'ويف لينك متاح الآن، ويساعد الشركات على تقديم دعم فوري للعملاء عبر واتساب على مدار الساعة مع تقليل العمل اليدوي.',
          url: 'https://wavelink.procode-solutions.com/'
        }
      }
    },
    products: {
      subtitle: 'منتجاتنا',
      title: 'أنظمة جاهزة تبدأ تستخدمها على طول',
      description: 'غير البرمجة حسب الطلب، عندنا منتجات جاهزة بنعملها ونشغّلها بنفسنا للمحلات والمطاعم والشركات.',
      items: [
        {
          key: 'storix',
          name: 'Storix',
          tag: 'للمحلات والفروع',
          description: 'سيستم كامل لمحلك وكل فروعه، باسم محلك وبراندك.',
          features: ['كاشير (POS) في كل فرع', 'مخزن كل فرع قدامك، والتحويل بين الفروع', 'متجر أونلاين باسم محلك، بالطلبات والتوصيل'],
          button: 'اعرف أكتر عن Storix'
        },
        {
          key: 'wavelink',
          name: 'Wavelink',
          tag: 'للي بيبيع على واتساب',
          description: 'مساعد ذكي يرد على زباينك على واتساب ليل ونهار، متعلّم على شغلك. وكمان API للمطورين.',
          features: ['يرد على زباينك 24 ساعة', 'تقدر تدخل وتكمّل أي محادثة بنفسك', 'API تبعت بيه رسائل وأكواد دخول من السيستم بتاعك'],
          button: 'ابدأ مجاناً'
        },
        {
          key: 'restora',
          name: 'Restora',
          tag: 'للمطاعم والكافيهات',
          description: 'موقع لمطعمك وسيستم يدير طلباته: الزبون يطلب أونلاين والطلب يوصلك على طول.',
          features: ['موقع باسم مطعمك', 'طلبات الصالة والدليفري والتيك أواي على شاشة واحدة', 'الطلبات توصلك على واتساب كمان'],
          button: 'جرّب 14 يوم مجاناً'
        }
      ]
    },
    buttons: {
      getStarted: 'ابدأ الآن',
      sendMessage: 'إرسال الرسالة'
    },
    form: {
      name: 'الاسم :',
      email: 'البريد الإلكتروني :',
      subject: 'الموضوع :',
      message: 'الرسالة :'
    },
    contact: {
      contactUs: 'اتصل بنا',
      title: 'تواصل معنا !',
      description: 'تواصل مع ProCode Solutions. نحن هنا لمساعدتك في مشاريعك والإجابة على أي أسئلة قد تكون لديك.',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      location: 'الموقع',
      whatsapp: 'تواصل عبر واتساب'
    },
    footer: {
      copyright: 'ProCode Solutions. جميع الحقوق محفوظة.'
    },
    clients: {
      title: 'عملاؤنا',
      subtitle: 'شركاؤنا الموثوقون',
      description: 'نفتخر بالعمل مع الشركات والمنظمات الرائدة في مختلف الصناعات.'
    },
    reviews: {
      title: 'تقييمات العملاء',
      subtitle: 'ماذا يقول عملاؤنا',
      description: 'تقييمات حقيقية وموثقة من عملائنا على مستقل وفيسبوك.',
      viewReview: 'عرض التقييم'
    },
    suppliersForm: {
      title: 'تسجيل الموردين',
      subtitle: 'انضم إلى شبكة موردينا المعتمدين',
      description: 'يرجى ملء النموذج أدناه لتسجيل شركتكم كمورد محتمل لـ ProCode Solutions.',
      companyName: 'اسم الشركة',
      commercialRegister: 'رقم السجل التجارى',
      employeeName: 'اسم الموظف المسئول',
      jobTitle: 'الوظيفة',
      phone: 'رقم الموبايل',
      products: 'المنتجات او الخدمات',
      submit: 'إرسال الطلب',
      invalidPhone: 'يرجى إدخال رقم موبايل مصري صحيح (مثال: 01012345678)'
    }
  }
}

// Helper function to update document direction
const updateDocumentDir = (lang) => {
  if (process.client) {
    const htmlTag = document.documentElement
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr'
    htmlTag.lang = lang
  }
}

export const useLanguage = () => {
  // Initialize from localStorage or default to 'en' (only once)
  if (process.client && !isInitialized) {
    const savedLang = localStorage.getItem('language') || 'en'
    currentLang.value = savedLang
    updateDocumentDir(savedLang)
    isInitialized = true
  }
  
  const isRTL = computed(() => currentLang.value === 'ar')

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLang.value]
    
    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }
    
    return value || key
  }

  const setLanguage = (lang) => {
    currentLang.value = lang
    if (process.client) {
      localStorage.setItem('language', lang)
      updateDocumentDir(lang)
    }
  }

  const toggleLanguage = () => {
    const current = currentLang.value
    const newLang = current === 'en' ? 'ar' : 'en'
    console.log('Toggling language from', current, 'to', newLang)
    setLanguage(newLang)
  }

  // Watch for language changes and update document
  watch(currentLang, (newLang) => {
    if (process.client) {
      updateDocumentDir(newLang)
    }
  })

  return {
    currentLang: computed(() => currentLang.value),
    isRTL,
    t,
    setLanguage,
    toggleLanguage
  }
}

