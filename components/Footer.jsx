import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We're passionate about sharing insights and stories from the world of technology, design, and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
              <li><a href="/aboutus" className="hover:text-gray-300">About</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/technology" className="hover:text-gray-300">Technology</a></li>
              <li><a href="/category/design" className="hover:text-gray-300">Design</a></li>
              <li><a href="/category/productivity" className="hover:text-gray-300">Productivity</a></li>
              <li><a href="/category/lifestyle" className="hover:text-gray-300">Lifestyle</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} Your Blog Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;