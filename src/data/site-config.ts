export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    image?: string;
};

export type Hero = {
    title?: string;
    tools?: Image[];
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Michael Yubank',
    subtitle: 'Portfolio and blog by Michael Yubank',
    description: 'Astro.js and Tailwind CSS',
    image: {
        src: '/asset/Portfolio-image.png',
        alt: 'Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/',
            image: '/home.svg'
        },
        {
            text: 'Projects',
            href: '/projects',
            image: '/projects.svg'
        },
        {
            text: 'Experience',
            href: '/blog',
            image: '/blog.svg'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
      
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/y_b_n_k/',
            image: '/instagram.svg'
        },
        {
            text: 'Github',
            href: 'https://github.com/yubank98',
            image: '/github.svg'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/michael-yubank/',
            image: '/linkedin.svg'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My PortFolio!',
        tools: [
            //Java, JavaScript, Typescript, ReactJS, Angular, Git, PHP, Python, .NET Framework, C#, C++, SQL Server, MySQL, Laravel, Node.js, Express.js
            {
                src: '/react.svg',
                alt: 'react.js logo' 
            },
            {
                src: '/java.svg',
                alt: 'java.js logo'
            },
            {
                src: '/javascript.svg',
                alt: 'javascript.js logo'
            },
            {
                src: '/typescript.svg',
                alt: 'typescript.js logo'
            },
            {
                src: '/angular.svg',
                alt: 'angular.js logo'
            },
            {
                src: '/git.svg',
                alt: 'git.js logo'
            },
            {
                src: '/php.svg',
                alt: 'php.js logo'
            },
            {
                src: '/python.svg',
                alt: 'python.js logo'
            },
            {
                src: '/dotnet.svg',
                alt: 'dotnet.js logo'
            },
            {
                src: '/csharp.svg',
                alt: 'csharp.js logo'
            },
            {
                src: '/cplusplus.svg',
                alt: 'cplusplus.js logo'
            },
            {
                src: '/sqlserver.svg',
                alt: 'sqlserver.js logo'
            },
            {
                src: '/mysql.svg',
                alt: 'mysql.js logo'
            },
            {
                src: '/laravel.svg',
                alt: 'laravel.js logo'
            },
            {
                src: '/nodejs.svg',
                alt: 'nodejs.js logo'
            },
            {
                src: '/astro.svg',
                alt: 'astro.js logo'
            }
          
           
        ],
        text: "I'm **Michael Yubank**, a Jr development with over 1 year and 6 months of experience working in software development and data analysis. Skilled in problem-solving, teamwork, optimization, and maintenance, empathy, and decision-making,Feel free to explore some of my coding endeavors on <a href='https://github.com/yubank98'>GitHub</a> or follow me on <a href='https://www.linkedin.com/in/michael-yubank/'>Linkedin</a>.",
        image: {
            src: '/Profile1.jpg',
            alt: 'Me in a suit and tie smiling at the camera.'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;