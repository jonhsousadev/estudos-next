interface BotaoProps {
  children: any
  className?: string
  cor?: 'green' | 'blue' | 'gray'
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  const colorClasses = props.cor ? `from-${props.cor}-400 to-${props.cor}-700` : `from-gray-400 to-gray-700`
  return (
    <div className="flex justify-end">
      <button
      onClick={props.onClick}
      className={`
        bg-gradient-to-r ${colorClasses}
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}>
        {props.children}
      </button>
    </div>
  )
}