import { useNavigate } from "react-router";
import { useState } from "react";
import { useSearchParams } from "react-router";

export default function SearchMenu() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterInputs = Array.from(e.target.getElementsByTagName("input"));
    const popularity = filterInputs[1].checked;
    const ppn = filterInputs[2].checked;
    const asc = filterInputs[4].checked;
    const desc = filterInputs[5].checked;
    const sortByOptions = [popularity, ppn];
    const orderByOptions = [asc, desc];
    let sortBy = sortByOptions.findIndex((option) => option === true);
    switch (sortBy) {
      case 0:
        sortBy = "popularity";
        break;

      case 1:
        sortBy = "price_per_night";
        break;

      default:
        sortBy = undefined;
        break;
    }
    let orderBy = orderByOptions.findIndex((option) => option === true);
    switch (orderBy) {
      case 0:
        orderBy = "asc";
        break;

      case 1:
        orderBy = "desc";
        break;

      default:
        orderBy = undefined;
        break;
    }
    const minPrice = filterInputs[6].value;
    const maxPrice = filterInputs[7].value;
    setFilterValues({ minPrice, maxPrice, sortBy, orderBy });
    const params = new URLSearchParams();
    params.set("minprice", minPrice);
    params.set("maxprice", maxPrice);
    if (sortBy) params.set("sort", sortBy);
    if (orderBy) params.set("order", orderBy);
    navigate(`/properties?${params.toString()}`);
  };

  const [searchParams] = useSearchParams();
  const minPrice = searchParams.get("minprice") || 0;
  const maxPrice = searchParams.get("maxprice") || 500;
  const sort = searchParams.get("sort") || "popularity";
  const order = searchParams.get("order") || "desc";

  const [filterValues, setFilterValues] = useState({
    minPrice,
    maxPrice,
    sort,
    order,
  });

  return (
    <div className="dropdown dropdown-top h-full group">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
      >
        <i className="ri-menu-search-line text-3xl"></i>
        <span className="text-xs">Search</span>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu bg-base-200 z-1 w-80 p-0 m-0 rounded-t-xl border-3 border-b-0 border-secondary-content"
      >
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="filter" id="sortBy">
              <input
                className="btn btn-secondary filter-reset"
                type="radio"
                name="sortBy"
                aria-label="All"
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="sortBy"
                aria-label="Popularity"
                defaultChecked={
                  filterValues.sort === "popularity" ? true : false
                }
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="sortBy"
                aria-label="Price Per Night"
                defaultChecked={
                  filterValues.sort === "price_per_night" ? true : false
                }
              />
            </div>

            <div className="filter" id="order">
              <input
                className="btn btn-secondary filter-reset"
                type="radio"
                name="order"
                aria-label="All"
                defaultChecked={filterValues.order === "asc" ? true : false}
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="order"
                aria-label="Ascending"
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="order"
                aria-label="Descending"
                defaultChecked={filterValues.order === "desc" ? true : false}
              />
            </div>

            <hr className="text-secondary-content my-3"></hr>

            <div>
              <p className="font-bold text-xs">Min Price</p>
              <input
                type="range"
                min={0}
                max="500"
                defaultValue={filterValues.minPrice}
                className="range range-secondary"
              />
            </div>

            <div>
              <p className="font-bold text-xs">Max Price</p>
              <input
                type="range"
                min={0}
                max="500"
                defaultValue={filterValues.maxPrice}
                className="range range-secondary"
              />
            </div>

            <hr className="text-secondary-content my-3"></hr>

            <div className="flex justify-center mt-5">
              <button className="btn btn-sm w-1/2 btn-secondary">Filter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
