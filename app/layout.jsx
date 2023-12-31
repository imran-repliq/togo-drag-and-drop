"use client";

import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
