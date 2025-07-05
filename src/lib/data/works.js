// Centralized data store for portfolio works
export const works = [
    {
      id: 1,
      title: "Project One",
      slug: "project-one",
      description: "A minimal interface design for a digital experience.",
      image: "/img03.png", // Update this path to match your actual image location
      tags: ["UI/UX", "Branding"],
      year: "2025"
    },
    {
      id: 2,
      title: "Project Two",
      slug: "project-two",
      description: "Interactive installation with visual components.",
      image: "/img04.png", // Update this path to match your actual image location
      tags: ["Live Visuals", "Interactive"],
      year: "2025"
    },
    {
      id: 3,
      title: "Project Three",
      slug: "project-three",
      description: "Brand identity system for a tech startup.",
      image: "/img05.png", // Update this path to match your actual image location
      tags: ["Branding", "Typography"],
      year: "2025"
    }
  ];
  
  // Portfolio images for the collage
  export const collageImages = [
    {
      src: "/img03.png", // Update path to match your image locations
      position: { top: '120px', left: '60px' },
      width: '20%',
      zIndex: 1,
      rotation: -2
    },
    {
      src: "/img05.png", // Update path to match your image locations
      position: { top: '80px', right: '280px' },
      width: '15%',
      zIndex: 2,
      rotation: 3
    },
    {
      src: "/img04.png", // Update path to match your image locations
      position: { top: '180px', left: '280px' },
      width: '22%',
      zIndex: 3,
      rotation: -1
    },
    {
      src: "/img03.png", // Update path to match your image locations
      position: { top: '150px', right: '60px' },
      width: '18%',
      zIndex: 4,
      rotation: 2
    },
    {
      src: "/img05.png", // Update path to match your image locations
      position: { bottom: '150px', left: '150px' },
      width: '20%',
      zIndex: 5,
      rotation: -3
    },
    {
      src: "/img03.png", // Update path to match your image locations
      position: { bottom: '80px', left: '60px' },
      width: '16%',
      zIndex: 6,
      rotation: 1
    },
    {
      src: "/img04.png", // Update path to match your image locations
      position: { bottom: '100px', right: '100px' },
      width: '22%',
      zIndex: 7,
      rotation: -2
    },
    {
      src: "/img05.png", // Update path to match your image locations
      position: { bottom: '220px', right: '60px' },
      width: '18%',
      zIndex: 8,
      rotation: 2
    }
  ];