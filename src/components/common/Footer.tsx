import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const businessHours = [
    { day: "Weekdays", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "10:00 AM - 6:00 PM" },
    { day: "Sunday", time: "11:00 AM - 5:00 PM" },
  ];

  const contactInfo = [
    { icon: <MapPin size={18} />, text: "123 Barber St, Lagos, Nigeria" },
    { icon: <Phone size={18} />, text: "+234 812 345 6789" },
    { icon: <Mail size={18} />, text: "hello@maskandblade.com" },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
  ];

  // Add this object somewhere in your component
  const linkDescriptions: any = {
    Home: "Discover our barbering philosophy",
    Services: "Explore our premium offerings",
    About: "Our story and master barbers",
    Gallery: "See our transformative work",
    Contact: "Get in touch with us",
  };

  return (
    <footer className="bg-primary text-gray-300 border-t border-gray-800">
      <div className="app_container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">
              <span className="text-accent">MASK</span>
              <span className="text-white">AND</span>
              <span className="text-accent">BLADE</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Where precision meets artistry. We transform haircuts into
              experiences and clients into lifelong patrons.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={`${social.icon.type.name} social link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-start gap-3"
                  >
                    <span className="text-accent mt-1">
                      <ChevronRight size={16} />
                    </span>
                    <div>
                      <p className="text-gray-100 group-hover:text-accent transition-colors">
                        {link.label}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {linkDescriptions[link.label]}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Working Hours
            </h4>
            <ul className="space-y-3">
              {businessHours.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-400">{item.day}</span>
                  <span className="text-white">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} MaskAndBlade. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-accent text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-accent text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
