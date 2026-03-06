"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-2 bg-white">
      <Link href="/">
        <Image src={"/logo.png"} alt="Logo" width={100} height={100}></Image>
      </Link>

      <nav className="text-black">
        <ul className="flex gap-8">
          <li
            className={`hover:scale-105 transition-all ${pathname == "/" && "text-red-500"}`}
          >
            <Link href="/">HOME</Link>
          </li>
          <li
            className={`hover:scale-105 transition-all ${pathname == "/saldo" && "text-red-500"}`}
          >
            <Link href="/saldo">BALANÇO</Link>
          </li>
          <li className="hover:scale-105 transition-all">
            <Link href="#">SAIR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
