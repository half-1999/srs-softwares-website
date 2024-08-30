import { FaReact, FaNodeJs, FaCss3, FaHtml5, FaJava, FaPython, FaJs, FaLightbulb, FaShieldAlt, FaHandsHelping, FaThumbsUp, FaShoppingCart, FaMobileAlt, FaPalette, FaDatabase, FaCloud, FaRobot, FaChartLine, FaNetworkWired, FaTools, FaCode, FaCube, FaCog, FaNewspaper, FaShoppingBag, FaPhone, FaFilm, FaBuilding, FaTruck, FaHospital, FaGraduationCap, FaDollarSign, FaChessBoard, FaCogs, FaRocket, FaEye, FaHandHoldingHeart, FaUserAlt, FaProjectDiagram, FaMapMarkerAlt, FaWrench, FaEnvelope, FaFileAlt, FaShareAlt, FaSearch, FaLock, FaTachometerAlt, FaUserShield, FaUserCog, FaPlug, FaPaintBrush, FaWarehouse, FaCreditCard, FaCloudUploadAlt, FaSyncAlt, FaPuzzlePiece, FaUserFriends, FaDigitalTachograph, FaExchangeAlt, FaChartBar, FaBox, FaMousePointer, FaBlind, FaBell } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiDigitalocean, SiSpringboot, SiAndroid } from 'react-icons/si';
import { FaCheckCircle, FaUsers, FaHandshake } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa6';
import { DiDotnet, DiFirebase, DiMongodb, DiMsqlServer } from 'react-icons/di';

import { FaPhp, FaAngular, FaVuejs,  FaAndroid, FaAws } from 'react-icons/fa';
import { SiPostgresql, SiMysql,  SiMicrosoftsqlserver, SiMicrosoftazure, SiGooglecloud } from 'react-icons/si';
import { IoLogoPython } from 'react-icons/io';
import NextJsIcon from '../utils/NextJsIcon';
import { TbBrandReactNative } from 'react-icons/tb';
export const services = [
  {
    name: 'Custom Software Development',
    route: 'custom-software-development',
    description: 'Do you need a custom software solution that meets your specific business needs? We design and develop bespoke software tailored to your requirements.',
    icon: <FaCog  className="text-3xl mx-auto mb-2 text-blue-500" />,
    image: 'https://corebitweb.com/wp-content/uploads/2021/10/Custom-Software-Development-Services.png'
  },
  {
    name: 'Website Designing',
    route: 'website-designing',
    description: 'Enhance your online presence with our professional website designing services. We create visually appealing and user-friendly websites that capture your brand’s essence.',
    icon: <FaLaptop className="text-3xl mx-auto mb-2 text-red-500" />,
    image: 'https://www.academyoflearning.com/wp-content/uploads/2022/06/Web_design_7.jpeg'
  },
  {
    name: 'Web Development',
    route: 'web-development',
    description: 'Our web developers improve your website\'s frontend and backend by using the latest web development technology stack. Shape your brand personality with responsive web designs and libraries.',
    icon: <FaLaptopCode className="text-3xl mx-auto mb-2 text-red-500" />,
    image: 'https://media.licdn.com/dms/image/D4D12AQHWjlf6CXDezA/article-cover_image-shrink_720_1280/0/1698039213268?e=2147483647&v=beta&t=9d8VyULomdIk9zkz_U9N_TE4_pUdFq1dFCglRh8fv_o'
  },
  {
    name: 'IT Consulting',
    route: 'it-consulting',
    description: 'Receive expert advice on IT strategy, infrastructure, and management. Our IT consulting services are designed to help you make informed decisions and optimize your technology investments.',
    icon: <FaUsers className="text-3xl mx-auto mb-2 text-blue-500" />,
    image: 'https://miro.medium.com/v2/resize:fit:800/0*U5rxF-b6iC2ulWYR.jpg'
  },
  
  {
    name: 'Digital Marketing',
    route: 'digital-marketing',
    description: 'Grow your online presence with targeted digital marketing strategies. We offer SEO, PPC, content marketing, and social media management to boost your brand visibility and drive traffic.',
    icon: <FaBullseye className="text-3xl mx-auto mb-2 text-red-500" />,
    image: 'https://wp.globaluniversitysystems.com/bsbi/wp-content/uploads/sites/2/2021/12/5-ways-msc-digital-marketing-will-advance-your-career.jpg'
  },
  {
    name: 'Search Engine Optimization',
    route: 'search-engine-optimization',
    description: 'Improve your website’s ranking on search engines with our SEO services. We optimize your site’s content, structure, and performance to enhance visibility and attract more organic traffic.',
    icon: <FaChartLine className="text-3xl mx-auto mb-2 text-red-500" />,
    image: 'https://www.analyticssteps.com/backend/media/thumbnail/2908397/8430169_1618372779_SEO%20marketing.jpg'
  },
  {
    name: 'Ecommerce Development',
    route: 'ecommerce-development',
    description: 'Launch your online store with our e-commerce development services. We build secure, scalable, and user-friendly e-commerce platforms that drive sales and improve customer experience.',
    icon: <FaShoppingCart className="text-3xl mx-auto mb-2 text-purple-500" />,
    image: 'https://www.infoskysolutions.com/blog/wp-content/uploads/2019/11/ecommerce-website-design.jpg'
  },
  {
    name: 'UI/UX Design',
    route: 'ui-ux-design',
    description: 'A visually compelling, consistent, & authoritative design for your websites and apps depicts how UI/UX contributes to customer satisfaction and brand loyalty. Harness the love of millions of user stories.',
    icon: <FaPalette className="text-3xl mx-auto mb-2 text-pink-500" />,
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20210914/pngtree-ui-ux-development-design-background-concept-image_900165.jpg'
  },
  {
    name: 'Mobile Apps Development',
    route: 'mobile-apps-development',
    description: 'Do you want to build a robust mobile app that starts making sense of your user\'s needs, budget, & time? We customize and develop Android, iOS, & desktop apps with our app development services.',
    icon: <FaMobileAlt className="text-3xl mx-auto mb-2 text-cyan-500" />,
    image: 'https://static.vecteezy.com/system/resources/previews/004/607/890/non_2x/mobile-application-development-gradient-background-free-vector.jpg'
  },
  {
    name: 'DevOps & Cloud Computing',
    route: 'devops-cloud-computing',
    description: 'With DevOps consulting, achieve high-quality automation faster using GCP, AWS, & Azure. Practice DevOps on multiple servers and realize the full potential of cloud computing more quickly.',
    icon: <FaCloud className="text-gray-500 text-3xl mx-auto mb-2" />,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRn_t5C20TEYXTQrdC2Sna42eYzaw20s-ETQX0VCnRUI9NuZ9g94Wgay5WXp6aihUnfA&usqp=CAU'
  },
];


export const technologies = [
    { name: 'React', icon: <FaReact className="text-4xl mx-auto mb-2 text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl mx-auto mb-2 text-green-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl mx-auto mb-2 text-cyan-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl mx-auto mb-2 text-green-700" /> },
    { name: 'Express.js', icon: <SiExpress className="text-4xl mx-auto mb-2 text-gray-800" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl mx-auto mb-2 text-yellow-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl mx-auto mb-2 text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3 className="text-4xl mx-auto mb-2 text-blue-400" /> },
    { name: 'Python', icon: <FaPython className="text-4xl mx-auto mb-2 text-blue-600" /> },
    { name: 'Java', icon: <FaJava className="text-4xl mx-auto mb-2 text-red-600" /> },
]

export const industries = [
  {
    icon: <FaGraduationCap className="text-blue-500 text-3xl" />,
    title: 'Finance',
    description: 'Our solutions for the banking and finance sector address a range of technology challenges, from secure online transactions to advanced financial management systems. We help institutions enhance their operational efficiency, reduce fraud, and meet regulatory requirements with our tailored, cutting-edge technology solutions.'
  },
  {
    icon: <FaTruck className="text-orange-500 text-3xl" />,
    title: 'Transportation & Logistics',
    description: 'Enhance your transportation and logistics operations with our technology solutions that streamline management, tracking, and coordination. Our systems improve route planning, real-time tracking, inventory management, and supply chain visibility, leading to increased efficiency, reduced costs, and better customer satisfaction.'
  },
  {
    icon: <FaBuilding className="text-gray-500 text-3xl" />,
    title: 'Real Estate ',
    description: 'Our technology solutions for the real estate and construction industries are designed to innovate and streamline processes. We offer tools for project management, property management, real estate transactions, and construction planning. Our solutions help improve project efficiency, enhance collaboration, and deliver better outcomes for clients and stakeholders.'
  },
  
  {
    icon: <FaShoppingCart className="text-pink-500 text-3xl" />,
    title: 'Retail',
    description: 'Boost your retail and FMCG business with our comprehensive technology solutions that enhance customer experiences, optimize inventory management, and drive sales performance. We offer tools for eCommerce, point-of-sale systems, customer relationship management (CRM), and data analytics, all aimed at increasing efficiency and boosting revenue.'
  },
  
  {
    icon: <FaShoppingBag className="text-teal-500 text-3xl" />,
    title: 'eCommerce & mCommerce',
    description: 'Expand your eCommerce and mCommerce capabilities with our technology solutions that facilitate seamless online and mobile shopping experiences. We offer platforms for online store management, mobile commerce, payment processing, and customer engagement, designed to drive sales and improve the overall shopping experience for your customers.'
  },
  
];

