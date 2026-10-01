import Container from "../../common/Container";

function ServicesHero() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            Our Services
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Websites designed to support your business.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b7b7be]">
            From the first idea to launch and beyond, we design and develop
            websites that help businesses communicate clearly, connect with
            customers, and grow online.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ServicesHero;
