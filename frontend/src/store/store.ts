import { configureStore } from '@reduxjs/toolkit';
import product from '@/store/features/product-slice';

export const store = configureStore({
  reducer: {
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
