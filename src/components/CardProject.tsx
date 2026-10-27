import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';
import { fadeUp, hoverLift } from '@/lib/motion';

type Props = {
  title: string;
  desc: string;
  tech: readonly string[];
  gradient: string;
  image?: string;
  demo?: string;
  code?: string;
  demoLabel: string;
  codeLabel: string;
};

const linkClass =
  'inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-brand transition-colors duration-200';

const CardProject = ({
  title,
  desc,
  tech,
  gradient,
  image,
  demo,
  code,
  demoLabel,
  codeLabel,
}: Props) => {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <motion.article
        {...hoverLift}
        className="group h-full flex flex-col overflow-hidden bg-surface border border-line rounded-xl shadow-sm dark:shadow-none hover:border-blue-400/50 transition-colors duration-200"
      >
        {image ? (
          <div className="aspect-video overflow-hidden border-b border-line">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          // thumbnail sementara untuk proyek yang belum punya screenshot
          <div
            className={`relative aspect-video overflow-hidden bg-gradient-to-br ${gradient}`}
          >
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <Code2 className="size-12 text-white/80" />
            </div>
            <div className="absolute -bottom-6 -right-6 size-24 rounded-full bg-white/15" />
            <div className="absolute -top-8 -left-8 size-20 rounded-full bg-white/10" />
          </div>
        )}

        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-ink-muted text-sm mt-1.5 flex-1">{desc}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs px-2.5 py-0.5 rounded-full bg-chip text-ink-soft"
              >
                {item}
              </span>
            ))}
          </div>
          {(demo || code) && (
            <div className="flex gap-4 mt-5 pt-4 border-t border-line">
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className={linkClass}>
                  <ExternalLink className="size-4" /> {demoLabel}
                </a>
              )}
              {code && (
                <a href={code} target="_blank" rel="noreferrer" className={linkClass}>
                  <Github className="size-4" /> {codeLabel}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
};

export default CardProject;
