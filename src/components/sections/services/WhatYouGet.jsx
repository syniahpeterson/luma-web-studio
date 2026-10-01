import SectionHeading from "../../common/SectionHeading";
import Container from "../../common/Container";
import benefits from "../../../data/benefits";

function WhatYouGet() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="Why Luma"
            title="More than just a website."
            description="We focus on creating websites that are useful to your business, easy for your customers to navigate, and built with a strong foundation for the future."
          />

          <div>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={
                  index > 0 ? "mt-8 border-t border-white/10 pt-8" : ""
                }
              >
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-[#b7b7be]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhatYouGet;
