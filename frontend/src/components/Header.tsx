import { Outlet, Link } from "react-router-dom";
import { CalendarRange, User, Settings } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";
const Header = () => {
  return (
    <>
      <header className="w-screen h-20 flex items-center px-14 justify-between">
        <Link to={`/`}>
          <Logo />
        </Link>

        <nav>
          <ul className="flex gap-2">
            <Link to={`/events`}>
              <Button variant="ghost" className="cursor-pointer flex gap-2">
                <CalendarRange />
              </Button>
            </Link>
            <Button variant="ghost" className="cursor-pointer flex gap-2">
              <User />
            </Button>
            <Button variant="ghost" className="cursor-pointer flex gap-2">
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
