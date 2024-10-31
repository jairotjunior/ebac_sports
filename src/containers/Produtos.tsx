import { useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { RootReducer } from '../store'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favoritar.itens
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const IdsDosFavoritos = itensFavoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produto.id)
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
