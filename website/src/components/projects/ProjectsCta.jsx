import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ProjectsCta() {
  return (
    <SectionWrapper className="pt-14 pb-20 bg-[#07070f]">
      <div className="rounded-4xl border border-white/10 bg-linear-to-br from-[#111827] to-[#0b1220] p-10 text-center">
        <p className="section-tag">Ready</p>
        <h2 className="section-title">Ready to bring your next project into production?</h2>
        <p className="section-sub max-w-2xl mx-auto">
          Let’s talk about how your website can deliver strong visuals, fast performance, and reliable ongoing growth.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="/contact" className="btn-primary px-8 py-3">
            Request a quote
          </a>
          <a href="/about" className="btn-outline px-8 py-3">
            Learn about the approach
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

