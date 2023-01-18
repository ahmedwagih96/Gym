import { configureStore } from "@reduxjs/toolkit";
import selectedPageReducer from "@/features/selectedPageSlice";

export const store = configureStore({
  reducer: {
    page: selectedPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
