import LoadingCards from './LoadingCards';
import LoadingNav from './LoadingNav';

export default function Loading() {
  return (
    <main className="alx-container">
      <div className="alx-section">
        <LoadingNav />
        <LoadingCards />
      </div>
    </main>
  );
}
