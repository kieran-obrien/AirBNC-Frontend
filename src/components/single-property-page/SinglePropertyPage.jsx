import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Line from "../Line";
import axios from "axios";
import TopNavButtons from "./components/TopNavButtons";
import HeadImage from "./components/HeadImage";
import PropertyDetails from "./components/PropertyDetails";
import PropertyReviews from "./components/PropertyReviews";

export default function SinglePropertyPage() {
  const { id: propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  useEffect(() => {
    const getSinglePropertyDetails = async (propertyId) => {
      const {
        data: { property },
      } = await axios.get(
        `https://airbnc-backend.kieranobrien.dev/api/properties/${propertyId}`
      );
      console.log(property);
      setPropertyDetails(property);
    };
    getSinglePropertyDetails(propertyId);
  }, []);

  return (
    <div className="h-full bg-base-100 flex-col align-center justify-center overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 z-1">
        <TopNavButtons />
      </div>
      <HeadImage propertyDetails={propertyDetails} />
      <div className="p-2 z-2 rounded-4xl bg-base-100 -mt-8 pb-20 relative">
        <PropertyDetails propertyDetails={propertyDetails} />
        <PropertyReviews propertyId={propertyId} />
      </div>
    </div>
  );
}
