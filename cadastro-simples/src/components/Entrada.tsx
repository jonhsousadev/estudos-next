interface EntradaProps {
  texto: string
  tipo: 'text' | 'number'
  valor: any
  somenteLeitura?: boolean
  valorAlterado?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className="flex flex-col">
      <label
      className="mb-4"
      htmlFor="">
        {props.texto}
      </label>
      <input 
        onChange={e => props.valorAlterado?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100
          focus:bg-white
          px-4 py-2 mb-5
        `}
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura ?? false}
      />
    </div>
  )
}