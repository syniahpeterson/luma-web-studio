import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import values from "../../../data/values";

function Values() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-24 lg:py-32">
        <SectionHeading
          eyebrow="What We Believe"
          title="The principles behind our work."
          description="We believe the best websites balance thoughtful design, useful technology, and a clear understanding of the people they're built for."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.id}
              className="rounded-2xl border border-white/10 bg-[#161619] p-7"
            >
              <h3 className="text-xl font-semibold text-white">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-[#b7b7be]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Values;
