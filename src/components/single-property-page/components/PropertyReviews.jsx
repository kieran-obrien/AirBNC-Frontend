import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import AvgRating from "./AvgRating";
import Line from "../../Line";

export default function PropertyReviews({ propertyId }) {
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(null);

  useEffect(() => {
    const getPropertyReviews = async (propertyId) => {
      try {
        const {
          data: { reviews, average_rating: avgRating },
        } = await axios.get(
          `https://airbnc-backend.kieranobrien.dev/api/properties/${propertyId}/reviews`
        );
        console.log(reviews, avgRating);
        setReviews(reviews);
        setAvgRating(avgRating);
        console.log("Success!");
      } catch (error) {
        console.log(error);
      }
    };

    getPropertyReviews(propertyId);
  }, [propertyId]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-semibold text-lg">Reviews</h2>
      <AvgRating avgRating={avgRating} />
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review.review_id}
            review={review}
            avgRating={avgRating}
          />
        );
      })}
    </div>
  );
}
