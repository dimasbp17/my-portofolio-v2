import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useRef, useState } from 'react';
import { useContent } from '@/i18n';
import { useTheme } from '@/theme';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggle = () => {
  const { t } = useContent();
  const { theme, toggleTheme } = useTheme();
  const label = theme === 'dark' ? t.themeLabel.toLight : t.themeLabel.toDark;

  return (
    <Button
      onClick={toggleTheme}
      size="icon-sm"
      variant="ghost"
      aria-label={label}
      title={label}
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
  );
};

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { t, toggleLang } = useContent();
  const menus = t.nav;

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
    setOpen(false);
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

  // tutup menu mobile saat klik di luar, tekan Esc, atau layar melebar ke desktop
  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => desktop.matches && setOpen(false);

    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex justify-center items-center py-2 px-4 fixed z-50"
      >
        {/* desktop: semua menu dalam satu pil */}
        <div className="hidden lg:flex bg-nav backdrop-blur-md text-ink text-sm border border-nav-line shadow-sm rounded-full px-5 h-12 w-fit items-center justify-center">
          <ul className="flex gap-2 justify-center items-center">
            {menus.map((menu) => (
              <li
                key={menu.id}
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
                <span className="relative">{menu.label}</span>
              </li>
            ))}
          </ul>
          <div className="text-ink-muted px-4">|</div>
          <div className="flex items-center gap-2">
            <Button
              onClick={toggleLang}
              className="rounded-full text-xs text-white bg-blue-500 hover:bg-blue-500/80 duration-200 w-28"
            >
              <Languages /> {t.languageLabel}
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* mobile & tablet: bar ringkas + menu dropdown */}
        <div ref={navRef} className="lg:hidden relative w-full max-w-md">
          <div className="bg-nav backdrop-blur-md text-ink text-sm border border-nav-line shadow-sm rounded-full pl-2 pr-2 h-12 flex items-center justify-between">
            <button
              onClick={() => handleScroll('home')}
              className="flex items-center gap-2 rounded-full p-1 cursor-pointer"
              aria-label={menus[0]?.label}
            >
              <img src="/favicon.svg" alt="" className="size-8" />
            </button>
            <span className="text-brand font-medium truncate px-2">
              {menus.find((menu) => menu.id === active)?.label}
            </span>
            <div className="flex items-center gap-1">
              <Button
                onClick={toggleLang}
                size="sm"
                className="rounded-full text-xs text-white bg-blue-500 hover:bg-blue-500/80 duration-200"
              >
                <Languages /> <span className="hidden sm:inline">{t.languageLabel}</span>
              </Button>
              <ThemeToggle />
              <Button
                onClick={() => setOpen((v) => !v)}
                size="icon-sm"
                variant="ghost"
                aria-label={open ? t.menuLabel.close : t.menuLabel.open}
                aria-expanded={open}
                className="rounded-full text-ink hover:bg-chip hover:text-brand dark:hover:bg-chip"
              >
                {open ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 mt-2 bg-nav backdrop-blur-md text-ink text-sm border border-nav-line shadow-sm rounded-2xl p-2 flex flex-col gap-1"
              >
                {menus.map((menu) => (
                  <li
                    key={menu.id}
                    className={`px-4 py-2.5 rounded-xl cursor-pointer transition-colors duration-200 ${
                      active === menu.id ? 'text-brand bg-brand-soft' : 'hover:text-brand hover:bg-chip'
                    }`}
                    onClick={() => handleScroll(menu.id)}
                  >
                    {menu.label}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
