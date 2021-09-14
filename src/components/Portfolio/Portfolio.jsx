import { useState} from 'react'
import Paginations from '../Paginations/Paginations'
import { Pagination } from "react-bootstrap"
import MyPortfolio from './MyPortfolio'



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
    }]

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
        <section>
            <h3 className={styles.title}>
                Portfolio
            </h3>
            <MyPortfolio portfolio={currentExamplesIndex}/>
           
                <Pagination>
                    <Pagination.Prev onClick={prevPage}/>
                    <Paginations portfolioPerPage={portfolioPerPage}
             totalExamples={examples.length}
             paginat={paginat} 
             />
                    <Pagination.Next onClick={nextPage}/>
                </Pagination>
        </section>
    )
}

export default Portfolio