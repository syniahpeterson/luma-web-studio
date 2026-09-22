import lumaConstructionImage from "../assets/projects/luma-construction.webp";
import northlineLogisticsImage from "../assets/projects/northline-logistics.webp";
import pieHouseImage from "../assets/projects/pie-house.webp";

const projects = [
  {
    id: "luma-construction",
    title: "Luma Construction",
    slug: "luma-construction",
    category: "Construction",
    services: ["Website Design", "Frontend Development"],
    description:
      "A modern website designed to establish trust, showcase completed work, and make it easier for homeowners to request a project consultation.",
    featured: true,
    image: lumaConstructionImage,
  },
  {
    id: "northline-logistics",
    title: "Northline Logistics",
    slug: "northline-logistics",
    category: "Logistics",
    services: ["Website Design", "Frontend Development"],
    description:
      "A professional digital presence built to communicate logistics services clearly and create a stronger first impression for prospective clients.",
    featured: true,
    image: northlineLogisticsImage,
  },
  {
    id: "pie-house",
    title: "Pie House",
    slug: "pie-house",
    category: "Restaurant",
    services: ["Website Design", "Frontend Development"],
    description:
      "A welcoming restaurant website focused on showcasing the menu, atmosphere, and location while making important information easy to find.",
    featured: true,
    image: pieHouseImage,
  },
];

export default projects;
