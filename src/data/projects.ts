export interface Project {
  name: string;
  client: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "End-to-End Institute Management & Placement System",
    client: "A2R Software Consulting Pvt. Ltd.",
    image: "../src/assets/projects/a2r1.webp",
    link: "https://a2rsoftwareconsulting.com",
  },

  {
    name: "Learning Management System (LMS)",
    client: "A2R Software Consulting Pvt. Ltd.",
    image: "../src/assets/projects/project-two.webp",
    link: "https://example.com",
  },
];