import { motion } from 'framer-motion';
import { Gauge, MonitorSmartphone, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useContent } from '@/i18n';
import { container } from '@/lib/layout';
import { fadeUp, hoverLift, revealOnScroll, stagger } from '@/lib/motion';

const icons = [MonitorSmartphone, Gauge, Users];

const AboutMe = () => {
  const { t } = useContent();

  return (
    <motion.div
      {...revealOnScroll}
      variants={stagger()}
      className={`${container} text-ink`}
    >
      <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />
      <div className="space-y-4 text-ink-soft leading-relaxed text-justify">
        {t.about.paragraphs.map((p, idx) => (
          <motion.p key={idx} variants={fadeUp}>
            {p}
          </motion.p>
        ))}
      </div>
      <motion.div
        variants={stagger(0, 0.1)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {t.about.highlights.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              variants={fadeUp}
              {...hoverLift}
              className="bg-surface border border-line rounded-xl shadow-sm dark:shadow-none p-6 hover:border-blue-400/50 transition-colors duration-200"
            >
              <Icon className="text-brand mb-3" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-ink-muted text-sm mt-1">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
