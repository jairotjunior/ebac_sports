import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favorito: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favorito: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favorito.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.favorito.filter((p) => p.id !== produto.id)
        state.favorito.push(favoritosSemProduto)
      } else {
        state.favorito.push([...favorito, produto])
      }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
