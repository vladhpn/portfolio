
function Paginations({portfolioPerPage, totalExamples, paginat}){ 
    const pageNumbers = []

    for(let i = 1; i <= (totalExamples / portfolioPerPage); i++){
        pageNumbers.push(i)
    }
    
    return(
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
        
    )
}

export default Paginations