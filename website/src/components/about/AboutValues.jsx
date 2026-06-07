import SectionWrapper from "@/components/ui/SectionWrapper";

const VALUES = [
  {
    title: "Quality First",
    description:
      "I focus on writing clean, organized, and maintainable code that keeps projects reliable and easy to scale in the future.",
  },
  {
    title: "User-Centered Design",
    description:
      "Every feature and interface is designed with the end user in mind, creating experiences that are simple, intuitive, and engaging.",
  },
  {
    title: "Performance & Reliability",
    description:
      "I build fast, responsive, and dependable solutions that deliver a smooth experience across all devices and screen sizes.",
  },
];

export default function AboutValues() {
  return (
    <SectionWrapper className="pt-15">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
        {/* Left Content */}
        <div className="flex flex-col justify-between">
          <div className="mb-4">
            <p className="section-tag">Values</p>
            <h2 className="section-title">The Principles Behind My Work</h2>
            <p className="section-sub">
              Every project I build is guided by a focus on quality, user
              experience, and long-term reliability. These principles help me
              create solutions that not only look great but also perform
              effectively.
            </p>
          </div>
          <div className="space-y-4">
            {VALUES.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-4 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                <h3 className="relative z-10 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-2 text-slate-300 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image — full height match */}
        <div className="rounded-4xl border border-white/10 bg-[#0b1220]/90 p-4 min-h-[300px]">
          <div className="relative w-full h-full min-h-[260px]">
            <img
              src="/images/about-images/The-Principles-Behind-My-Work.png"
              alt="Detail-oriented workflow"
              className="absolute inset-0 w-full h-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}