import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productCard";
import { addItem } from "../../app/features/cart";

function Items({ currentItems }) {
  const dispatch = useDispatch();
  return (
    <div className="container-md my-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
      {currentItems &&
        currentItems.map((item, i) => (
          <ProductCard
            key={i}
            item={item}
            onAddToCart={() => dispatch(addItem(item))}
          />
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const { productItems } = useSelector((state) => state.product);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productItems.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center"
        pageLinkClassName="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
        previousClassName="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
        nextClassName="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
      />
    </>
  );
}

export default PaginatedItems;
