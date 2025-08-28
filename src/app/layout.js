import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taskify",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* header */}
          <main>  {children} </main>
          <footer className="">
            <p>Made with by Sanjay Rai</p>
          </footer>
         
        </ThemeProvider>
      </body>
    </html>
  );
}
