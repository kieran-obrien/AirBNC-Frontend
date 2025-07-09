export default function TopNavButtons() {
  return (
    <div>
      <button
        className="btn btn-md hover:text-rose-500 btn-circle absolute top-4 left-4 z-1"
        onClick={() => window.history.back()}
      >
        <i className="ri-arrow-go-back-line text-xl font-light text-secondary"></i>
      </button>
      <button className="btn btn-md hover:text-rose-500 btn-circle absolute top-4 right-4 z-1">
        <i className="ri-heart-2-line text-2xl font-light text-secondary"></i>
      </button>
      <button className="btn btn-md hover:text-rose-500 btn-circle absolute top-4 right-16 z-1">
        <i className="ri-share-2-line text-2xl font-light text-secondary"></i>
      </button>
      <label
        htmlFor="property-images-drawer"
        className="absolute z-1 btn btn-md btn-circle top-4 right-28 z-1"
      >
        <i className="ri-image-circle-fill text-2xl font-light text-secondary"></i>
      </label>
    </div>
  );
}
