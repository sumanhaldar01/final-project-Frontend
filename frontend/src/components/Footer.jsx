import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/example'
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/example'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/example/'
  }
];

const otherLinks = [
  {
    name: 'About',
    link: '/aboutus'
  },
  {
    name: 'Contact',
    link: '/contactus'
  },
  {
    name: 'Privacy Policy',
    link: '/privacy'
  }
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4">Social Media</h4>
            <ul className="flex space-x-4">
              {socialMediaLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Links</h4>
            <ul className="space-y-4">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Subscribe</h4>
            <form>
              <div className="flex space-x-4">
                <input type="email" placeholder="Enter your email" className="flex-1 py-2 px-4 rounded-lg bg-gray-800 text-white" />
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-base text-gray-400 flex justify-between items-center">
          <div>&copy; {currentYear} ComputeBuddy</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
