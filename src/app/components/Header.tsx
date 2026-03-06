"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../_Firebase/client";
import { useRouter } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/logout", { method: "POST" });
      await signOut(auth);
      router.replace("/login");
    } catch (err) {
      setLoading(false);
    }
  }

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
          <li className="hover:scale-105 transition-all" onClick={handleLogout}>
            <Link href="#">SAIR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
