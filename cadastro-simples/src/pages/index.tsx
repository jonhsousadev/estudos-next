import { useState } from "react";
import Botao from "../components/Layout/Botao";
import Formulario from "../components/Layout/Formulario";
import Layout from "../components/Layout/Layout";
import Tabela from "../components/Layout/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente('Ana',29,'1'),
    new Cliente('Jonh',33,'2')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(`Cliente ${cliente.nome} selecionado!`)
    setCliente(cliente)
    setVisivel('form')
  }
  
  function clienteExcluido(cliente: Cliente) {
    console.log(`Cliente ${cliente.nome} excluído!`)
  }

  function novoCliente() {
    console.log(cliente)
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to to-blue-600">
      <Layout titulo="Cadastro Simples">
        { visivel === 'tabela' ? (
          <>
            <Botao onClick={novoCliente} cor="green" className="mb-4">Novo Cliente</Botao>
            <Tabela clientes={clientes} clienteSelecionado = {clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario clienteMudou={salvarCliente} cancelar={() => setVisivel('tabela')} cliente={cliente}></Formulario>
        )}
      </Layout>
    </div>
  )
}