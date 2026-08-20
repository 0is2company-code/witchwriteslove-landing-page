import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모태솔로 마녀에게 납치당했더니 우리가 연애소설의 주인공이 되어버렸습니다!?",
  description: "마녀의 연애소설에 강제 빙의된 커플을 위한 만화책풍 마음번역 서비스.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${geistSans.variable} ${geistMono.variable}`}>
    {children}
    <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
  </body></html>;
}