export const values = [
    {
      icon: <FaHandHoldingHeart className="text-red-500 text-4xl" />,
      title: 'Reliability',
      description: 'In the fast-paced digital world, products require both precision and performance. We develop accessible digital solutions that perform seamlessly across diverse platforms, ensuring your business remains agile and responsive.'
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl" />,
      title: 'Collaboration',
      description: 'Effective app development begins with strong collaboration. We break down communication barriers and foster teamwork, celebrating each milestone according to shared goals and timelines.'
    },
    {
      icon: <FaEye className="text-blue-500 text-4xl" />,
      title: 'Transparency',
      description: 'Successful project execution revolves around transparency. Our approach ensures that each phase of mobile and web app development is clear and aligned with your needs, fostering trust and clarity throughout the process.'
    },
    {
      icon: <FaRocket className="text-purple-500 text-4xl" />,
      title: 'Dynamism',
      description: 'Our seasoned professionals excel at developing mobile and web applications from the ground up. Partner with us to tap into their expertise and launch world-class digital products.'
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
      title: 'Innovation',
      description: 'We thrive on creativity and innovation. Our team is dedicated to exploring new ideas and technologies to bring fresh perspectives and groundbreaking solutions to your business challenges.'
    },
    {
      icon: <FaCogs className="text-orange-500 text-4xl" />,
      title: 'Efficiency',
      description: 'Efficiency is at the core of our development process. We streamline workflows and leverage the latest technologies to deliver high-quality solutions that save time and resources for your business.'
    },
    {
      icon: <FaChessBoard className="text-indigo-500 text-4xl" />,
      title: 'Strategy Thinking',
      description: 'Analyse the market, competitors, and end-user requirements to determine the most efficient strategy for accomplishing corporate goals. Our strategic approach ensures effective and actionable solutions.'
    },
    {
      icon: <FaDollarSign className="text-green-600 text-4xl" />,
      title: 'Affordable & Quality Product',
      description: 'Experience premium business solutions without breaking the bank – we provide cost-effective, high-quality solutions that deliver exceptional value.'
    }
];
export const serviceData = {
'custom-software-development': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1682310664746-f934119dffd6?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1682310916908-3dd53df309b8?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Tailored Software Solutions',
      imagePath: 'https://binaryinformatics.com/wp-content/uploads/2024/04/Tailored-Software-Solutions.jpg',
      content: 'We specialize in crafting custom software solutions that are meticulously tailored to align with your unique business objectives and requirements. Our team takes the time to understand your specific challenges, opportunities, and goals to deliver software that not only meets your current needs but also anticipates future growth and scalability. By focusing on user-centric design and advanced technologies, we ensure that our solutions are both intuitive and powerful, providing you with the tools to achieve a competitive edge in your industry. From startups to large enterprises, our bespoke software services are designed to drive efficiency, innovation, and success across all sectors.',
      type: 'left'
    },
    {
      heading: 'Comprehensive Software Lifecycle',
      imagePath: 'https://ncube-digest.com/wp-content/uploads/2019/08/SDLC1.jpg',
      content: 'Our comprehensive software development services encompass the entire lifecycle of your project, from the initial concept and planning stages to the final deployment and beyond. We employ a rigorous and systematic approach to project management, ensuring that every phase of development is executed with precision and attention to detail. Our services include requirements analysis, system architecture design, coding, testing, deployment, and post-launch support. We also offer ongoing maintenance and iterative improvements, ensuring that your software continues to evolve in line with your business needs and technological advancements. By maintaining a long-term partnership, we are committed to helping you adapt to changing market conditions and seize new opportunities as they arise.',
      type: 'right'
    },
    {
      heading: 'Innovative Solutions for the Future',
      imagePath: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_638106552_227301.jpg',
      content: 'Innovation is the driving force behind our custom software development services. We are dedicated to staying at the forefront of technological advancements, constantly exploring new tools, methodologies, and trends to deliver solutions that are not only effective but also future-proof. Our development team is proficient in leveraging cutting-edge technologies such as artificial intelligence, machine learning, blockchain, and cloud computing to create software that meets the highest standards of performance, security, and scalability. By integrating innovative features and functionalities into our solutions, we empower your business to thrive in an increasingly digital and competitive landscape. Our commitment to innovation ensures that your software remains relevant, adaptable, and equipped to handle the challenges of tomorrow.',
      type: 'left'
    },
    {
      heading: 'Scalable and Adaptive Software',
      imagePath: 'https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg',
      content: 'Our custom software solutions are designed with scalability and adaptability at their core. We understand that your business needs are constantly evolving, and our software is built to grow and change with you. Whether you are expanding into new markets, increasing your user base, or integrating new technologies, our solutions are engineered to handle the demands of growth without compromising performance or reliability. We focus on creating modular, flexible systems that can be easily updated and extended as your business requirements change. Our commitment to seamless integration ensures that our software works harmoniously with your existing infrastructure, minimizing disruption and maximizing efficiency. By choosing our scalable and adaptive solutions, you position your business for long-term success in a rapidly changing digital world.',
      type: 'right'
    }
  ],

  cards: [
    {
      title: 'End-to-End Development',
      description: 'We manage every aspect of the software development process, from initial concept and requirement gathering to final product delivery. Our end-to-end services ensure that your software is developed efficiently, on time, and within budget. We take care of everything, so you can focus on running your business.',
      icon: <FaCode className="text-3xl text-blue-500" />
    },
    {
      title: 'Expert Team',
      description: 'Our team of experienced developers, designers, and project managers is dedicated to delivering high-quality software solutions. We bring a wealth of expertise across various industries, ensuring that your project is in good hands. We work closely with you to understand your goals and deliver a solution that exceeds your expectations.',
      icon: <FaUserCog className="text-3xl text-red-500" />
    },
    {
      title: 'Ongoing Support',
      description: 'We don’t just build your software and walk away. We provide ongoing support and maintenance to ensure that your software remains up-to-date, secure, and effective. Our team is here to help you with any issues, updates, or improvements, so your software continues to deliver value for years to come.',
      icon: <FaDatabase className="text-3xl text-purple-500" />
    },
    {
      title: 'User-Centric Design',
      description: 'We prioritize user experience in our software development process. Our designs are intuitive and easy to use, ensuring that your software meets the needs of your users and enhances their productivity. We focus on creating a seamless experience that drives engagement and satisfaction.',
      icon: <FaUserFriends className="text-3xl text-yellow-500" />
    },
    {
      title: 'Integration Capabilities',
      description: 'Our software solutions are designed to integrate seamlessly with your existing systems and third-party applications. We ensure that your software works harmoniously within your technology ecosystem, enhancing efficiency and reducing the risk of compatibility issues.',
      icon: <FaPuzzlePiece className="text-3xl text-teal-500" />
    },
    {
      title: 'Data Security',
      description: 'We prioritize the security of your data. Our custom software solutions are built with robust security features to protect your sensitive information and ensure compliance with industry standards. You can trust us to safeguard your data at every stage of the development process.',
      icon: <FaLock className="text-3xl text-indigo-500" />
    }
  ],
},
  'website-designing': {
    carouselImages: [
      'https://plus.unsplash.com/premium_vector-1682310597209-306e3bc6c873?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_vector-1682310595106-ecf4ee316a54?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    sections: [
      {
        heading: 'Tailored Web Design for Your Brand',
        imagePath: 'https://www.powderkegwebdesign.com/wp-content/uploads/2023/02/CustomWebsiteDesign-1.jpg',
        content: 'At the core of our web design services is a commitment to creating visually stunning and highly functional websites that embody your brand’s unique identity. We delve deep into your brand ethos, values, and target audience to craft designs that are not only aesthetically pleasing but also strategically aligned with your business goals. Our tailored approach ensures that every element, from color schemes and typography to imagery and layout, is meticulously chosen to reflect your brand’s essence and resonate with your audience. By integrating cutting-edge design trends and technologies, we create a compelling online presence that drives engagement and fosters brand loyalty.',
        type: 'left'
      },
      {
        heading: 'Responsive and Adaptive Design Excellence',
        imagePath: 'https://public-images.interaction-design.org/literature/articles/heros/article_131284_hero_637231d7a2f2e6.76469892.jpg',
        content: 'In today’s multi-device world, ensuring a seamless user experience across all screen sizes is paramount. Our designs are crafted to be both responsive and adaptive, providing an optimal viewing experience on desktops, tablets, and smartphones. We employ flexible grid systems, fluid layouts, and scalable images to ensure that your website looks and functions beautifully on any device. Our focus on user-centric design principles guarantees that your website is not only visually appealing but also highly functional, enhancing usability and accessibility for all users. By prioritizing responsive design, we ensure that your website remains relevant and engaging in an ever-evolving digital landscape.',
        type: 'right'
      },
      {
        heading: 'Performance-Driven Web Solutions',
        imagePath: 'https://media.licdn.com/dms/image/v2/C5612AQGVQqcpuDhLLw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1578220079118?e=2147483647&v=beta&t=vrIPWtcl4QmwyMJMjCQtDO1T0vFTki10UX0XjKTtL90',
        content: 'Beyond aesthetics, we focus on delivering high-performance websites that offer fast load times and smooth interactions. Our team optimizes both front-end and back-end elements to ensure that your website performs efficiently under all conditions. We utilize the latest technologies and best practices to minimize loading times, enhance navigation, and ensure a smooth user experience. Our performance-driven approach includes optimizing images, leveraging caching strategies, and minimizing code bloat. By focusing on these aspects, we ensure that your website not only looks great but also delivers a seamless and engaging user experience, ultimately driving higher conversion rates and user satisfaction.',
        type: 'left'
      },
      {
        heading: 'Comprehensive SEO and Branding Integration',
        imagePath: 'https://arcintermedia.com/media/Integrated-Digital-Marketing.png',
        content: 'Effective web design goes hand-in-hand with strategic SEO and robust branding. Our design process integrates SEO best practices from the ground up, ensuring that your website is optimized for search engines and ranks well for relevant keywords. We focus on creating clean, keyword-rich content, optimized meta tags, and SEO-friendly URLs to boost your site’s visibility. Additionally, we ensure that your brand identity is consistently represented throughout the website, from logo placement and color schemes to typography and imagery. This comprehensive approach not only enhances your online presence but also reinforces your brand’s image, making a strong impression on both users and search engines.',
        type: 'right'
      }
    ],
    cards: [
      { 
        title: 'Responsive Design', 
        description: 'Our responsive design service ensures that your website is optimized for all devices, from desktop computers to mobile phones. We use flexible grids, fluid images, and media queries to adapt your website’s layout to different screen sizes and resolutions. This approach guarantees a consistent and user-friendly experience across all devices, enhancing accessibility and engagement while improving your site’s performance and reach.',
        icon: <FaCode className="text-3xl text-blue-500" /> 
      },
      { 
        title: 'User Experience Optimization', 
        description: 'We prioritize user experience (UX) by focusing on creating intuitive, easy-to-navigate websites that provide a seamless interaction for visitors. Our process includes detailed user research, wireframing, and prototyping to ensure that every element of your site contributes to a smooth and enjoyable user journey. By addressing usability issues and optimizing site flow, we enhance engagement and drive higher conversion rates.',
        icon: <FaProjectDiagram className="text-3xl text-green-500" /> 
      },
      { 
        title: 'SEO Optimization', 
        description: 'Our SEO optimization integrates best practices to improve your website’s visibility and ranking on search engines. We focus on on-page elements like meta tags, keywords, and structured data to ensure your site is easily crawlable and indexable. By implementing technical SEO strategies and optimizing content, we help increase organic traffic and enhance your site’s authority and relevance in search results.',
        icon: <FaSearch className="text-3xl text-yellow-500" /> 
      },
      { 
        title: 'Brand Identity', 
        description: 'We design websites that reflect and strengthen your brand identity. By integrating your brand’s colors, typography, and visual elements into the design, we create a cohesive online presence that aligns with your brand’s values and message. Our goal is to craft visually appealing and memorable designs that enhance brand recognition and resonate with your target audience.',
        icon: <FaPaintBrush className="text-3xl text-pink-500" /> 
      },
      { 
        title: 'Content Management Systems', 
        description: 'We implement robust content management systems (CMS) that allow you to easily manage and update your website content. Our CMS solutions are user-friendly and customizable, enabling you to maintain control over your site’s content without requiring extensive technical knowledge. Whether you need a basic blog setup or a complex enterprise CMS, we provide solutions that fit your needs and streamline content management.',
        icon: <FaCogs className="text-3xl text-gray-500" /> 
      },
      { 
        title: 'Performance Optimization', 
        description: 'Our performance optimization services ensure that your website loads quickly and runs smoothly. We analyze and improve various aspects of your site, including server performance, image optimization, and code efficiency. By reducing load times and enhancing overall site speed, we improve user satisfaction and engagement while positively impacting your search engine rankings.',
        icon: <FaTachometerAlt className="text-3xl text-orange-500" /> 
      },
    ],
  },
