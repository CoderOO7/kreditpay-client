import React from 'react';
import ReactPaginate from 'react-paginate';
import './index.css';

function Pagination({
  previousLabel = 'prev',
  nextLabel = 'next',
  breakLabel = '...',
  breakClassName = 'page page--break-me',
  breakLinkClassName = 'page__link page__link--beak-me',
  activeClassName = 'page--active',
  activeLinkClassName = 'page__link--active',
  containerClassName = 'pagination',
  pageClassName = 'page',
  pageLinkClassName = 'page__link',
  nextClassName = 'page page--next',
  nextLinkClassName = 'page__link page__link--next',
  previousClassName = 'page page--prev',
  previousLinkClassName = 'page__link page__link--prev',
  ...restProps
}) {
  return (
    <ReactPaginate
      previousLabel={previousLabel}
      nextLabel={nextLabel}
      breakLabel={breakLabel}
      breakClassName={breakClassName}
      breakLinkClassName={breakLinkClassName}
      activeClassName={activeClassName}
      activeLinkClassName={activeLinkClassName}
      containerClassName={containerClassName}
      pageClassName={pageClassName}
      pageLinkClassName={pageLinkClassName}
      nextClassName={nextClassName}
      nextLinkClassName={nextLinkClassName}
      previousClassName={previousClassName}
      previousLinkClassName={previousLinkClassName}
      {...restProps}
    />
  );
}

export default Pagination;
