import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage, selectPage } from "@/features/selectedPageSlice";
import { useCallback } from "react";
import { SelectedPage } from "@/shared/types";
const useStore = () => {
  const dispatch = useDispatch();
  const selectedPage = useSelector(selectPage);
  const setPage = useCallback(
    (page: SelectedPage) => dispatch(setSelectedPage(page)),
    [dispatch]
  );

  return { setPage, selectedPage };
};

export default useStore;
