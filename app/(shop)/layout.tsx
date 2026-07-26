import Header from "@/components/shared/header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
