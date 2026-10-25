import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useContent } from '@/i18n';
import { container } from '@/lib/layout';
import { fadeLeft, hoverLift, revealOnScroll, stagger } from '@/lib/motion';

const Pengalaman = () => {
  const { t } = useContent();

  return (
    <motion.div
      {...revealOnScroll}
      variants={stagger()}
      className={`${container} text-ink`}
    >
      <SectionHeading
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />
      {/* timeline */}
      <motion.ol
        variants={stagger(0.1, 0.2)}
        className="relative border-l border-line ml-3 space-y-10"
      >
        {t.experience.items.map((item, idx) => (
          <motion.li key={idx} variants={fadeLeft} className="pl-8 relative">
            <motion.span
              variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
              className="absolute -left-[17px] top-0 flex items-center justify-center size-8 rounded-full bg-brand-soft ring-4 ring-page-alt"
            >
              <Briefcase className="text-brand size-4" />
            </motion.span>
            <motion.div
              {...hoverLift}
              className="bg-surface border border-line rounded-xl shadow-sm dark:shadow-none p-6 hover:border-blue-400/50 transition-colors duration-200"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-lg">{item.role}</h3>
                <span className="text-xs text-brand bg-brand-soft px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
              <p className="text-ink-muted text-sm mt-1">{item.company}</p>
              <ul className="list-disc list-outside ml-5 mt-4 space-y-1.5 text-ink-soft text-sm">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-chip text-ink-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  );
};

export default Pengalaman;
