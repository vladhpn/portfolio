import styles from './styles.module.scss'
function Hero(){
    return(
        <section>
            <div className={styles.box}>
            <h1 className={styles.title}>Vladyslav  <br/> Hapon</h1>
            <span className={styles.text}>Front-end Developer | JavaScript | React <br/> 26 years old, Kyiv</span>
            </div>
           <img className={styles.image} alt='myphoto' src={require(`../../res/images/photo1.jpeg`).default}/>  
        </section>
    )
}
export default Hero;