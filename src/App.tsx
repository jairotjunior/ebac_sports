import { Provider } from 'react-redux'

import { store } from './store'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './services/api'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos } = useGetProdutosQuery()

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        {produtos && <Produtos produtos={produtos} />}
      </div>
    </Provider>
  )
}

export default App
