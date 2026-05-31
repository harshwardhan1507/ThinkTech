import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thinktech.example.edu"),
  title: {
    default: "ThinkTech | STEM Orator Society",
    template: "%s | ThinkTech",
  },
  description:
    "ThinkTech is the STEM Orator Society of the Faculty of Engineering and Technology, helping students communicate ideas, think critically, and lead with confidence.",
  openGraph: {
    title: "ThinkTech | Think. Speak. Lead.",
    description:
      "A premium communication society for engineering students turning ideas into influence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
