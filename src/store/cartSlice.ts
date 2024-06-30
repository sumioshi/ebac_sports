import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.items.find((p) => p.id === produto.id)) {
        state.items.push(produto)
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = cartSlice.actions
export default cartSlice.reducer
