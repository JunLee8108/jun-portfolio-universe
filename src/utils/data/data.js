const techStackData = [
  {
    id: 0,
    name: "C++",
    img: "/imgs/c++.webp",
    description: [
      {
        main: "C++ Core Concepts",
        support:
          "Proficient in C++ syntax, data types, pointers, and memory management.",
      },
      {
        main: "Standard Template Library (STL)",
        support:
          "Skilled in using STL containers like vectors, maps, sets, and algorithms for efficient data handling.",
      },
      {
        main: "Advanced Features",
        support:
          "Knowledge of advanced C++ features like templates, lambda expressions, and smart pointers.",
      },
      {
        main: "Performance Optimization",
        support:
          "Proficient in optimizing C++ code for performance, including memory and CPU usage.",
      },
      {
        main: "Performance Optimization",
        support:
          "Keeping up-to-date with modern C++ standards (C++11, C++14, C++17, and beyond).",
      },
    ],
  },
  {
    id: 1,
    name: "Python",
    img: "/imgs/python.webp",
    description: [
      {
        main: "Python Core Concepts",
        support:
          "Mastery of Python syntax, data structures (lists, tuples, dictionaries, sets), and control flow.",
      },
      {
        main: "Libraries and Frameworks",
        support:
          "Proficient in using Python libraries such as NumPy, Pandas for data manipulation, Matplotlib for data visualization, and Flask or Django for web development.",
      },
      {
        main: "Scripting and Automation",
        support:
          "Skilled in writing Python scripts for automation of tasks, data scraping, and system administration.",
      },
      {
        main: "Machine Learning and Data Analysis",
        support:
          "Knowledge of machine learning libraries like scikit-learn, TensorFlow, and PyTorch.",
      },
      {
        main: "Best Practices and Code Quality",
        support:
          "Writing clean, maintainable, and well-documented Python code.",
      },
    ],
  },
  {
    id: 2,
    name: "HTML",
    img: "/imgs/html.webp",
    description: [
      {
        main: "Strong Foundation",
        support:
          "Master CSS fundamentals, including selectors, properties, values, and how styles cascade.",
      },
      {
        main: "Responsive Design",
        support:
          "Know how to create responsive layouts using techniques like media queries and flexbox/grid layouts.",
      },
      {
        main: "Browser Compatibility",
        support:
          "Familiar with cross-browser compatibility issues and learn how to write CSS that works consistently across different browsers.",
      },
      {
        main: "Animation and Transitions",
        support:
          "Master CSS animations and transitions to add subtle or eye-catching effects to your web interfaces.",
      },
      {
        main: "Performance Optimization",
        support:
          "Techniques to optimize CSS for performance, like minification, reducing redundancy, and using efficient selectors.",
      },
    ],
  },
  {
    id: 3,
    name: "CSS",
    img: "/imgs/css.webp",
    description: [
      {
        main: "Strong Foundation",
        support:
          "Master CSS fundamentals, including selectors, properties, values, and how styles cascade.",
      },
      {
        main: "Responsive Design",
        support:
          "Know how to create responsive layouts using techniques like media queries and flexbox/grid layouts.",
      },
      {
        main: "Browser Compatibility",
        support:
          "Familiar with cross-browser compatibility issues and learn how to write CSS that works consistently across different browsers.",
      },
      {
        main: "Animation and Transitions",
        support:
          "Master CSS animations and transitions to add subtle or eye-catching effects to your web interfaces.",
      },
      {
        main: "Performance Optimization",
        support:
          "Techniques to optimize CSS for performance, like minification, reducing redundancy, and using efficient selectors.",
      },
    ],
  },
  {
    id: 4,
    name: "JavaScript",
    img: "/imgs/js.webp",
    description: [
      {
        main: "ES6+ Mastery",
        support:
          "Familiar with ES6+ features like arrow functions, destructuring, classes, template literals, async/await, and promises.",
      },
      {
        main: "Functional Programming",
        support:
          "Functional programming concepts like higher-order functions, pure functions, immutability, and working with arrays and objects.",
      },
      {
        main: "DOM Manipulation",
        support:
          "Know the Document Object Model (DOM) and how to manipulate it to create dynamic and interactive web interfaces",
      },
      {
        main: "Event Handling",
        support:
          "Event handling in JavaScript, including event propagation, delegation, and working with event listeners.",
      },
      {
        main: "AJAX and Fetch API",
        support:
          "Know how to make asynchronous requests to APIs using the Fetch API or XMLHttpRequest for dynamic data retrieval.",
      },
    ],
  },
  {
    id: 5,
    name: "TypeScript",
    img: "/imgs/ts.webp",
    description: [
      {
        main: "TypeScript Basics",
        support:
          "TypeScript's basic types, such as string, number, boolean, array, tuple, enum, and any.",
      },
      {
        main: "Classes and Inheritance",
        support:
          "Define classes, interfaces for classes, and inheritance with TypeScript.",
      },
      {
        main: "Generics",
        support:
          "Know concept of generics, which allow me to write flexible and reusable functions and classes.",
      },
      {
        main: "Type Guards and Type Assertions",
        support:
          "Type guards to narrow down types within conditional statements.",
      },
      {
        main: "Union and Intersection Types",
        support:
          "Union types to handle values that can be one of several types, and intersection types to combine multiple types.",
      },
    ],
  },
  {
    id: 6,
    name: "React",
    img: "/imgs/react.webp",
    description: [
      {
        main: "State Management",
        support:
          "Use state management libraries like Redux for managing complex application states.",
      },
      {
        main: "Routing",
        support:
          "Familiar with React Router or any other routing library to handle navigation in single-page applications.",
      },
      {
        main: "Responsive Design and Styling",
        support:
          "Master CSS and CSS frameworks like Bootstrap or CSS-in-JS libraries like styled-components.",
      },
      {
        main: "API Integration",
        support:
          "API requests using libraries like Axios or the built-in fetch API. Handle data from APIs and update the component state accordingly",
      },
      {
        main: "Component Architecture",
        support:
          "design and organize components in a modular and reusable manner.",
      },
    ],
  },
  {
    id: 7,
    name: "Vue.js",
    img: "/imgs/vue.webp",
    description: [
      {
        main: "Vue Fundamentals:",
        support:
          "solid foundation by understanding Vue's core concepts: data binding, directives, computed properties, and watchers.",
      },
      {
        main: "Vue Router",
        support: "Dynamic routing, route guards, and nested routes.",
      },
      {
        main: "State Management with Vuex",
        support:
          "Manage complex application states using Vuex, Vue's official state management library, and know concepts like actions, mutations, modules, and getters.",
      },
      {
        main: "Lifecycle Hooks",
        support:
          "Familiar with Vue's component lifecycle hooks and understand when to use them for initialization, manipulation, or cleanup.",
      },
      {
        main: "Vue CLI and Tooling",
        support:
          "Use Vue CLI to scaffold, build, and manage Vue applications and Vue DevTools for efficient debugging.",
      },
      {
        main: "Testing with Jest",
        support:
          "Test Vue components and applications using the Jest testing framework.",
      },
    ],
  },
  {
    id: 8,
    name: "Next.js",
    img: "/imgs/next.webp",
    description: [
      {
        main: "React Fundamentals",
        support:
          "Strong understanding of React, as Next.js builds upon React concepts.",
      },
      {
        main: "Pages and Routing",
        support:
          "Know Next.js's file-based routing system and dynamic routing capabilities.",
      },
      {
        main: "API Routes",
        support:
          "Know how to build API routes in Next.js, allowing me to create backend functionality within your frontend application.",
      },
      {
        main: "Data Fetching",
        support:
          "Various data fetching methods in Next.js, including getStaticProps, getServerSideProps, and getInitialProps.",
      },
      {
        main: "Authentication and Authorization",
        support:
          "Techniques for implementing user authentication and authorization in a Next.js application.",
      },
      {
        main: "Error Handling and Debugging",
        support:
          "Debugging techniques specific to Next.js, such as diagnosing server-side errors and rendering issues.",
      },
    ],
  },
  {
    id: 9,
    name: "Node.js",
    img: "/imgs/node.webp",
    description: [
      {
        main: "Node.js Core Concepts",
        support:
          "Know core concepts of Node.js, such as the event loop, modules, streams, buffers, and the CommonJS module system.",
      },
      {
        main: "Express.js Framework",
        support:
          "Use Express.js to build APIs and web applications. Learn about routing, middleware, and request/response handling.",
      },
      {
        main: "Database Integration",
        support:
          "Use different databases like MongoDB, MySQL, PostgreSQL, or Redis. Know how to perform CRUD operations and manage connections.",
      },
      {
        main: "Authentication and Authorization",
        support:
          "Implement secure authentication and authorization mechanisms using packages like Passport.js or JWT.",
      },
      {
        main: "Websockets and Real-Time Applications",
        support:
          "implement real-time features using WebSockets and libraries like Socket.IO.",
      },
    ],
  },
  {
    id: 10,
    name: "Electron.js",
    img: "/imgs/electron.webp",
    description: [
      {
        main: "Electron.js Core Concepts",
        support:
          "Understand the architecture of Electron.js, including main and renderer processes, and their communication methods.",
      },
      {
        main: "User Interface Development",
        support:
          "Design and develop user interfaces using HTML, CSS, and JavaScript within the Electron framework.",
      },
      {
        main: "Integration with Node.js and Third-Party Modules",
        support:
          "Leverage Node.js capabilities within Electron for file system access, network operations, and other backend functionalities.",
      },
      {
        main: "Performance Optimization and Debugging",
        support:
          "Optimize Electron applications for performance, memory usage, and responsiveness.",
      },
      {
        main: "Security Best Practices",
        support:
          "Implement security best practices in Electron applications, such as handling remote content and securing IPC communication.",
      },
      {
        main: "Application Packaging and Distribution",
        support:
          "Knowledge of packaging Electron applications for different operating systems (Windows, MacOS, Linux).",
      },
    ],
  },
];

