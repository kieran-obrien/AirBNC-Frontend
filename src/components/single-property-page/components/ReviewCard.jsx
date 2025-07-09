import Line from "../../Line";
import Rating from "./Rating";

export default function ReviewCard({ review }) {
  console.log(review);
  return (
    <div className="my-5 m-5 p-4 border-base-200 border-2 rounded-4xl shadow-lg">
      <Rating rating={review.rating} id={review.review_id} />
      <div className="chat chat-start ml-5">
        <div className="chat-image avatar">
          <div className="w-14 rounded-full">
            <img alt="Guest Avatar" src={review.guest_avatar} />
          </div>
        </div>
        <div className="chat-bubble">{review.comment}</div>
      </div>
      <div className="flex flex-col justify-start ml-5 text-xs text-gray-500">
        <p>{review.guest}</p>
        <p>{review.created_at.split("T")[0]}</p>
      </div>
    </div>
  );
}
