import Image from 'next/image'
import pageLogo from '../../../public/icons/logo.svg'
import NavbarStyles from './Navbar.module.css'

export default function Navbar () {
  return (
    <div className={NavbarStyles.header + " header header--cmp u-flex u-width-block u-flex-centered"}>
      <div className={NavbarStyles.header_wrapper + " header-wrapper u-flex u-width-block u-flex-centered"}>
        <div className="header__logo-wrapper u-flex u-flex-centered">
          <Image 
            priority
            width={126}
            height={30}
            src={pageLogo}
            className="header__logo"
            alt='im.roeen.dev|PAGE LOGO'
          />
        </div>

        <div className="header__nav-wrapper u-flex u-flex-centered">
          <ul className={NavbarStyles.header__nav_list + " header__nav-list u-hide-list-style u-flex"}>
            <li className={NavbarStyles.header__nav_item + " header__nav-item u-hide-list-style"}>
              <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>Home</span>
            </li>
            <li className={NavbarStyles.header__nav_item + " header__nav-item u-hide-list-style"}>
              <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>Projects</span>
            </li>
            <li className={NavbarStyles.header__nav_item + " header__nav-item u-hide-list-style"}>
              <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>About</span>
            </li>
            <li className={NavbarStyles.header__nav_item + " header__nav-item u-hide-list-style"}>
              <span className={NavbarStyles.header__nav_text + " header__nav-text text-xs"}>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}