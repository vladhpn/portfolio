import styles from './styles.module.scss'
function MyPortfolio({portfolio}){

    return(
        
             <ul className={styles.list}>
            {portfolio.map(({id, logo, title, link}) => <li key={id} className={styles.items}>  
            <a href={link} >  <img className={styles.image} src={require(`../../../res/images/${logo}.png`).default} alt={title} /> 
            <span className={styles.text}>{title} </span></a>

            
            </li> )}
        </ul>
    
    )
}

export default MyPortfolio