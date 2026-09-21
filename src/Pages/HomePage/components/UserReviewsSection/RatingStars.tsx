import { Star } from 'lucide-react';

interface RatingStarsProps {
  rate: number;
  totalStars?: number;
  size?: number;
}

export default function RatingStars({
  rate,
  totalStars = 5,
  size = 24,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }).map((_, index) => {
        // filled stars: 1, half-filled stars: 0.5, empty stars: 0
        const fillPercentage = Math.min(Math.max(rate - index, 0), 1);

        return (
          <div
            key={index}
            className="relative"
            style={{
              width: size,
              height: size,
            }}
          >
            {/* empty stars */}
            <Star
              size={size}
              className="absolute inset-0 fill-transparent text-zinc-600"
            />

            {/* filled stars */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                width: `${fillPercentage * 100}%`,
              }}
            >
              <Star size={size} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
