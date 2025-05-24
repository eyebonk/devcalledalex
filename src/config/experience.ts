import * as type from '../config'

export const EXPERIENCE = [
  {
    company: 'Lyka',
    icon: 'images/lyka_logo.png',
    type: 'Full-time',
    country: 'Australia',
    attendance: 'Remote',
    link: [
      { text: 'Lyka', link: 'https://lyka.com.au/' },
      { text: 'Component Library', link: 'https://lyka-pet-food.github.io/lyka-common/?path=/docs/welcome--docs' },
    ],
    positions: [
      {
        role: 'Staff Engineer (UI)',
        dateFrom: '04/01/2024',
        dateTo: null,
      },
      {
        role: 'Lead Frontend Engineer',
        dateFrom: '01/01/2023',
        dateTo: '04/02/2024',
      },
    ],
    blurb: `
      <p>In my role/s as Staff/Lead Frontend Engineer, I am responsible for defining and setting up a comprehensive design system and component library in collaboration with the Design Lead. This system establishes a unified language and consistent processes across all frontend projects, ensuring accessibility and consistency not only in the visual aspects but also in the functionality and user interactions. The component library, created as a private NPM package, is designed for use by all engineers to streamline development and uphold high standards in both usability and performance.</p>
      <p>Additionally, I manage a team of up to six direct reports, handling daily requests, facilitating their career growth through personal development plans, and guiding them in building their skills. </p>
      <p>At a leadership level, I actively participate in the Engineering leadership team, helping to define processes, set strategic direction, and drive best practices across the team. I regularly engage with C-level executives and directors to align the frontend vision with business goals. </p>
      <p>I also serve as the point of contact for all frontend-related matters, ensuring adherence to coding standards, setting up processes, and promoting best practices for scalable, maintainable code.</p>
    `,
    stack: [
      type.PEOPLE,
      type.COMPLIB,
      type.NUXT2,
      type.NUXT3,
      type.JS,
      type.TS,
      type.TAILWIND,
      type.BOOTSTRAP5,
      type.HTML,
      type.CSS,
      type.SCSS,
    ],
  },
  {
    company: 'pixel61',
    icon: 'images/pixel61_logo.png',
    type: 'Part-time',
    country: 'Australia',
    attendance: 'Remote',
    link: 'https://pixel61.com/',
    positions: [
      {
        role: 'Founder',
        dateFrom: '09/01/2021',
        dateTo: null,
      },
    ],
    blurb: `
      <p>As the founder of pixel61, I am dedicated to building and designing high-end websites and software for a diverse range of clients. In this role, I handle all aspects of project delivery, from initial client consultations and requirement gathering to design, development, and deployment. I focus on delivering bespoke solutions that are both visually compelling and technically robust, ensuring that each project aligns with client goals and stands out in a competitive digital landscape.</p>
      <p>In addition to website and software development, I offer specialised services in creating custom virtual office spaces using the Gather.town platform. This involves designing tailored environments that reflect each client’s unique brand and culture, fostering engagement and collaboration in their virtual spaces.</p>
      <p>As I grow pixel61, I continue to expand its offerings, balancing creative design with technical expertise to deliver exceptional results for clients.</p>
    `,
    stack: [
      type.VUE3,
      type.NUXT3,
      type.JS,
      type.TS,
      type.TAILWIND,
      type.HTML,
      type.CSS,
      type.SCSS,
    ],
  },
  {
    company: 'Gather',
    icon: 'images/gather_logo.png',
    type: 'Freelance',
    country: 'America',
    attendance: 'Remote',
    link: 'https://www.gather.town/',
    positions: [
      {
        role: 'Map maker',
        dateFrom: '05/01/2024',
        dateTo: null,
      },
    ],
    blurb: `
      <p>In my role at Gather.town, I am responsible for creating bespoke virtual maps for a global clientele using the Tiled software. These maps are designed to meet client-specific needs, focusing on both aesthetic appeal and functionality. Once the maps are created, I upload them into the Gather platform and furnish them with interactive elements to enhance user engagement and experience.</p>
      <p>I regularly liaise with colleagues across different time zones, particularly with teams in the US, to coordinate project timelines and address client feedback. I also handle post-delivery requests, ensuring that any necessary revisions are swiftly implemented while maintaining the highest level of quality.</p>
    `,
    stack: [
      type.TILED,
      type.TILEMAP,
      type.MAPDESIGN,
    ],
  },
  {
    company: 'mod.io',
    icon: 'images/modio_logo.png',
    type: 'Full-time',
    country: 'Australia',
    attendance: 'Remote',
    link: 'https://mod.io/',
    positions: [
      {
        role: 'Senior Frontend Developer',
        dateFrom: '02/01/2021',
        dateTo: '01/01/2023',
      },
    ],
    blurb:
      '<p>As part of a global remote team, I led the frontend development for mod.io, working closely with backend and design teams to ensure seamless browsing across all devices. I created the frontend from the ground up, building an internal component library to help engineers work more efficiently while maintaining consistency and accessibility throughout the project. My main responsibility was overseeing the frontend development of the monetisation section. I successfully delivered a Vue 3 and TailwindCSS-based v2 project with a 3-member frontend team. In addition to leading development efforts, I mentored junior developers, conducted PR reviews, and held regular guild meetings to drive project consistency and continuous improvement.</p>',
    stack: [
      type.PEOPLE,
      type.COMPLIB,
      type.VUE3,
      type.JS,
      type.TAILWIND,
      type.HTML,
      type.CSS,
      type.SCSS,
    ],
  },
  {
    company: 'Linked Entity Limted',
    icon: 'images/linkedentity_logo.png',
    type: 'Full-time',
    country: 'United Kingdom',
    attendance: 'Remote',
    link: '',
    positions: [
      {
        role: 'Co-Founder & Director',
        dateFrom: '01/01/2016',
        dateTo: '05/01/2022',
      },
    ],
    blurb:
      '<p>Passionate about development, I co-founded a successful UK-based web development company in 2016 with two fellow developers. Specialising in WordPress, Shopify, and online software, we\'ve delivered multiple projects, including e-commerce sites and an innovative Vue.js & .NET Core-based online community for the music industry. </p>',
    stack: [
      type.WORDPRESS,
      type.JS,
      type.BOOTSTRAP3,
      type.BOOTSTRAP4,
      type.HTML,
      type.CSS,
      type.SCSS,
    ],
  },
  {
    company: 'Gig Ocean',
    icon: 'images/gigocean_logo.png',
    type: 'Full-time',
    country: 'United Kingdom',
    attendance: 'Remote',
    link: '',
    positions: [
      {
        role: 'Co-Founder & Director',
        dateFrom: '01/01/2018',
        dateTo: '01/01/2022',
      },
    ],
    blurb: '<p>',
    stack: [
      type.VUE2,
      type.JS,
      type.BOOTSTRAP3,
      type.BOOTSTRAP4,
      type.HTML,
      type.CSS,
      type.SCSS,
    ],
  },
  {
    company: 'Icon Agency',
    icon: 'images/iconagency_logo.png',
    type: 'Full-time',
    country: 'United Kingdom',
    attendance: 'Hybrid',
    link: 'https://iconagency.com.au/',
    positions: [
      {
        role: 'Senior Frontend Developer',
        dateFrom: '12/01/2016',
        dateTo: '02/01/2021',
      },
    ],
    blurb:
      '<p>Led a team in building a large-scale Vue.js component library for the Australian Department of Defence, used to revamp over 150 sites. Successfully managed frontend developers, pull requests, and code reviews.</p><p>Delivered projects for prestigious clients like the Australian Airforce and Maurice Blackburn, using tailored development stacks for each project. Collaborated with cross-functional teams, including Backend Developers, UX/UI Designers, and Account Managers. </p>',
    stack: [
      type.COMPLIB,
      type.VUE2,
      type.JS,
      type.JQUERY,
      type.WORDPRESS,
      type.BOOTSTRAP3,
      type.BOOTSTRAP4,
      type.HTML,
      type.CSS,
      type.SCSS,
    ],
  },
  {
    company: 'IO Stuidos LTD',
    icon: 'images/iostudios_logo.png',
    type: 'Full-time',
    country: 'United Kingdom',
    attendance: 'On-Site',
    link: 'https://www.iostudios.co.uk/',
    positions: [
      {
        role: 'Frontend Developer',
        dateFrom: '06/01/2013',
        dateTo: '10/01/2016',
      },
    ],
    blurb:
      '<p>I helped transform Web Designers\' visions into seamless websites, ensuring consistency in look, feel, and functionality across major web and mobile browsers. Expertise in responsive web design & bespoke software. </p>',
    stack: [
      type.JS,
      type.JQUERY,
      type.BOOTSTRAP3,
      type.BOOTSTRAP4,
      type.FOUNDATION,
      type.HTML,
      type.CSS,
      type.SCSS,
    ],
  },
  {
    company: 'NFU Mutual',
    icon: 'images/nfumutual_logo.png',
    type: 'Full-time',
    country: 'United Kingdom',
    attendance: 'On-Site',
    link: 'https://www.nfumutual.co.uk/',
    positions: [
      {
        role: 'Web Developer',
        dateFrom: '09/01/2007',
        dateTo: '06/01/2013',
      },
    ],
    blurb:
      '<p>Part of a 7-member team, crafting bespoke web apps for internal NFU clients. Developed diverse sites and animations using HTML, CSS, JavaScript, and Flash, ranging from basic forms to SQL-backed full-fledged applications. Improved internal processes with efficient solutions. </p>',
    stack: [type.JS, type.HTML, type.CSS],
  },
]
