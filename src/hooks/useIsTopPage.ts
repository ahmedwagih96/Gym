import { useDispatch } from "react-redux";
import { setSelectedPage, selectPage } from "@/features/selectedPageSlice";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

const useIsTopPage = () => {
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

  return isTopOfPage;
};

export default useIsTopPage;