const portfolioData = [
  {
    id: 0,
    title: "VocaVista",
    img: "imgs/vocavista.webp",
    iconURL1: "https://voca-vista.vercel.app/",
    iconURL2: "https://github.com/JunLee8108/VocaVista",
    iconBgColor: "#8c65d3",
    iconFgColor: "white",
    description: [
      "Korean E-Learning Platform with Adaptive Learning",
      "Created API endpoints to fetch data from MongoDB",
      "Utilized JWT and bcrypt for registration and login",
      "Developed a community feature allowing users to write, edit, and delete posts",
      "Incorporated a gamification feature to enhance the learning experience",
      "Implemented a modern and stylish design using updated CSS skills",
      "Optimized for mobile devices",
      "Tech stack: Next.js, TypeScript, CSS and MongoDB",
    ],
  },
  {
    id: 1,
    title: "IntelliCart",
    img: "imgs/intellicart.webp",
    iconURL1: "https://main.dth2vcti3zp62.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/IntelliCart",
    iconBgColor: "#39ff14",
    iconFgColor: "white",
    description: [
      "AI-Powered E-Commerce Shop",
      "Implemented secure login authentication and authorization mechanisms using JWT in Node.js",
      "Developed user email verification using Nodemailer for registration and forgot password features",
      "Improved initial loading speed with React's 'lazy' and 'Suspense' features",
      "Developed an AI chatbot system",
      "Implemented a modern and stylish design using updated CSS skills",
      "Optimized for mobile devices",
      "Tech stack: React, TypeScript, CSS, Node.js, MongoDB, and TensorFlow",
    ],
  },
  {
    id: 2,
    title: "Income & Expense Manager",
    img: "imgs/expensemanager.webp",
    iconURL1: "https://main.d2bfocmofxkmj4.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/hanara-income-expense-manager",
    iconBgColor: "brown",
    iconFgColor: "white",
    description: [
      "Desktop Application to manage expenses and income used in real-world business",
      "Data can be inserted, modified, and deleted, and all necessary functions such as search, sorting, and filtering data are included",
      "Data can be graphed to make it easier for users to analyze and track income and expenses efficiently",
      "Save and load data locally as a JSON file, and import an Excel file as data and export the data as an Excel file ",
      "Receipt scanning feature for faster data input (in progress)",
      "Tech stack: Electron.js, Node.js, React and CSS",
    ],
  },
  {
    id: 3,
    title: "Refined Seoul",
    img: "imgs/refined.webp",
    iconURL1: "https://main.d2t2zns6ieqh27.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/Refined",
    iconBgColor: "#E5C899",
    iconFgColor: "white",
    description: [
      "Fictional luxury fashion brand",
      "Utilized Redux with the Redux toolkit for state management",
      "Fetched JSON data locally using Axios",
      "Modularized components for improved code maintenance",
      "Implemented Lazy loading of components using React's 'lazy' and 'Suspense'",
      "Used scroll events to trigger dynamic web animations and effects",
      "Optimized for mobile devices",
      "Tech stack: React & CSS",
    ],
  },
  {
    id: 4,
    title: "Hanara Sushi",
    img: "imgs/hanara-sushi.webp",
    iconURL1: "https://main.d3r03epqwbcn8r.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/woojoon-gallery",
    iconBgColor: "orange",
    iconFgColor: "white",
    description: [
      "Real business website for Hanara Sushi",
      "Sleek UI/UX design with rapid loading speeds for an efficient and user-friendly experience",
      "Modularized components for improved code maintenance",
      "Optimized for mobile devices",
      "Tech stack: React & CSS",
    ],
  },
  {
    id: 5,
    title: "Hyundai Motors",
    img: "imgs/hyundai.webp",
    iconURL1: "https://main.dv90aq3ksc428.amplifyapp.com/",
    iconURL2: "https://github.com/JunLee8108/Hyundai",
    iconBgColor: "black",
    iconFgColor: "white",
    description: [
      "Redesign of Hyundai Motor's offical website",
      "Used CSS-in-JS libraries styled-components",
      "Implemented 3D car models using Three.js (currently in progress)",
      "Optimized for mobile devices",
      "Tech stack: React & CSS",
    ],
  },
];

