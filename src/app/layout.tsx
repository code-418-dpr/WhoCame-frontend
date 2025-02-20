import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // const session = await auth();

    return (
        // <SessionProvider session={session}>
        <html lang="ru">
            <body className={cn(inter.className)}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <Toaster />
                    <div className="flex min-h-full w-full flex-col bg-background pt-16">
                        <Navbar />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
        // </SessionProvider>
    );
}
