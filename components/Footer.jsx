import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  const socialIcons = [
    { icon: <Instagram />, link: "https://instagram.com/pratiksmithkhamari" },
    { icon: <Github />, link: "https://github.com/pratiksmithkhamari" },
    { icon: <Linkedin />, link: "https://linkedin.com/in/pratiksmithkhamari" },
  ];

  return (
    <div className="bg-slate-950 text-zinc-100 text-center flex sm:flex-row md:flow-row p-3 sm:p-0 flex-col items-center justify-center gap-2 sm:gap-7 min-h-14">
      <h2>&copy; all rights reserved {new Date().getFullYear()}</h2>
      <div className="flex justify-center">
        {socialIcons.map((item, i) => {
          return (
            <a
              href={item.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-zinc-100 flex gap-4 m-2"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
