import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of Nexcode's web development and AI integration services.",
  keywords: [
    "terms and conditions",
    "legal",
    "service terms",
    "Nexcode terms",
    "portfolio legal",
  ],
};

export default function TermsPage() {
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
            <span className="section-tag">Legal</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-slate-400 text-sm">Last Updated: June 8, 2026</p>
          </div>

          {/* Content section */}
          <div className="glass p-8 md:p-12 border border-[#6366f1]/15 shadow-2xl shadow-indigo-950/20 text-slate-300 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                1. Acceptance of Terms
              </h2>
              <p>
                Welcome to Nexcode. By accessing our website, subscribing to our services, or working with us on a development project, you agree to comply with and be bound by the following Terms and Conditions. These terms apply to all visitors, clients, and users who access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                2. Services Provided
              </h2>
              <p>
                Nexcode, operated by Numaan Ali, offers professional web development, UI/UX design, custom MERN stack applications, Next.js optimization, API integrations, and AI-powered custom solutions. The specific scope, deliverables, timeline, and budget for any service will be detailed in a separate Project Proposal or Service Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                3. Intellectual Property Rights
              </h2>
              <p className="mb-3">
                Upon final, full payment for completed projects, the custom source code, design assets, and database schemas created specifically for the project will be fully transferred to the Client.
              </p>
              <p>
                Nexcode retains the right to display screenshots, links, and summaries of the completed work in our online portfolio, case studies, and marketing materials, unless a strict Non-Disclosure Agreement (NDA) has been signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                4. Client Responsibilities
              </h2>
              <p>
                To ensure successful project delivery, the Client is responsible for providing clear specifications, assets (such as logo, brand guidelines, content, and media), and timely feedback during milestones. Nexcode is not responsible for project delays caused by a lack of client responsiveness or missing content/assets.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                5. Payments & Invoicing
              </h2>
              <p className="mb-3">
                Payment schedules, deposit amounts (typically 50% upfront for new clients), and milestones will be specified in the Project Agreement. Invoices are due within 7 days of receipt unless otherwise agreed.
              </p>
              <p>
                If payments are delayed, Nexcode reserves the right to halt work or suspend live services until outstanding amounts are settled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                6. Limitation of Liability
              </h2>
              <p>
                While we strive for bug-free and optimized code, Nexcode is not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our deliverables, including but not limited to server downtime, database breaches, third-party API changes, or loss of business revenue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                7. Support and Maintenance
              </h2>
              <p>
                We provide 30 days of complimentary bug-fixing and support post-launch for custom applications. Any updates, additional feature requests, major layout changes, or ongoing support after this period will be billed hourly or managed under a monthly support retainer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />
                8. Governing Law
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Lahore, Pakistan. Any dispute arising out of or related to our services shall be resolved through amicable negotiation or, failing that, in the courts of Lahore, Pakistan.
              </p>
            </section>

            <div className="pt-6 border-t border-[#6366f1]/15 text-center">
              <p className="text-slate-400 text-sm mb-4">
                Have questions about these terms? Feel free to contact us.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
