function Navigation() {
  const className =
    "sm:hover:after:bg-orange relative cursor-pointer sm:py-11 text-gray-600 sm:after:absolute sm:after:bottom-0 sm:after:left-0 sm:after:h-[5px] sm:after:w-full";

  return (
    <ul className="sm:flex-row absolute bg-white  flex flex-col items-center gap-5">
      <li className={className}>Collections</li>
      <li className={className}>Men</li>
      <li className={className}>Women</li>
      <li className={className}>About</li>
      <li className={className}>Contact</li>
    </ul>
  );
}

export default Navigation;
