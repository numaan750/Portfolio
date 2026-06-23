import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy detailing how Nexcode and Numaan Ali collect, use, and protect your information.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "Nexcode privacy",
    "portfolio privacy",
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 relative bg-[#07070f]">
        {/* Background glow effects */}
        <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

        <div className="mycontainer relative z-10 max-w-4xl">
          {/* Header section */}
          <div className="text-center mb-16">
            <span className="section-tag">Privacy</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-slate-400 text-sm">Last Updated: June 8, 2026</p>
          </div>

          {/* Content section */}
          <div className="glass p-8 md:p-12 border border-[#6366f1]/15 shadow-2xl shadow-indigo-950/20 text-slate-300 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                1. Information We Collect
              </h2>
              <p className="mb-3">
                At Nexcode, we respect your privacy and are committed to protecting it. We only collect personal information that you voluntarily provide to us when you fill out our contact form or send us an email. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Any details or specifications regarding your project that you share in your message</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                The information we collect is used strictly for communication and delivering our services. Specifically, we use your data to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries, questions, or project requests.</li>
                <li>Provide you with detailed quotes, estimates, and project schedules.</li>
                <li>Communicate with you throughout the design, development, and deployment phases of your project.</li>
                <li>Provide post-launch support and troubleshooting.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                3. Cookies and Tracking
              </h2>
              <p>
                Our website may use basic cookies or local storage to enhance your browsing experience, remember your preferences, or compile anonymous, aggregated analytics regarding website traffic (such as pages visited and time spent on site) using standard services. We do not use any tracking cookies for advertising or invasive user tracking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                4. Data Security
              </h2>
              <p>
                We implement industry-standard administrative, physical, and technical security measures designed to protect your personal data from unauthorized access, loss, alteration, or disclosure. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                5. Information Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, trade, or lease your personal information to third parties. We will only share your information if required to do so by law or to comply with a legal obligation, or with trusted third-party service providers (such as hosting, email delivery, or payment processing services like Stripe and Creem Payment) solely to the extent necessary to perform services on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                6. Your Rights
              </h2>
              <p>
                You have the right to access, correct, update, or request the deletion of the personal information we hold about you. If you would like to make such a request, or if you have any questions about this Privacy Policy, please email us directly at <a href="mailto:alinumaan35@gmail.com" className="text-[#22d3ee] hover:underline font-semibold">alinumaan35@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                7. Changes to this Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <div className="pt-6 border-t border-[#6366f1]/15 text-center">
              <p className="text-slate-400 text-sm mb-4">
                Have questions about your privacy? Contact us directly.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
