import Cabecalho from "../components/cabecalho/Cabecalho"
import Link from 'next/link'
export default function Inicio() {
  let title = "Esse é o nosso cabeçalho" 
  return (
      <>
        <Cabecalho title={title}/>
        <Link href="/navecacao1">Navegação 1</Link>
      </>
  )
}