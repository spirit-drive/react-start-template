import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
    },
});

export const { addItem, removeItem, setCart } = cartSlice.actions;
export default cartSlice.reducer;