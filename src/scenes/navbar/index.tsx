import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  //Tailwind Shortcut
  const flexBetween = "flex items-center justify-between";
  //Active Navbar Link
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  //Media Query ;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
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
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Home"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Benefits"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Our Careers"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Contact Us"
                />
              </nav>
              <div className={`${flexBetween} gap-8`}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Sign In
                </ActionButton>
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
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-lg">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <nav className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Home"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Benefits"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Our Careers"
            />
            <Link
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Contact Us"
            />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
