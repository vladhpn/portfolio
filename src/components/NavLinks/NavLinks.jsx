import styles from './styles.module.scss'
import { motion } from 'framer-motion'
const NavLinks = ({isMobile, closeMobileMenu}) => {
    const animateFrom = {opacity: 0, y: -40 }
    const animateTo = {opacity: 1, y: 0 }

    return(
        <nav className={styles.navigation}>
        <ul className={styles.list}>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
            onClick={() => isMobile && closeMobileMenu()} className={styles.items}>
                <a href='#home' ><span className={styles.text}> Home </span> </a>
                </motion.li>
            <motion.li  
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
            onClick={() => isMobile && closeMobileMenu()} className={styles.items}>
                 <a href='#aboutme' ><span className={styles.text}> About me </span> </a>
                 </motion.li>
            <motion.li  
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
            onClick={() => isMobile && closeMobileMenu()} className={styles.items}>
                <a href='#skills' ><span className={styles.text}> Skills </span> </a>
                </motion.li>
            <motion.li  
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
            onClick={() => isMobile && closeMobileMenu()} className={styles.items}>
                <a href='#portfolio' ><span className={styles.text}> Portfolio </span> </a>
                </motion.li>
            <motion.li  
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
            onClick={() => isMobile && closeMobileMenu()} className={styles.items}>
                <a  href='#contacts'  data-content="Link Hover"><span className={styles.text}> Contacts </span> </a>
                </motion.li>
        </ul>
         </nav>
    )

}

export default NavLinks