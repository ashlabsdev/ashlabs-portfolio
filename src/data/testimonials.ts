export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Anil Kumar",
    role: "Founder",
    company: "A2R Software Consulting Private Limited",
    message:
      "AshLabs understood our requirements and delivered a solution that fit our business perfectly.",
  },

  {
    name: "Jyoti Prakash",
    role: "Business Owner",
    company: "A2R Software Consulting Private Limited",
    message:
      "The process was smooth, communication was clear, and the final product exceeded our expectations.",
  },

  // {
  //   name: "Client Name",
  //   role: "Product Manager",
  //   company: "Company Name",
  //   message:
  //     "A professional team that understood both the technical and business side of the project.",
  // },

  // {
  //   name: "Client Name",
  //   role: "Founder",
  //   company: "Company Name",
  //   message:
  //     "AshLabs turned our idea into a practical digital product that we could actually use.",
  // },
];