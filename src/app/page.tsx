import Image from 'next/image';
import styles from './page.module.css';
import { CardPreview } from '@/components/CardPreview';
import { CardList } from '@/components/CardList';
import { NavMenu } from '@/components/NavMenu';

export default function Home() {
  return (
    <main className="alx-container">
      <div className="alx-section">
        <NavMenu />
        <CardList />
      </div>
    </main>
  );
}