'web-development': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1682299796015-4c2b04dc56aa?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1682311158676-568d6938eb92?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Tailored Web Solutions',
      imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_q4pv5SJtDCo3fXhn0iPe4pmpgWjlQmSGTA&s',
      content: 'Our team specializes in crafting bespoke web applications designed specifically to meet your unique business needs and goals. We work closely with you to understand your requirements, ensuring that every aspect of the application—from its functionality to its user interface—is tailored to align perfectly with your business strategy. Our custom web solutions are designed to enhance user engagement, streamline processes, and provide a competitive advantage in your industry. With a commitment to quality and innovation, we deliver solutions that not only meet but exceed your expectations.',
      type: 'left'
    },
    {
      heading: 'High Performance and Scalability',
      imagePath: 'https://www.joshodgers.com/wp-content/uploads/2018/06/ScalabilityResiliencyPerformance.png',
      content: 'Our web development services prioritize performance and scalability to ensure that your applications not only function smoothly but can also grow alongside your business. We implement best practices in coding and architecture to optimize performance, reduce load times, and enhance user experience. Our scalable solutions are designed to handle increasing traffic and evolving needs without compromising on speed or functionality. By leveraging the latest technologies and methodologies, we build web applications that are robust, reliable, and capable of adapting to future demands.',
      type: 'right'
    },
    {
      heading: 'Seamless Integration Solutions',
      imagePath: 'https://www.shutterstock.com/image-photo/businessman-holding-global-network-connection-260nw-2488694839.jpg',
      content: 'Integration is key to ensuring that your web applications work harmoniously with your existing systems and services. Our team specializes in creating seamless integration solutions that connect your web applications with CRM systems, payment gateways, ERP solutions, and other third-party tools. This connectivity facilitates smooth data flow, automates processes, and enhances overall system efficiency. We take a meticulous approach to integration, ensuring that all components work together cohesively to provide a unified and streamlined experience for your users.',
      type: 'left'
    },
    {
      heading: 'Ongoing Maintenance and Support',
      imagePath: 'https://bairesdev.mo.cloudinary.net/blog/2023/10/IT-Maintenance-Support.jpg?tx=w_1920,q_auto',
      content: 'Our commitment to your web application extends beyond its initial launch. We offer comprehensive maintenance and support services to ensure that your application remains operational, secure, and up-to-date. Our support includes regular updates to address any emerging issues, security patches to protect against vulnerabilities, and ongoing performance enhancements to keep your application running at its best. We provide proactive monitoring and quick response to any issues that arise, ensuring that your application continues to serve your business needs effectively and efficiently over time.',
      type: 'right'
    }
  ],
  cards: [
    { 
      title: 'Custom Applications', 
      description: 'Our custom web applications are designed to address your unique business requirements with precision. We specialize in developing tailored solutions that include bespoke features, functionalities, and integrations that align with your specific needs. Whether you need a specialized CRM, an innovative e-commerce platform, or a custom tool to enhance your operations, we deliver solutions that are perfectly suited to your business environment and goals.',
      icon: <FaCode className="text-3xl text-blue-500" /> 
    },
    { 
      title: 'Performance Optimization', 
      description: 'We focus on optimizing every aspect of your web application to ensure peak performance. Our optimization process includes fine-tuning server-side and client-side components, reducing load times, and improving responsiveness. We employ advanced techniques such as caching, asynchronous loading, and resource minification to enhance your application’s speed and efficiency. Our goal is to provide a smooth and seamless user experience, even under high traffic conditions.',
      icon: <FaTachometerAlt className="text-3xl text-yellow-500" /> 
    },
    { 
      title: 'Integration Solutions', 
      description: 'We provide expert integration services to ensure your web applications work seamlessly with existing systems and third-party services. Our integration solutions include connecting with CRM systems, payment processors, data analytics tools, and more. We handle data synchronization, API connections, and process automation to create a cohesive and efficient system. This integration helps streamline operations, enhance functionality, and ensure data consistency across your platforms.',
      icon: <FaPlug className="text-3xl text-orange-500" /> 
    },
    { 
      title: 'Maintenance & Support', 
      description: 'Our maintenance and support services are designed to keep your web applications running smoothly and securely. We offer routine updates, security patches, and performance enhancements to address any issues that may arise. Our dedicated support team is available to provide assistance, resolve problems, and implement improvements. We ensure that your application remains current with the latest technology trends and continues to meet your evolving business needs.',
      icon: <FaTools className="text-3xl text-gray-500" /> 
    },
    { 
      title: 'User-Centric Design', 
      description: 'We prioritize creating web applications with a focus on user experience. Our design approach includes user research, wireframing, and usability testing to ensure that your application is intuitive, engaging, and accessible. We design interfaces that are easy to navigate, visually appealing, and tailored to meet the needs of your target audience. By emphasizing user-centered design principles, we enhance user satisfaction and encourage higher engagement rates.',
      icon: <FaUserAlt className="text-3xl text-purple-500" /> 
    },
    { 
      title: 'Security Enhancements', 
      description: 'We implement comprehensive security measures to safeguard your web applications from potential threats and vulnerabilities. Our security enhancements include data encryption, secure authentication mechanisms, and regular security audits. We also address common security concerns such as SQL injection, cross-site scripting, and data breaches. By prioritizing security, we protect your application and user data from unauthorized access and potential attacks.',
      icon: <FaLock className="text-3xl text-red-500" /> 
    },
  ],
},
'it-consulting': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1721312495951-7be5bcc39b4d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1682299257648-a19f5879e226?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Strategic IT Alignment',
      imagePath: 'https://plus.unsplash.com/premium_vector-1721312495951-7be5bcc39b4d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our IT consulting services focus on aligning technology with your business objectives to drive performance and growth. We analyze your current IT infrastructure and processes to identify gaps and opportunities. Our strategic insights help you leverage technology to achieve your business goals, enhance efficiency, and foster innovation. We work closely with your team to develop a technology roadmap that supports your long-term vision, ensuring that your IT investments deliver tangible value and competitive advantage.',
      type: 'left'
    },
    {
      heading: 'Expert Technology Guidance',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682299257648-a19f5879e226?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our team provides expert guidance on technology adoption, risk management, and strategic IT planning. We help you navigate the complexities of emerging technologies and make informed decisions that align with your business needs. From evaluating new technology solutions to managing the risks associated with IT investments, our consulting services ensure that you adopt the right technologies at the right time. We also assist in developing robust IT strategies that support business continuity, scalability, and security.',
      type: 'right'
    },
    {
      heading: 'Risk Management and Mitigation',
      imagePath: 'https://plus.unsplash.com/premium_vector-1721312495951-7be5bcc39b4d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We specialize in identifying and mitigating potential IT risks that could impact your business operations. Our risk management services include conducting thorough risk assessments, developing risk mitigation strategies, and implementing security measures to protect your IT assets. We address vulnerabilities, ensure compliance with industry regulations, and establish protocols to handle potential threats. By proactively managing IT risks, we help safeguard your business from disruptions and security breaches, ensuring continuity and resilience.',
      type: 'left'
    },
    {
      heading: 'Comprehensive IT Strategy Development',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682299257648-a19f5879e226?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our consulting services include crafting comprehensive IT strategies that drive business success. We work with you to develop a strategic IT plan that aligns with your business objectives and addresses current and future technology needs. This includes defining technology goals, assessing IT capabilities, and identifying areas for improvement. We also provide guidance on technology investments, digital transformation initiatives, and IT governance to ensure that your IT strategy supports business growth and operational excellence.',
      type: 'right'
    }
  ],
  cards: [
    { 
      title: 'Strategic Planning', 
      description: 'We offer strategic insights and planning services to align your IT initiatives with your business goals. Our approach involves assessing your current IT landscape, identifying opportunities for improvement, and developing a technology roadmap that supports your long-term vision. We help you set clear objectives, prioritize initiatives, and allocate resources effectively to achieve desired outcomes and drive business success.',
      icon: <FaChartLine className="text-3xl text-blue-500" /> 
    },
    { 
      title: 'Technology Assessments', 
      description: 'Our technology assessment services evaluate your existing IT systems and infrastructure to recommend the most suitable technology solutions for your needs. We analyze your current setup, assess performance and scalability, and provide recommendations for upgrades, replacements, or new implementations. Our goal is to ensure that your technology investments are aligned with your business requirements and provide the best value.',
      icon: <FaUserCog className="text-3xl text-red-500" /> 
    },
    { 
      title: 'Risk Management', 
      description: 'We help you identify and manage potential IT risks to protect your business from threats and disruptions. Our risk management services include conducting comprehensive risk assessments, developing mitigation strategies, and implementing security measures. We address issues such as data breaches, system vulnerabilities, and compliance requirements to ensure that your IT environment is secure and resilient against potential risks.',
      icon: <FaShieldAlt className="text-3xl text-gray-500" /> 
    },
    { 
      title: 'IT Strategy Development', 
      description: 'We specialize in developing IT strategies that drive business growth and efficiency. Our strategy development process includes assessing your current IT capabilities, defining technology goals, and creating a roadmap for achieving those goals. We provide guidance on technology investments, digital transformation, and IT governance to ensure that your IT strategy supports your business objectives and enhances overall performance.',
      icon: <FaProjectDiagram className="text-3xl text-green-500" /> 
    },
    { 
      title: 'Change Management', 
      description: 'We assist in managing the change associated with IT transformations and implementations. Our change management services ensure a smooth transition by preparing your organization for change, communicating effectively, and providing training and support. We focus on minimizing disruption and maximizing adoption of new technologies and processes to ensure successful implementation and integration.',
      icon: <FaExchangeAlt className="text-3xl text-orange-500" /> 
    },
    { 
      title: 'Digital Transformation', 
      description: 'We guide you through the process of digital transformation to enhance business operations and customer experiences. Our services include evaluating current processes, identifying opportunities for digital innovation, and implementing solutions that drive efficiency and growth. We help you leverage emerging technologies to transform your business model, improve agility, and stay competitive in the digital age.',
      icon: <FaDigitalTachograph className="text-3xl text-purple-500" /> 
    },
  ],
},

  'digital-marketing': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1682311154762-16aa43367556?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1682270324668-19b639c7502d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Holistic Digital Marketing Solutions',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682311154762-16aa43367556?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our digital marketing services provide a comprehensive approach to boost your online presence and drive customer engagement. We specialize in creating integrated marketing strategies that blend SEO, social media, content marketing, and email campaigns to enhance your brand visibility and attract targeted audiences. Our team works with you to develop a tailored marketing plan that aligns with your business objectives, leveraging data-driven insights to optimize performance and achieve measurable results.',
      type: 'left'
    },
    {
      heading: 'Innovative Strategies for Growth',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682270324668-19b639c7502d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We leverage innovative digital marketing strategies to help you achieve your business goals. By utilizing a mix of SEO, social media, content marketing, and email marketing, we ensure your brand reaches its target audience effectively. Our approach is designed to enhance your online visibility, foster customer engagement, and drive conversions. We continuously monitor and adjust our strategies based on performance metrics to ensure optimal results and sustained growth for your business.',
      type: 'right'
    },
    {
      heading: 'Data-Driven Insights and Optimization',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682311154762-16aa43367556?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our digital marketing services are powered by data-driven insights that help optimize your marketing strategies. We analyze performance metrics to understand audience behavior, track campaign effectiveness, and identify areas for improvement. By leveraging advanced analytics and reporting tools, we provide actionable recommendations to enhance your marketing efforts. Our goal is to ensure that your digital marketing investments deliver the highest return and contribute to your overall business success.',
      type: 'left'
    },
    {
      heading: 'Customized Campaign Management',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682270324668-19b639c7502d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We offer customized campaign management services to ensure your digital marketing initiatives are executed effectively. From developing engaging content to managing social media accounts and optimizing email campaigns, our team handles every aspect of your marketing efforts. We tailor our strategies to meet your specific needs and objectives, ensuring that each campaign is designed to achieve maximum impact. Our comprehensive approach helps you connect with your audience, build brand loyalty, and drive conversions.',
      type: 'right'
    }
  ],
  cards: [
    { 
      title: 'SEO Optimization', 
      description: 'Our SEO optimization services enhance your website’s visibility in search engine results, driving organic traffic and improving rankings. We conduct thorough keyword research, on-page and off-page optimization, and competitor analysis to ensure your site is optimized for search engines and relevant to your target audience. Our goal is to increase your online presence and attract quality leads through effective SEO strategies.',
      icon: <FaSearch className="text-3xl text-yellow-500" /> 
    },
    { 
      title: 'Social Media Marketing', 
      description: 'We leverage social media platforms to increase your brand’s reach, engagement, and overall online presence. Our services include creating and managing social media campaigns, crafting compelling content, and analyzing performance metrics to optimize strategies. By engaging with your audience on platforms like Facebook, Twitter, Instagram, and LinkedIn, we help you build brand awareness, foster customer relationships, and drive conversions.',
      icon: <FaShareAlt className="text-3xl text-blue-500" /> 
    },
    { 
      title: 'Content Marketing', 
      description: 'Our content marketing services focus on creating valuable, relevant content to attract and retain customers. We develop content strategies that include blog posts, articles, infographics, and videos to engage your audience and drive traffic to your website. By providing informative and engaging content, we help you build trust with your audience, establish authority in your industry, and support your overall marketing goals.',
      icon: <FaFileAlt className="text-3xl text-green-500" /> 
    },
    { 
      title: 'Email Marketing', 
      description: 'Our email marketing services involve developing targeted campaigns to drive conversions and nurture customer relationships. We design and execute email campaigns that are tailored to your audience’s preferences and behaviors. By segmenting your email lists and personalizing content, we ensure that your messages resonate with recipients and encourage engagement. Our approach includes crafting compelling subject lines, designing attractive templates, and analyzing campaign performance to achieve optimal results.',
      icon: <FaEnvelope className="text-3xl text-red-500" /> 
    },
    { 
      title: 'Pay-Per-Click Advertising', 
      description: 'Our pay-per-click (PPC) advertising services help you drive targeted traffic to your website through paid search engine and social media ads. We manage your PPC campaigns from keyword research and ad creation to budget management and performance tracking. By optimizing your ads and targeting the right audience, we help you achieve immediate results and maximize your return on investment.',
      icon: <FaDollarSign className="text-3xl text-purple-500" /> 
    },
    { 
      title: 'Analytics and Reporting', 
      description: 'We provide comprehensive analytics and reporting services to track the performance of your digital marketing campaigns. Our team uses advanced tools to monitor key metrics, analyze data, and generate reports that provide insights into campaign effectiveness. By understanding performance trends and identifying areas for improvement, we help you make data-driven decisions and optimize your marketing strategies.',
      icon: <FaChartBar className="text-3xl text-teal-500" /> 
    }
  ],
},
'search-engine-optimization': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1682303144152-3a45445383f8?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1682310925148-79b2d439b5ea?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Comprehensive SEO Strategies',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682303144152-3a45445383f8?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We implement comprehensive SEO strategies designed to enhance your website’s search engine ranking and attract more organic traffic. Our approach includes detailed keyword research, on-page optimization, and technical SEO to ensure your site is easily discoverable by search engines and relevant to your target audience. By focusing on improving your site’s visibility, we help drive qualified traffic and increase your chances of converting visitors into customers.',
      type: 'left'
    },
    {
      heading: 'Effective On-Page and Off-Page Techniques',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682310925148-79b2d439b5ea?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We utilize both on-page and off-page SEO techniques to boost your website’s performance and visibility. On-page SEO focuses on optimizing individual web pages, including content, meta tags, and site structure, to improve relevance and user experience. Off-page SEO involves building high-quality backlinks and enhancing your site’s authority through external signals. Our balanced approach ensures that your site not only ranks higher but also gains credibility and trust within your industry.',
      type: 'right'
    },
    {
      heading: 'Advanced Keyword Research and Analysis',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682303144152-3a45445383f8?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our advanced keyword research and analysis identify the most relevant and high-performing keywords for your SEO strategy. We analyze search volume, competition, and user intent to select keywords that will attract qualified traffic and meet your business goals. By targeting the right keywords, we help you achieve better search engine rankings, increase visibility, and drive more targeted leads to your site.',
      type: 'left'
    },
    {
      heading: 'Detailed Analytics and Performance Tracking',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682310925148-79b2d439b5ea?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We provide detailed analytics and performance tracking to refine your SEO strategies and achieve better results. Our team uses advanced tools to monitor key performance indicators (KPIs) such as organic traffic, keyword rankings, and conversion rates. By analyzing these metrics, we identify strengths, weaknesses, and opportunities for improvement. Our data-driven approach ensures that your SEO efforts are continuously optimized for maximum effectiveness and return on investment.',
      type: 'right'
    }
  ],
  cards: [
    { 
      title: 'Keyword Research', 
      description: 'Conducting thorough keyword research to identify high-impact keywords that will drive relevant traffic to your website. We analyze search volume, competition, and user intent to select the most effective keywords for your SEO strategy.',
      icon: <FaSearch className="text-3xl text-yellow-500" /> 
    },
    { 
      title: 'On-Page Optimization', 
      description: 'Optimizing individual web pages to improve their search engine rankings and user experience. This includes refining content, meta tags, headers, and internal linking to ensure each page is fully optimized for search engines.',
      icon: <FaTachometerAlt className="text-3xl text-blue-500" /> 
    },
    { 
      title: 'Link Building', 
      description: 'Developing and implementing a link building strategy to acquire high-quality backlinks from reputable sources. This helps increase your site’s authority and search engine ranking by demonstrating credibility and relevance.',
      icon: <FaShareAlt className="text-3xl text-green-500" /> 
    },
    { 
      title: 'Analytics & Reporting', 
      description: 'Tracking and analyzing SEO performance through detailed reports and analytics. We monitor key metrics such as traffic, rankings, and conversions to evaluate the effectiveness of our SEO strategies and make data-driven adjustments.',
      icon: <FaChartLine className="text-3xl text-purple-500" /> 
    },
    { 
      title: 'Technical SEO', 
      description: 'Addressing technical aspects of SEO to ensure your website meets search engine requirements. This includes improving site speed, mobile-friendliness, and addressing crawl errors to enhance overall site performance.',
      icon: <FaCode className="text-3xl text-teal-500" /> 
    },
    { 
      title: 'Competitor Analysis', 
      description: 'Conducting analysis of your competitors’ SEO strategies to identify opportunities and areas for improvement. We evaluate their strengths and weaknesses to develop strategies that give you a competitive edge in search rankings.',
      icon: <FaEye className="text-3xl text-orange-500" /> 
    }
  ],
},
  'mobile-apps-development': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1682309436489-21103d3f90d4?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1682309436489-21103d3f90d4?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Innovative Mobile Solutions',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682309420112-0f15593f4273?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We specialize in developing innovative mobile applications that cater to various business needs and user preferences. Our approach ensures a seamless user experience across different devices, leveraging the latest advancements in technology to create engaging and functional apps. From concept to deployment, we focus on delivering solutions that not only meet but exceed user expectations.',
      type: 'left'
    },
    {
      heading: 'Cutting-Edge Technology',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682309289526-a70f4b0967a9?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We utilize the latest technologies to ensure that our mobile applications are high-performing and user-friendly. By adopting modern frameworks and tools, we enhance app functionality and responsiveness. Our goal is to create apps that not only look great but also offer superior performance and reliability, providing users with a smooth and enjoyable experience.',
      type: 'right'
    },
    {
      heading: 'Cross-Platform Expertise',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682309420112-0f15593f4273?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our team excels in developing mobile applications for both iOS and Android platforms, ensuring that your app reaches a broader audience. We use cross-platform development tools to create apps that perform consistently across different operating systems, reducing development time and costs while maintaining high quality and user satisfaction.',
      type: 'left'
    },
    {
      heading: 'Comprehensive App Support',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682309289526-a70f4b0967a9?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We provide ongoing maintenance and support to ensure your app continues to perform optimally. This includes regular updates, bug fixes, and performance enhancements. Our proactive approach to app maintenance ensures that your app remains up-to-date with the latest technologies and user expectations, offering continued value and functionality.',
      type: 'right'
    }
  ],
  cards: [
    {
      title: 'iOS & Android Apps',
      description: 'We create mobile applications for both iOS and Android platforms, utilizing the latest development frameworks to ensure high performance and compatibility. Our cross-platform approach enables us to deliver robust apps that work seamlessly on various devices, maximizing reach and user engagement.',
      icon: <FaMobileAlt className="text-3xl text-blue-500" />
    },
    {
      title: 'User Experience Design',
      description: 'Our UX design process focuses on creating intuitive and engaging interfaces that enhance user interactions. We prioritize user-centered design principles to ensure that every aspect of the app contributes to a positive and efficient user experience, from navigation to visual aesthetics.',
      icon: <FaUserAlt className="text-3xl text-red-500" />
    },
    {
      title: 'App Maintenance',
      description: 'We offer comprehensive app maintenance services to keep your application running smoothly. This includes routine updates, bug fixes, and performance improvements to address any issues that arise and ensure that your app continues to deliver a seamless user experience.',
      icon: <FaTools className="text-3xl text-green-500" />
    },
    {
      title: 'Performance Optimization',
      description: 'Our performance optimization services focus on enhancing the speed and responsiveness of your app. By analyzing performance metrics and implementing best practices, we ensure that your app runs efficiently, providing users with a smooth and enjoyable experience.',
      icon: <FaTachometerAlt className="text-3xl text-yellow-500" />
    },
    {
      title: 'Feature Integration',
      description: 'We integrate advanced features and functionalities into your app to meet specific business needs and enhance user engagement. From social media integration to real-time data processing, we ensure that your app includes the latest capabilities to stay competitive in the market.',
      icon: <FaCogs className="text-3xl text-purple-500" />
    },
    {
      title: 'Security Enhancements',
      description: 'We prioritize the security of your mobile application by implementing robust security measures to protect user data and prevent unauthorized access. Our approach includes data encryption, secure authentication, and regular security audits to ensure that your app is safe and compliant with industry standards.',
      icon: <FaShieldAlt className="text-3xl text-teal-500" />
    }
  ],
}
,
  'ui-ux-design': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1711987521929-4c80ae81998f?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1711987521929-4c80ae81998f?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Intuitive User Interfaces',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719990020642-83783c20f742?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our focus on intuitive user interface design aims to create seamless and engaging experiences that resonate with users. We prioritize clarity and simplicity, ensuring that every interaction is straightforward and efficient. By leveraging best practices in design and staying updated with the latest trends, we craft interfaces that not only look appealing but also function flawlessly, enhancing overall user satisfaction.',
      type: 'left'
    },
    {
      heading: 'User-Centered Design',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719990020640-4440ecfabd17?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We are dedicated to user-centered design, which involves understanding and addressing the specific needs, goals, and pain points of users. Our design process includes thorough research and user feedback to ensure that the end product is not only functional but also aligns with user expectations and preferences. We focus on creating solutions that are both accessible and enjoyable, ensuring a positive experience for all users.',
      type: 'right'
    },
    {
      heading: 'Responsive Design Solutions',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719990020642-83783c20f742?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our approach to responsive design ensures that your website or application delivers a consistent and optimized experience across all devices. From mobile phones to desktops, our designs adapt seamlessly to different screen sizes and orientations. By prioritizing a mobile-first approach and employing flexible layouts, we guarantee that your digital presence remains effective and engaging, regardless of how users access it.',
      type: 'left'
    },
    {
      heading: 'Usability Testing & Feedback',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719990020640-4440ecfabd17?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Usability testing and feedback are integral to our design process. We conduct various testing methods, including user interviews, A/B testing, and task analysis, to gather insights into how users interact with our designs. This iterative approach helps us identify potential usability issues, refine our designs, and enhance the overall user experience. By incorporating real user feedback, we ensure that our solutions are practical, efficient, and aligned with user needs.',
      type: 'right'
    }
  ],
  cards: [
    {
      title: 'User Research',
      description: 'Our user research process involves comprehensive methods such as surveys, interviews, and usability studies to gain a deep understanding of user needs, behaviors, and pain points. This research forms the foundation for all design decisions, ensuring that the final product meets user expectations and provides a meaningful experience.',
      icon: <FaUsers className="text-3xl text-blue-500" />
    },
    {
      title: 'Wireframing & Prototyping',
      description: 'Wireframing and prototyping are crucial steps in our design process. We create wireframes to outline the basic structure and layout of the user interface, followed by interactive prototypes that allow us to test and refine design concepts. This iterative process helps us visualize the end product and make informed design choices based on user feedback.',
      icon: <FaFileAlt className="text-3xl text-green-500" />
    },
    {
      title: 'UI Design',
      description: 'UI design focuses on creating visually appealing interfaces that enhance user interaction and align with brand identity. We pay attention to details such as color schemes, typography, and visual hierarchy to ensure that the user interface is not only aesthetically pleasing but also functional and user-friendly.',
      icon: <FaPaintBrush className="text-3xl text-orange-500" />
    },
    {
      title: 'UX Testing',
      description: 'UX testing involves evaluating the user experience through various methods such as usability testing, heuristic evaluations, and user feedback sessions. We use these insights to identify issues and areas for improvement, ensuring that our designs deliver a seamless and enjoyable experience for users.',
      icon: <FaRocket className="text-3xl text-red-500" />
    },
    {
      title: 'Accessibility Design',
      description: 'Accessibility design ensures that our digital products are usable by people with a wide range of abilities and disabilities. We adhere to accessibility standards and guidelines, such as WCAG, to create inclusive designs that provide equal access to information and functionality for all users.',
      icon: <FaBlind className="text-3xl text-purple-500" />
    },
    {
      title: 'Interaction Design',
      description: 'Interaction design focuses on crafting intuitive and engaging interactions between users and digital interfaces. We design interactive elements such as buttons, forms, and navigation systems to enhance usability and provide a smooth, responsive experience.',
      icon: <FaMousePointer className="text-3xl text-teal-500" />
    }
  ],
},
  'ecommerce-development': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1682310925148-79b2d439b5ea?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1682309441185-bd865b4d207e?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Tailored eCommerce Solutions',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719829071191-2d1dcc862ebe?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We develop customized eCommerce solutions designed to boost your online sales and provide exceptional customer experiences. Our approach focuses on creating user-friendly and visually appealing online stores tailored to your brand and business needs. By integrating the latest technologies and best practices, we ensure that your online store is optimized for performance, conversion, and growth.',
      type: 'left'
    },
    {
      heading: 'Streamlined Online Store Operations',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719829071224-9d289d2ab992?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We implement effective strategies and technologies to streamline your online store operations. This includes optimizing checkout processes, managing inventory, and integrating various tools to enhance operational efficiency. Our goal is to create a seamless and efficient experience for both you and your customers, ensuring that your online store operates smoothly and effectively.',
      type: 'right'
    },
    {
      heading: 'Enhanced User Experience',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719829071191-2d1dcc862ebe?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our focus on enhancing user experience ensures that your eCommerce platform is intuitive, engaging, and easy to navigate. We prioritize responsive design, fast load times, and a streamlined user journey to maximize customer satisfaction and retention. By creating a user-centric design, we help you build lasting relationships with your customers and drive higher conversion rates.',
      type: 'left'
    },
    {
      heading: 'Data-Driven Insights and Optimization',
      imagePath: 'https://plus.unsplash.com/premium_vector-1719829071224-9d289d2ab992?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We provide detailed analytics and reporting to give you valuable insights into your eCommerce performance. Our data-driven approach helps you understand customer behavior, track sales trends, and make informed decisions to optimize your sales strategy. By leveraging data, we ensure that your online store continuously evolves to meet customer needs and drive growth.',
      type: 'right'
    }
  ],
  cards: [
    { 
      title: 'Custom Store Design', 
      description: 'Creating a unique and engaging online store experience tailored to your brand. Our custom designs focus on visual appeal, usability, and functionality to attract and retain customers.',
      icon: <FaPaintBrush className="text-3xl text-blue-500" /> 
    },
    { 
      title: 'Payment Integration', 
      description: 'Implementing secure and convenient payment solutions to facilitate smooth transactions. We integrate various payment gateways and methods to ensure a seamless checkout experience for your customers.',
      icon: <FaCreditCard className="text-3xl text-green-500" /> 
    },
    { 
      title: 'Inventory Management', 
      description: 'Streamlining inventory management to ensure efficient operations. We provide tools and features to manage stock levels, track product availability, and handle order fulfillment effectively.',
      icon: <FaWarehouse className="text-3xl text-orange-500" /> 
    },
    { 
      title: 'Customer Analytics', 
      description: 'Providing insights into customer behavior and sales performance. Our analytics tools help you understand customer preferences, track purchasing patterns, and refine your sales strategy for better results.',
      icon: <FaChartLine className="text-3xl text-red-500" /> 
    },
    { 
      title: 'Order Management', 
      description: 'Efficiently managing orders from placement to delivery. We integrate order processing systems to handle tracking, returns, and customer communication seamlessly.',
      icon: <FaBox className="text-3xl text-purple-500" /> 
    },
    { 
      title: 'Responsive Design', 
      description: 'Ensuring your online store is fully responsive and accessible on all devices. We optimize the design for mobile, tablet, and desktop users to provide a consistent and enjoyable shopping experience.',
      icon: <FaMobileAlt className="text-3xl text-teal-500" /> 
    }
  ],
},
  'devops-cloud-computing': {
  carouselImages: [
    'https://plus.unsplash.com/premium_vector-1712873279565-feb54b2c4568?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_vector-1712873279565-feb54b2c4568?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  sections: [
    {
      heading: 'Streamlined Development and Deployment',
      imagePath: 'https://plus.unsplash.com/premium_vector-1683141305195-6cdfd5214b49?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We streamline your development and deployment processes by integrating DevOps practices with scalable cloud solutions. Our approach focuses on continuous improvement, automation, and collaboration to enhance your software delivery cycle, reduce errors, and improve efficiency. By leveraging modern tools and methodologies, we ensure that your development pipelines are optimized for speed and reliability.',
      type: 'left'
    },
    {
      heading: 'Optimized Infrastructure and Performance',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682301032918-40f46892886a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Our DevOps and cloud computing services are designed to optimize infrastructure, enhance performance, and ensure high availability. We implement best practices in cloud architecture and DevOps strategies to improve the scalability, reliability, and security of your systems. Our goal is to provide you with a robust and efficient infrastructure that supports your business needs and drives growth.',
      type: 'right'
    },
    {
      heading: 'Enhanced Collaboration and Efficiency',
      imagePath: 'https://plus.unsplash.com/premium_vector-1683141305195-6cdfd5214b49?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We focus on enhancing collaboration between development and operations teams, fostering a culture of continuous improvement. By automating processes and implementing effective communication strategies, we help reduce friction and accelerate project delivery. Our DevOps practices are geared towards creating a cohesive workflow that improves productivity and drives better outcomes.',
      type: 'left'
    },
    {
      heading: 'Future-Ready Cloud Solutions',
      imagePath: 'https://plus.unsplash.com/premium_vector-1682301032918-40f46892886a?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'We prepare your business for the future by implementing cutting-edge cloud solutions that offer flexibility and scalability. Our cloud computing services include strategic planning, deployment, and management of cloud resources to ensure that your applications and data are optimized for performance and cost-efficiency. We help you navigate the complexities of cloud environments to achieve your business objectives.',
      type: 'right'
    }
  ],
  cards: [
    {
      title: 'Continuous Integration & Delivery (CI/CD)',
      description: 'We automate development and deployment pipelines to accelerate delivery and ensure high-quality software releases. Our CI/CD practices help streamline the integration of new code changes, reduce manual errors, and accelerate time-to-market for your applications.',
      icon: <FaSyncAlt className="text-3xl text-blue-500" />
    },
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'We manage and provision infrastructure through code to improve consistency and scalability. By using IaC tools and practices, we ensure that your infrastructure is reproducible, version-controlled, and easily adjustable to meet changing needs.',
      icon: <FaCode className="text-3xl text-green-500" />
    },
    {
      title: 'Cloud Migration',
      description: 'Our cloud migration services involve moving applications and data to the cloud to enhance scalability, flexibility, and performance. We provide comprehensive planning and execution strategies to ensure a smooth transition and minimal disruption to your operations.',
      icon: <FaCloudUploadAlt className="text-3xl text-gray-500" />
    },
    {
      title: 'Performance Optimization',
      description: 'We focus on enhancing the performance and efficiency of your cloud infrastructure and DevOps practices. Our optimization strategies involve analyzing system performance, identifying bottlenecks, and implementing solutions to improve overall efficiency and user experience.',
      icon: <FaTachometerAlt className="text-3xl text-red-500" />
    },
    {
      title: 'Security & Compliance',
      description: 'Ensuring the security and compliance of your cloud environment with industry standards. We implement security best practices, conduct regular audits, and ensure that your infrastructure meets regulatory requirements to protect your data and applications.',
      icon: <FaShieldAlt className="text-3xl text-purple-500" />
    },
    {
      title: 'Automated Monitoring & Alerts',
      description: 'Implementing automated monitoring and alert systems to proactively detect and address issues. Our solutions include real-time monitoring, automated alerts, and detailed reporting to help you maintain optimal system performance and reliability.',
      icon: <FaBell className="text-3xl text-orange-500" />
    }
  ],
}
  
};

