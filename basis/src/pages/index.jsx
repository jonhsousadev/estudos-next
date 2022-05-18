import Cabecalho from "../components/cabecalho/Cabecalho"
import Navegador from "../components/navegador/Navegador"
import Layout from "../components/layout/Layout"
export default function Inicio() {
  let title = "Esse é o nosso cabeçalho" 
  return (
      <Layout titulo="Página Inicial">
        <Cabecalho title={title}/>
        <Navegador path="/navecacao1" label="Navegacao 1" color="darkcyan"/>
      </Layout>
  )
}