import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "../components/Header";
import { WaveBg } from "@/components/WaveBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "4fun",
    description: "Just for fun",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <div className="px-6">
                    <Header />
                    <WaveBg />
                    {children}
                </div>
            </body>
        </html>
    );
}
