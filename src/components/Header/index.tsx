import Link from 'next/link';
import Frame from '../../../public/Frame.png';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
    <Image src={Frame} width={213} height={72} alt='Frame' />
    <nav>
      <Link className={styles.select} href='/'><p>HOME</p></Link>
      <Link href='/'>BUY</Link>
      <Link href='/'>SELL</Link>
      <Link href='/'>ABOUT</Link>
      <Link href='/'>CONTACT</Link>
    </nav>
    <div>
      <input type='text' placeholder='Search' />
      <button>
        <BsSearch />
      </button>
    </div>
  </header>
  );
}