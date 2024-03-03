export const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-4 text-sm font-bold w-full mb-10 mt-[-3rem] lg:mt-10">
      <a className="">1</a>
      <a className="pagination-link">2</a>
      <a className="pagination-link">3</a>
      <a className="pagination-link">4</a>
      <a className="pagination-link">5</a>
      <div className="px-3">...</div>
      <a className="pagination-link">20</a>
      <a className="pagination-link">
        <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4">
          <path
            d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  );
};
