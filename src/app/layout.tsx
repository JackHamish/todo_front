import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/header";

const space_mono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-space-mono",
});

const work_sans = Work_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
    variable: "--font-work-sans",
});

export const metadata: Metadata = {
    title: "NFT Marketplace",
    description: "NFT Marketplace",
};

type Props = React.PropsWithChildren;

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body
                className={`flex min-h-screen flex-col ${space_mono.variable} ${work_sans.variable}`}
            >
                <QueryProvider>
                    <Header />
                    {children}
                </QueryProvider>

                <ToastContainer hideProgressBar autoClose={3000} position="bottom-right" />
            </body>
        </html>
    );
}
