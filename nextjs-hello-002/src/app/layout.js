import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <h1>여우</h1>
        </header>
        {children}
        <footer>
          <address>CopyRight &copy; whm0304@naver.com</address>
        </footer>
      </body>
    </html>
  );
}