import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { openWhatsApp } from '../../lib/whatsapp';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-border shadow-premium py-4' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* SVG Logo Poupe Consig */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2 rounded"
          aria-label="Poupe Consig Promotora - Home"
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-900 group-hover:scale-105 transition-transform duration-300"
          >
            {/* Elegant infinity/curves design representing financial continuity */}
            <path 
              d="M25 50C25 38.9543 33.9543 30 45 30C52.0163 30 58.188 33.6053 61.8541 39.0909C63.146 36.3636 65.5768 30 75 30C86.0457 30 95 38.9543 95 50C95 61.0457 86.0457 70 75 70C67.9837 70 61.812 66.3947 58.1459 60.9091C56.854 63.6364 54.4232 70 45 70C33.9543 70 25 61.0457 25 50Z" 
              stroke="currentColor" 
              strokeWidth="10" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M75 50C75 44.4772 70.5228 40 65 40C59.4772 40 55 44.4772 55 50C55 55.5228 59.4772 60 65 60C70.5228 60 75 55.5228 75 50Z" 
              fill="#FF850A" 
            />
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-primary-950 leading-none">
              Poupe<span className="text-accent-600">Consig</span>
            </span>
            <span className="text-[9px] font-semibold tracking-wider text-neutral-secondary uppercase leading-none mt-1">
              Promotora
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
          <a 
            href="#solucoes" 
            onClick={(e) => handleLinkClick(e, 'solucoes')}
            className="text-sm font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
          >
            Soluções
          </a>
          <a 
            href="#como-funciona" 
            onClick={(e) => handleLinkClick(e, 'como-funciona')}
            className="text-sm font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
          >
            Como funciona
          </a>
          <a 
            href="#atendimento" 
            onClick={(e) => handleLinkClick(e, 'atendimento')}
            className="text-sm font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
          >
            Atendimento
          </a>
          <a 
            href="#duvidas" 
            onClick={(e) => handleLinkClick(e, 'duvidas')}
            className="text-sm font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
          >
            Dúvidas
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => openWhatsApp('GENERAL')}
            className="text-sm"
          >
            Falar com Camila
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => openWhatsApp('GENERAL')}
            className="p-2 bg-[#25D366] text-white rounded-full shadow-premium active:scale-95 transition-all"
            aria-label="Falar com Camila no WhatsApp"
            type="button"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 text-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-800 rounded"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            type="button"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-neutral-border shadow-premium transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[300px] py-6' : 'max-h-0'
        }`}
      >
        <Container className="flex flex-col gap-5">
          <nav className="flex flex-col gap-4" aria-label="Navegação Mobile">
            <a 
              href="#solucoes" 
              onClick={(e) => handleLinkClick(e, 'solucoes')}
              className="text-base font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
            >
              Soluções de Crédito
            </a>
            <a 
              href="#como-funciona" 
              onClick={(e) => handleLinkClick(e, 'como-funciona')}
              className="text-base font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
            >
              Como funciona
            </a>
            <a 
              href="#atendimento" 
              onClick={(e) => handleLinkClick(e, 'atendimento')}
              className="text-base font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
            >
              Atendimento Humano
            </a>
            <a 
              href="#duvidas" 
              onClick={(e) => handleLinkClick(e, 'duvidas')}
              className="text-base font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
            >
              Dúvidas Frequentes
            </a>
          </nav>
          
          <div className="pt-2 border-t border-neutral-border">
            <Button 
              variant="primary" 
              fullWidth 
              onClick={() => {
                setIsMenuOpen(false);
                openWhatsApp('GENERAL');
              }}
            >
              Falar com Camila
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
