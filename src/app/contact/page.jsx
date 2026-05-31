import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/home/Contact";
import Contectprocess from "@/components/contact/ContactProcess";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ContactHero />
        <ContactForm />
        <Contectprocess />
      </main>
      <Footer />
    </>
  );
}
