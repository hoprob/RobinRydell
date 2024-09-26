function Header() {
  return (
    <div className="z-50 bg-transparant fixed top-0 backdrop-blur-md h-16 w-full flex justify-center">
      <div className="flex justify-between w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
        <div className="flex items-center text-secondary text-xl font-logo font-bold">
          <span>{"<RobinRydell/>"}</span>
        </div>
        <div className="navmenu text-info flex items-center space-x-4">
          <a href="#">About</a>
          <a href="#">Project</a>
          <a href="#">Resumé</a>
          <a href="#">Contact</a>
        </div>
      </div> 
    </div>
  );
}

export default Header;
