import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const REASONS = [
  {
    title: "Quality-Focused Development",
    detail:
      "I build clean, reliable, and maintainable applications that are designed to perform smoothly today and scale effortlessly as your business grows.",
  },
  {
    title: "End-to-End Expertise",
    detail:
      "From modern user interfaces to secure backend systems, I handle every stage of development to deliver a seamless and complete digital solution.",
  },
  {
    title: "Results-Driven Approach",
    detail:
      "My goal is not just to write code but to create solutions that improve user experience, solve real business challenges, and deliver measurable value.",
  },
];

export default function HomeWhyChoose() {
  return (
    <SectionWrapper className="pt-15">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <SectionHeader
            tag="Why Work With Me"
            title="Building Solutions That Deliver Results"
            subtitle="I build high-performance digital products focused on quality, user experience, and business growth."
          />
          <div className="space-y-4">
            {REASONS.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <h3 className="relative z-10 text-xl font-semibold text-white">{item.title}</h3>
                <p className="relative z-10 mt-2 text-slate-300 leading-7">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" overflow-hidden rounded-4xl border border-white/10 bg-[#0d0d1a]/90  p-6 h-full min-h-[400px]">
          <img
            src="/home-images/Building-Solutions-That-Deliver-Results.png"
            alt="Developer working"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}