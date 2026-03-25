import { CardPreview } from './CardPreview';

export function CardList() {
  const cards = Array.from({ length: 15 });

  return (
    <div className="alx-columns alx-is-multiline">
      {cards.map((_, index) => (
        <div
          key={index}
          className="alx-column 
          alx-is-12-mobile alx-is-6-tablet alx-is-4-desktop alx-is-3-widescreen">
          <CardPreview />
        </div>
      ))}
    </div>
  );
}
