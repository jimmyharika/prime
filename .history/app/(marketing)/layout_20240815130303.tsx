import { Poppins } from 'next/font/google';
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen  ">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
