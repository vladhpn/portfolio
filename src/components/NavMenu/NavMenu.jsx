import { useState } from 'react'
import NavLinks from '../NavLinks'
import {GrMenu} from 'react-icons/gr'
import {GrClose} from 'react-icons/gr'
import styles from './styles.module.scss'
const NavMenu = () => {
    const [open, setOpen] = useState(false)

    const openMenu = <GrMenu className={styles.menu_button} size={20}
    onClick={()=> setOpen(!open)}/>
    const closeMenu = <GrClose className={styles.menu_button} size={20}
    onClick={()=> setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false)
    return(
        <div className={styles.menu}>
            {open ? closeMenu : openMenu}
            {open &&  <NavLinks isMobile={true}  closeMobileMenu={closeMobileMenu}/>}
           
       </div>
    )
}

export default NavMenu