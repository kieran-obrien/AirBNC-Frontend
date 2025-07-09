export default function AvgRating({ avgRating }) {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-1 mb-5">
      <p className="text-4xl font-semibold">{avgRating}</p>
      <div className="rating rating-lg rating-half">
        <input
          type="radio"
          name="rating-11"
          className="rating-hidden hidden"
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="0.5 star"
          id="0.5"
          checked={avgRating === 0.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="1 star"
          id="1"
          checked={avgRating === 1}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="1.5 star"
          id="1.5"
          checked={avgRating === 1.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="2 star"
          id="2"
          checked={avgRating === 2}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="2.5 star"
          id="2.5"
          checked={avgRating === 2.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="3 star"
          id="3"
          checked={avgRating === 3}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="3.5 star"
          id="3.5"
          checked={avgRating === 3.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="4 star"
          id="4"
          checked={avgRating === 4}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="4.5 star"
          id="4.5"
          checked={avgRating === 4.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-11"
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="5 star"
          id="5"
          checked={avgRating === 5}
          readOnly
        />
      </div>
    </div>
  );
}