export const techData = {
  backend: [
    {
      name: '.Net',
      icon: <DiDotnet size={40} />,
      color: 'text-red-600',
      content: 'Java is a versatile and widely-used programming language. Ideal for building robust and scalable applications.',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs size={40} />,
      color: 'text-green-600',
      content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine. Perfect for building fast and scalable network applications.',
    },
    {
      name: 'PHP',
      icon: <FaPhp size={40} />,
      color: 'text-purple-600',
      content: 'PHP is a popular scripting language for web development. It powers many websites and applications.',
    },
    {
      name: 'Python',
      icon: <IoLogoPython size={40} />,
      color: 'text-yellow-500',
      content: 'Python is a high-level, interpreted language known for its readability and broad applicability in data analysis, AI, and web development.',
    },

  ],
  frontend: [
    {
      name: 'JavaScript',
      icon: <FaJs size={40} />,
      color: 'text-yellow-500',
      content: 'JavaScript is a versatile programming language used for creating interactive and dynamic web applications. It enables developers to build client-side and server-side code with a single language.',
    },
    {
      name: 'ReactJS',
      icon: <FaReact size={40} />,
      color: 'text-blue-600',
      content: 'ReactJS is a JavaScript library for building user interfaces. It allows developers to create single-page applications with a responsive design.',
    },
    {
      name: 'React Native',
      icon: <FaMobileAlt size={40} />,
      color: 'text-blue-600',
      content: 'React Native is a framework for building native applications using React. It allows developers to create applications for iOS and Android using JavaScript and React.',
    },
    {
      name: 'AngularJS',
      icon: <FaAngular size={40} />,
      color: 'text-red-600',
      content: 'AngularJS is a structural framework for dynamic web apps. It extends HTML with custom attributes and binds data to HTML with expressions.',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={40} />,
      color: 'text-blue-500',
      content: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without leaving your HTML. It provides low-level utility classes for rapid UI development.',
    },
    {
      name: 'Next.js',
      icon: <NextJsIcon size={40} />,
      color: 'text-gray-800',
      content: 'Next.js is a React framework for server-side rendering and static site generation. It simplifies the process of building and deploying React applications.',
    },
    // {
    //   name: 'Framer Motion',
    //   icon: <motion.div className="text-red-600" />,
    //   color: 'text-red-600',
    //   content: 'Framer Motion is a library for animations and interactions in React. It provides a simple and powerful API for creating complex animations with ease.',
    // },
  ],
  database: [
    {
      name: 'MSSQL',
      icon: <DiMsqlServer size={40} />,
      color: 'text-yellow-700',
      content: 'MSSQL is a relational database management system developed by Microsoft. It is known for its integration with other Microsoft services and strong performance.',
    },
    {
      name: 'MongoDB',
      icon: <DiMongodb size={40} color='green'/>,
      color: 'text-gray-600',
      content: 'MongoDB is a NoSQL database known for its high performance and scalability. It stores data in a flexible, JSON-like format.',
    },
    {
      name: 'MySQL',
      icon: <SiMysql size={40} />,
      color: 'text-blue-500',
      content: 'MySQL is a widely used open-source relational database management system. It is known for its reliability and ease of use.',
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={40} />,
      color: 'text-blue-800',
      content: 'PostgreSQL is a powerful, open-source object-relational database system. Known for its robustness and flexibility.',
    },
    {
      name: 'Firebase',
      icon: <DiFirebase size={40} />,
      color: 'text-red-600',
      content: 'Firebase is a platform developed by Google for creating mobile and web applications. It offers a real-time NoSQL database and other backend services.',
    },
  ],
  mobile: [
    
    {
      name: 'Android',
      icon: <FaAndroid size={40} />,
      color: 'text-green-600',
      content: 'Android is a mobile operating system developed by Google. It is used in a wide range of devices and offers extensive customization.',
    },
    {
      name: 'Flutter',
      icon: <FaMobileAlt size={40} />,
      color: 'text-blue-400',
      content: 'Flutter is an open-source UI software development kit created by Google. It allows for building natively compiled applications for mobile, web, and desktop from a single codebase.',
    },
    {
      name: 'React Native',
      icon: <FaReact size={40} />,
      color: 'text-gray-600',
      content: 'React Native is a framework for building native applications using React. It allows you to write native code for iOS and Android using JavaScript.',
    },
    
  ],
  cloud: [
    {
      name: 'AWS',
      icon: <FaAws size={40} />,
      color: 'text-yellow-500',
      content: 'AWS (Amazon Web Services) is a comprehensive cloud computing platform offering a wide range of services, including storage, networking, and AI.',
    },
    {
      name: 'Google Cloud',
      icon: <SiGooglecloud size={40} />,
      color: 'text-blue-600',
      content: 'Google Cloud provides a suite of cloud computing services that runs on the same infrastructure that Google uses for its end-user products.',
    },
    {
      name: 'Azure',
      icon: <SiMicrosoftazure size={40} />,
      color: 'text-blue-700',
      content: 'Azure is Microsoft\'s cloud computing platform, offering solutions for building, testing, deploying, and managing applications and services.',
    },
  ],
  qa: [
    {
      name: 'Manual QA Testing',
      icon: <FaTools size={40} />,
      color: 'text-gray-600',
      content: 'Manual QA Testing involves human testers manually executing test cases without the use of automation tools.',
    },
    {
      name: 'Web Testing Automation',
      icon: <FaLaptopCode size={40} />,
      color: 'text-blue-500',
      content: 'Web Testing Automation uses software tools to execute pre-scripted tests on web applications, ensuring they function correctly.',
    },
    {
      name: 'Mobile App Testing',
      icon: <FaMobileAlt size={40} />,
      color: 'text-green-600',
      content: 'Mobile App Testing involves testing mobile applications for functionality, usability, and consistency across different devices and operating systems.',
    },
    {
      name: 'API Testing',
      icon: <FaCloud size={40} />,
      color: 'text-red-600',
      content: 'API Testing involves testing APIs directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.',
    },
  ],
};


