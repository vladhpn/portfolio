import MySkills from './MySkills/MySkills'
import styles from './styles.module.scss'

const skills  = [{
    id: 1,
    logo: 'js-logo',
    title: 'Java Script',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    
},
{
    id: 2,
    logo: 'html5-logo',
    title: 'HTML5',
    link: 'https://en.wikipedia.org/wiki/HTML5'
   
},
{
    id: 3,
    logo: 'css-logo',
    title: 'CSS3',
    link: 'https://en.wikipedia.org/wiki/CSS'
  
},
{
    id: 4,
    logo: 'sass-icon',
    title: 'Sass',
    link: 'https://sass-lang.com/'
    
},
{
    id: 5,
    logo: 'react-logo',
    title: 'ReactJs',
    link: 'https://reactjs.org/'
   
},
{
    id: 6,
    logo: 'git-logo',
    title: 'Git',
    link: 'https://git-scm.com/'
  
},
{
    id: 7,
    logo: 'npm-logo',
    title: 'NPM',
    link: 'https://www.npmjs.com/'
    
},
{
    id: 8,
    logo: 'material-ua-logo',
    title: 'MATERIAL-UI',
    link: 'https://material-ui.com/'
   
},
{
    id: 9,
    logo: 'nodejs-logo',
    title: 'NodeJs',
    link: 'https://nodejs.org/en/'
  
},
{
    id: 10,
    logo: 'mongodb-logo',
    title: 'MongoDB',
    link: 'https://www.mongodb.com/'
  
},

]
function Skills(){
    return(
        <section id='skills'>
            <h3 className={styles.title}>Skills</h3>
            <MySkills skills={skills}/>
        </section>
    )
}

export default Skills