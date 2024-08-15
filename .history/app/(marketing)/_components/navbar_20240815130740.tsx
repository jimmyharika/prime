import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="fixed top-0 min-w-full h-14 px-4 border-b shadow-sm flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="sm:hidden"></div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant="outline" size="sm" asChild>
            <Link href="/sign-in"> Login</Link>
          </Button>
          <Button className=" bg-primary dark:text-white" size="sm" asChild>
            <Link href="/sign-up"> Create Free Bookshelf</Link>
          </Button>
         
        </div>
      </div>
    </div>
  );
};
