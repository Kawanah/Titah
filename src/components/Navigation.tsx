import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TitahLogo } from './TitahLogo';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'offers', label: 'Nos offres', isButton: false },
    { id: 'about', label: 'À propos', isButton: false },
    { id: 'faq', label: 'FAQ', isButton: false },
    { id: 'contact', label: 'Contact', isButton: true },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => onNavigate('home')}>
            <TitahLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isButton ? (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="bg-[#9b3eff] text-white px-6 py-2 rounded-[5px] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(155,62,255,0.4)] hover:-translate-y-0.5"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors ${
                    currentPage === item.id
                      ? 'text-[#9b3eff]'
                      : 'text-[#44484f] hover:text-[#9b3eff]'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              item.isButton ? (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full bg-gradient-to-r from-[#9b3eff] to-[#ff6b35] text-white py-3 px-4 mx-4 my-2 rounded-lg"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 transition-colors ${
                    currentPage === item.id
                      ? 'text-[#9b3eff] bg-purple-50'
                      : 'text-[#44484f] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
