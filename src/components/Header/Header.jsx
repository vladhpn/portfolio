import styles from './styles.module.scss'
function Header(){
    return(
        <header className={styles.header}>
            <nav>
            <ul className={styles.list}>
                <li className={styles.items}>Home</li>
                <li className={styles.items}>About me</li>
                <li className={styles.items}>Skills</li>
                <li className={styles.items}>Portfolio</li>
                <li className={styles.items}>Contacts</li>
            </ul>
             </nav>
         
        </header>
    )
}

export default Header