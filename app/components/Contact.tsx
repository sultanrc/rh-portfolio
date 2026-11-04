// import { siInstagram, siLinkedin, siWhatsapp } from "simple-icons/icons";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/username",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/628xxxxxxxxxx",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/username",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-2xl flex-col justify-between px-6 py-36 gap-8"
    >
      <h2 className="mx-auto text-center text-4xl font-bold">
        Your Next Project Starts with a Conversation
      </h2>
      <p className="mx-10 md:mx-20 text-center text-sm lg:text-md leading-relaxed text-gray-500">
        Looking for someone with hands-on engineering experience and a
        commitment to quality? Let’s connect and explore what we can accomplish
        together. Feel free to click the button below to get in touch with me
        via email.
      </p>
      <a
        href="mailto:rezzahanafiah@gmail.com"
        className="mx-auto inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-white px-6 py-3 text-sm font-mono font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
      >
        Get in Touch
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
