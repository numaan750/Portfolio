import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Full-Stack Development</h1>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
            alt="Full-Stack Development"
            className="w-full rounded-xl mb-6 object-cover"
          />
          <p className="text-lg text-slate-300 leading-7 mb-4">
            I build scalable, maintainable web applications using modern stacks like Next.js and Node. From API design to deployment, I deliver production-ready solutions.
          </p>
          <ul className="list-disc ml-6 text-slate-300">
            <li>REST & GraphQL APIs</li>
            <li>Authentication & authorization</li>
            <li>Server-side rendering & performance</li>
            <li>CI/CD and cloud deployment</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
