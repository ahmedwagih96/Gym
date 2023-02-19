import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

//Redux
import useStore from "@/hooks/useStore";

type Props = {
  page: string;
};

function Link({ page }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const { setPage, selectedPage } = useStore();
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } duration-500 hover:text-primary-300`}
      onClick={() => setPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
