import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
    title: "Guru Nanak School | Premium CBSE School in Pharal, Haryana",
    description: "Guru Nanak School - A premium CBSE affiliated school in Pharal, Haryana offering world-class education from Nursery to 12th with state-of-the-art facilities.",
    keywords: ["CBSE School Pharal", "Best School Haryana", "Guru Nanak School", "Nursery to 12th School", "Education in Haryana", "CBSE Affiliated School"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body
                className={`${inter.variable} ${playfair.variable} ${plusJakartaSans.variable} antialiased bg-[rgb(var(--background-start-rgb))] text-[rgb(var(--foreground-rgb))]`}
            >
                {children}
            </body>
        </html>
    );
}
