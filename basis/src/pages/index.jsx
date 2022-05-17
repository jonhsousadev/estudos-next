import Cabecalho from "../components/cabecalho/Cabecalho"
import Navegador from "../components/navegador/Navegador"
export default function Inicio() {
  let title = "Esse é o nosso cabeçalho" 
  return (
      <>
        <Cabecalho title={title}/>
        <Navegador path="/navecacao1" label="Navegacao 1" color="darkcyan"/>
      </>
  )
}