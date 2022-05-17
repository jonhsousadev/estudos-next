import Link from 'next/link'
import styles from './Navegador.module.css'
export default function Navegador(props) {
  return (
    <Link href={props.path}>
      <div className={styles.navegador}>
        {props.label}
      </div>
    </Link>
  )
}