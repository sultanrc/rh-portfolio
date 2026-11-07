const socialLinks = [
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/username",
    icon: "/linkedin.svg",
  },
  {
    name: "WHATSAPP",
    url: "https://wa.me/628xxxxxxxxxx",
    icon: "/whatsapp.svg",
  },
  {
    name: "INSTAGRAM",
    url: "https://www.instagram.com/username",
    icon: "/instagram.svg",
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-full flex-col items-center gap-4 px-6 pt-20 pb-6 md:flex-row md:justify-between md:gap-6 md:pt-24 md:pb-4">
      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 md:order-2 md:gap-8">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="transition-opacity duration-300 hover:opacity-60"
          >
            {/* Mobile: SVG Icons */}
            <img
              src={social.icon}
              alt=""
              className="h-5 w-5 md:hidden dark:invert"
            />

            {/* Desktop: Text */}
            <span className="hidden text-xs font-bold tracking-widest transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 sm:text-sm md:inline">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <h2 className="text-center text-xs font-bold tracking-widest sm:text-sm md:order-1">
        DESIGNED & DEVELOPED BY KK2TAN
      </h2>
    </footer>
  );
}
