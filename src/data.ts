export type Feature = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
};

export const features: Feature[] = [
  // 🧠 Best AIs
  {
    id: 1,
    title: "ChatGPT",
    description: "OpenAI's chatbot for natural conversation, coding, writing, and more.",
    category: "Best AIs",
    image: "data:image/png;base64,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",
    link: "https://chat.openai.com/",
  },
  {
    id: 2,
    title: "DALL·E",
    description: "Generate amazing images from text prompts with OpenAI’s DALL·E.",
    category: "Best AIs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5xrcCSF3R8PkZi-56NdM1WBpZyNLgTMZyQ&s",
    link: "https://openai.com/dall-e",
  },
  {
    id: 3,
    title: "Stable Diffusion",
    description: "Stability AI’s powerful open-source image generation model.",
    category: "Best AIs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKmK7WKDEuRgCYozhZxPuO8X7EcSVGMtCmw&s",
    link: "https://stability.ai/",
  },
  {
    id: 4,
    title: "Claude",
    description: "AI assistant by Anthropic built on Constitutional AI principles.",
    category: "Best AIs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLcfl8BG04IpXzNHcI-dJjDUFkQBWk0T5gA&s",
    link: "https://www.anthropic.com/index/claude",
  },
  {
    id: 5,
    title: "Gemini",
    description: "Google’s multimodal AI (formerly Bard) for creative and logical tasks.",
    category: "Best AIs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LE1x9Em98UZ2ME-q2Oj5sMBjBrk_Da6M_A&s",
    link: "https://gemini.google.com/",
  },

  // 🎨 Best UI Frameworks
  {
    id: 6,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework with rapid styling capabilities.",
    category: "Best UI",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgHWDyjwN9qZsPChFzc5PRfOOOqbfgXqR3w&s",
    link: "https://tailwindcss.com/",
  },
  {
    id: 7,
    title: "Material UI",
    description: "React UI library implementing Google’s Material Design.",
    category: "Best UI",
    image: "https://mui.com/static/logo.png",
    link: "https://mui.com/",
  },
  {
    id: 8,
    title: "Chakra UI",
    description: "Simple, accessible and modular React component library.",
    category: "Best UI",
    image: "https://avatars.githubusercontent.com/u/54212428?s=200&v=4",
    link: "https://chakra-ui.com/",
  },
  {
    id: 9,
    title: "Bootstrap",
    description: "Popular HTML, CSS, and JS framework for responsive sites.",
    category: "Best UI",
    image: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
    link: "https://getbootstrap.com/",
  },
  {
    id: 10,
    title: "Ant Design",
    description: "UI design system for enterprise React applications.",
    category: "Best UI",
    image: "https://avatars.githubusercontent.com/u/12101536?s=200&v=4",
    link: "https://ant.design/",
  },

  // 🎓 Best Learning Platforms
  {
    id: 11,
    title: "freeCodeCamp",
    description: "Free lessons and certifications in web development and programming.",
    category: "Learning Platforms",
    image: "https://www.freecodecamp.org/icons/icon-512x512.png",
    link: "https://www.freecodecamp.org/",
  },
  {
    id: 12,
    title: "Codecademy",
    description: "Interactive lessons for learning web, Python, Java, and more.",
    category: "Learning Platforms",
    image: "https://images.codecademy.com/social/logo-codecademy-social.png",
    link: "https://www.codecademy.com/",
  },
  {
    id: 13,
    title: "Udemy",
    description: "Global marketplace for learning anything from experts.",
    category: "Learning Platforms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpBtWj0ujbLQog6nuhF2yinLN5Sq9rDbeHA&s",
    link: "https://www.udemy.com/",
  },
  {
    id: 14,
    title: "Coursera",
    description: "University-level courses from top institutions around the world.",
    category: "Learning Platforms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT637rx02-x7uDYl5iu0P5fQuQDhQTp3kG4Iw&s",
    link: "https://www.coursera.org/",
  },
  {
    id: 15,
    title: "Frontend Masters",
    description: "Deep front-end training by leading experts in the field.",
    category: "Learning Platforms",
    image: "https://i.pcmag.com/imagery/reviews/05XBKmNFYeHCMIn726Nohqb-10.fit_lim.size_1050x591.v1627594235.png",
    link: "https://frontendmasters.com/",
  }
];
