import type { Review } from "@lib/types";

interface Props {
  rating: number;
}

export function StarRating({ rating }: Props) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex w-fit items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <>
          {index < fullStars ? (
            <svg className="size-5 fill-star" viewBox="0 0 24 24">
              <path d="M12 17.27l5.18 3.04-1.64-5.64L21 10.24h-5.81L12 4.5l-3.19 5.74H3l4.46 4.43L5.82 20.3 12 17.27z" />
            </svg>
          ) : index === fullStars && halfStar ? (
            <svg className="size-5" viewBox="0 0 24 24">
              <defs>
                <linearGradient id={`halfStar-${index}`}>
                  <stop offset="50%" stopColor="#FFC633" />
                  <stop offset="50%" stopColor="gray" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#halfStar-${index})`}
                d="M12 17.27l5.18 3.04-1.64-5.64L21 10.24h-5.81L12 4.5l-3.19 5.74H3l4.46 4.43L5.82 20.3 12 17.27z"
              />
            </svg>
          ) : (
            <svg className="size-5 fill-gray-300" viewBox="0 0 24 24">
              <path d="M12 17.27l5.18 3.04-1.64-5.64L21 10.24h-5.81L12 4.5l-3.19 5.74H3l4.46 4.43L5.82 20.3 12 17.27z" />
            </svg>
          )}
        </>
      ))}
    </div>
  );
}

export default function ProductReview({ reviews }: { reviews: Review[] }) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <>
      <h1>All Reviews</h1>
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div
            key={review.rating}
            className="space-y-1.5 rounded-xl border p-4"
          >
            <StarRating rating={review.rating} />
            <div className="flex items-center gap-1">
              <h2 className="font-satochi text-base font-bold">
                {review.reviewerName}
              </h2>
              <svg
                className="size-4 rounded-full bg-green-600 fill-white p-1"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
              </svg>
            </div>
            <p className="text-sm opacity-60">"{review.comment}"</p>
            <p className="text-sm opacity-60 pt-1.5">
              Posted on {formatDate(review.date)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
