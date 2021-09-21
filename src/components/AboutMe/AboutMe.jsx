import styles from './styles.module.scss'
function AboutMe(){
    return(
        <section id='aboutme' className={styles.sect}>
            <h2 className={styles.title}>
                About Me
            </h2>
            <div className={styles.box}>
            <p className={styles.text}>I am looking for career opportunities to improve my current skills and knowledge, 
               making a significant contribution to the company's success. <br />
               As a developer, I have been involved in several projects
             over the past year, three of them were team projects. <br />
              One year of Front-end development experience, namely HTML5 / CSS3, JavaScript,
               React.js and Rest Api. </p>
            </div>
        </section>

    )
}

export default AboutMe