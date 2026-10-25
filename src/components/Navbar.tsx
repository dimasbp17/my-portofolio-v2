import { Languages, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { useContent } from '@/i18n';
import { useTheme } from '@/theme';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const { t, toggleLang } = useContent();
  const { theme, toggleTheme } = useTheme();
  const menus = t.nav;

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // aktif kalau section melewati tengah layar, aman untuk section yang lebih tinggi dari layar
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    menus.forEach((menu) => {
      const section = document.getElementById(menu.id);
      if (section) observer.observe(section);
    });

    // cleanup observer pas unmount
    return () => observer.disconnect();
  });

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex justify-center items-center py-2 fixed z-50"
      >
        <div className="bg-nav backdrop-blur-md text-ink text-sm border border-nav-line shadow-sm rounded-full px-5 h-12 w-fit flex items-center justify-center">
          <div className="flex gap-2 justify-center items-center">
            {menus.map((menu, idx) => (
              <ul
                key={idx}
                className={`relative px-3 py-1.5 cursor-pointer transition-colors duration-200 ${
                  active === menu.id ? 'text-brand' : 'hover:text-brand'
                }`}
                onClick={() => handleScroll(menu.id)}
              >
                {/* latar menu aktif, pindah halus antar menu */}
                {active === menu.id && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-brand-soft"
                  />
                )}
                <li className="relative">{menu.label}</li>
              </ul>
            ))}
            <div className="text-ink-muted px-2">|</div>
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleLang}
                className="rounded-full text-xs text-white bg-blue-500 hover:bg-blue-500/80 duration-200 w-28"
              >
                <Languages /> {t.languageLabel}
              </Button>
              <Button
                onClick={toggleTheme}
                size="icon-sm"
                variant="ghost"
                aria-label={theme === 'dark' ? t.themeLabel.toLight : t.themeLabel.toDark}
                title={theme === 'dark' ? t.themeLabel.toLight : t.themeLabel.toDark}
                className="rounded-full text-ink hover:bg-chip hover:text-brand dark:hover:bg-chip"
              >
                {/* ikon berputar saat ganti tema */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun /> : <Moon />}
                  </motion.span>
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

// text-[#60a5fa]

export default Navbar;
