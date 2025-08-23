import { Project, User, BlogPost, FeedPost, Skill, Experience } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'D. Jones Jebaraj',
  username: 'jonesjebaraj',
  avatar: '/projects/profileperson.png',
  bio: 'With 5 years of experience in UI/UX and graphic design, I focus on delivering seamless user experiences and eye-catching visuals. I also contribute to digital marketing projects and create content that resonates with audiences.',
  location: 'Sivakasi, India',
  website: '',
  email: 'selfdesigner8@gmail.com',
  social: {
    linkedin: 'jones-jebaraj',
    instagram: 'creativecrap_',
  },
  followers: 12500,
  following: 890,
  projects: 47,
  verified: true
};

export const mockProjects: Project[] = [
  // Big Projects
  {
    id: '1',
    title: 'Bameletrics Analytics Dashboard',
    category: 'Big Projects',
    description: 'Comprehensive analytics dashboard with advanced data visualization, real-time reporting, and business intelligence features designed for enterprise-level decision making.',
    tools: ['Figma', 'Adobe XD', 'Principle', 'After Effects'],
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 3240,
    likes: 287,
    date: '2024-01-15',
    featured: true,
    problem: 'Businesses needed a comprehensive analytics platform that could handle complex data visualization while maintaining simplicity for everyday users.',
    solution: 'Created an intuitive dashboard with progressive disclosure, smart data filtering, and customizable widgets that adapt to user behavior patterns.',
    process: 'Started with stakeholder interviews, analyzed existing analytics tools, wireframed multiple dashboard concepts, and conducted extensive usability testing.',
    results: 'Increased user engagement by 40% and reduced data analysis time by 60%. The design system was adopted across multiple business intelligence products.'
  },
  {
    id: '2',
    title: 'DJS Technologies Platform',
    category: 'Big Projects',
    description: 'Complete technology solutions platform featuring modern interface design, seamless user experience, and comprehensive service management for tech companies.',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 2890,
    likes: 203,
    date: '2024-01-10',
    problem: 'Technology companies needed a modern platform that could showcase complex services while maintaining user-friendly navigation.',
    solution: 'Designed a clean, professional interface focusing on service discovery and clear information architecture.',
    process: 'Analyzed competitor platforms, created user journey maps, designed wireframes, and tested prototypes with target users.',
    results: 'Improved user engagement by 35% and increased service inquiries by 45%.'
  },
  {
    id: '3',
    title: 'AIIM Tech Solutions',
    category: 'Big Projects',
    description: 'AI-powered technology solutions platform with intelligent features, modern user experience, and advanced automation capabilities for business optimization.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1560,
    likes: 124,
    date: '2024-01-05',
  },
  {
    id: '4',
    title: 'IIR Research Platform',
    category: 'Big Projects',
    description: 'Advanced research and information platform with clean design, sophisticated search capabilities, and comprehensive data management for academic institutions.',
    tools: ['Figma', 'Principle', 'Adobe XD', 'Sketch'],
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 3450,
    likes: 298,
    date: '2023-12-10',
    featured: true,
    problem: 'Research institutions needed a platform that could handle complex data while providing intuitive search and discovery features.',
    solution: 'Developed a clean, organized interface with advanced filtering and search capabilities for efficient information retrieval.',
    process: 'Conducted user interviews with researchers, mapped information architecture, created wireframes, and tested search functionality.',
    results: 'Reduced research time by 45% and increased user satisfaction by 60%.'
  },

  // Website Designs
  {
    id: '5',
    title: 'WFS Financial Services',
    category: 'Website Designs',
    description: 'Professional financial services website with secure design, comprehensive service offerings, and user-friendly interface for financial consultations.',
    tools: ['Figma', 'Principle', 'Adobe XD'],
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 2100,
    likes: 189,
    date: '2023-12-28',
  },
  {
    id: '6',
    title: 'WFS Domestic Services',
    category: 'Website Designs',
    description: 'Domestic services platform with intuitive interface, comprehensive service management, and streamlined booking system for household services.',
    tools: ['Figma', 'Adobe XD', 'Webflow'],
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 2780,
    likes: 234,
    date: '2023-12-15',
  },
  {
    id: '7',
    title: 'Cracker Theme Design',
    category: 'Website Designs',
    description: 'Creative theme design with modern aesthetics, responsive layout, and engaging visual elements for digital platforms and creative agencies.',
    tools: ['Adobe InDesign', 'Illustrator', 'Figma'],
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 890,
    likes: 67,
    date: '2023-12-20',
  },

  // Logo Designs
  {
    id: '8',
    title: 'Bameletrics Brand Identity',
    category: 'Logo Designs',
    description: 'Modern logo design for analytics platform featuring clean typography, data-inspired iconography, and scalable brand identity system.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    thumbnail: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1890,
    likes: 156,
    date: '2024-01-08',
  },
  {
    id: '9',
    title: 'DJS Technologies Logo',
    category: 'Logo Designs',
    description: 'Professional technology company logo with modern geometric design, versatile color schemes, and comprehensive brand guidelines.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 2340,
    likes: 198,
    date: '2024-01-03',
  },
  {
    id: '10',
    title: 'AIIM Tech Brand Mark',
    category: 'Logo Designs',
    description: 'AI-focused brand identity with futuristic design elements, intelligent iconography, and adaptive logo system for various applications.',
    tools: ['Adobe Illustrator', 'After Effects'],
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1670,
    likes: 143,
    date: '2023-12-25',
  },
  {
    id: '11',
    title: 'WFS Corporate Identity',
    category: 'Logo Designs',
    description: 'Financial services corporate identity with trustworthy design, professional color palette, and comprehensive brand application guidelines.',
    tools: ['Adobe Illustrator', 'InDesign'],
    thumbnail: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 2120,
    likes: 187,
    date: '2023-12-18',
  },
  {
    id: '12',
    title: 'Cracker Creative Logo',
    category: 'Logo Designs',
    description: 'Creative agency logo with playful design elements, vibrant color scheme, and flexible brand identity for creative applications.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1450,
    likes: 124,
    date: '2023-12-12',
  },
  {
    id: '13',
    title: 'IIR Research Logo',
    category: 'Logo Designs',
    description: 'Academic research institution logo with scholarly design, professional typography, and institutional brand identity system.',
    tools: ['Adobe Illustrator', 'InDesign'],
    thumbnail: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1890,
    likes: 165,
    date: '2023-12-05',
  },

  // Print Designs
  {
    id: '14',
    title: 'Bameletrics Marketing Collateral',
    category: 'Print Designs',
    description: 'Comprehensive print marketing materials including brochures, business cards, and presentation folders with consistent brand identity.',
    tools: ['Adobe InDesign', 'Illustrator', 'Photoshop'],
    thumbnail: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1230,
    likes: 98,
    date: '2024-01-12',
  },
  {
    id: '15',
    title: 'DJS Technologies Print Suite',
    category: 'Print Designs',
    description: 'Professional print design suite including corporate stationery, product catalogs, and trade show materials with modern layout design.',
    tools: ['Adobe InDesign', 'Illustrator'],
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1560,
    likes: 132,
    date: '2024-01-07',
  },
  {
    id: '16',
    title: 'AIIM Tech Publications',
    category: 'Print Designs',
    description: 'Technical publication designs including whitepapers, research reports, and conference materials with clean, professional layouts.',
    tools: ['Adobe InDesign', 'Photoshop'],
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 980,
    likes: 87,
    date: '2023-12-30',
  },
  {
    id: '17',
    title: 'WFS Financial Brochures',
    category: 'Print Designs',
    description: 'Financial services brochures and informational materials with trustworthy design, clear information hierarchy, and professional presentation.',
    tools: ['Adobe InDesign', 'Illustrator'],
    thumbnail: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1340,
    likes: 115,
    date: '2023-12-22',
  },
  {
    id: '18',
    title: 'Cracker Creative Portfolio',
    category: 'Print Designs',
    description: 'Creative portfolio design with innovative layouts, artistic typography, and showcase-focused design for creative professionals.',
    tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1780,
    likes: 156,
    date: '2023-12-15',
  },
  {
    id: '19',
    title: 'IIR Research Publications',
    category: 'Print Designs',
    description: 'Academic publication designs including research journals, conference proceedings, and institutional reports with scholarly presentation.',
    tools: ['Adobe InDesign', 'Illustrator'],
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1120,
    likes: 94,
    date: '2023-12-08',
  },

  // Animation Videos
  {
    id: '20',
    title: 'Bameletrics Product Demo',
    category: 'Animation Videos',
    description: 'Engaging product demonstration video with smooth animations, clear explanations, and professional motion graphics for software showcase.',
    tools: ['After Effects', 'Premiere Pro', 'Illustrator'],
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    views: 4560,
    likes: 387,
    date: '2024-01-18',
  },
  {
    id: '21',
    title: 'DJS Technologies Explainer',
    category: 'Animation Videos',
    description: 'Corporate explainer video with professional animations, service highlights, and engaging visual storytelling for technology solutions.',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    views: 3890,
    likes: 324,
    date: '2024-01-14',
  },
  {
    id: '22',
    title: 'AIIM Tech Innovation Video',
    category: 'Animation Videos',
    description: 'Futuristic animation video showcasing AI technology innovations with cutting-edge visual effects and dynamic motion graphics.',
    tools: ['After Effects', 'Cinema 4D', 'Illustrator'],
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    views: 5230,
    likes: 445,
    date: '2024-01-11',
    featured: true,
  },
  {
    id: '23',
    title: 'WFS Services Overview',
    category: 'Animation Videos',
    description: 'Professional service overview video with clean animations, service explanations, and trustworthy visual presentation for financial services.',
    tools: ['After Effects', 'Premiere Pro'],
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    views: 2780,
    likes: 234,
    date: '2024-01-06',
  },
  {
    id: '24',
    title: 'Cracker Creative Showreel',
    category: 'Animation Videos',
    description: 'Creative agency showreel with dynamic animations, portfolio highlights, and artistic motion graphics showcasing creative capabilities.',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro'],
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    views: 3450,
    likes: 298,
    date: '2023-12-28',
  },
  {
    id: '25',
    title: 'IIR Research Presentation',
    category: 'Animation Videos',
    description: 'Academic presentation video with informative animations, research highlights, and professional motion graphics for institutional use.',
    tools: ['After Effects', 'Illustrator', 'Premiere Pro'],
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    views: 2340,
    likes: 198,
    date: '2023-12-20',
  },

  // Self Designs
  {
    id: '26',
    title: 'Personal Brand Identity',
    category: 'Self Designs',
    description: 'Personal brand identity design with unique visual elements, consistent color scheme, and professional presentation for personal branding.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    thumbnail: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1890,
    likes: 167,
    date: '2024-01-20',
  },
  {
    id: '27',
    title: 'Creative Portfolio Website',
    category: 'Self Designs',
    description: 'Personal portfolio website design with modern aesthetics, smooth interactions, and comprehensive project showcase for creative professionals.',
    tools: ['Figma', 'Adobe XD', 'Webflow'],
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 3240,
    likes: 287,
    date: '2024-01-16',
    featured: true,
  },
  {
    id: '28',
    title: 'Experimental UI Concepts',
    category: 'Self Designs',
    description: 'Experimental user interface concepts exploring new design patterns, innovative interactions, and creative visual solutions.',
    tools: ['Figma', 'Principle', 'After Effects'],
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 2560,
    likes: 223,
    date: '2024-01-13',
  },
  {
    id: '29',
    title: 'Typography Explorations',
    category: 'Self Designs',
    description: 'Creative typography explorations with custom lettering, font combinations, and artistic text treatments for various design applications.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 1670,
    likes: 145,
    date: '2024-01-09',
  },
  {
    id: '30',
    title: 'Icon Design System',
    category: 'Self Designs',
    description: 'Comprehensive icon design system with consistent style, scalable graphics, and versatile applications for digital and print use.',
    tools: ['Adobe Illustrator', 'Figma'],
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: ['https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'],
    views: 2120,
    likes: 189,
    date: '2024-01-04',
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
    author: 'Tom Anderson',
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