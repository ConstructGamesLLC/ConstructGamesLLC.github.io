import Image from 'next/image';
import Link from 'next/link';

import './header.css';
import logo from './../../../assets/ConstructGamesLogo.png';
import downArrow from './../../../assets/downArrow.jpg';

export default function Header() {
  return (
    <div>
      {/* <div className='socials'>
        <a href='https://github.com/ClaireXP' target='_blank' rel='noopener noreferrer'>
          <img id='gitHubLogo' className='socialLogo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png' alt='GitHub Logo' />
        </a>

        <a href='https://www.linkedin.com/in/clairepoukey/' target='_blank' rel='noopener noreferrer'>
          <img id='linkedInLogo' className='socialLogo'
            src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='LinkeIn Logo' />
        </a>
      </div> */}


      <Link href='#about'>
        <Image
            id='downArrow' 
            alt='Down Arrow'
            src={downArrow}
            width={100}
            height={100}
        />
      </Link>
      
      <div id='pageHeader'>
        <Image 
            src={logo} 
            alt='Construct Games Logo'
            width={500}
            height={500}
            className='m-auto'
        />
      </div>
    </div>
  );
}
