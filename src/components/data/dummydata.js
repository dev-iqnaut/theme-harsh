export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
    submenu: [
      { text: 'academics', path: '/academics'},
      { text: 'school info', path: '/students' },
    ],
  },
  {
    text: "pages",
    submenu: [
      { text: 'teachers', path: '/teachers' },
      { text: 'gallery', path: '/gallery' },
      { text: 'infrastructure', path: '/infrastructure' },
      { text: 'news events', path: '/news' },
      { text: 'faq', path: '/faq' },
      { text: 'testimonials', path: '/testimonials' },
      { text: 'facilities', path: '/facility' },
      { text: 'parents corner', path: '/parents' },
    ],
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "contact",
    path: "/contact",
  },
]

export const teamShort = [
  {
    id: 1,
    cover: "/images/teachers/t1.jpg",
    name: "William Smith",
    work: "Science Professor",
  },
  {
    id: 2,
    cover: "/images/teachers/t2.jpg",
    name: "Jenny White",
    work: "Art Professor",
  },
  {
    id: 3,
    cover: "/images/teachers/t3.jpg",
    name: "George Hobbs",
    work: "Economics Professor",
  },
  {
    id: 4,
    cover: "/images/teachers/t4.jpg",
    name: "Alice Heard",
    work: "Statistics Professor",
  },
  {
    id: 4,
    cover: "/images/teachers/t4.jpg",
    name: "Alice Heard",
    work: "Statistics Professor",
  },
  {
    id: 3,
    cover: "/images/teachers/t3.jpg",
    name: "George Hobbs",
    work: "Economics Professor",
  },
  {
    id: 1,
    cover: "/images/teachers/t1.jpg",
    name: "William Smith",
    work: "Science Professor",
  },
  {
    id: 2,
    cover: "/images/teachers/t2.jpg",
    name: "Jenny White",
    work: "Art Professor",
  },
];

export const team = [
  {
    id: 1,
    cover: "/images/teachers/t1.jpg", // Use actual image paths
    name: "William Smith",
    work: "Science Professor",
    description: "William has been teaching for over 10 years...",
    qualifications: ["PhD in Physics", "MSc in Chemistry"],
    experience: "10+ years of teaching in the field of science...",
  },
  {
    id: 2,
    cover: "/images/teachers/t2.jpg",
    name: "Jenny White",
    work: "Art Professor",
    description: "Jenny specializes in algebra and calculus...",
    qualifications: ["MSc in Mathematics", "BSc in Statistics"],
    experience: "7 years of teaching advanced mathematics...",
  },
  {
    id: 3,
    cover: "/images/teachers/t3.jpg",
    name: "George Hobbs",
    work: "Economics Professor",
    description: "Anna is an expert in programming languages...",
    qualifications: ["PhD in Computer Science", "MSc in AI"],
    experience: "10+ years in software development and teaching...",
  },
  {
    id: 4,
    cover: "/images/teachers/t1.jpg",
    name: "Alice Heard",
    work: "Statistics Professor",
    description: "Brian specializes in front-end development...",
    qualifications: ["PhD in Computer Engineering", "MSc in Web Dev"],
    experience: "15 years of experience in coding and web technologies...",
  },
];

export const blog = [
  {
    id: 1,
    type: "admin",
    date: "JAN. 18, 2021",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b1.jpg",
  },
  {
    id: 2,
    type: "admin",
    date: "API. 25, 2022",
    com: "5 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b2.jpg",
  },
  {
    id: 3,
    type: "user",
    date: "MAY. 15, 2022",
    com: "10 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b3.jpg",
  },
  {
    id: 4,
    type: "admin",
    date: "JAN. 02, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b4.jpg",
  },
  {
    id: 5,
    type: "admin",
    date: "DEC. 14, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b5.jpg",
  },
  {
    id: 6,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b6.jpg",
  },
]
export const testimonials = [
  {
    name: "John Doe",
    post: "CEO at Example",
    cover: "/images/testimonials/t1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Harsh Smith",
    post: "Manager at Example",
    cover: "/images/testimonials/t2.jpg",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Robert Brown",
    post: "Developer at Example",
    cover: "/images/testimonials/t3.jpg",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    name: "Jane Smith",
    post: "Manager at Example",
    cover: "/images/testimonials/t4.jpg",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
];