export const jobOpenings = [
  {
    id: 1,
    title: 'Customer Support Executive',
    location: 'Noida',
    description: 'We need a skilled Customer Support Executive with excellent communication skills, a customer-centric approach, and the ability to resolve issues efficiently.',
    skills: 'Communication, Problem-solving, Customer Handling',
    experience: '1-3 years in customer support or a similar role',
  },
  {
    id: 2,
    title: 'AWS Developer',
    location: 'Noida',
    description: 'Hiring an AWS Developer with strong skills in cloud architecture, deployment, and management. The ideal candidate should have hands-on experience with AWS services.',
    skills: 'AWS, Cloud Architecture, DevOps',
    experience: '3-5 years in cloud development with AWS',
  },
  
];

export const projects = [
  {
    id: 1,
    title: 'Cloud ERP Software',
    description: 'A comprehensive ERP solution hosted on the cloud, enabling seamless management of business processes including inventory, HR, and finance.',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 350,
    isOnline: true,
    link: 'https://cloud-erp-software.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnMYq_E7WUOfpMKpbL81qbDXKL9qQLGt0Iw&s',
    duration: '10 months',
    role: 'Lead Developer',
    features: ['Cloud hosting', 'Multi-user management', 'Real-time data synchronization'],
    challenges: 'Ensuring high availability and secure data transactions.',
  },
  {
    id: 2,
    title: 'Cloud ERP Software (Oil Management)',
    description: 'A comprehensive ERP solution hosted on the cloud, enabling seamless management of business processes including inventory, HR, and finance.',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 350,
    isOnline: true,
    link: 'https://cloud-erp-software.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnREtFltKjOEsq1Ys081PSo98Q0o23YYjsbF4IK5E1ZU89kEZurwcyvzWsmraaa041aHw&usqp=CAU',
    duration: '10 months',
    role: 'Lead Developer',
    features: ['Cloud hosting', 'Multi-user management', 'Real-time data synchronization'],
    challenges: 'Ensuring high availability and secure data transactions.',
  },
  {
    id: 3,
    title: 'Cloud ERP Software (AutoMobiles)',
    description: 'A comprehensive ERP solution hosted on the cloud, enabling seamless management of business processes including inventory, HR, and finance.',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 350,
    isOnline: true,
    link: 'https://cloud-erp-software.com',
    image: 'https://www.biztechcs.com/wp-content/uploads/2023/07/ERP-for-Automotive-Industry-jpg.webp',
    duration: '10 months',
    role: 'Lead Developer',
    features: ['Cloud hosting', 'Multi-user management', 'Real-time data synchronization'],
    challenges: 'Ensuring high availability and secure data transactions.',
  },
  {
    id: 4,
    title: 'Billing Software',
    description: 'A robust billing software designed to automate the billing process for small to medium-sized businesses, offering features like invoice generation, payment tracking, and customer management.',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 200,
    isOnline: true,
    link: 'https://billing-software.com',
    image: 'https://assets.goodfirms.co/blog/top-billing-invoicing-software-features-advantages.jpg',
    duration: '7 months',
    role: 'Full Stack Developer',
    features: ['Automated invoice generation', 'Payment tracking', 'Customer management'],
    challenges: 'Integrating with multiple payment gateways and ensuring compliance with regional tax regulations.',
  },
  {
    id: 6,
    title: 'Production Management Software',
    description: 'Software tailored for manufacturing units to monitor and manage production lines, inventory levels, and supply chains.',
   technologies: [
      { name: 'DotNet', icon: DiDotnet },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 150,
    isOnline: false,
    link: '',
    image: 'https://www.techicy.com/wp-content/uploads/2019/02/Production-Management-System.png',
    duration: '8 months',
    role: 'Backend Developer',
    features: ['Production tracking', 'Inventory management', 'Supply chain monitoring'],
    challenges: 'Integrating with existing hardware systems and maintaining low-latency communication.',
  },
  {
    id: 4,
    title: 'Salary Management Software',
    description: 'A salary management software for small businesses, offering features like ledger management, tax calculations, and financial reporting.',
    technologies: [
      { name: 'DotNet', icon: DiDotnet },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 100,
    isOnline: true,
    link: 'https://accounts-software.com',
    image: 'https://i0.wp.com/juntrax.com/blog/wp-content/uploads/2020/11/Payroll-management-system-Juntrax.jpg?resize=327%2C154&ssl=1',
    duration: '6 months',
    role: 'Full Stack Developer',
    features: ['Ledger management', 'Tax calculations', 'Financial reporting'],
    challenges: 'Implementing accurate tax calculations for various regions.',
  },
  {
    id: 9,
    title: 'Trading Management System',
    description: 'A trading platform for educational institutions, offering course management, student enrollment, and progress tracking.',
    technologies: [
      { name: 'DotNet', icon: DiDotnet },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 220,
    isOnline: true,
    link: 'https://lms-platform.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXEIjwbO55RjC_K5--oSHdxRcsMcZSvuJ5C9udzxKhZIYKrZLlT0LI80wKWYWOhInMRo&usqp=CAU',
    duration: '12 months',
    role: 'Lead Developer',
    features: ['Course management', 'Student enrollment', 'Progress tracking'],
    challenges: 'Scalability to handle thousands of simultaneous users and courses.',
  },
  {
    id: 9,
    title: 'Sweet Shop POS',
    description: 'A trading platform for educational institutions, offering course management, student enrollment, and progress tracking.',
    technologies: [
      { name: 'DotNet', icon: DiDotnet },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 220,
    isOnline: true,
    link: 'https://lms-platform.com',
    image: 'https://www.romiotech.com/images/Romio%20Technolgies-mobile-slider-31.jpg',
    duration: '12 months',
    role: 'Lead Developer',
    features: ['Course management', 'Student enrollment', 'Progress tracking'],
    challenges: 'Scalability to handle thousands of simultaneous users and courses.',
  },
  {
    id: 5,
    title: 'E-commerce Website',
    description: 'A scalable e-commerce platform designed for businesses to showcase and sell products online with integrated payment gateways.',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 300,
    isOnline: true,
    link: 'https://ecommerce-website.com',
    image: 'https://simpauldesign.com/wp-content/uploads/2019/02/sky.garden.jpg',
    duration: '5 months',
    role: 'Frontend Developer',
    features: ['Product catalog', 'Shopping cart', 'Integrated payment gateways'],
    challenges: 'Handling high traffic during peak seasons and ensuring a smooth user experience.',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and experiences in a visually appealing manner.',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 50,
    isOnline: true,
    link: 'https://portfolio-website.com',
    image: 'https://codehalweb.com/wp-content/uploads/2023/05/thumbnail-19.jpg',
    duration: '2 months',
    role: 'Designer & Developer',
    features: ['Responsive design', 'Project showcase', 'Contact form'],
    challenges: 'Creating a unique design that stands out while maintaining usability.',
  },
  {
    id: 8,
    title: 'Mobile App',
    description: 'A mobile app allowing users to manage their accounts, transfer funds, and pay bills on the go.',
    technologies: [
      { name: 'React Native', icon: TbBrandReactNative },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'AWS', icon: FaAws },
      { name: 'MSSQL', icon: SiMicrosoftsqlserver },
    ],
    clientsUsed: 500,
    isOnline: true,
    link: 'https://mobile-banking-app.com',
    image: 'https://lh3.googleusercontent.com/H1Dtv_7YM3GKsL4j3UB1TnvBSvXxE4orQ_ezJ0f7DSuAis6rwfXShS0okaNrxFYSP4DyOQLcjTxolfEVCifDozsQjznJv9XtqHhN=h200',
    duration: '9 months',
    role: 'Mobile Developer',
    features: ['Fund transfer', 'Bill payments', 'Account management'],
    challenges: 'Ensuring security and smooth performance on various Android devices.',
  },
  
];


