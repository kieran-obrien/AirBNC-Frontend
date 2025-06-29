import { useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";

export default function PropertiesList({ propertiesList, setPropertiesList }) {
  useEffect(() => {
    async function getPropertiesList() {
      const { data } = await axios.get(
        "https://airbnc-backend.kieranobrien.dev/api/properties"
      );
      setPropertiesList(data.properties);
    }
    getPropertiesList();
  }, [propertiesList]);

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
