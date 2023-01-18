import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
//Redux
import { useDispatch } from "react-redux";
import { setSelectedPage } from "@/features/selectedPageSlice";

type Props = {
  children: React.ReactNode;
};

function ActionButton({ children }: Props) {
  const dispatch = useDispatch();
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 duration-300 hover:bg-primary-500 hover:text-white"
      onClick={() => dispatch(setSelectedPage(SelectedPage.ContactUs))}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
