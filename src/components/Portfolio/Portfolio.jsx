import { useState} from 'react'
// import Paginations from '../Paginations/Paginations'
import MyPortfolio from './MyPortfolio'
import AppPagination from '../AppPagination'
import styles from './styles.module.scss'

function Portfolio(){

    const portfolio = [{
        id: 1,
        logo: 'slim-mom',
        title: 'Slim Mom',
        link: 'https://slim-mom-app.netlify.app/'
    },
    {
        id: 2,
        logo: 'movies',
        title: 'Movies',
        link: 'https://vldhpn-goit-react-hw-04-movies.netlify.app/'
    },
    {
        id: 3,
        logo: 'phonebook',
        title: 'PhoneBook',
        link: 'https://vladhpn-goit-react-hw-9.netlify.app/contacts'
    },
    {
        id: 4,
        logo: 'images-finder',
        title: 'Images',
        link: 'https://vladhpn.github.io/goit-react-hw-03-image-finder/'
    },
    {
        id: 5,
        logo: 'timer',
        title: 'Timer',
        link: 'https://vladhpn.github.io/goit-js-hw-11-timer/'
    },
    {
        id: 6,
        logo: 'webstudio',
        title: 'WebStudio',
        link: 'https://vladhpn.github.io/goit-markup-hw-08/'
    },
    {
        id: 7,
        logo: 'ice-cream',
        title: 'Ice Cream',
        link: 'https://kilinich-v.github.io/goit-IceCream-cp/#contacts'
    },
    {
        id: 8,
        logo: 'food-server',
        title: 'Food Server',
        link: 'https://vladhpn.github.io/goit-js-hw-10-food-service/'
    },
    {
        id: 9,
        logo: 'oku',
        title: 'Oku',
        link: 'https://vladhpn.github.io/oku-books/'
    }
]

    const [examples, setExamples] = useState(portfolio)
    const [currentPage, setCurrentPage] = useState(1)
    const [portfolioPerPage] = useState(1)

    const lastExamplesIndex = currentPage * portfolioPerPage
    const firstExamplesIndex = lastExamplesIndex - portfolioPerPage
    const currentExamplesIndex = examples.slice(firstExamplesIndex,lastExamplesIndex )

    const paginat = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)
    return(
        <section id='portfolio'>
            <h3 className={styles.title}>
                Portfolio
            </h3>
            <MyPortfolio portfolio={currentExamplesIndex}/>

                <AppPagination totalExamples={examples.length} 
                paginat={paginat} 
                setCurrentPage={setCurrentPage}
                prevPage={prevPage}/>
        </section>
    )
}

export default Portfolio


        //  {/* Pagination bootstrap */}
        //    {/* <div className={styles.pagin}>
                
        //             <Paginations portfolioPerPage={portfolioPerPage}
        //      totalExamples={examples.length}
        //      paginat={paginat} 
        //      nextPage={nextPage}
        //      prevPage={prevPage}
        //      />
               
        //         </div> */}