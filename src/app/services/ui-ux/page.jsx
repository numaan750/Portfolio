import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function UIUXPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">UI / UX Design</h1>
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80"
            alt="UI / UX Design"
            className="w-full rounded-xl mb-6 object-cover"
          />
          <p className="text-lg text-slate-300 leading-7 mb-4">
            I design clean, user-focused interfaces that convert. I work through research, wireframes, and high-fidelity prototypes to deliver accessible and responsive experiences.
          </p>
          <ul className="list-disc ml-6 text-slate-300">
            <li>Research & user flows</li>
            <li>Wireframes & interactive prototypes</li>
            <li>Design systems & component libraries</li>
            <li>Accessibility & responsive layouts</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
