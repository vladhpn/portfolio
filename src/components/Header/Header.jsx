import { ReactSVG } from 'react-svg'
import messageLogo from '../../res/svg/message.svg'
import facebookLogo from '../../res/svg/facebook.svg'
import githubLogo from '../../res/svg/github.svg'
import linkedinLogo from '../../res/svg/linkedin.svg'
import instagramLogo from '../../res/svg/instagram.svg'
import telegramLogo from '../../res/svg/telegram.svg'
import styles from './styles.module.scss'
function Header(){
    return(
        <header className={styles.header}>
            <nav>
            <ul className={styles.list}>
                <li className={styles.items}><a href='!#' ><span className={styles.text}> Home </span> </a></li>
                <li className={styles.items}> <a href='#aboutme' ><span className={styles.text}> About me </span> </a></li>
                <li className={styles.items}><a href='#skills' ><span className={styles.text}> Skills </span> </a></li>
                <li className={styles.items}><a href='#portfolio' ><span className={styles.text}> Portfolio </span> </a></li>
                <li className={styles.items}><a  href='#contacts'  data-content="Link Hover"><span className={styles.text}> Contacts </span> </a></li>
            </ul>
             </nav>
             {/* <button className={styles.chat_button}></button> */}

             <div className={styles.dropdown}>
            
             <ul className={styles.dropdown_items}>
                 <li className={styles.lis}>
                 <a className={styles.dropdown_content} href='https://www.linkedin.com/in/vladyslav-hapon/'>  <ReactSVG src={linkedinLogo} className={styles.logo}/></a>
                     </li>
                     <li className={styles.lis}>
                     <a className={styles.dropdown_content} href='https://github.com/vladhpn'>  <ReactSVG src={githubLogo} className={styles.logo}/></a>
                     </li>
                     <li className={styles.lis}>
                     <a className={styles.dropdown_content} href='https://www.facebook.com/vladhpn'>  <ReactSVG src={facebookLogo} className={styles.logo}/></a>
                     </li>
                     <li className={styles.lis}>
                     <a className={styles.dropdown_content} href='https://www.instagram.com/vladhapon/'>  <ReactSVG src={instagramLogo} className={styles.logo}/></a>
                     </li>
                     <li className={styles.lis}>
                     <a className={styles.dropdown_content} href='https://t.me/vladhpn'>  <ReactSVG src={telegramLogo} className={styles.logo}/></a>
                     </li>
               </ul>

               < ReactSVG   src={messageLogo} className={styles.chat_button}/>
            </div>


        </header>
    )
}

export default Header