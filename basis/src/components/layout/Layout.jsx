import Navegador from '../navegador/Navegador'
import styles from './Layout.module.css'
export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h2>{props.titulo ?? 'Valor padrão'}</h2>
        <Navegador path="/" label="Home"/>
      </div>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}