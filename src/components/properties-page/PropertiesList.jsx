import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";
import PropertyCardSkeletons from "./PropertyCardSkeletons";
import Line from "../Line";

export default function PropertiesList() {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [propertiesList, setPropertiesList] = useState([]);

  useEffect(() => {
    const minPrice = searchParams.get("minprice");
    const maxPrice = searchParams.get("maxprice");
    const sortBy = searchParams.get("sort");
    const orderBy = searchParams.get("order");

    const params = new URLSearchParams();
    if (minPrice) params.append("minprice", minPrice);
    if (maxPrice) params.append("maxprice", maxPrice);
    if (sortBy) params.append("sort", sortBy);
    if (orderBy) params.append("order", orderBy);

    const queryString = params.toString() ? `?${params.toString()}` : "";

    async function getPropertiesList() {
      try {
        const { data } = await axios.get(
          `https://airbnc-backend.kieranobrien.dev/api/properties${queryString}`
        );
        setPropertiesList(data.properties);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    getPropertiesList();
  }, [searchParams]);

  return isLoading ? (
    <PropertyCardSkeletons />
  ) : propertiesList?.length > 0 ? (
    <div className="grid grid-cols-2 gap-4 p-3 pb-20">
      <div className="col-span-2 flex flex-col items-center">
        <div className="flex gap-1 items-center">
          <i className="ri-home-smile-line font-light text-secondary text-4xl"></i>
          <h1 className="text-secondary text-2xl font-bold">AirBNC</h1>
        </div>
        <Line />
      </div>
      {propertiesList.map((property) => (
        <Link
          key={property.property_id}
          to={`/properties/${property.property_id}`}
        >
          <PropertyCard property={property} />
        </Link>
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center m-20 mt-4">
      <i className="ri-emotion-sad-line font-light text-secondary text-6xl mb-2"></i>
      <p className="text-center font-semibold">
        Oops! Looks like we don't have any homes that match your search!
      </p>
    </div>
  );
}
