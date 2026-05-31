import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SEOPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">SEO & Performance</h1>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
            alt="SEO and Performance"
            className="w-full rounded-xl mb-6 object-cover"
          />
          <p className="text-lg text-slate-300 leading-7 mb-4">
            I optimize websites for search and speed: semantic HTML, meta strategies, performance tuning, and Core Web Vitals improvements so your site ranks and converts.
          </p>
          <ul className="list-disc ml-6 text-slate-300">
            <li>Technical SEO audits</li>
            <li>Meta tags & structured data</li>
            <li>Performance tuning & caching</li>
            <li>Analytics and monitoring</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
