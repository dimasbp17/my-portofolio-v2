import { motion } from 'framer-motion';
import { Code2, Palette, Wrench } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useContent } from '@/i18n';
import { container } from '@/lib/layout';
import { fadeUp, hoverLift, revealOnScroll, stagger } from '@/lib/motion';

const icons = [Code2, Palette, Wrench];

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const Keterampilan = () => {
  const { t } = useContent();

  return (
    <motion.div
      {...revealOnScroll}
      variants={stagger()}
      className={`${container} text-ink`}
    >
      <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />
      <motion.div
        variants={stagger(0, 0.15)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {t.skills.groups.map((group, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              variants={fadeUp}
              {...hoverLift}
              className="bg-surface border border-line rounded-xl shadow-sm dark:shadow-none p-6 hover:border-blue-400/50 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-brand-soft">
                  <Icon className="text-brand size-5" />
                </div>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>
              {/* chip muncul satu-satu setelah kartunya */}
              <motion.div
                variants={stagger(0.3, 0.05)}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={chip}
                    className="text-sm px-3 py-1 rounded-full bg-chip text-ink-soft"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Keterampilan;
