import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Line from "../Line";
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
    <div className="h-full bg-base-100 flex-col align-center justify-center">
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
      <label htmlFor="property-images-drawer">
        <img
          src={propertyDetails.images?.[0] || null}
          className="w-screen cursor-pointer"
          alt="Property image"
        />
      </label>
      <div className="p-2 z-2 rounded-4xl bg-base-100 -mt-8 pb-20 relative">
        <h1 className="text-2xl text-center font-bold mx-5 mt-3">
          {propertyDetails.property_name}
        </h1>
        <h3 className="text-lg text-center font-semibold text-secondary mx-5 mb-5">
          {propertyDetails.location}
        </h3>
        <div className="m-10 grid grid-cols-3 items-center text-3xl">
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
        <div className="m-10 grid grid-cols-3 items-center text-3xl">
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
        <div className="drawer drawer-end">
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
    </div>
  );
}
