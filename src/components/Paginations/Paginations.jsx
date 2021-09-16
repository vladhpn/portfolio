import { Pagination } from "react-bootstrap"
function Paginations({portfolioPerPage, totalExamples, paginat, prevPage, nextPage}){ 
    const pageNumbers = []

    for(let i = 1; i <= (totalExamples / portfolioPerPage); i++){
        pageNumbers.push(i)
    }
    
    return(

        <Pagination>
                    <Pagination.Prev onClick={prevPage}/>
         <div>
             <ul className="pagination justify-content-center">
                 {
                     pageNumbers.map( number => (
                         <li key={number} className="page-item"> <span className="page-link" onClick={() => paginat(number) }> {number}</span>
                         </li>
                     ))
                 }
             </ul>
    
         </div>
         <Pagination.Next onClick={nextPage}/>
                </Pagination>
    )
}

export default Paginations