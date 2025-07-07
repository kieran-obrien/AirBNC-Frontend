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
    <div className="bg-base-100 shadow-md rounded-xl flex-col align-center justify-center relative">
      <button className="btn btn-sm hover:text-rose-500 btn-circle absolute top-8 sm:top-4 right-5 z-10">
        <i className="ri-heart-2-line text-lg font-light"></i>
      </button>
      <figure className="flex justify-center">
        <img
          src={propertyDetails.images?.[0] || null}
          className="w-40 h-40 rounded-sm mt-2 mask mask-squircle"
        />
      </figure>
      <div className="p-2">
        <h1 className="text-sm font-bold">{propertyDetails.property_name}</h1>
        <p className="text-xs"></p>
        <p className="text-xs">
          <span>
            <i className="ri-heart-2-fill text-xs text-rose-500"> </i>
          </span>
        </p>
      </div>
    </div>
  );
}
