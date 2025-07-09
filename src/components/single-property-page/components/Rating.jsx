export default function Rating({ rating, id }) {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-1">
      <div className="rating rating-xs rating-half">
        <input
          type="radio"
          name={`rating-${id}`}
          className="rating-hidden hidden"
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="0.5 star"
          id={`${id}-0.5`}
          checked={rating === 0.5}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="1 star"
          id={`${id}-1`}
          checked={rating === 1}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="1.5 star"
          id={`${id}-1.5`}
          checked={rating === 1.5}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="2 star"
          id={`${id}-2`}
          checked={rating === 2}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="2.5 star"
          id={`${id}-2.5`}
          checked={rating === 2.5}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="3 star"
          id={`${id}-3`}
          checked={rating === 3}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="3.5 star"
          id={`${id}-3.5`}
          checked={rating === 3.5}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="4 star"
          id={`${id}-4`}
          checked={rating === 4}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-1 bg-secondary"
          aria-label="4.5 star"
          id={`${id}-4.5`}
          checked={rating === 4.5}
          readOnly
        />
        <input
          type="radio"
          name={`rating-${id}`}
          className="mask mask-star-2 mask-half-2 bg-secondary"
          aria-label="5 star"
          id={`${id}-5`}
          checked={rating === 5}
          readOnly
        />
      </div>
    </div>
  );
}
