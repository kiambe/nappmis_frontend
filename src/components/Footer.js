import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-yellow-200">
              About
            </h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Development Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Counties
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Topics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-yellow-200">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6 text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="w-6 h-6 text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="w-6 h-6 text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-gray-400 hover:text-gray-300" />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub className="w-6 h-6 text-gray-400 hover:text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <input
              type="email"
              className="w-full px-3 py-2 mb-2 text-black rounded"
              placeholder="Your email"
            />
            <button className="w-full px-3 py-2 bg-green-600 rounded hover:bg-green-700">
              SUBSCRIBE HERE
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between">
          <div>
            <p>This Site in:</p>
            <a href="#" className="hover:underline">
              English
            </a>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="hover:underline">
              Legal
            </a>
            <a href="#" className="hover:underline">
              Privacy Notice
            </a>

            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center border-t border-gray-700 pt-4 mt-4 bg-gray-900 text-gray-500">
        <p>© 2024 Moald, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
