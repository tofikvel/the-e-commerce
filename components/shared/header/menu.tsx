import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetHeader } from "@/components/ui/sheet";

const NavMenu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <Link href="/cart">
          <Button variant="ghost">
            <ShoppingCart /> Cart
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button>
            <UserIcon /> Sign In
          </Button>
        </Link>
      </nav>

      <nav className="md:hidden border">
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            }
          />
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4 px-4">
              <Link href="/cart" className="flex items-center gap-2">
                <Button variant="ghost">
                  <ShoppingCart />
                  Cart
                </Button>
              </Link>
              <Link href="/sign-in" className="flex items-center gap-2">
                <Button>
                  <UserIcon />
                  Sign In
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default NavMenu;
