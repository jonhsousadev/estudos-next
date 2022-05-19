import Botao from "../components/Layout/Botao";
import Layout from "../components/Layout/Layout";
import Tabela from "../components/Layout/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana',29,'1'),
    new Cliente('Jonh',33,'2')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(`Cliente ${cliente.nome} selecionado!`)
  }
  
  function clienteExcluido(cliente: Cliente) {
    console.log(`Cliente ${cliente.nome} excluído!`)
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to to-blue-600">
      <Layout titulo="Cadastro Simples">
        <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        <Tabela clientes={clientes} clienteSelecionado = {clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}