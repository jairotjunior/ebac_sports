import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data } = useGetProdutosQuery()
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        {data && <Produtos produtos={data} />}
      </div>
    </>
  )
}

export default App
