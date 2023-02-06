import Image from 'next/image';
import Car from '../../../public/Car2.svg';
import styles from './styles.module.scss';
export function CarComponent() {
  return (
    <article className={styles.container}>
      <div>
        <Image src={Car} alt='Frame' />
        <span>$ 69,420</span>
      </div>
      <h1>1969 Corvette Stingray</h1>
      <p>Details, details, details, details</p>
      <button>Learn More</button>
    </article>
  );
}
