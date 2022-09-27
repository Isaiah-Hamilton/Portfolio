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
    description: `I&apos;m a 16 year old frontend developer based in Atlanta and currently working @Supabase as an intern. I have a strong passion for UI/UX design and coding/building things that impact people&apos;s day to day lives and make them better. I am interested in Typescript, Next.js, Deno, Golang, and building consumer apps and developer tools. In my free time, you can see me skating, gaming, exploring, and talking to new people.`,
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
        url: 'mailto:isaiah7hamilton@gmail.com',
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
  social: [
    {
      icon: 'M23.953 4.57a10 10 0 0 1-2.825.775a4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827a4.996 4.996 0 0 1-2.212.085a4.936 4.936 0 0 0 4.604 3.417a9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985c0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
      color: '#1DA1F2',
      url: 'https://twitter.com/isaiah7hamilton',
    },
    {
      icon: 'M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
      color: '#333333',
      url: 'https://github.com/isaiah-hamilton',
    },
    {
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      color: '#0077B5',
      url: 'https://www.linkedin.com/in/isaiah-hamilton-093361209/',
    },
    {
      icon: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z',
      color: '#9146FF',
      url: 'https://twitch.tv/isaiah7hamilton',
    },
  ],
}

export default config
