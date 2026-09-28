import project1 from "../assets/images/projects/a2r1.webp";
import project2 from "../assets/images/projects/lms.webp";
import project3 from "../assets/images/projects/rafoPic.png";
import project4 from "../assets/images/projects/sellx_.png";

export interface Project {
  name: string;
  client: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "SellX - Buy & Sell Platform",
    client: "DriveX Pvt. Ltd.",
    image: project4,
    link: "https://sellx.ashlabs.in",
  },
  {
    name: "Rafo - RF & Engineering Analysis Platform",
    client: "Azista Space Pvt. Ltd.",
    image: project3,
    link: "https://rafo.ashlabs.in/electrical/ohms-law",
  },
  {
    name: "End-to-End Institute Management & Placement System",
    client: "A2R Software Consulting Pvt. Ltd.",
    image: project1,
    link: "https://a2rsoftwareconsulting.com",
  },

  {
    name: "Learning Management System (LMS)",
    client: "A2R Software Consulting Pvt. Ltd.",
    image: project2,
    link: "https://a2rsoftwareconsulting.com",
  },
];