export default function PropertyCard({ property, handlePropertyClick }) {
  return (
    <div
      className="bg-base-100 shadow-md rounded-xl flex-col align-center justify-center relative"
      onClick={handlePropertyClick}
    >
      <button className="btn btn-sm hover:text-rose-500 btn-circle absolute top-8 sm:top-4 right-5 z-10">
        <i className="ri-heart-2-line text-lg font-light"></i>
      </button>
      <figure className="flex justify-center">
        <img
          src={property.image}
          alt="Movie"
          className="w-40 h-40 rounded-sm mt-2 mask mask-squircle"
        />
      </figure>
      <div className="p-2">
        <h1 className="text-sm font-bold">{property.property_name}</h1>
        <p className="text-xs">{property.location}</p>
        <p className="text-xs">
          £{property.price_per_night}/night{" · "}
          <span>
            <i className="ri-heart-2-fill text-xs text-rose-500"> </i>
            {property.popularity}
          </span>
        </p>
      </div>
    </div>
  );
}


