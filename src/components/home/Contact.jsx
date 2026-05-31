"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { personalInfo } from "@/lib/data";

const SOCIAL = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: personalInfo.github,
    color: "text-indigo-300",
    border: "border-indigo-300/20",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: personalInfo.linkedin,
    color: "text-cyan-300",
    border: "border-cyan-300/20",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    color: "text-emerald-300",
    border: "border-emerald-300/20",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    href: `tel:${personalInfo.phone}`,
    color: "text-amber-300",
    border: "border-amber-300/20",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed");

      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="pt-15">
      <SectionHeader
        tag="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind? I'd love to hear about it. Drop me a message!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div variants={fadeLeft} className="flex flex-col gap-5 h-full">
          <div className="glass px-6 py-7">
            <h3 className="font-extrabold text-[1.15rem] mb-3">Get In Touch</h3>
            <p className="text-slate-400 text-[0.9rem] leading-[1.75] mb-6">
              I&apos;m currently open to freelance projects and full-time
              opportunities. Whether you have a question or just want to say hi,
              my inbox is always open!
            </p>
            {[
              {
                icon: <FaEnvelope />,
                label: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: <FaPhone />,
                label: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 mb-3.5 no-underline text-slate-400 text-[0.88rem] transition-colors duration-200 hover:text-indigo-300"
              >
                <div className="w-[34px] h-[34px] rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-indigo-300 text-[0.9rem] shrink-0">
                  {item.icon}
                </div>
                {item.label}
              </a>
            ))}
          </div>
          <div className="glass p-6">
            <p className="text-slate-400 text-[0.78rem] font-bold uppercase tracking-[0.1em] mb-4">
              Follow Me
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className={`social-icon ${s.color} ${s.border}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="glass px-5.5 py-5 bg-cyan-400/5 border-cyan-400/20">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_10px_#22d3ee] animate-[pulse_2s_infinite]" />
              <span className="font-bold text-cyan-300 text-[0.9rem]">
                Available for Opportunities
              </span>
            </div>
            <p className="text-slate-400 text-[0.82rem] mt-2">
              Open to freelance projects &amp; full-time roles.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeRight} className="h-full">
          <div className="glass px-6 py-6 h-full flex flex-col">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center flex flex-col items-center justify-center flex-1 py-10"
              >
                <HiCheckCircle className="text-[3.5rem] text-cyan-400 mb-4 mx-auto" />
                <h3 className="font-extrabold text-[1.3rem] mb-2.5">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-[0.9rem]">
                  Thanks for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="btn-outline mt-6 text-[0.85rem]"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-extrabold text-[1.15rem] mb-6">
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-slate-400 text-[0.78rem] font-bold mb-1.5 uppercase tracking-[0.08em]">
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-input disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-[0.78rem] font-bold mb-1.5 uppercase tracking-[0.08em]">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-slate-400 text-[0.78rem] font-bold mb-1.5 uppercase tracking-[0.08em]">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-slate-400 text-[0.78rem] font-bold mb-1.5 uppercase tracking-[0.08em]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="form-input resize-y min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-[0.83rem] mb-3.5">{error}</p>
                )}

                <button
                  type="submit"
                  className={`btn-primary w-full justify-center transition-opacity duration-200 ${
                    loading ? 'opacity-70 pointer-events-none' : ''
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}


