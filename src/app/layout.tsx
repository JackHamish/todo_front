import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import "../../public/fonts/icons/style.css";
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
    title: "Task app",
    description: "Task app",
};

type Props = React.PropsWithChildren & {
    createTaskModal: React.ReactNode;
};

export default function RootLayout({ children, createTaskModal }: Props) {
    return (
        <html lang="en">
            <body
                className={`flex min-h-screen flex-col ${space_mono.variable} ${work_sans.variable}`}
            >
                <QueryProvider>
                    <Header />
                    {children}
                    {createTaskModal}
                </QueryProvider>

                <ToastContainer hideProgressBar autoClose={3000} position="bottom-right" />
            </body>
        </html>
    );
}
