import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 mt-4">
          {/* Benefits */}
          <div>
            <h3 className="font-bold mb-4">Benefits</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Clear Spending Insights</li>
              <li>Split Group Expenses</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-bold mb-4">Use Cases</h3>
            <ul className="space-y-2 text-gray-600">
              <li>For Couples</li>
              <li>For Group Holidays</li>
              <li>For Roommates</li>
              <li>For Restaurant Bills</li>
              <li>For Freelancers</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Legal Documents</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Jobs</li>
            </ul>
          </div>
        </div>

        {/* App store buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex gap-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t pt-4 mt-4 text-gray-500 text-sm">
          <div className="mb-2 md:mb-0">© 2025 Settle-It</div>
          <div className="flex items-center gap-4">
            <span>Cookie Settings</span>
            <button className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <span>🌐</span> English (IN)
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
