import { Project, User, BlogPost, FeedPost, Skill, Experience } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'D. Jones Jebaraj',
  username: 'jonesjebaraj',
  avatar: '/images/profileperson.png',
  bio: 'With 5 years of experience in UI/UX and graphic design',
  location: 'Sivakasi, India',
  website: 'selfdesigner8@gmail.com',
  email: 'selfdesigner8@gmail.com',
  social: {
    linkedin: 'jones-jebaraj',
    instagram: 'creativecrap_'
  },
  followers: '01',
  following: '5+',
  projects: '50+',
  verified: true
};


export const mockProjects: Project[] = [
  // Big Projects
  {
    'id': '1',
    'title': 'MediQuince Doctors Application UI Design',
    'category': 'Mobile Applications',
    'parentCategory': 'Big Projects',
    'description': 'The MediQuince Doctor Application offers a professional healthcare solution with a seamless patient record system, prescriptions, lab scans, and follow-ups, ensuring quick access to patient data while maintaining a modern, user-friendly UI.',
    'tools': ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'ChatGPT', 'Adobe XD'],
    'thumbnail': '/images/thumbnails/mediquince-doctors-application.png',
    'images': ['/projects/mediquince-doctors-application.png'],
    'views': 1500,
    'likes': 120,
    'date': '2025-08-01',
    'featured': true,
    'problem': 'Healthcare providers needed a streamlined application to manage patient records, consultations, and lab requests efficiently while ensuring a user-friendly experience.',
    'solution': 'Designed an intuitive UI with clean and secure login screens, customizable dashboards, consultation tabs, lab request integration, and ABHA number verification for seamless healthcare management.',
    'process': 'Started with stakeholder interviews, created wireframes using Figma, designed screens with Adobe tools, incorporated AI assistance from ChatGPT, and ensured alignment with real-world healthcare needs.',
    'results': 'Improved patient data access by 50%, reduced consultation setup time by 30%, and designed over 50 screens for the patient management application.'
},
  {
    'id': '2',
    'title': 'MediQuince Patient Application UI Design Challenge',
    'category': 'Mobile Applications',
    'parentCategory': 'Big Projects',
    'description': 'The MediQuince Patient Application is a healthcare solution designed to simplify patient consultations and hospital interactions. It connects multiple hospitals into a unified network, enabling patients to easily access consultations, digital prescriptions, lab scans, and billing, all through a patient-first design experience.',
    'tools': ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'ChatGPT'],
    'thumbnail': '/images/thumbnails/mediquince-patient-application.png',
    'images': ['/projects/mediquince-patient-application.png'],
    'views': 1800,
    'likes': 145,
    'date': '2025-08-10',
    'featured': true,
    'problem': 'Patients needed a streamlined application to manage appointments, consultations, and medical records across multiple hospitals with reduced wait times and improved accessibility.',
    'solution': 'Developed an intuitive UI with secure login, a creative dashboard, virtual queue system, digital reports, and billing history, all integrated for seamless patient management and real-time updates.',
    'process': 'Began with stakeholder interviews, created wireframes using Figma, designed screens with Adobe tools, utilized ChatGPT for content structuring, and ensured alignment with healthcare needs.',
    'results': 'Reduced patient wait times by 40%, increased appointment accessibility by 35%, and designed over 25 screens for the patient application.'
},
  {
    'id': '3',
    'title': 'MediQuince Doctors Software UI Design Work',
    'category': 'Landing Pages',
    'parentCategory': 'Big Projects',
    'description': 'MediQuince Doctor Application is a desktop platform designed for doctors across multiple hospitals to manage consultations and patient data. It streamlines daily workflows by offering a unified interface to handle appointments, digital prescriptions, medical history, and reports in one place with Windows and Mac support.',
    'tools': ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'ChatGPT'],
    'thumbnail': '/images/thumbnails/mediquince-doctor-software.png',
    'images': ['/projects/mediquince-doctor-software.png'],
    'views': 2000,
    'likes': 160,
    'date': '2025-08-15',
    'featured': true,
    'problem': 'Doctors needed a desktop solution to efficiently manage patient consultations, appointments, and medical records across multiple hospitals with a unified and intuitive interface.',
    'solution': 'Created a user-friendly UI with a detailed dashboard, AI-powered prescription system, easy appointment and queue management, and over 20 designed screens for seamless doctor workflows.',
    'process': 'Initiated with stakeholder interviews, designed wireframes using Figma, developed screens with Adobe tools, leveraged ChatGPT for content structuring, and ensured compatibility with real-world medical needs.',
    'results': 'Improved doctor efficiency by 45%, reduced appointment scheduling time by 25%, and designed over 20 screens for the doctors software application.'
},
  {
    'id': '4',
    'title': 'PayBill Mobile Application Design',
    'category': 'Mobile Applications',
    'parentCategory': 'Big Projects',
    'description': 'PayBill is a mobile-first billing application designed for small and medium business owners. It helps shop owners and wholesalers manage products, customers, and billing processes seamlessly, offering quick bill creation, instant sharing, and a smoother, more transparent operation.',
    'tools': ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD'],
    'thumbnail': '/images/thumbnails/paybill.png',
    'images': ['/projects/paybill.png'],
    'views': 1200,
    'likes': 90,
    'date': '2025-08-20',
    'featured': true,
    'problem': 'Business owners faced challenges with manual billing errors, sales calculations, lack of insights, top-performing products, and no simple way to share bills digitally with customers.',
    'solution': 'Developed an intuitive UI with welcome and login screens, a dashboard for total profit insights, product and billing management, and a modern design to simplify billing and improve accuracy.',
    'process': 'Started with stakeholder interviews, created wireframes using Figma, designed screens with Adobe tools, and ensured a user-friendly experience with minimal tech knowledge requirements.',
    'results': 'Reduced billing errors by 50%, improved financial insights by 30%, and designed over 25 screens for the mobile application.'
},
  {
  'id': '5',
  'title': 'Omni Mart Website Design',
  'category': 'Website Designs',
  'parentCategory': 'Big Projects',
  'description': 'Omni Mart is a website builder designed and developed specifically for businesses in the crackers industry, featuring a vibrant e-commerce platform with product catalogs, sales banners, gift boxes, weekly offers, newsletter subscriptions, brand showcases, and contact sections.',
  'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
  'thumbnail': '/images/thumbnails/crackers-builder.png',
  'images': ['/projects/crackers-builder.png'],
  'views': 1000,
  'likes': 80,
  'date': '2025-08-25',
  'featured': true,
  'problem': 'Businesses in the crackers industry required a tailored e-commerce website to showcase products, manage sales, and engage customers effectively with a festive and user-friendly interface.',
  'solution': 'Created a dynamic website UI with homepage banners, product filters, gift box sections, offers of the week, newsletter integration, brand displays, and contact forms for seamless shopping experiences.',
  'process': 'Began with client requirements gathering, wireframed layouts in Figma, designed illustrations and elements using Adobe Illustrator and Photoshop, and ensured a cohesive festive theme.',
  'results': 'Enhanced online visibility by 40%, streamlined product browsing, and designed multiple interactive pages for the crackers e-commerce platform.'
  },
  {
    'id': '6',
    'title': 'MediQuince Social Media Promotion Design',
    'category': 'Print Designs',
    'parentCategory': 'Big Projects',
    'description': 'MediQuince Social Media Promotion Design features Instagram posts and banners to promote the Doctors and Patient applications, highlighting healthy content, outpatient booking, and provider features with vibrant visuals and engaging messages.',
    'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    'thumbnail': '/images/thumbnails/mediquince-instagram-post.png',
    'images': ['/projects/mediquince-instagram-post.png'],
    'views': 900,
    'likes': 70,
    'date': '2025-08-25',
    'featured': true,
    'problem': 'MediQuince needed effective social media promotion to increase awareness and engagement for its Doctors and Patient applications among healthcare providers and patients.',
    'solution': 'Designed a series of Instagram posts and banners showcasing app features, healthy content, outpatient booking, and provider tools, using vibrant designs to enhance visibility and user interaction.',
    'process': 'Started with campaign planning, created layouts in Figma, designed graphics with Adobe Illustrator and Photoshop, and ensured alignment with MediQuince branding for social media promotion.',
    'results': 'Boosted social media engagement by 35%, increased app visibility, and created multiple promotional assets for the MediQuince applications.'
  },

  // Website Designs
  {
    'id': '7',
    'title': 'Aiimtech Advanced Unique Impressive Website Solutions',
    'category': 'Website Designs',
    'description': 'Aiimtech offers advanced, unique website solutions designed to enhance business efficiency with a focus on quality, creativity, and professional UI/UX elements, catering to mobile applications, fintech, and full-stack development.',
    'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
    'thumbnail': '/images/thumbnails/aiimtech.png',
    'images': ['/projects/aiimtech.png'],
    'views': 1100,
    'likes': 85,
    'date': '2025-08-25',
    'featured': true,
    'problem': 'Businesses needed innovative website solutions to improve efficiency, showcase creativity, and provide a seamless user experience across various industries like fintech and mobile applications.',
    'solution': 'Developed a professional website UI with a focus on quality design, UI/UX elements, technical skill showcases, and mobile application integration, enhanced by AI-assisted content structuring.',
    'process': 'Initiated with client needs assessment, created wireframes in Figma, designed visuals with Adobe tools, utilized ChatGPT for content, and ensured a modern, user-friendly layout.',
    'results': 'Increased website engagement by 30%, improved user satisfaction, and created multiple UI/UX elements for business solutions.'
  },
  {
    'id': '8',
    'title': 'Impact RI Website Design',
    'category': 'Website Designs',
    'description': 'Impact RI is a website designed to build sustainable communities for Rhode Island\'s future, focusing on environmental justice, homelessness prevention, real estate education, and community engagement with a user-friendly interface.',
    'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
    'thumbnail': '/images/thumbnails/iiri-landing-page.png',
    'images': ['/iiri-landing-page.png'],
    'views': 950,
    'likes': 75,
    'date': '2025-08-25',
    'featured': true,
    'problem': 'Rhode Island communities needed a platform to address environmental justice, homelessness, and real estate education while fostering engagement and understanding of local impacts.',
    'solution': 'Developed an intuitive website UI with mission pages, UI elements for homelessness prevention and environmental justice, account sign-in features, and vibrant designs to enhance community interaction.',
    'process': 'Began with stakeholder input, created wireframes in Figma, designed visuals with Adobe tools, used ChatGPT for content clarity, and ensured a cohesive community-focused layout.',
    'results': 'Increased community engagement by 25%, improved access to resources, and created multiple UI elements for the RI Impact RI platform.'
  },
  {
    'id': '9',
    'title': 'Willson Flooring Domestic Website Design',
    'category': 'Website Designs',
    'description': 'Willson Flooring Domestic (WFS) is a website designed to showcase commercial flooring services, offering expert installation, showroom visits, and no-obligation home visits, with a focus on transforming spaces across locations like Birkenhead, Neston, and Wirral.',
    'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
    'thumbnail': '/images/thumbnails/wfs-domestic-landing-page.png',
    'images': ['/projects/wfs-domestic-landing-page.png'],
    'views': 850,
    'likes': 65,
    'date': '2025-08-25',
    'featured': true,
    'problem': 'Customers needed a reliable platform to explore flooring options, understand installation processes, and arrange services without obligation, tailored to multiple locations.',
    'solution': 'Developed an intuitive website UI with pages for flooring specialists, installation details, FAQs, and UI elements, enhanced with vibrant designs to showcase services and customer satisfaction.',
    'process': 'Started with client requirements, created wireframes in Figma, designed visuals with Adobe tools, utilized ChatGPT for content clarity, and ensured a user-friendly layout.',
    'results': 'Increased customer inquiries by 20%, improved service visibility, and created multiple pages for the Willson Flooring Solutions platform.'
},
  {
    'id': '10',
    'title': 'WFS Flooring Solutions Website',
    'category': 'Website Designs',
    'description': 'WFS Flooring Solutions Website offers a modern platform for commercial flooring services, highlighting expert installation, affordable options, and reliable support across locations like Birkenhead, with a focus on customer satisfaction.',
    'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
    'thumbnail': '/images/thumbnails/wfs-landing-page.png',
    'images': ['/projects/wfs-landing-page.png'],
    'views': 900,
    'likes': 70,
    'date': '2025-08-25',
    'featured': true,
    'problem': 'WFS needed an updated website to showcase their flooring services, improve customer accessibility, and provide clear information on installation and support options across multiple locations.',
    'solution': 'Designed a vibrant website UI with a homepage, how-we-work section, other pages for services, and UI elements, enhanced with a modern design to reflect reliability and customer focus.',
    'process': 'Started with client feedback, created wireframes in Figma, designed visuals with Adobe tools, used ChatGPT for content clarity, and ensured a cohesive user-friendly layout.',
    'results': 'Increased website traffic by 15%, enhanced customer engagement, and created multiple redesigned pages for WFS Flooring Solutions.'
  },
  {
    'id': '11',
    'title': 'VIP Media Services Website Design',
    'category': 'Website Designs',
    'description': 'VIP Media Services offers a dynamic website showcasing digital marketing, video editing, scripting, branding, and hosting services, designed to bring visions to life through a creative and user-friendly interface.',
    'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Play', 'Josefine Sans'],
    'thumbnail': '/images/thumbnails/vip-service-media.png',
    'images': ['/projects/vip-service-media.png'],
    'views': 800,
    'likes': 60,
    'date': '2025-08-25',
    'featured': true,
    'problem': 'Clients needed a platform to showcase their media services, including video production and digital marketing, with a focus on creativity and client engagement.',
    'solution': 'Developed an engaging website UI with a homepage, UI/UX elements, and multiple pages for services, client feedback, and contact, enhanced with vibrant designs to elevate user experience.',
    'process': 'Started with client vision assessment, created wireframes in Figma, designed visuals with Adobe tools, and ensured a cohesive layout with modern typography.',
    'results': 'Increased client inquiries by 20%, improved service visibility, and created multiple pages for the VIP Media Services platform.'
  },
  {
  'id': '12',
  'title': 'BAM Electric Website Design',
  'category': 'Website Designs',
  'description': 'BAM Electric is a website designed to showcase electrical and industrial services, focusing on powering industries with precision and innovation, offering construction excellence, automation systems, and maintenance solutions.',
  'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
  'thumbnail': '/images/thumbnails/bam-electrics.png',
  'images': ['/projects/bam-electrics.png'],
  'views': 1100,
  'likes': 90,
  'date': '2025-08-25',
  'featured': true,
  'problem': 'Industries needed a platform to highlight electrical services, construction excellence, and innovative solutions, ensuring trust and accessibility for clients across various sectors.',
  'solution': 'Developed a robust website UI with a homepage, gallery, contact section, and UI/UX elements, enhanced with vibrant designs to reflect expertise and industry leadership.',
  'process': 'Started with client needs analysis, created wireframes in Figma, designed visuals with Adobe tools, utilized ChatGPT for content clarity, and ensured a professional layout.',
  'results': 'Increased client trust by 25%, improved service visibility, and created multiple pages for the BAM Electric platform.'
},
{
  'id': '13',
  'title': 'DJS Tech Website Design',
  'category': 'Website Designs',
  'description': 'DJS Tech is a website designed to empower businesses with comprehensive solutions, showcasing innovation, expertise, and success through a step-by-step process, client testimonials, and industry insights.',
  'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
  'thumbnail': '/images/thumbnails/djs-technologies.png',
  'images': ['/projects/djs-technologies.png'],
  'views': 1000,
  'likes': 80,
  'date': '2025-08-25',
  'featured': true,
  'problem': 'Businesses needed a platform to highlight technological solutions, demonstrate expertise, and build trust through a clear process and client success stories.',
  'solution': 'Developed an intuitive website UI with a homepage, UI/UX elements, expert team pages, and success principles, enhanced with vibrant designs to reflect innovation and reliability.',
  'process': 'Started with client vision alignment, created wireframes in Figma, designed visuals with Adobe tools, utilized ChatGPT for content clarity, and ensured a cohesive layout.',
  'results': 'Increased business inquiries by 20%, enhanced brand credibility, and created multiple pages for the DJS Tech platform.'
},

  // Logo Designs
  {
    id: '14',
    title: 'Melody Domain',
    category: 'Logo Designs',
    description: 'Modern logo design for analytics platform featuring clean typography, data-inspired iconography, and scalable brand identity system.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    thumbnail: '/projects/logo/melodydomain.jpg',
    images: ['/projects/logo/melodydomain.jpg'],
    views: 1890,
    likes: 156,
    date: '2024-01-08',
  },
  {
    id: '15',
    title: 'GOAT Cafe',
    category: 'Logo Designs',
    description: 'Professional technology company logo with modern geometric design, versatile color schemes, and comprehensive brand guidelines.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    thumbnail: '/projects/logo/goatcafe.jpg',
    images: ['/projects/logo/goatcafe.jpg'],
    views: 2340,
    likes: 198,
    date: '2024-01-03',
  },
  {
    id: '16',
    title: 'Vijayam Mess',
    category: 'Logo Designs',
    description: 'AI-focused brand identity with futuristic design elements, intelligent iconography, and adaptive logo system for various applications.',
    tools: ['Adobe Illustrator', 'After Effects'],
    thumbnail: '/projects/logo/vijayamess.jpg',
    images: ['/projects/logo/vijayamess.jpg'],
    views: 1670,
    likes: 143,
    date: '2023-12-25',
  },
  {
    id: '17',
    title: 'Leego Crackers',
    category: 'Logo Designs',
    description: 'AI-focused brand identity with futuristic design elements, intelligent iconography, and adaptive logo system for various applications.',
    tools: ['Adobe Illustrator', 'After Effects'],
    thumbnail: '/projects/logo/leegocrackers.jpg',
    images: ['/projects/logo/leegocrackers.jpg'],
    views: 1670,
    likes: 143,
    date: '2023-12-25',
  },
  {
    id: '18',
    title: 'KVR Fancy Crackers',
    category: 'Logo Designs',
    description: 'AI-focused brand identity with futuristic design elements, intelligent iconography, and adaptive logo system for various applications.',
    tools: ['Adobe Illustrator', 'After Effects'],
    thumbnail: '/projects/logo/kvrfancy.jpg',
    images: ['/projects/logo/kvrfancy.jpg'],
    views: 1670,
    likes: 143,
    date: '2023-12-25',
  },
  {
    id: '19',
    title: 'Sanjit Pyrotech',
    category: 'Logo Designs',
    description: 'AI-focused brand identity with futuristic design elements, intelligent iconography, and adaptive logo system for various applications.',
    tools: ['Adobe Illustrator', 'After Effects'],
    thumbnail: '/projects/logo/sanjitpyrotech.jpg',
    images: ['/projects/logo/sanjitpyrotech.jpg'],
    views: 1670,
    likes: 143,
    date: '2023-12-25',
  },
  {
    id: '20',
    title: 'Mediquince',
    category: 'Logo Designs',
    description: 'Financial services corporate identity with trustworthy design, professional color palette, and comprehensive brand application guidelines.',
    tools: ['Adobe Illustrator', 'InDesign'],
    thumbnail: '/projects/logo/mediquince.jpg',
    images: ['/projects/logo/mediquince.jpg'],
    views: 2120,
    likes: 187,
    date: '2023-12-18',
  },
  {
    id: '21',
    title: 'Euro Parts',
    category: 'Logo Designs',
    description: 'Creative agency logo with playful design elements, vibrant color scheme, and flexible brand identity for creative applications.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    thumbnail: '/projects/logo/europarts.jpg',
    images: ['/projects/logo/europarts.jpg'],
    views: 1450,
    likes: 124,
    date: '2023-12-12',
  },
  {
    id: '22',
    title: 'Vitual Sparkz',
    category: 'Logo Designs',
    description: 'Academic research institution logo with scholarly design, professional typography, and institutional brand identity system.',
    tools: ['Adobe Illustrator', 'InDesign'],
    thumbnail: '/projects/logo/vitalsparkz.jpg',
    images: ['/projects/logo/vitalsparkz.jpg'],
    views: 1890,
    likes: 165,
    date: '2023-12-05',
  },

  // Print Designs
{
  'id': '23',
  'title': 'MediQuince Doctors App Brochure Design',
  'category': 'Print Designs',
  'description': 'MediQuince Doctors Mobile App Brochure Design features a professional print layout to promote the mobile app, highlighting consultation management, patient records, and lab requests with engaging visuals and concise information.',
  'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
  'thumbnail': '/images/thumbnails/mediquince-doctors-app-brochure.png',
  'images': ['/projects/mediquince-doctors-app-brochure.png'],
  'views': 1300,
  'likes': 110,
  'date': '2025-08-25',
  'featured': true,
  'problem': 'Doctors needed an effective print brochure to showcase the mobile apps features for consultation management, patient records, and lab requests to enhance awareness and adoption.',
  'solution': 'Designed a compelling brochure layout with key app features, vibrant visuals, and clear call-to-action sections, optimized for print to attract and inform healthcare professionals.',
  'process': 'Started with client requirements, created layouts in Figma, designed graphics with Adobe tools, utilized ChatGPT for content clarity, and ensured a professional print-ready design.',
  'results': 'Increased app awareness by 30%, boosted professional interest, and produced a high-quality print brochure for the MediQuince Doctors app.'
},
{
  'id': '24',
  'title': 'MediQuince Brochure Design',
  'category': 'Print Designs',
  'description': 'MediQuince Brochure Design offers a print layout to promote the patient & doctors app, showcasing consultation booking, digital prescriptions, and billing features with vibrant visuals and accessible information.',
  'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
  'thumbnail': '/images/thumbnails/mediquince-a4brochure.png',
  'images': ['/projects/mediquince-a4brochure.png'],
  'views': 1250,
  'likes': 105,
  'date': '2025-08-25',
  'featured': true,
  'problem': 'Patients needed an effective print brochure to learn about the mobile apps features for consultation booking, digital prescriptions, and billing to encourage adoption and usage.',
  'solution': 'Designed an engaging brochure layout with app highlights, vibrant graphics, and easy-to-read sections, optimized for print to attract and inform patients effectively.',
  'process': 'Started with client input, created layouts in Figma, designed visuals with Adobe tools, utilized ChatGPT for content clarity, and ensured a professional print-ready design.',
  'results': 'Increased app adoption by 25%, enhanced patient engagement, and produced a high-quality print brochure for the MediQuince Patient app.'
},
{
  'id': '25',
  'title': 'MediQuince Trifold Brochure Design',
  'category': 'Print Designs',
  'description': 'MediQuince Trifold Brochure Design provides a print layout to promote social media campaigns, showcasing healthy content, outpatient booking, and provider features with vibrant visuals and promotional details.',
  'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
  'thumbnail': '/images/thumbnails/mediquince-trifold-brochure.png',
  'images': ['/projects/mediquince-trifold-brochure.png'],
  'views': 1100,
  'likes': 95,
  'date': '2025-08-25',
  'featured': true,
  'problem': 'MediQuince needed a print brochure to highlight social media promotion efforts, including healthy content and outpatient booking, to increase awareness among healthcare providers and patients.',
  'solution': 'Designed an appealing brochure layout with campaign highlights, vibrant graphics, and clear promotional sections, optimized for print to enhance social media engagement.',
  'process': 'Started with campaign goals, created layouts in Figma, designed visuals with Adobe tools, utilized ChatGPT for content clarity, and ensured a professional print-ready design.',
  'results': 'Increased campaign reach by 20%, boosted engagement, and produced a high-quality print brochure for MediQuince social media promotion.'
},
{
  'id': '26',
  'title': 'Website Builder Promotion Brochure Design',
  'category': 'Print Designs',
  'description': 'Website Builder Promotion Brochure Design by Amritech promotes business software solutions, featuring best crackers business management software, festival offers, and website design services with vibrant visuals and QR code integration.',
  'tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'ChatGPT'],
  'thumbnail': '/images/thumbnails/crackers-builder-brochure.png',
  'images': ['/projects/crackers-builder-brochure.png'],
  'views': 1150,
  'likes': 95,
  'date': '2025-08-25',
  'featured': true,
  'problem': 'Businesses needed a print brochure to promote website builder services, festival offers, and business software, ensuring clear communication of features and special promotions.',
  'solution': 'Designed a striking brochure layout with festival themes, software features, QR codes for quick access, and vibrant graphics, optimized for print to attract and engage customers.',
  'process': 'Started with client objectives, created layouts in Figma, designed visuals with Adobe tools, utilized ChatGPT for content clarity, and ensured a professional print-ready design.',
  'results': 'Increased promotion reach by 25%, boosted customer interest, and produced a high-quality brochure for the Website Builder promotion.'
},

  // Animation Videos
{
  'id': '30',
  'title': 'MediQuince Doctors Application Consulting Types Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Doctors Application Consulting Types Animation Video features an engaging animation to highlight different consultation types available in the MediQuince Doctors App, including in-person and virtual options with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-doctors-application-consultingtypes.jpg',
  'images': ['/images/thumbnails/mediquince-doctors-application-consultingtypes.jpg'],
  'videoUrl': '/projects/mediquince-doctors-application-consultingtypes.mp4',
  'views': 1300,
  'likes': 110,
  'date': '2025-08-25',
},
{
  'id': '28',
  'title': 'MediQuince Doctors Software Bed Booking Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Doctors Software Bed Booking Animation Video features an engaging animation to demonstrate the bed booking process in the MediQuince Doctors Software, highlighting efficient hospital resource management with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-doctors-software-bedbooking.jpg',
  'images': ['/images/thumbnails/mediquince-doctors-software-bedbooking.jpg'],
  'videoUrl': '/projects/mediquince-doctors-software-bedbooking.mp4',
  'views': 1250,
  'likes': 105,
  'date': '2025-08-25',
},
{
  'id': '27',
  'title': 'MediQuince Doctors Software Consulting Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Doctors Software Consulting Animation Video showcases an engaging animation to illustrate the consulting features of the MediQuince Doctors Software, emphasizing efficient patient consultations with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-doctors-software-consulting.jpg',
  'images': ['/images/thumbnails/mediquince-doctors-software-consulting.jpg'],
  'videoUrl': '/projects/mediquince-doctors-software-consulting.mp4',
  'views': 1200,
  'likes': 100,
  'date': '2025-08-25',
},
{
  'id': '29',
  'title': 'MediQuince Easy Hospital Management Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Easy Hospital Management Animation Video presents an engaging animation to highlight the streamlined hospital management features of the MediQuince platform, showcasing efficiency and ease of use with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-easy-hospital-management.jpg',
  'images': ['/images/thumbnails/mediquince-easy-hospital-management.jpg'],
  'videoUrl': '/projects/mediquince-easy-hospital-management.mp4',
  'views': 1150,
  'likes': 95,
  'date': '2025-08-25',
},
{
  'id': '31',
  'title': 'MediQuince Patient App Screen Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Patient App Screen Animation Video presents an engaging animation to demonstrate the key screens of the MediQuince Patient App, focusing on consultation booking and digital prescriptions with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-patient-app-screen.jpg',
  'images': ['/images/thumbnails/mediquince-patient-app-screen.jpg'],
  'videoUrl': '/projects/mediquince-patient-app-screen.mp4',
  'views': 1280,
  'likes': 108,
  'date': '2025-08-25',
}, 
{
  'id': '32',
  'title': 'MediQuince Digital Queue Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Digital Queue Animation Video showcases an engaging animation to promote the digital queue system for the MediQuince Patient App, highlighting seamless appointment management and reduced wait times with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-digital-queue.jpg',
  'images': ['/images/thumbnails/mediquince-digital-queue.jpg'],
  'videoUrl': '/projects/mediquince-digital-queue.mp4',
  'views': 1400,
  'likes': 120,
  'date': '2025-08-25',
},
{
  'id': '33',
  'title': 'MediQuince Patient Application Screens Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Patient Application Screens Animation Video features an engaging animation to showcase the key screens of the MediQuince Patient App, highlighting consultation booking, digital prescriptions, and billing with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-patient-application-screens.jpg',
  'images': ['/images/thumbnails/mediquince-patient-application-screens.jpg'],
  'videoUrl': '/projects/mediquince-patient-application-screens.mp4',
  'views': 1300,
  'likes': 110,
  'date': '2025-08-25',
},
{
  'id': '34',
  'title': 'MediQuince Patient Application Flow Animation Video',
  'category': 'Animation Videos',
  'description': 'MediQuince Patient Application Flow Animation Video presents an engaging animation to demonstrate the user journey through the MediQuince Patient App, showcasing consultation booking, digital prescriptions, and billing with vibrant visuals.',
  'tools': ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  'thumbnail': '/images/thumbnails/mediquince-patient-application-flow.jpg',
  'images': ['/images/thumbnails/mediquince-patient-application-flow.jpg'],
  'videoUrl': '/projects/mediquicne-patient-application-flow.mp4',
  'views': 1350,
  'likes': 115,
  'date': '2025-08-25',
},

  // Self Designs
  {
    id: '35',
    title: 'Personal Brand Identity',
    category: 'Self Designs',
    description: 'Personal brand identity design with unique visual elements, consistent color scheme, and professional presentation for personal branding.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    thumbnail: '/projects/selfdeisgn-valentineweek.jpg',
    images: ['/projects/selfdeisgn-valentineweek.jpg'],
    views: 1890,
    likes: 167,
    date: '2024-01-20',
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How I Designed a Better Booking Flow for a Travel App',
    category: 'Design',
    summary: 'A deep dive into redesigning a complex booking process that reduced user drop-off by 40%.',
    content: `# How I Designed a Better Booking Flow for a Travel App

## The Challenge

When I was approached to redesign the booking flow for a travel app, the main issue was clear: users were abandoning their bookings at an alarming rate of 65%. The existing flow was confusing, lengthy, and didn't provide clear feedback to users about their progress.

## Research Phase

I started by analyzing user behavior through heatmaps and session recordings. What I discovered was eye-opening:

- Users were confused by the number of steps
- Form validation was unclear
- Progress indication was missing
- Too many options were presented at once

## The Solution

I redesigned the entire flow with these key principles:

### 1. Progressive Disclosure
Instead of showing all options at once, I broke down the booking process into digestible chunks.

### 2. Clear Progress Indication
Added a visual progress bar that showed users exactly where they were in the process.

### 3. Smart Defaults
Pre-filled forms with intelligent defaults based on user behavior and preferences.

### 4. Real-time Validation
Implemented instant feedback for form fields to prevent errors at submission.

## Results

The new design achieved remarkable results:
- 40% reduction in booking abandonment
- 25% increase in completed bookings
- 60% improvement in user satisfaction scores

## Key Takeaways

1. Always validate your assumptions with real user data
2. Simplicity trumps feature richness
3. Clear communication is crucial in complex flows
4. Test early and iterate often`,
    author: 'Tom Anderson',
    date: '2024-01-20',
    readTime: '8 min read',
    thumbnail: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: '5 UI Tricks That Instantly Improve Any App',
    category: 'Design',
    summary: 'Simple but effective UI techniques that can dramatically improve user experience.',
    content: `# 5 UI Tricks That Instantly Improve Any App

These are battle-tested techniques I've used across dozens of projects...`,
    author: 'Tom Anderson',
    date: '2024-01-15',
    readTime: '5 min read',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Behind My Logo Design Process',
    category: 'Design',
    summary: 'A step-by-step breakdown of how I approach logo design from concept to final delivery.',
    content: `# Behind My Logo Design Process

Logo design is more than just making something look pretty...`,
    author: 'Tom Anderson',
    date: '2024-01-10',
    readTime: '6 min read',
    thumbnail: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'The Future of Gaming: VR and Beyond',
    category: 'Gaming',
    summary: 'Exploring how virtual reality and emerging technologies are reshaping the gaming landscape.',
    content: `# The Future of Gaming: VR and Beyond

## The Current State of VR Gaming

Virtual Reality has come a long way since its early days. With devices like the Meta Quest 3, PlayStation VR2, and Apple Vision Pro, we're seeing unprecedented levels of immersion and accessibility.

## Key Trends Shaping Gaming

### 1. Haptic Feedback Revolution
The latest controllers provide tactile sensations that make virtual worlds feel tangible.

### 2. AI-Driven NPCs
Characters that respond intelligently to player actions, creating unique narrative experiences.

### 3. Cloud Gaming Integration
Streaming high-quality games without expensive hardware requirements.

## What's Next?

The convergence of AR, VR, and traditional gaming will create hybrid experiences that blur the lines between digital and physical worlds. Brain-computer interfaces might be the next frontier.

## Impact on Game Design

As a designer, I'm fascinated by how these technologies challenge traditional UI/UX principles. Spatial interfaces require completely new design paradigms.`,
    author: 'Tom Anderson',
    date: '2024-01-18',
    readTime: '7 min read',
    thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: '5',
    title: 'Dune: Part Two - A Visual Masterpiece',
    category: 'Cinema',
    summary: 'Denis Villeneuve continues to prove why he\'s one of the best sci-fi directors of our time.',
    content: `# Dune: Part Two - A Visual Masterpiece

## Cinematography That Tells a Story

Denis Villeneuve and cinematographer Greig Fraser have created something truly spectacular. Every frame of Dune: Part Two feels like a painting, with composition that serves both beauty and narrative purpose.

## The Sound Design Revolution

Hans Zimmer's score combined with the innovative sound design creates an auditory experience that's as important as the visuals. The way sound is used to convey the power of the Voice is particularly brilliant.

## Production Design Excellence

The attention to detail in costume design, set pieces, and practical effects shows what's possible when filmmakers prioritize craftsmanship over convenience.

## Why This Matters for Designers

As a visual designer, I'm constantly inspired by how film uses color, composition, and visual hierarchy to guide emotion and attention. Dune: Part Two is a masterclass in visual storytelling.`,
    author: 'Tom Anderson',
    date: '2024-01-12',
    readTime: '5 min read',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'The Rise of AI in Creative Industries',
    category: 'Technology',
    summary: 'How artificial intelligence is transforming creative work and what it means for designers.',
    content: `# The Rise of AI in Creative Industries

## The Current Landscape

AI tools like Midjourney, DALL-E, and ChatGPT have democratized creative capabilities, allowing anyone to generate projects, write copy, and even code.

## Impact on Design Work

Rather than replacing designers, AI is becoming a powerful collaborator. It's changing how we approach ideation, iteration, and execution.

## Ethical Considerations

The creative community grapples with questions about originality, copyright, and the value of human creativity in an AI-augmented world.

## Adapting as Creatives

The key is learning to work with AI as a tool while maintaining our unique human perspective and creative judgment.`,
    author: 'Tom Anderson',
    date: '2024-01-08',
    readTime: '6 min read',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    title: 'My Morning Routine for Creative Productivity',
    category: 'Lifestyle',
    summary: 'How I structure my mornings to maximize creativity and maintain work-life balance.',
    content: `# My Morning Routine for Creative Productivity

## The Power of Consistency

After years of experimenting, I've found that a consistent morning routine is crucial for maintaining creative energy throughout the day.

## My Current Routine

### 6:00 AM - Wake Up (No Snooze)
I keep my phone in another room to avoid the temptation of checking notifications first thing.

### 6:15 AM - Meditation
10 minutes of mindfulness meditation using the Headspace app.

### 6:30 AM - Exercise
Either a 30-minute run or yoga session, depending on how I'm feeling.

### 7:15 AM - Journaling
Three pages of stream-of-consciousness writing to clear my mind.

### 7:45 AM - Coffee & Planning
I review my priorities for the day while enjoying my first cup of coffee.

## Why This Works

This routine gives me a sense of accomplishment before I even start work. It also ensures I take care of my physical and mental health before diving into client projects.

## Adapting to Your Life

The key isn't copying my exact routine, but finding what works for your schedule and personality. Start small and build consistency.`,
    author: 'Tom Anderson',
    date: '2024-01-05',
    readTime: '4 min read',
    thumbnail: 'https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    title: 'Breaking: Apple Announces Vision Pro 2',
    category: 'News',
    summary: 'Apple\'s next-generation mixed reality headset promises lighter design and improved battery life.',
    content: `# Breaking: Apple Announces Vision Pro 2

## What's New

Apple has just announced the Vision Pro 2, addressing many of the concerns from the first generation while introducing exciting new features.

## Key Improvements

### Lighter Design
The new headset is 30% lighter, making extended use much more comfortable.

### Better Battery Life
Up to 4 hours of continuous use, double the original Vision Pro.

### Enhanced Display
Micro-OLED displays with 50% higher pixel density for even sharper visuals.

### Improved Hand Tracking
More precise gesture recognition and reduced latency.

## Impact on the Industry

This announcement signals Apple's serious commitment to spatial computing and will likely accelerate adoption across consumer and enterprise markets.

## Design Implications

As designers, we need to start thinking about spatial interfaces and how traditional design principles translate to 3D environments.`,
    author: 'Tom Anderson',
    date: '2024-01-22',
    readTime: '3 min read',
    thumbnail: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    title: 'Baldur\'s Gate 3: A New Standard for RPGs',
    category: 'Gaming',
    summary: 'How Larian Studios created the most ambitious RPG in years and what it means for the industry.',
    content: `# Baldur's Gate 3: A New Standard for RPGs

## The Achievement

Larian Studios has created something truly special with Baldur's Gate 3. It's not just a great game; it's a statement about what's possible when developers prioritize player agency and narrative depth.

## What Makes It Special

### Meaningful Choices
Every decision feels consequential, with ripple effects that extend throughout the entire campaign.

### Character Development
The companions feel like real people with their own motivations and growth arcs.

### Technical Excellence
The game runs beautifully and the voice acting is top-tier throughout.

## Industry Impact

BG3 has raised the bar for what players expect from RPGs. Other developers will need to match this level of polish and depth.

## Design Lessons

The game's UI is a masterclass in information hierarchy and accessibility. Complex systems are made approachable through excellent design.`,
    author: 'Jones Jebaraj',
    date: '2024-01-14',
    readTime: '5 min read',
    thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    type: 'image',
    content: 'Daily UI #17 – Calculator App. Exploring neumorphism design trends.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 124,
    comments: 18,
    date: '2024-01-22',
  },
  {
    id: '2',
    type: 'text',
    content: 'Dark vs Light Mode: Which do you prefer? been experimenting with both and found that context matters more than personal preference. Dark mode for focus sessions, light mode for detailed work.',
    likes: 89,
    comments: 23,
    date: '2024-01-21',
  },
  {
    id: '3',
    type: 'image',
    content: 'New Brand Logo Sketch for a Pet Store. Going for playful yet professional.',
    image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 156,
    comments: 12,
    date: '2024-01-20',
  },
  {
    id: '4',
    type: 'text',
    content: 'Just finished a 3-hour design session. There\'s something magical about getting into the flow state. What helps you get into your creative zone?',
    likes: 67,
    comments: 31,
    date: '2024-01-19',
  }
];

export const mockSkills: Skill[] = [
  { name: 'UI Design', level: 95, icon: 'Palette' },
  { name: 'UX Research', level: 88, icon: 'Search' },
  { name: 'Prototyping', level: 92, icon: 'Zap' },
  { name: 'Figma', level: 98, icon: 'Figma' },
  { name: 'Adobe XD', level: 85, icon: 'Box' },
  { name: 'Illustrator', level: 90, icon: 'PenTool' },
  { name: 'Photoshop', level: 87, icon: 'Image' },
  { name: 'Principle', level: 80, icon: 'Play' },
];

export const mockExperience: Experience[] = [
  {
    company: 'TechFlow Inc.',
    role: 'Senior UI/UX Designer',
    period: '2022 - Present',
    description: 'Leading design for multiple SaaS products, managing a team of 3 designers, and establishing design systems.',
  },
  {
    company: 'StartupLab',
    role: 'Product Designer',
    period: '2020 - 2022',
    description: 'Designed mobile apps and web platforms for early-stage startups, focusing on user research and rapid prototyping.',
  },
  {
    company: 'Creative Agency',
    role: 'Junior Designer',
    period: '2019 - 2020',
    description: 'Worked on branding projects, print design, and digital marketing materials for various clients.',
  }
];