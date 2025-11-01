export const profile = {
  fullName: "Marta Borchiellini",
  title: "PhD Candidate",
  institute: "University of Groningen",
  author_name: "M. Borchiellini", // Author name to be highlighted in the papers section
  research_areas: [
    {
      title: "AMS-02 Data analysis",
      description: "Machine learning for antideuteron identification.",
      field: "computer-science",
    },
    {
      title: "Galactic Cosmic Ray phenomenology",
      description: "",
      field: "computer-science",
    },
    {
      title: "Machine learning for astroparticle physics",
      description: "",
      field: "computer-science",
    },
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: "borchiellini.marta@gmail.com",
  linkedin: "https://www.linkedin.com/in/marta-borchiellini/",
  x: "",
  github: "",
  gitlab: "",
  scholar: "",
  inspire: "https://inspirehep.net/authors/2662858",
  arxiv:
    "https://arxiv.org/search/astro-ph?searchtype=author&query=Borchiellini,+M",
};

export const template = {
  website_url: "https://martaborchiellini.com", // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: "winter", // Select one of the Daisy UI Themes or create your own
  darkTheme: "dracula", // Select one of the Daisy UI Themes or create your own
  mainTheme: "dark",
  excerptLength: 200,
  postPerPage: 1,
  maxLastArticle: -1,
  base: "", // Repository name starting with /
};

export const seo = {
  default_title: `${profile.fullName} - ${profile.title}`,
  default_description:
    "I am a PhD candidate in astroparticle physics specialising in the study of Galactic Cosmic Rays (GCRs), with a focus on AMS-02 data analysis and GCR transport phenomenology. My work combines data-driven methods and theoretical modelling to investigate cosmic-ray propagation and composition.",
  default_image: "/public/open_graph_default.png",
};
