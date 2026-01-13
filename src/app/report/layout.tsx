import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Management System | Guru Nanak School",
    description: "Guru Nanak School Management System - Premium Dashboard",
};

export default function ReportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="font-sans text-slate-800 antialiased bg-slate-50 min-h-screen flex flex-col">
            <div className="aurora-bg"></div>
            {children}
        </div>
    );
}
