import Image from "next/image";

const ProductRating = ({ rating }) => {
  const allRating = Math.floor(rating);
  const review = Array(allRating).fill(allRating);

  return (
    <div className="mt-3 flex items-center justify-start gap-1">
      {review.map((start, i) => (
        <Image
          key={i}
          src="/svg/star.svg"
          width={20}
          height={20}
          alt="rating"
        />
      ))}
    </div>
  );
};

export default ProductRating;
