import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import processSteps from "../../../data/process";

function AboutProcess() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-24 lg:py-32">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built around clarity."
          description="We keep projects focused, collaborative, and intentional from the first conversation through launch."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.id}>
              <p className="text-sm font-medium text-purple-400">
                {step.number}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-[#b7b7be]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutProcess;
