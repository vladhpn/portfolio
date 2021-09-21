import { ReactSVG } from 'react-svg'
import facebookLogo from '../../res/svg/facebook.svg'
import githubLogo from '../../res/svg/github.svg'
import linkedinLogo from '../../res/svg/linkedin.svg'
import instagramLogo from '../../res/svg/instagram.svg'
import telegramLogo from '../../res/svg/telegram.svg'
import MyCv from '../../res/documents/CV-Hapon-Vladyslav.pdf'
import styles from './styles.module.scss'

function Contacts(){
    return(
        <footer id='contacts' className={styles.footer}>

            <div className={styles.box}>
            <div className={styles.box2}>
            <a href={MyCv} download=''> <span className={styles.cv}>Download CV </span></a>
            </div>
            </div>

            <h3 className={styles.text}>
                Contacts
            </h3>
            
           
            
           <ul className={styles.list}>
               <li className={styles.items_contacts}><a href='https://www.linkedin.com/in/vladyslav-hapon/'>  <ReactSVG src={linkedinLogo} className={styles.logo}/></a></li>
               <li className={styles.items_contacts}><a href='https://github.com/vladhpn'>  <ReactSVG src={githubLogo} className={styles.logo}/></a></li>
               <li className={styles.items_contacts}><a href='https://www.facebook.com/vladhpn'>  <ReactSVG src={facebookLogo} className={styles.logo}/></a></li>
               <li className={styles.items_contacts}><a href='https://www.instagram.com/vladhapon/'>  <ReactSVG src={instagramLogo} className={styles.logo}/></a></li>
               <li className={styles.items_contacts}><a href='https://t.me/vladhpn'>  <ReactSVG src={telegramLogo} className={styles.logo}/></a></li>
           </ul>
           <p className={styles.text_footer}>Like me on <br/>
LinkedIn, GitHub, FaceBook, Instagram</p>
        </footer>
    )
}

export default Contacts