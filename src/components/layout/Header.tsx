import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import logoPoupConsig from '../../assets/logo-poup-consig.png';
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
    
    if (window.location.hash.startsWith('#/')) {
      window.location.hash = `#${id}`;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
        {/* Logo Oficial Poupconsig */}
        <a
          href="#"
          className="group focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2 rounded"
          aria-label="Poupconsig Promotora - Home"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.hash.startsWith('#/')) {
              window.location.hash = '';
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img
            src={logoPoupConsig}
            alt="Poupconsig Promotora — Transparência no Crédito Consignado"
            className="h-10 w-auto group-hover:opacity-85 transition-opacity duration-300"
            draggable={false}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
          {[
            { href: 'solucoes', label: 'Soluções' },
            { href: 'como-funciona', label: 'Como funciona' },
            { href: 'atendimento', label: 'Atendimento' },
            { href: 'depoimentos', label: 'Depoimentos' },
            { href: 'duvidas', label: 'Dúvidas' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={(e) => handleLinkClick(e, href)}
              className="text-sm font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" onClick={() => openWhatsApp('GENERAL')} className="text-sm">
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
            <FontAwesomeIcon icon={faCommentDots} className="w-5 h-5" />
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 text-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-800 rounded"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            type="button"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="w-6 h-6" />
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
            {[
              { href: 'solucoes', label: 'Soluções de Crédito' },
              { href: 'como-funciona', label: 'Como funciona' },
              { href: 'atendimento', label: 'Atendimento Humano' },
              { href: 'depoimentos', label: 'Depoimentos de Clientes' },
              { href: 'duvidas', label: 'Dúvidas Frequentes' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => handleLinkClick(e, href)}
                className="text-base font-bold text-neutral-text hover:text-primary-800 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
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
