import { Outlet, Link } from "react-router-dom";
import { CalendarRange, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import JoinPlayButton from "./events/JoinPlayButton";
import { PlayClient } from "@/class/IPlay";
import { EventApiClient } from '@/gateway/EventApiClient';
import {useState} from "react";
import {PlayerDto} from "@/class/dto/PlayerDto";
import {EventDTO} from "@/class/dto/EventDTO";
const Header = () => {
  const [eventData, setEventData] = useState<EventDTO | null>(null);
  const location = useLocation();

  const playActive = location.pathname.includes("play");
  const playClient = new PlayClient();
  const eventClient = new EventApiClient();
  const playId = 1;
  const promise = eventClient.getEvent(playId).then(e => setEventData(e));
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
            {
              eventData&&<JoinPlayButton onJoinPlay={joinPlay}/>
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
