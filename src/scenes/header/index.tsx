import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
//Utils
import Logo from "@/assets/Logo.png";
//Components
import Link from "@/scenes/header/Link";
import ActionButton from "@/shared/ActionButton";
//Custom Hook
import useMediaQuery from "@/hooks/useMediaQuery";
//TypeScript TYPE
import { SelectedPage } from "@/shared/types";
//Redux
import { useDispatch } from "react-redux";
import { setSelectedPage } from "@/features/selectedPageSlice";
import MobileModal from "./MobileModal";

function Navbar() {
  const dispatch = useDispatch();

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        dispatch(setSelectedPage(SelectedPage.Home));
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Tailwind Shortcut
  const flexBetween = "flex items-center justify-between";
  //Active Navbar Link
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  //Media Query ;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  //Header background style while scrolling
  const headerBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <header
      className={`${flexBetween} ${headerBackground} fixed top-0 z-30 w-full py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE */}
          <img src={Logo} alt="Logo" />

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <nav className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" />
                <Link page="Benefits" />
                <Link page="Our Careers" />
                <Link page="Contact Us" />
              </nav>
              <div className={`${flexBetween} gap-8`}>
                <ActionButton>Sign In</ActionButton>
                <p>Become a Member</p>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <MobileModal setIsMenuToggled={setIsMenuToggled} />
      )}
    </header>
  );
}

export default Navbar;
