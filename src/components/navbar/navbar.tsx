"use client";

import Image from "next/image";
import Link from "next/link";

import { MobileNavbar } from "@/components/navbar/mobile-navbar";
import { NavbarLink } from "@/components/navbar/navbar-link";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
    const scrolled = useScroll(50);

    const links: { href: string; label: string }[] = [];

    // if (user?.role === UserRole.CENTRAL_REP) {
    //     links.push({ href: "/admin", label: "Панель администратора" });
    // } else if (user?.role === UserRole.REGIONAL_REP) {
    //     links.push({ href: "/regional", label: "Управление представительством" });
    // }
    //
    // if (user) {
    //     links.push({ href: "/settings", label: "Настройки" });
    // }

    links.push(...siteConfig.navLinks);

    return (
        <div className={cn("fixed left-0 right-0 top-0 z-50 print:static", scrolled && "backdrop-blur-xl")}>
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 rounded-xl p-4 md:gap-10">
                <Link className="flex items-center gap-2" href="/">
                    <Image src="/logo.svg" alt="FSPodium" width={28} height={28} />
                    <span className="text-xl font-bold">WhoCame</span>
                </Link>
                <div className="hidden flex-1 justify-between md:flex">
                    <div className="flex flex-1 items-center gap-6">
                        {links.map((link) => (
                            <NavbarLink key={link.href} href={link.href}>
                                {link.label}
                            </NavbarLink>
                        ))}
                    </div>
                </div>
                <div className="flex md:hidden">
                    <MobileNavbar links={links} />
                </div>
            </div>
        </div>
    );
}
