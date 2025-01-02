import type { Metadata } from "next";
import localFont from "next/font/local";





export const metadata: Metadata = {
  title: "Nextflix",
  description: "Binged watch your favorite movies today!",
  icons: {
    icon: "/nextflix-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased dark`}
      >
        {children}
      </body>
      
    </html>
    </>
  );
}
