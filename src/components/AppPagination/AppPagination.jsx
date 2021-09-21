// import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

function AppPagination ({totalExamples, setCurrentPage, prevPage}){
    const handleChange = (totalExamples) => {
        setCurrentPage(totalExamples)
    }
    return(
        <div>
            <Pagination style={{
                display: 'flex',
                justifyContent: 'center'
            }} count={totalExamples}
            onClick={(e)=> handleChange(e.target.textContent)}
             hideNextButton hidePrevButton
            
            />
        </div>
    )
}

export default AppPagination