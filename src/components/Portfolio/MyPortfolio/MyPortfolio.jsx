import styles from './styles.module.scss'
function MyPortfolio({portfolio}){

    return(
             <ul className={styles.list}>
            {portfolio.map(({id, logo, title, link}) => <li key={id} className={styles.items}>  
            <a href={link} > <span className={styles.text}>{title} </span>  <img className={styles.image} src={require(`../../../res/images/${logo}.png`).default} alt={title} /> 
            </a>
            </li> )}
        </ul>
    
    )
}

export default MyPortfolio