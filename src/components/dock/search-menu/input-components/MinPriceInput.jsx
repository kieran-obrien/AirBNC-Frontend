export default function MinPriceInput({ filterValues, setFilterValues }) {
  return (
    <div>
      <p className="font-bold text-xs">Min Price</p>
      <input
        type="range"
        min={0}
        max="500"
        value={filterValues.minPrice}
        onChange={(e) =>
          setFilterValues((prev) => ({
            ...prev,
            minPrice: e.target.value,
          }))
        }
        className="range range-secondary"
      />
    </div>
  );
}
