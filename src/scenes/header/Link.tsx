import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectPage, setSelectedPage } from "@/features/selectedPageSlice";

type Props = {
  page: string;
};

function Link({ page }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const dispatch = useDispatch();
  const selectedPage = useSelector(selectPage);
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } duration-500 hover:text-primary-300`}
      onClick={() => dispatch(setSelectedPage(lowerCasePage))}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
