import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import CardProject from '@/components/CardProject';
import SectionHeading from '@/components/SectionHeading';
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from '@/data/content';
import { useContent } from '@/i18n';
import { container } from '@/lib/layout';
import { fadeUp, stagger } from '@/lib/motion';

const grid = {
  ...stagger(0, 0.08),
  exit: { opacity: 0, y: 12, transition: { duration: 0.15 } },
};

const Proyek = () => {
  const { t } = useContent();
  const [tab, setTab] = useState<ProjectCategory>('professional');

  // pakai useInView (bukan whileInView) biar grid yang dibuat ulang saat ganti tab
  // tetap menunggu section kelihatan dulu sebelum animasi pertama
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const state = inView ? 'show' : 'hidden';

  const filtered = projects.filter((p) => p.category === tab);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={state}
      variants={stagger()}
      className={`${container} text-ink`}
    >
      <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

      <motion.div variants={fadeUp} className="flex justify-center mb-10">
        <div
          role="tablist"
          className="inline-flex gap-1 p-1 rounded-full bg-surface border border-line shadow-sm dark:shadow-none"
        >
          {projectCategories.map((category) => {
            const selected = tab === category;
            const count = projects.filter((p) => p.category === category).length;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={selected}
                onClick={() => setTab(category)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 ${
                  selected ? 'text-white' : 'text-ink-soft hover:text-brand'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="project-tab"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-blue-500"
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {t.projects.tabs[category]}
                  <span
                    className={`text-xs px-1.5 rounded-full ${
                      selected ? 'bg-white/20' : 'bg-chip'
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          role="tabpanel"
          initial="hidden"
          animate={state}
          exit="exit"
          variants={grid}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <CardProject
              key={project.id}
              {...t.projects.items[project.id]}
              tech={project.tech}
              gradient={project.gradient}
              demo={'demo' in project ? project.demo : undefined}
              code={'code' in project ? project.code : undefined}
              demoLabel={t.projects.demo}
              codeLabel={t.projects.code}
            />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-ink-muted py-10">
              {t.projects.empty}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Proyek;
