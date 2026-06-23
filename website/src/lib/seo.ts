export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://portfolio-numaan.vercel.app"))
    .replace(/\/$/, "");

export const SITE_NAME = "Numaan Ali";
export const SITE_BRAND = "Nexcode";
export const DEFAULT_TITLE = `${SITE_NAME} | Full-Stack Developer & UI/UX Specialist`;
export const DEFAULT_DESCRIPTION =
  "Numaan Ali is a full-stack developer and UI/UX specialist building fast, scalable, and SEO-friendly web experiences.";
export const DEFAULT_KEYWORDS = [
  "Numaan Ali",
  "Full-Stack Developer",
  "Next.js Developer",
  "React Developer",
  "MERN Stack Developer",
  "SEO Specialist",
  "UI/UX Designer",
  "Portfolio Website",
  "Custom Web Development",
];

export function absoluteUrl(pathname = "") {
  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
