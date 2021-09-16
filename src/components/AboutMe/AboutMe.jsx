import styles from './styles.module.scss'
function AboutMe(){
    return(
        <section id='aboutme' className={styles.sect}>
            <h2 className={styles.title}>
                About Me
            </h2>
            <div className={styles.box}>
            <p className={styles.text}>As a developer, I have participated in five projects over the last year; two of them were team projects. I am well versed in front-end development, namely, in HTML5 / CSS3, React library, and Rest Api. I'm looking for a career opportunity to improve my current skills and knowledge while making a significant contribution to the company's success.</p>
            </div>
        </section>

    )
}

export default AboutMe