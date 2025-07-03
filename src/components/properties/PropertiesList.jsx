import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import PropertyCard from "./PropertyCard";

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

  function handlePropertyClick() {
    console.log("Property selected!");
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-3 mb-20">
      {propertiesList.map((property) => {
        return (
          <PropertyCard
            key={property.property_id}
            property={property}
            handlePropertyClick={handlePropertyClick}
          />
        );
      })}
    </div>
  );
}
