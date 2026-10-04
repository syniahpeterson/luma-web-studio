import lumaConstructionImage from "../assets/projects/luma-construction.webp";
import northlineLogisticsImage from "../assets/projects/northline-logistics.webp";
import pieHouseImage from "../assets/projects/pie-house.webp";

const projects = [
  {
    id: "luma-construction",
    title: "Luma Construction",
    slug: "luma-construction",
    category: "Construction",
    client: "Luma Construction",
    year: "2026",
    services: ["Website Design", "Frontend Development", "Website Modernization"],
    liveUrl: "https://www.allconstructionsvs.com/",
    description:
      "A modern website designed to establish trust, showcase completed work, and make it easier for homeowners to request a project consultation.",
    challenge:
      "Luma Construction needed a stronger online presence that would communicate professionalism, build trust with potential customers, and make it easier for homeowners to understand their services.",
    approach:
      "We created a clean, modern website focused on clear messaging, strong project imagery, responsive layouts, and straightforward calls to action.",
    outcome:
      "The new website gives Luma Construction a more professional digital presence while making important information easier for potential customers to find.",
    featured: true,
    image: lumaConstructionImage,
    gallery: [lumaConstructionImage],
  },

  {
    id: "northline-logistics",
    title: "Northline Logistics",
    slug: "northline-logistics",
    category: "Logistics",
    client: "Northline Logistics",
    year: "2023",
    services: ["Website Design", "Frontend Development"],
    liveUrl: "https://www.secondrunlogistics.com/",
    description:
      "A professional digital presence built to communicate logistics services clearly and create a stronger first impression for prospective clients.",
    challenge:
      "Northline Logistics needed a website that could communicate its services clearly while presenting the company as a professional and dependable partner.",
    approach:
      "We focused on a structured layout, clear service messaging, strong visual hierarchy, and responsive development to create an experience that works across devices.",
    outcome:
      "The finished website provides Northline Logistics with a clearer way to communicate its services and establish credibility with prospective customers.",
    featured: true,
    image: northlineLogisticsImage,
    gallery: [northlineLogisticsImage],
  },

  {
    id: "pie-house",
    title: "Pie House",
    slug: "pie-house",
    category: "Restaurant",
    client: "Pie House",
    year: "2026",
    services: ["Website Design", "Frontend Development"],
    description:
      "A welcoming restaurant website focused on showcasing the menu, atmosphere, and location while making important information easy to find.",
    challenge:
      "Pie House needed a welcoming online presence that could showcase its food and atmosphere while helping customers quickly find important restaurant information.",
    approach:
      "We created a visually inviting experience with clear navigation, focused content sections, and responsive layouts designed around the customer journey.",
    outcome:
      "The website gives Pie House a stronger digital presence while making its menu, location, and restaurant information easier for customers to discover.",
    featured: true,
    image: pieHouseImage,
    gallery: [pieHouseImage],
  },
];

export default projects;
