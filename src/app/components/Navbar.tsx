"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  function toggleVisible() {
    setVisible((visible) => !visible);
  }

  return (
    <div className="w-screen bg-white top-0 md:fixed">
      <nav className="md:flex justify-between text-orange-700 my-3 mx-10 text-lg">
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/perilogo.jpg" alt="PERI" width={500} height={500} className="w-20 h-auto"/>
          </Link>
          <div className="md:hidden" onClick={toggleVisible}>
            {!visible ? (
              <p className="font-bold text-2xl text-orange-700">X</p>
            ) : (
              <div className="space-y-1 mt-2">
                <div className="bg-orange-700 h-1 w-5"></div>
                <div className="bg-orange-700 h-1 w-5"></div>
                <div className="bg-orange-700 h-1 w-5"></div>
              </div>
            )}
          </div>
        </div>
        <ul className="md:flex hidden justify-evenly space-x-4 font-semibold">
          <Link href="/">
            <li className="hover:underline p-2">
              Home
            </li>
          </Link>
          <a href="#about">
            <li className="hover:underline p-2">
              About
            </li>
          </a>
          <a href="#Portfolio">
            <li className="hover:underline p-2">
              Portfolio
            </li>
          </a>
          <a href="#Blog">
            <li className="hover:underline p-2">
              Blog
            </li>
          </a>
          <a href="#Contact">
            <li className="hover:underline p-2">
              Contact
            </li>
          </a>
        </ul>
        <ul className="md:flex hidden justify-evenly space-x-4 p-2">
        <Link href="#">
              <Image
                src="/facebook.svg"
                alt="home"
                width={500}
                height={500}
                className="w-5 h-5"
              />
            </Link>
            <Link href="#">
              <Image
                src="/linkedin.svg"
                alt="home"
                width={500}
                height={500}
                className="w-5 h-5"
              />
            </Link>
            <Link href="#">
              <Image
                src="/instagram.svg"
                alt="home"
                width={500}
                height={500}
                className="w-5 h-5"
              />
            </Link>
        </ul>
      </nav>

      <div className="md:hidden modile z-10">
        {!visible && (
          <ul className="space-y-1 text-center text-orange-700 w-[100%] font-semibold">
            <Link href="/">
              <li className="hover:underline p-2">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="hover:underline p-2">
                About
              </li>
            </Link>
            <Link href="/Portfolio">
              <li className="hover:underline p-2">
                Portfolio
              </li>
            </Link>
            <Link href="/Blog">
              <li className="hover:underline p-2">
                Blog
              </li>
            </Link>
            <Link href="/Contact">
              <li className="hover:underline p-2">
                Contact
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
