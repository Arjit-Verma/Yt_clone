import { useRef, useState } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};
const Translate_Amount = 200;
export function CategoryList({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, SetIsLeftVisible] = useState(true);
  const [isRightVisible, SetIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="overflow-x-hidden relative">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            variant={selectedCategory === category ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - Translate_Amount;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
