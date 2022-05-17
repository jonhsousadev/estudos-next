import Link from 'next/link'
import styles from './Layout.module.css'
export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h2>{props.titulo ?? 'Valor padrão'}</h2>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}