const blogData = [
  {
    id: 0,
    date: "02/26/2024",
    title: "Jun's UI Design Lab has been published!",
    content:
      "Jun's UI Design Lab is your gateway to cutting-edge solutions that blend trendy colors, captivating buttons, and CSS animations to elevate your UX/UI design journey. My curated selection of trendy colors breathes life into your designs, evoking emotion and creating memorable experiences. Combined with sleek and interactive buttons, we empower users to navigate effortlessly through your interfaces, fostering engagement and satisfaction. With CSS animations, we add an extra layer of dynamism to your designs, captivating users and guiding them through their digital journey with fluidity and grace." +
      "\n" +
      "\n" +
      "Here is a link: " +
      "https://main.d1dglxhs285w9v.amplifyapp.com/",
    tag: "etc",
  },
  {
    id: 1,
    date: "02/26/2024",
    title: "Jun's UI Design Lab has been published!",
    content:
      "Jun's UI Design Lab is your gateway to cutting-edge solutions that blend trendy colors, captivating buttons, and CSS animations to elevate your UX/UI design journey. My curated selection of trendy colors breathes life into your designs, evoking emotion and creating memorable experiences. Combined with sleek and interactive buttons, we empower users to navigate effortlessly through your interfaces, fostering engagement and satisfaction. With CSS animations, we add an extra layer of dynamism to your designs, captivating users and guiding them through their digital journey with fluidity and grace." +
      "\n" +
      "Here is a link: " +
      "https://main.d1dglxhs285w9v.amplifyapp.com/",
    tag: "etc",
  },
  {
    id: 2,
    date: "02/26/2024",
    title: "Jun's UI Design Lab has been published!",
    content:
      "Jun's UI Design Lab is your gateway to cutting-edge solutions that blend trendy colors, captivating buttons, and CSS animations to elevate your UX/UI design journey. My curated selection of trendy colors breathes life into your designs, evoking emotion and creating memorable experiences. Combined with sleek and interactive buttons, we empower users to navigate effortlessly through your interfaces, fostering engagement and satisfaction. With CSS animations, we add an extra layer of dynamism to your designs, captivating users and guiding them through their digital journey with fluidity and grace." +
      "\n" +
      "Here is a link: " +
      "https://main.d1dglxhs285w9v.amplifyapp.com/",
    tag: "etc",
  },
  {
    id: 3,
    date: "02/26/2024",
    title: "Post4",
    content:
      "Jun's UI Design Lab is your gateway to cutting-edge solutions that blend trendy colors, captivating buttons, and CSS animations to elevate your UX/UI design journey. My curated selection of trendy colors breathes life into your designs, evoking emotion and creating memorable experiences. Combined with sleek and interactive buttons, we empower users to navigate effortlessly through your interfaces, fostering engagement and satisfaction. With CSS animations, we add an extra layer of dynamism to your designs, captivating users and guiding them through their digital journey with fluidity and grace." +
      "\n" +
      "Here is a link: " +
      "https://main.d1dglxhs285w9v.amplifyapp.com/",
    tag: "etc",
  },
  {
    id: 4,
    date: "02/26/2024",
    title: "Post5",
    content:
      "Jun's UI Design Lab is your gateway to cutting-edge solutions that blend trendy colors, captivating buttons, and CSS animations to elevate your UX/UI design journey. My curated selection of trendy colors breathes life into your designs, evoking emotion and creating memorable experiences. Combined with sleek and interactive buttons, we empower users to navigate effortlessly through your interfaces, fostering engagement and satisfaction. With CSS animations, we add an extra layer of dynamism to your designs, captivating users and guiding them through their digital journey with fluidity and grace." +
      "\n" +
      "Here is a link: " +
      "https://main.d1dglxhs285w9v.amplifyapp.com/",
    tag: "etc",
  },
  {
    id: 5,
    date: "02/26/2024",
    title: "Post6",
    content:
      "Jun's UI Design Lab is your gateway to cutting-edge solutions that blend trendy colors, captivating buttons, and CSS animations to elevate your UX/UI design journey. My curated selection of trendy colors breathes life into your designs, evoking emotion and creating memorable experiences. Combined with sleek and interactive buttons, we empower users to navigate effortlessly through your interfaces, fostering engagement and satisfaction. With CSS animations, we add an extra layer of dynamism to your designs, captivating users and guiding them through their digital journey with fluidity and grace." +
      "\n" +
      "Here is a link: " +
      "https://main.d1dglxhs285w9v.amplifyapp.com/",
    tag: "etc",
  },
];

export { techStackData, portfolioData, blogData };
