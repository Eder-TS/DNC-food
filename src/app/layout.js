import { Raleway} from "next/font/google";
import NavBar from "@/components/NavBar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "DNC foods",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
