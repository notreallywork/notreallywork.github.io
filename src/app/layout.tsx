import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ThemeScript } from "@/components/ui/ThemeScript";
import { getProjectNavItems, getLogNavItems } from "@/lib/content";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "notreally.work — Experimental Archive",
  description: "A hyper-functional terminal archive of chaotic experiments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = getProjectNavItems();
  const logs = getLogNavItems();

  return (
    <html lang="en" className={jetbrainsMono.variable} data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground font-mono">
        <Header projects={projects} logs={logs} />
        <Sidebar />

        <main className="lg:ml-[280px] min-h-screen border-l border-border">
          <div className="px-4 py-6 lg:px-8 lg:py-12 max-w-4xl">
            {children}

            <div className="mt-16 text-foreground">
              user@notreally:~$ <span className="cursor-blink">_</span>
            </div>
          </div>
        </main>

        <footer className="lg:ml-[280px] border-t border-l border-border px-4 py-6 lg:px-8 bg-background text-sm text-muted">
          <p>$ echo "© 2026 Not Really Working, Ltd" && exit</p>
        </footer>
      </body>
    </html>
  );
}
