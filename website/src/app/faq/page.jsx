import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQContent from "@/components/faq/FAQContent";

export const metadata = {
  title: "Frequently Asked Questions | Nexcode",
  description: "Find answers to frequently asked questions about Nexcode's web development, custom software design, and AI solutions.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 relative bg-[#07070f]">
        {/* Background glow effects */}
        <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

        <FAQContent />
      </main>
      <Footer />
    </>
  );
}
