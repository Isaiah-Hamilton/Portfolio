export const data = {
  name: 'Isaiah Hamilton',
  email: 'isaiah7hamilton@gmail.com',
  workEmail: 'isaiah@supabase.com',
  phone: '+1 (404) 936-3781',
}

// Nav Data
export const navData = {
  title: {
    first: 'Isaiah',
    last: 'Hamilton',
  },
  items: [
    {
      url: '/',
      title: 'Home',
    },
    {
      url: '#about',
      title: 'About',
    },
    {
      url: '#projects',
      title: 'Projects',
    },
    {
      url: '#contact',
      title: 'Contact',
    },
  ],
  source: 'https://github.com/isaiah-hamilton/portfolio',
}

// Hero Data
export const heroData = {
  name: 'isaiah',
  title: 'Frontend Developer',
  cta: 'Contact Me',
  link: '#contact',
}

const currentYear = new Date().getFullYear()
const birthYear = 2006
const age = currentYear - birthYear

// About Data
export const aboutData = {
  title: 'frontend developer',
  image: '/profile.jpg',
  location: 'Atlanta',
  company: 'Supabase',
  description: `I'm a ${age} year old frontend developer based in Atlanta, and currently working @Supabase as an intern. I have a strong passion for UI/UX design and coding/building things that impact people's day to day lives and make them better. I am interested in Typescript, Next.js, Deno, Golang, and building consumer apps and developer tools. In my free time, you can see me skating, gaming, exploring, and talking to new people.`,
  cta: 'Resume',
  link: '/resume.pdf',
}

export const projectData = {
  projects: [
    {
      title: 'Portfolio',
      description:
        'A portfolio website to showcase some of my latest work and projects that I&apos;ve worked on.',
      image: '/portfolio.png',
      github: 'https://github.com/isaiah-hamilton/portfolio',
      url: 'https://isaiah-hamilton.com',
    },
    {
      title: 'Live ATC',
      description: 'A website that lets you listen to real time ATC (air traffic control)  radio.',
      image: '/live-atc.png',
      github: 'https://github.com/isaiah-hamilton/live-atc',
      url: 'https://live-atc.vercel.app',
    },
  ],
}

export const experienceData = {
  experience: [
    {
      company: 'Supabase',
      role: 'Frontend Developer',
      description:
        'The open source Firebase alternative. Create a backend in less than 2 minutes. Start your project with a Database, Authentication, and Storage.',
      image: '/supabase-logo.png',
      date: 'February 2022 - April 2022',
      github: 'https://github.com/supabase/supabase',
      url: 'https://supabase.com',
    },
  ],
}

export const footerData = {
  madeBy: 'Isaiah Hamilton',
  links: [
    {
      url: 'https://twitter.com/isaiah7hamilton',
      title: 'Twitter',
    },
    {
      url: 'https://github.com/isaiah-hamilton',
      title: 'Github',
    },
    {
      url: 'https://www.linkedin.com/in/isaiah-hamilton-093361209/',
      title: 'Linkedin',
    },
  ],
}

export const contactData = {
  description:
    'I&apos;m currently not looking for any Software Engineering opportunities at the moment. Though, if you know of any positions available, if you have any questions, or if you want to get in touch, please email me down below.',
  cta: 'Contact',
  link: '',
}
