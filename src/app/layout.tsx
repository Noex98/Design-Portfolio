import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "../components/Header";
import { WaveBg } from "@/components/WaveBg";
import { GlobalSkeleton } from "@/types";
import { client } from "@/utils/contentful";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
    const { fields } = await client.getEntry<GlobalSkeleton>(
        "6lkt1semYwHrnDwiZXjVrq",
    );

    return {
        title: fields.title,
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <div className="px-6">
                    <WaveBg />
                    {children}
                </div>
            </body>
        </html>
    );
}
