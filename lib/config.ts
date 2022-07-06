const currentYear: number = new Date().getFullYear()

const config = {
  name: 'Isaiah Hamilton',
  age: currentYear - 2006,
  email: 'isaiah7hamilton@gmail.com',
  github: 'https://github.com/isaiah-hamilton',
  twitter: 'https://twitter.com/isaiah7hamilton',
  linkedin: 'https://www.linkedin.com/in/isaiah-hamilton-093361209/',
  repo: 'https://github.com/isaiah-hamilton/portfolio',
  role: 'Frontend Developer',
  phone: '+1 (404) 936-3781',
  location: 'Atlanta, GA',
  navbar: {
    items: [
      {
        text: 'Home',
        url: '/',
      },
      {
        text: 'About',
        url: '#about',
      },
      {
        text: 'Projects',
        url: '#projects',
      },
      {
        text: 'Contact',
        url: '#contact',
      },
    ],
  },
  hero: {
    cta: [
      {
        text: 'Contact Me',
        url: '#contact',
      },
    ],
  },
  about: {
    image: '/profile.jpg',
    description: `I&apos;m a 16 year old frontend developer based in  and currently working @supabase as a. I have a strong passion for UI/UX design and coding/building things that impact people&apos;s day to day lives and make them better. I am interested in Typescript, Next.js, Deno, Golang, and building consumer apps and developer tools. In my free time, you can see me skating, gaming, exploring, and talking to new people.`,
    cta: [
      {
        text: 'Resume',
        url: '/resume.pdf',
      },
    ],
  },
  experience: {
    totalYears: currentYear - 2020,
    totalProjects: 2,
    totalCompanies: 1,
    experience: [
      {
        company: 'Supabase',
        role: 'Frontend Developer',
        image: '/supabase-logo.svg',
        date: 'Feb 2022 - Current',
        github: 'https://github.com/supabase/supabase',
        url: 'https://supabase.com',
      },
    ],
  },
  projects: [
    {
      title: 'Portfolio',
      description:
        'A portfolio website to showcase some of my latest work and projects that I&apos;ve worked on.',
      image: '/projects/portfolio.png',
      github: 'https://github.com/isaiah-hamilton/portfolio',
      url: 'https://isaiah-hamilton.com',
    },
    {
      title: 'Live ATC',
      description: 'A website that lets you listen to real time ATC (air traffic control)  radio.',
      image: '/projects/live-atc.png',
      github: 'https://github.com/isaiah-hamilton/live-atc',
      url: 'https://live-atc.vercel.app',
    },
  ],
  contact: {
    description:
      'I&apos;m currently not looking for any frontend development jobs at the moment. Though, if you have any questions, or if you want to get in touch, please email me down below.',
    cta: [
      {
        text: 'Contact',
        url: `mailto:`,
      },
    ],
  },
  footer: [
    {
      text: 'Github',
      url: 'https://github.com/isaiah-hamilton',
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com/isaiah7hamilton',
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/isaiah-hamilton-093361209/',
    },
  ],
}

export default config
