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

export { techStackData };
