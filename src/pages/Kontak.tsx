import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { contactLinks } from '@/data/content';
import { useContent } from '@/i18n';
import { container } from '@/lib/layout';
import { fadeUp, hoverLift, revealOnScroll, stagger } from '@/lib/motion';

const Kontak = () => {
  const { t } = useContent();

  const items = [
    {
      icon: Mail,
      label: 'Email',
      value: contactLinks.email,
      href: `mailto:${contactLinks.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contactLinks.linkedin.replace('https://www.', '').replace(/\/$/, ''),
      href: contactLinks.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: contactLinks.github.replace('https://', ''),
      href: contactLinks.github,
    },
    {
      icon: MapPin,
      label: t.contact.locationLabel,
      value: t.contact.location,
    },
  ];

  return (
    <motion.div
      {...revealOnScroll}
      variants={stagger()}
      className={`${container} text-ink`}
    >
      <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
      <motion.div
        variants={stagger(0, 0.1)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {items.map((item) => {
          const card = (
            <motion.div
              {...hoverLift}
              className="flex items-center gap-4 bg-surface border border-line rounded-xl shadow-sm dark:shadow-none p-5 h-full hover:border-blue-400/50 transition-colors duration-200"
            >
              <div className="p-2.5 rounded-lg bg-brand-soft">
                <item.icon className="text-brand size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-ink-muted">{item.label}</p>
                <p className="text-sm truncate">{item.value}</p>
              </div>
              {item.href && <ArrowUpRight className="text-ink-muted size-4" />}
            </motion.div>
          );
          return item.href ? (
            <motion.a
              key={item.label}
              variants={fadeUp}
              href={item.href}
              {...(item.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
            >
              {card}
            </motion.a>
          ) : (
            <motion.div key={item.label} variants={fadeUp}>
              {card}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div variants={fadeUp} className="text-center mt-10">
        <Button
          asChild
          className="text-white bg-blue-500 hover:bg-blue-500/90 hover:scale-105 active:scale-95 rounded-full px-6"
        >
          <a href={`mailto:${contactLinks.email}`}>
            <Send /> {t.contact.cta}
          </a>
        </Button>
      </motion.div>
      <motion.p variants={fadeUp} className="text-center text-ink-muted text-xs mt-16">
        © {new Date().getFullYear()} Dimas Bagus Prasetyo. {t.contact.footer}
      </motion.p>
    </motion.div>
  );
};

export default Kontak;
