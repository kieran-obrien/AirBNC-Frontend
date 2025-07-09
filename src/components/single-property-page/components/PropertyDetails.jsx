export default function PropertyDetails({ propertyDetails }) {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mx-5 mt-3">
        {propertyDetails.property_name}
      </h1>
      <h3 className="text-lg text-center font-semibold text-secondary mx-5 mb-5">
        {propertyDetails.location}
      </h3>
      <div className="m-5 p-10 grid grid-cols-3 items-center text-3xl border-base-200 border-2 rounded-4xl shadow-lg">
        <p className="justify-self-center">
          £{propertyDetails.price_per_night}
          <span className="text-sm">/night</span>
        </p>
        <hr className="rotate-90 w-16 text-gray-300 justify-self-center"></hr>
        <p className="justify-self-center">
          <i className="ri-heart-2-fill font-light text-secondary mr-2"></i>
          {propertyDetails.favourite_count}
        </p>
      </div>
      <p className="mx-16 text-center text-md text-gray-500">
        {propertyDetails.description}
      </p>
      <div className="m-5 p-8 grid grid-cols-3 items-center text-3xl border-base-200 border-2 rounded-4xl shadow-lg">
        <div className="flex flex-col justify-center text-center">
          <p className="text-sm">Hosted By</p>
          <p className="justify-self-center">{propertyDetails.host}</p>
        </div>
        <hr className="rotate-90 w-16 text-gray-300 justify-self-center"></hr>
        <div className="avatar">
          <div className="mask mask-squircle w-32">
            <img src={propertyDetails.host_avatar} />
          </div>
        </div>
      </div>
      <div className="drawer drawer-end overflow-hidden">
        <input
          id="property-images-drawer"
          type="checkbox"
          className="drawer-toggle block"
        />
        <div className="drawer-content"></div>
        <div className="drawer-side z-2">
          <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4 pb-20">
            <label
              htmlFor="property-images-drawer"
              className="btn btn-md hover:text-rose-500 btn-circle mb-2"
            >
              <i className="ri-close-circle-line text-2xl font-light"></i>
            </label>
            {propertyDetails.images?.map((image, i) => {
              return (
                <li key={i} className="my-2">
                  <img
                    src={image}
                    className="border-4 border-secondary-content rounded-lg p-0"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
