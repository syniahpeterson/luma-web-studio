import Button from "../../ui/Button";

function AboutPreview() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-brand)]">
              About Luma
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              A web partner focused on building better digital experiences.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[var(--color-text-secondary)]">
              We work with businesses that need a website that looks
              professional, communicates clearly, and gives their customers a
              better experience online.
            </p>
            <p className="mt-5 leading-7 text-[var(--color-text-muted)]">
              From the first conversation through launch, we focus on
              understanding the business behind the website so the final product
              is more than just a collection of pages.
            </p>

            <div className="mt-8">
              <Button to="/about" variant="secondary">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
