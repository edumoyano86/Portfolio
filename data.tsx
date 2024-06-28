import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpeg",
    },
    {
        id: 2,
        url: "/slider-2.jpeg",
    },
    {
        id: 3,
        url: "/slider-3.jpeg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "AppClima",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/edumoyano86/AppClima-react",
        urlDemo: "https://appclimaedumoyano86.netlify.app",
    },
    {
        id: 2,
        title: "Clon de Netflix",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/edumoyano86/Clon-Netflix",
        urlDemo: "https://clonn.netlify.app/login",
    },
    // {
    //     id: 3,
    //     title: "Estrategias Web",
    //     image: "/image-3.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 4,
    //     title: "Navegando Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 5,
    //     title: "Sitios Web Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Proyectos Web Dinámicos",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 80,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "React",
                subtitle: "Basic",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 60,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 60,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Otros Servicios",
        icon: <BellPlus />,
        features: [
            {
                name: "Atención al Cliente y Ventas Personalizadas",
            },
            {
                name: "Gestión de Caja y Transacciones",
            },
            {
                name: "Liderazgo y Manejo de Personal",
            },
            {
                name: "Facturación y Registro Contable",
            },
            {
                name: "Gestión de Pedidos de Venta al por Mayor",
            },
            {
                name: "Análisis de Ventas",
            },
            {
                name: "Manejo de Excel",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+54 9 263 465 7789",
        link: "tel:+5492634657789",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "edumoyano86",
        link: "https://github.com/edumoyano86",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "cba2486@gmail.com",
        link: "mailto:cba2486@gmail.com",
        icon: <Inbox />,
    },
];
