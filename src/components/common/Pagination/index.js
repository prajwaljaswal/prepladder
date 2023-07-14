import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

const Pagination = ({ totalItems, itemsPerPage, pageIndex, setpageIndex }) => {
  const [pages, setPages] = useState(Math.ceil(totalItems / itemsPerPage));
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setpageIndex(1);
  }, []);

  useEffect(() => {
    setPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems]);

  const handlePageClick = (e) => {
    setpageIndex(e.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdArrowForwardIos />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={itemsPerPage}
        pageCount={pages}
        previousLabel={<MdArrowBackIos />}
        renderOnZeroPageCount={null}
        currentItems={pageIndex}
        activeClassName="current-page"
        containerClassName="pagination"
        breakClassName="breakClassName"
        pageClassName="pageClassName"
      />
    </div>
  );
};

export default Pagination;
