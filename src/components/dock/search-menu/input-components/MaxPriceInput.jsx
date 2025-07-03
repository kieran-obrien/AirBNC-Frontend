export default function MaxPriceInput({ filterValues, setFilterValues }) {
  return (
    <div>
      <p className="font-bold text-xs">Max Price</p>
      <input
        type="range"
        min={0}
        max="500"
        value={filterValues.maxPrice}
        onChange={(e) =>
          setFilterValues((prev) => ({
            ...prev,
            maxPrice: e.target.value,
          }))
        }
        className="range range-secondary"
      />
    </div>
  );
}
