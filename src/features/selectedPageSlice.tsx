import { SelectedPage } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

type StateType = {
  page: SelectedPage;
};

const initialState: StateType ={
  page: SelectedPage.Home
}

export const selectedPageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<SelectedPage>) => {
      state.page = action.payload;
    },
  },
});

export const { setSelectedPage } = selectedPageSlice.actions;

export const selectPage = (state: RootState) => state.page.page;

export default selectedPageSlice.reducer;
