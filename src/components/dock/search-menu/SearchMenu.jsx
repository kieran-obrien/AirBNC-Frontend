import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MinPriceInput from "./input-components/MinPriceInput";
import MaxPriceInput from "./input-components/MaxPriceInput";
import Line from "../../Line";

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

  useEffect(() => {
    setFilterValues({
      minPrice,
      maxPrice,
      sort,
      order,
    });
  }, [searchParams]);

  return (
    <nav className="dropdown dropdown-top h-full group">
      <button
        tabIndex={0}
        role="button"
        className="btn btn-xl btn-ghost h-full flex flex-col justify-center gap-0 font-light group-focus-within:text-secondary"
      >
        <i className="ri-menu-search-line text-3xl"></i>
        <span className="text-xs">Search</span>
      </button>
      <section
        tabIndex={0}
        className="dropdown-content menu bg-base-200 z-1 w-80 p-0 m-0 rounded-t-xl border-3 border-b-0 border-secondary-content"
      >
        <section className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="filter" id="sort">
              <input
                className="btn btn-secondary filter-reset"
                type="radio"
                name="sort"
                aria-label="All"
                checked={filterValues.sort === ""}
                onChange={() =>
                  setFilterValues((prev) => ({ ...prev, sort: "" }))
                }
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="sort"
                aria-label="Popularity"
                checked={filterValues.sort === "popularity"}
                onChange={() =>
                  setFilterValues((prev) => ({ ...prev, sort: "popularity" }))
                }
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="sort"
                aria-label="Price"
                checked={filterValues.sort === "price_per_night"}
                onChange={() =>
                  setFilterValues((prev) => ({
                    ...prev,
                    sort: "price_per_night",
                  }))
                }
              />
            </div>

            <div className="filter" id="order">
              <input
                className="btn btn-secondary filter-reset"
                type="radio"
                name="order"
                aria-label="All"
                checked={filterValues.order === ""}
                onChange={() =>
                  setFilterValues((prev) => ({ ...prev, order: "" }))
                }
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="order"
                aria-label="Ascending"
                checked={filterValues.order === "asc"}
                onChange={() =>
                  setFilterValues((prev) => ({ ...prev, order: "asc" }))
                }
              />
              <input
                className="btn btn-secondary"
                type="radio"
                name="order"
                aria-label="Descending"
                checked={filterValues.order === "desc"}
                onChange={() =>
                  setFilterValues((prev) => ({ ...prev, order: "desc" }))
                }
              />
            </div>
            <Line />

            <MinPriceInput
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />

            <MaxPriceInput
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />

            <Line />

            <div className="flex justify-center mt-5">
              <button className="btn btn-sm w-1/2 btn-secondary">Filter</button>
            </div>
          </form>
        </section>
      </section>
    </nav>
  );
}
