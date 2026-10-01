import SectionHeading from "../../common/SectionHeading";
import benefits from "../../../data/benefits";

function WhatYouGet() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Why Luma"
              title="More than just a website."
              description="We focus on creating websites that are useful to your business, easy for your customers to navigate, and built with a strong foundation for the future."
            />
          </div>

          <div>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={
                  index > 0
                    ? "border-t border-white/10 pt-8 mt-8"
                    : ""
                }
              >
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
