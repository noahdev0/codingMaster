"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useOnClickOutside } from "@/lib/hooks/use-on-click-outside";
import { EyeClosedIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

interface Props {}

function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = React.useRef<any>(null);
  useOnClickOutside(navRef, () => {
    setIsMenuOpen(false);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      name: "Better Progress",
      href: "/",
    },
    {
      name: "Download App",
      href: "/download",
    },
    {
      name: "Login",
      href: "/login",
    },
  ];
  return (
    <div className="relative  z-50 h-16">
      <div className="fixed inset-x-0 top-0   ">
        <div className="mx-auto px-5 h-16 flex items-center justify-between rounded-xl shadow-lg backdrop-blur-md bg-blue-100/40 bg-blend-difference">
          <div className="w-[150px] h-[50px] relative">
            <Link href="/">
              <Image src="/Logo.svg" fill alt="logo" />
            </Link>
          </div>

          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <HamburgerMenuIcon className="block sm:hidden text-foreground" />
            ) : (
              <EyeClosedIcon className="block sm:hidden" />
            )}
          </button>
          {isMenuOpen && (
            <ul
              ref={navRef}
              className="absolute flex flex-col top-20 right-0 bg-slate-50 p-5 gap-5 items-center"
            >
              {links.map((link) => (
                <motion.li
                  whileTap={{ scale: 0.9 }}
                  className="inline-block mx-auto "
                  key={link.name}
                >
                  <Link
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "hover:bg-transparent text-blue-900"
                    )}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}
          <ul className="hidden sm:block">
            {links.map((link) => (
              <li className="inline-block ml-10" key={link.name}>
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "hover:bg-transparent text-blue-900"
                  )}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
