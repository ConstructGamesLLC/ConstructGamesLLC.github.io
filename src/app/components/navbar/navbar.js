import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
    return (
      <div className='navbar'>
        <Link className='navPath' href='#top'>TOP</Link>
        <Link className='navPath' href='#about'>ABOUT</Link>
        <Link className='navPath' href='#qm'>QUEST MAKER</Link>
        <Link className='navPath' href='#progress'>PROGRESS</Link>
        <Link className='navPath' href='#sub'>SUBSCRIBE</Link>
      </div>
    );
  }
