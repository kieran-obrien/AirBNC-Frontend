import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Line from "../Line";
import { Link } from "react-router-dom";
import axios from "axios";
import TopNavButtons from "./components/TopNavButtons";
import HeadImage from "./components/HeadImage";
import PropertyDetails from "./components/PropertyDetails";
import PropertyReviews from "./components/PropertyReviews";
import SinglePropertyPageSkeleton from "./SinglePropertyPageSkeleton";

export default function SinglePropertyPage() {
  const { id: propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isValidPropertyEndpoint, setIsValidPropertyEndpoint] = useState(null);

  useEffect(() => {
    const getSinglePropertyDetails = async (propertyId) => {
      try {
        const {
          data: { property },
        } = await axios.get(
          `https://airbnc-backend.kieranobrien.dev/api/properties/${propertyId}`
        );
        console.log(property);
        setPropertyDetails(property);
        setIsValidPropertyEndpoint(true);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsValidPropertyEndpoint(false);
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    getSinglePropertyDetails(propertyId);
  }, []);

  return isLoading ? (
    <SinglePropertyPageSkeleton />
  ) : isValidPropertyEndpoint ? (
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
  ) : (
    <div className="h-full flex flex-col items-center justify-center m-20 mt-4">
      <i className="ri-emotion-sad-line font-light text-secondary text-6xl mb-2"></i>
      <p className="text-center font-semibold">
        Oops! Looks like we can't find that property!
      </p>
      <Link to={`/`}>
        <button className="btn btn-md hover:text-rose-500 btn-circle mt-5">
          <i className="ri-home-smile-line text-2xl font-light text-secondary"></i>
        </button>
      </Link>
    </div>
  );
}
