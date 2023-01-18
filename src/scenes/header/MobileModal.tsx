import {XMarkIcon } from "@heroicons/react/24/solid";
import Link from "@/scenes/header/Link";
type Props = {
  setIsMenuToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileModal({ setIsMenuToggled }: Props) {
  return (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-lg">
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled((state) => !state)}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>
      {/* MENU ITEMS */}
      <nav className="ml-[33%] flex flex-col gap-10 text-2xl">
        <Link page="Home" />
        <Link page="Benefits" />
        <Link page="Our Careers" />
        <Link page="Contact Us" />
      </nav>
    </div>
  );
}

export default MobileModal;
