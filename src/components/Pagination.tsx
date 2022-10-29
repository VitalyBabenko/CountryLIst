import { FC } from 'react'
import '../scss/pagination.scss'

interface PaginationProps {
   itemsPerPage: number;
   totalItems: number;
   currentPage: number;
   setCurrentPage: (number: number) => void;
}

const Pagination: FC<PaginationProps> = ({itemsPerPage,totalItems,currentPage,setCurrentPage}) => {
   const pageNumbers = []
   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++ ) {
      pageNumbers.push(i)
   }

  if(totalItems < itemsPerPage) return null
  return (
     <ul className='pagination' >  
         {pageNumbers.map(number => 
            <li
             onClick={() => setCurrentPage(number)}
             className={currentPage === number ? 'active' : '' }
               key={number}
            >
               {number}
            </li>
         )
      }
    </ul>
  )
}

export default Pagination