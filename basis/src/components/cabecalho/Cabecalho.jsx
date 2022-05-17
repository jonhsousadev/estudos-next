import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
    <header className={styles.cabecalho}>
      <h1>{props.title}</h1>
    </header>
  )
}