import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

// JetBrains Font
const jetBrain = localFont({
  src: "../fonts/JetBrainsMono-Regular.woff2",
});

export const metadata = {
  title: "Pavel Belokon",
  description: "personal website of pavel belokon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrain.className}>
        <div className="wrapper">
          <Header />
          <section className="middle">
            <aside />
            <main className="box"> {children}</main>
            <aside />
          </section>
          <footer className="box">Footer</footer>
        </div>
      </body>
    </html>
  );
}
