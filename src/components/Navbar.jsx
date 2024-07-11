import logo from '../assets/emman_logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.facebook.com/emmamJ4U" target="_blank"><FaFacebook /></a>
        <a href="https://m.me/emmanJ4U" target="_blank"><FaFacebookMessenger /></a>
        <a href="https://github.com/Emman-Prog" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/emmanuel-dilag-8a5645243/" target="_blank"><FaLinkedin /></a>
      </div>
    </nav>
  )
}

export default Navbar;