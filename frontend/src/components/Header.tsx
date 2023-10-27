const Header = () => {
  return (
    <header className="w-screen h-20 flex items-center px-14 justify-between">
      <div className="font-bold text-md">LARPex</div>
      <nav>
        <ul className="flex gap-8">
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Player</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
