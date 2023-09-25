import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { GetProductDto, Product } from '@/models/product';
import api from '@/api';

interface ProductStore {
  products: Product[];
  activeCategory: string;
  isLoading: boolean;
  error: string;
}

const initialState: ProductStore = {
  products: [],
  activeCategory: 'all',
  isLoading: false,
  error: '',
};

export const product = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.error = '';
      state.products = action.payload as unknown as Product[];
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = state.error as string;
      state.isLoading = false;
    });
  },
});

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (query: GetProductDto, thunkAPI) => {
    try {
      const result = await api.products.getAll(query, {
        signal: thunkAPI.signal,
        cache: 'no-cache',
        credentials: 'same-origin',
      });

      return result.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('Fetch error');
    }
  }
);

const reducer = product.reducer;
export const { setActiveCategory } = product.actions;
export default reducer;
