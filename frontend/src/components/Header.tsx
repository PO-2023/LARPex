import { Outlet, Link } from "react-router-dom";
import { CalendarRange, Settings, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
const Header = () => {
  const location = useLocation();

  const playActive = location.pathname.includes("play");

  //TODO: Query for active event
  const joinPlay = 12127183;
  return (
    <>
      <header className="w-screen h-20 flex items-center px-3 sm:px-14 justify-between">
        <Link to={`/`}>
          <Logo />
        </Link>
        <nav>
          <ul
            className={cn(
              "flex  sm:gap-2 items-center",
              playActive && "hidden"
            )}
          >
            <Link to={`/play/${joinPlay}`}>
              <Button
                className={cn(
                  "cursor-pointer flex bg-indigo-500 hover:bg-indigo-400 gap-1 "
                )}
              >
                <Gamepad2 />
                <h1 className="hidden sm:block">Dołącz do gry</h1>
              </Button>
            </Link>
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
