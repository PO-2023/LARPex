import { Swords } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex font-bold text-xl gap-1 items-center ">
      <Swords />
      <div className="font-inria">
        LARP<span className="text-indigo-400">ex</span>
      </div>
    </div>
  );
};

export default Logo;
