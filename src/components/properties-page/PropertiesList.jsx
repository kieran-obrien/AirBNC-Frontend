import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";

export default function PropertiesList() {
  const [searchParams] = useSearchParams();
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
      const { data } = await axios.get(
        `https://airbnc-backend.kieranobrien.dev/api/properties${queryString}`
      );
      setPropertiesList(data.properties);
    }
    getPropertiesList();
  }, [searchParams]);

  return propertiesList?.length > 0 ? (
    <div className="grid grid-cols-2 gap-4 p-3 pb-20">
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
    <div className="flex flex-col items-center justify-center m-20 mt-40">
      <i className="ri-emotion-sad-line font-light text-secondary text-6xl mb-2"></i>
      <p className="text-center font-semibold">
        Oops! Looks like we don't have any homes that match your search!
      </p>
    </div>
  );
}
