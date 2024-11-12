import localFont from "next/font/local";
import "./styles/global.css"
import "aos/dist/aos.css"; 
import Aos from "aos"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
