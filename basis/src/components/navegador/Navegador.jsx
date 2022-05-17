import Link from 'next/link'
export default function Navegador(props) {
  return (
    <Link href={props.path}>
      {props.label}
    </Link>
  )
}