import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface JoinPlayButtonPros {
  onJoinPlay: number;
}

const JoinPlayButton: React.FC<JoinPlayButtonPros> = ({ onJoinPlay }) => {
  return (
    <Link to={`/play/${onJoinPlay}`}>
      <Button
        className={cn(
          "cursor-pointer flex bg-indigo-500 hover:bg-indigo-400 gap-1 "
        )}
      >
        <Gamepad2 />
        <h1 className="hidden sm:block">Dołącz do gry</h1>
      </Button>
    </Link>
  );
};

export default JoinPlayButton;
