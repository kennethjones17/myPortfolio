export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Expert in Python, Java, SQL, and data analysis. Specializing in software development, data visualization, and algorithm design.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I love tackling complex problems and am always eager to learn more about the latest advancements in tech.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Passionate about fostering development and innovation while working collaboratively with teams.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on a AWS SpringBoot Project.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 3,
      title: "Doctor-Appointment-Booking-System",
      des: "A forum for patients and doctors to interact regarding appointment scheduling and to eliminate pre- appointment protocols. We have also introduced a review system for subsequent patients",
      img: "/DABS.png",
      iconLists: ["/javascript.svg", "/python.svg", "/css-file-web.svg", "/html-5-logo.svg", "/node-js (1).svg"],
      link: "https://github.com/kennethjones17/Doctor-Appointment-Boooking-System",
    },
    {
      id: 2,
      title: "Food-Review-Business-Model",
      des: "Basic Predictive Model to predict if the review is positive or negative",
      img: "/FRBC.jpeg",
      iconLists: ["/python.svg"],
      link: "https://github.com/kennethjones17/Food-Review-Business-Model",
    },
    {
      id: 1,
      title: "TwitterTextMining",
      des: "This code performs Text Mining on any trending hashtag. The data is then pre-processed by removing stop words, links and numbers. Then, the frequently used words are found. The code finally visualizes the frequent words in total and in groups, and presents it in a front-end HTML view.",
      img: "/TTM.png",
      iconLists: ["/python.svg"],
      link: "https://github.com/kennethjones17/TwitterTextMining",
    },
    {
      id: 4,
      title: "Salary-Prediction-Model-using-Regression",
      des: "A Regression model to predict individual salaries based on relevant factors like experience, education, and job role. The basic aim was to improve salary negotiation and HR decision-making.",
      img: "/SPM1.png",
      iconLists: ["/python.svg"],
      link: "https://github.com/kennethjones17/Salary-Prediction-Model-using-Regression",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Kenneth demonstrated a strong grasp of our ecosystem and excelled in his role as a Software Engineer. Kenneth's technical prowess, particularly in Python and Laravel, allowed him to quickly contribute to our core backend team by upgrading software and developing third-party APIs. His ability to swiftly learn and adapt, coupled with his enthusiasm and dedication, makes him a valuable asset.",
      name: "Deepak VR",
      title: "Co-CTO of EasyEcom",
    },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Python",
      img: "/python.svg",
      nameImg: "pythontext.svg",
    },
    {
      id: 2,
      name: "Steve Madden",
      img: "/SMp.png",
      nameImg: "SMtext2.svg",
    },
    {
      id: 3,
      name: "Cognizant",
      img: "/COg1.jpeg",
      nameImg: "/Cognizanttext.svg",
    },
    {
      id: 4,
      name: "AWS",
      img: "/aws.svg",
      nameImg: "/AWStext.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Analyst",
      desc: "Generated comprehensive reports using SQL and data visualization techniques, liaised between development and product teams to fix bugs, and drove project success with InfoR M3 (Java, RPG) and WMi. ",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Software Engineer",
      desc: "Developed and integrated E-Commerce stacks (Walmart, DHL) into in-house software, customized backend for client needs, generated APIs, and developed Amazon Selling Partner API (SP-API) for US and EU clients.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Process Specialist",
      desc: "Pre-processed data and developed grammar for Kannada (Tier 2 language) to train a voice assistant, ensuring model accuracy through NLU regression and data annotation",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Data Analyst Intern",
      desc: "Assisted in the development of a Domain Specific NLP project using Django,Java and MySQL, optimizing processing speed and time. ",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];

  export const socialMedia = [
    {
      id: 1,
      img: "/link.svg",
      url: 'https://www.linkedin.com/in/kenneth-jones-630777194/'
    },
    {
      id: 2,
      img: "/git.svg",
      url: 'https://github.com/kennethjones17'
    },
  ];


  