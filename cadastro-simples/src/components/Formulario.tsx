import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import React, {useState} from 'react'
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelar?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null
  const [nome,setNome] = useState(props.cliente?.nome ?? '')
  const [idade,setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
        <Entrada texto="Codigo" tipo="text" somenteLeitura valor={id} />
      ) : false}
      <Entrada valorAlterado={setNome} texto="Nome" tipo="text" valor={nome} />
      <Entrada valorAlterado={setIdade} texto="Idade" tipo="number" valor={idade} />
      <div className="flex justify-end gap-2 mt-8">
        <Botao cor='blue'
        onClick={() => props.clienteMudou?.(new Cliente(nome,idade,id))}>{id ? 'Alterar' : 'Salvar'}</Botao>
        <Botao onClick={props.cancelar}>Cancelar</Botao>
      </div>
    </div>
  )
}

function setState(arg0: string): { nome: any; setNome: any; }
{
  throw new Error("Function not implemented.");
}
