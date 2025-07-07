import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SinglePropertyPage() {
  const { id: propertyid } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    const getSinglePropertyDetails = async (propertyid) => {
      const {
        data: { property },
      } = await axios.get(
        `https://airbnc-backend.kieranobrien.dev/api/properties/${propertyid}`
      );
      console.log(property);
      setPropertyDetails(property);
    };
    getSinglePropertyDetails(propertyid);
  }, []);

  return (
    <div className="h-full bg-base-100 shadow-md rounded-xl flex-col align-center justify-center relative">
      <button
        className="btn btn-md hover:text-rose-500 btn-circle absolute top-4 left-4 z-10"
        onClick={() => window.history.back()}
      >
        <i className="ri-arrow-go-back-line text-xl font-light"></i>
      </button>
      <button className="btn btn-md hover:text-rose-500 btn-circle absolute top-4 right-4 z-10">
        <i className="ri-heart-2-line text-2xl font-light"></i>
      </button>
      <button className="btn btn-md hover:text-rose-500 btn-circle absolute top-4 right-16 z-10">
        <i className="ri-share-2-line text-2xl font-light"></i>
      </button>

      <figure className="flex justify-center">
        <img src={propertyDetails.images?.[0] || null} className="w-full" />
      </figure>
      <div className="p-2 z-2 rounded-4xl bg-base-100 -mt-5 h-full relative">
        <h1 className="text-2xl text-center font-bold m-5">
          {propertyDetails.property_name}
        </h1>
        <p className="mx-16 text-center text-md text-gray-500">
          {propertyDetails.description}
        </p>
        <div className="m-10 grid grid-cols-3 items-center text-3xl">
          <p className="justify-self-center">£{propertyDetails.price_per_night}<span className="text-sm">/night</span></p>
          <hr className="rotate-90 w-12 text-secondary-content justify-self-center"></hr>
          <p className="justify-self-center"><i class="ri-heart-2-fill font-light text-secondary mr-2"></i>{propertyDetails.favourite_count}</p>
        </div>
      </div>
    </div>
  );
}
