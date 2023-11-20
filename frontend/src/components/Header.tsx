import { Outlet, Link } from "react-router-dom";
import { CalendarRange, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import JoinPlayButton from "./events/JoinPlayButton";
import { PlayClient } from "@/class/IPlay";
import { EventApiClient } from '@/gateway/EventApiClient';
import {useEffect, useState} from "react";
import {PlayerDto} from "@/class/dto/PlayerDto";
import {EventDTO} from "@/class/dto/EventDTO";
import {PlayerWithActiveEventDto} from "@/class/dto/PlayerWithActiveEventDto";
const Header = () => {
  const [activePlayData, setActivePlayData] = useState<PlayerWithActiveEventDto | null>(null);
  const location = useLocation();

  const playActive = location.pathname.includes("play");
  const eventClient = new EventApiClient();
  const userId = 1;

  useEffect(() => {
    eventClient.getActiveEvent(userId)
        .then(data => {
          setActivePlayData(data)
        })
        .catch(error => {
          console.error('Error fetching player data:', error);
          // Handle error (e.g., set error state, show error message)
        });
  }, []); // Empty dependency array to run only on mount

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
            {
              activePlayData&&<JoinPlayButton onJoinPlay={activePlayData.id}/>
            }
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
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
