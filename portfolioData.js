
// ==============================================================================
// PORTFOLIO CONFIGURATION DATA
// ==============================================================================
// Customized for Bijoy Paul
// AI / Machine Learning | Data Science | Software Engineering | SQL & Power BI
// ==============================================================================

window.PORTFOLIO_DATA = {

  // 1. Personal & Contact Information
  personal: {
    name: "Bijoy",
    surname: "Paul",
    title: "Artificial Intelligence and Machine Learning Student",
    tagline: "Building practical AI, machine learning, data analytics, and intelligent applications.",
    location: "Kolkata, India",
    email: "bijoypaul0106@gmail.com",
    availability: "Open to Full-time Roles, Internships & AI/Data Projects",
    statusIndicator: "Available for new roles",

    bio: [
      "I am an MCA student at Adamas University with a strong interest in Artificial Intelligence, Machine Learning, Data Science, and Software Engineering.",
      "I build practical projects using Python, machine learning, SQL, Power BI, deep learning, NLP, and modern AI technologies, with a focus on solving real-world problems and developing reliable end-to-end applications."
    ],

    social: {
      github: "https://github.com/Bijoy-paul-01",
      linkedin: "https://www.linkedin.com/in/bijoy-paul-81410130a"
    }
  },


  // 2. Portfolio Metrics
  metrics: [
    {
      value: "5+",
      label: "AI & Data Projects",
      description: "Machine learning, deep learning, analytics and intelligent applications"
    },
    {
      value: "100K+",
      label: "ML Training Records",
      description: "Worked with large-scale network intrusion detection datasets"
    },
    {
      value: "40+",
      label: "ML Features",
      description: "Feature engineering and preprocessing for network security data"
    },
    {
      value: "7+",
      label: "Power BI Visuals",
      description: "Interactive business intelligence dashboards and KPI analysis"
    }
  ],


  // 3. Technical Skills Matrix
  skills: {

    coreDomains: [
      {
        name: "Machine Learning & Data Science",
        level: 88,
        icon: "brain"
      },
      {
        name: "Artificial Intelligence & Deep Learning",
        level: 85,
        icon: "sparkles"
      },
      {
        name: "Data Analytics & Visualization",
        level: 86,
        icon: "lineChart"
      },
      {
        name: "SQL & Database Analysis",
        level: 82,
        icon: "database"
      },
      {
        name: "Software Development & Testing",
        level: 75,
        icon: "code"
      }
    ],

    frameworks: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "LangChain",
      "ChromaDB",
      "Hugging Face",
      "Streamlit",
      "Playwright",
      "Pytest"
    ],

    dataTools: [
      "SQL",
      "Power BI",
      "Microsoft Fabric",
      "Excel",
      "PostgreSQL",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Power Query"
    ],

    developerTools: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "REST APIs",
      "Postman",
      "Docker",
      "VS Code",
      "Jupyter Notebook"
    ],

    languages: [
      {
        name: "Python",
        mastery: "Strong"
      },
      {
        name: "SQL",
        mastery: "Strong"
      },
      {
        name: "C / C++",
        mastery: "Strong"
      },
      {
        name: "Java",
        mastery: "Strong"
      },
      {
        name: "VB.NET",
        mastery: "Basic"
      }
    ]
  },


  // 4. Featured Projects
  projects: [

    {
      id: "network-intrusion-detection",
      title: "Machine Learning & Deep Learning Based Network Intrusion Detection System",
      subtitle: "ML-based Network Attack Detection using NSL-KDD",
      category: "Machine Learning & Cybersecurity",
      tags: [
        "Python",
        "Scikit-Learn",
        "TensorFlow",
        "Keras",
        "Pandas",
        "NumPy",
        "Random Forest"
      ],

      metric: "125K+ records · 40+ features · ML & Deep Learning",

      featured: true,

      description:
        "Developed an end-to-end Network Intrusion Detection System using the NSL-KDD dataset. Implemented preprocessing, feature encoding, scaling, machine learning classification, hyperparameter tuning, neural network modeling, and evaluation using confusion matrices and classification metrics.",

      github:
        "https://github.com/Bijoy-paul-01/Network-Intrusion-Detection-System",

      architectureSummary:
        "NSL-KDD Dataset -> Data Cleaning -> Label Encoding -> Feature Scaling -> ML Models -> Hyperparameter Tuning -> Neural Network -> Evaluation",

      caseStudy: {

        problem:
          "Traditional rule-based network monitoring systems can struggle to identify complex and evolving network attack patterns.",

        solution:
          "Built a machine learning and deep learning pipeline using Decision Tree, Random Forest, SVM and a neural network model, with preprocessing and model optimization.",

        results: [
          "Processed more than 125,000 network records",
          "Worked with 40+ input features",
          "Compared multiple machine learning approaches",
          "Implemented hyperparameter tuning using GridSearchCV",
          "Developed a neural network using TensorFlow and Keras"
        ]
      }
    },


    {
      id: "coffee-shop-sales",
      title: "Coffee Shop Sales Analysis",
      subtitle: "SQL & Power BI Business Intelligence Project",
      category: "Data Analytics",
      tags: [
        "SQL",
        "Power BI",
        "Excel",
        "Data Analysis",
        "Data Visualization"
      ],

      metric: "149K+ transactions · $698K+ sales · 3 store locations",

      featured: true,

      description:
        "Analyzed a large coffee shop sales dataset using SQL and Power BI to identify revenue trends, product performance, store-level performance and key business metrics.",

      architectureSummary:
        "Raw Sales Data -> SQL Analysis -> Data Cleaning -> KPI Development -> Power BI Dashboard",

      caseStudy: {

        problem:
          "Business sales data contains valuable information about customer behavior, product performance and revenue trends that can be difficult to interpret from raw tables.",

        solution:
          "Used SQL queries and Power BI dashboards to transform transactional data into meaningful business insights.",

        results: [
          "Analyzed 149K+ transactions",
          "Analyzed more than 214K units sold",
          "Analyzed approximately $698K in sales",
          "Created 3 major business KPIs",
          "Created 7+ interactive Power BI visuals",
          "Compared performance across 3 store locations"
        ]
      }
    },


    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction",
      subtitle: "Machine Learning Classification using UCI Dataset",
      category: "Machine Learning",
      tags: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Logistic Regression",
        "Decision Tree"
      ],

      metric: "79.9% Logistic Regression Accuracy",

      featured: false,

      description:
        "Built a machine learning classification system for predicting heart disease using the UCI dataset. Compared Logistic Regression and Decision Tree models using accuracy, precision and recall.",

      architectureSummary:
        "UCI Dataset -> Preprocessing -> Feature Analysis -> Model Training -> Evaluation",

      caseStudy: {

        problem:
          "Medical datasets can be used to develop predictive models that identify patterns associated with potential health outcomes.",

        solution:
          "Implemented supervised machine learning models and evaluated them using multiple classification metrics.",

        results: [
          "Logistic Regression achieved approximately 79.9% accuracy",
          "Decision Tree achieved approximately 78.8% accuracy",
          "Evaluated precision and recall",
          "Compared multiple classification algorithms"
        ]
      }
    },


    {
      id: "qa-playwright-automation",
      title: "Web Application Test Automation",
      subtitle: "Playwright + Python + Pytest Automation Framework",
      category: "Software Testing",
      tags: [
        "Python",
        "Playwright",
        "Pytest",
        "REST API",
        "Postman",
        "SQL",
        "GitHub Actions"
      ],

      metric: "UI · API · Database · CI/CD Testing",

      featured: false,

      description:
        "Developed a web application test automation framework using Python, Playwright and Pytest with reusable test components and Page Object Model architecture. Covered authentication, navigation, product workflows and checkout scenarios.",

      architectureSummary:
        "Web Application -> Playwright/Pytest -> API Validation -> SQL Database Validation -> GitHub Actions",

      caseStudy: {

        problem:
          "Manual regression testing can become time-consuming and inconsistent as web applications grow in complexity.",

        solution:
          "Built automated UI, API and database validation workflows and integrated regression tests into GitHub Actions.",

        results: [
          "Implemented reusable Page Object Model components",
          "Covered positive and negative test scenarios",
          "Performed REST API validation using Postman and Python",
          "Used SQL for backend data verification",
          "Integrated automated regression testing with GitHub Actions"
        ]
      }
    },

  ],


  // 5. Certifications
  certifications: [

    {
      title: "Microsoft Certified: Fabric Data Engineer Associate",
      issuer: "Microsoft",
      description:
        "Certification focused on implementing data engineering solutions using Microsoft Fabric."
    },

    {
      title: "Implementing Data Engineering Solutions Using Microsoft Fabric",
      issuer: "Microsoft",
      description:
        "Data engineering skills covering Microsoft Fabric and modern data workflows."
    },

    {
      title: "IBM SkillsBuild Professional Excellence Certificate",
      issuer: "IBM",
      description:
        "Professional and career development credential from IBM SkillsBuild."
    },

    {
      title: "EY & Microsoft AI Skills Passport",
      issuer: "EY / Microsoft",
      description:
        "AI-focused learning and skills development credential."
    },

    {
      title: "Google Analytics Certification",
      issuer: "Google",
      description:
        "Certification covering Google Analytics and digital analytics fundamentals."
    }
  ],


  // 6. Professional Experience
  // Kept intentionally focused on projects and training rather than
  // inventing full-time professional experience.
  experience: [

    {
      period: "June 2026 - July 2026",
      role: "Machine Learning and AI Intern",
      company: "BeeSkilled",
      location: "Haryana, India",

      achievements: [
        "Completed hands-on training in Machine Learning, Artificial Intelligence, and Data Science using Python, Pandas, Numpy, and Scikit-learn.",
        "Performed data preprocessing, feature engineering, EDA, and implemented supervised learning algorithms including Logistic Regression, Decision Trees, Random Forest, and SVM.",
        "Applied TensorFlow for model development and evaluated models using Accuracy, Precision, Recall, and F1-score, while gaining practical experience with Git and GitHub."
      ]
    },

  ],


  // 7. Education
  education: [

    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Adamas University",
      period: "2025 - 2027",
      details:
        "Currently pursuing MCA with a focus on Artificial Intelligence, Machine Learning, Data Science, software development and modern computing technologies."
    },

    {
      degree: "Bachelor of Science in Physics",
      institution: "North-Eastern Hill University",
      period: "2021 - 2024",
      details:
        "Bachelor's degree in Physics with additional development of computer application and programming skills."
    },

    {
      degree: "Diploma in Computer Application",
      institution: "Don Bosco Youth Centre",
      period: "2024 - 2025",
      details:
        "Completed computer application training with practical application development work."
    }
  ],


  // 8. Career Interests
  careerInterests: [
    "AI / ML Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Data Analyst",
    "AI Engineer",
    "Software Engineer",
    "SQL Developer",
    "BI / Power BI Analyst",
    "Junior Data Engineer"
  ],


  // 9. Additional Information
  additional: {

    languages: [
      "English",
      "Hindi",
      "Bengali"
    ],

    hobbies: [
      "Football",
      "Sketching"
    ],

    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Generative AI",
      "Data Analytics",
      "Software Engineering"
    ]
  }

};

