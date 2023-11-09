import Image from 'next/image'
import pageLogo from '../../../public/icons/logo.svg'
import NavbarStyles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar () {
  return (
    <div className={NavbarStyles.header + " header header--cmp w-full flex items-center justify-center"}>
      <div className={NavbarStyles.header_wrapper + " header-wrapper w-full flex items-center justify-center"}>
        <div className="header__logo-wrapper flex items-center justify-center">
          <Image 
            priority
            width={126}
            height={30}
            src={pageLogo}
            className="header__logo"
            alt='im.roeen.dev|PAGE LOGO'
          />
        </div>

        <div className="header__nav-wrapper flex items-center justify-center">
          <ul className={NavbarStyles.header__nav_list + " flex header__nav-list list-none"}>
            <li className={NavbarStyles.header__nav_item + " header__nav-item list-none"}>
              <Link href='#'>
                <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>Home</span>
              </Link>
            </li>
            <li className={NavbarStyles.header__nav_item + " header__nav-item list-none"}>
              <Link href='#'>
                <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>Projects</span>
              </Link>
            </li>
            <li className={NavbarStyles.header__nav_item + " header__nav-item list-none"}>
              <Link href='#'>
                <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>About</span>
              </Link>
            </li>
            <li className={NavbarStyles.header__nav_item + " header__nav-item list-none"}>
              <Link href='#'>
                <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}