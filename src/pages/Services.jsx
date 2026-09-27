import ServicesCTA from "../components/sections/services/ServicesCTA";
import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesOverview from "../components/sections/services/ServicesOverview";
import WhatYouGet from "../components/sections/services/WhatYouGet";

function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <WhatYouGet />
      <ServicesCTA />
    </>
  );
}

export default Services;
