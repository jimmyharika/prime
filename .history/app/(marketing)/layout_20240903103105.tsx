import { Poppins } from "next/font/google";
import Navbar from "./_components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${poppins.className} flex flex-col min-h-screen`}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
