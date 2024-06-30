import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProdutosQuery } from './store/apiSlice'
import { adicionarAoCarrinho } from './store/cartSlice'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { RootState } from './store'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={(produto) =>
            dispatch(adicionarAoCarrinho(produto))
          }
        />
      </div>
    </>
  )
}

export default App
