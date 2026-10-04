import Container from "../../common/Container";

function WorkHero() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            Our Work
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Websites built with purpose.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b7b7be]">
            Explore a selection of websites designed and developed to help
            businesses communicate clearly, connect with customers, and create
            stronger digital experiences.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default WorkHero;
