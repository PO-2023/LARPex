import { Outlet, Link } from "react-router-dom";
import { CalendarRange, User, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="w-screen h-20 flex items-center px-3 sm:px-14 justify-between">
        <Link to={`/`}>
          <Logo />
        </Link>
        <nav>
          <ul className="flex sm:gap-2">
            <Link to={`/events`}>
              <Button
                variant="ghost"
                className={cn(
                  "cursor-pointer flex gap-2 hover:text-indigo-400",
                  location.pathname.includes("events") && "text-indigo-400"
                )}
              >
                <CalendarRange />
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="cursor-pointer flex hover:text-indigo-400"
            >
              <User />
            </Button>
            <Button
              variant="ghost"
              className="cursor-pointer flex hover:text-indigo-400"
            >
              <Settings />
            </Button>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
