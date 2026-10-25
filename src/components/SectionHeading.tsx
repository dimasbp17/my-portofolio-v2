import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

type Props = {
  title: string;
  subtitle: string;
};

// ikut animasi dari parent (variants "hidden" -> "show")
const SectionHeading = ({ title, subtitle }: Props) => {
  return (
    <motion.div variants={fadeUp} className="text-center space-y-3 mb-12">
      <h2 className="text-3xl font-bold text-ink">{title}</h2>
      <motion.div
        variants={{ hidden: { width: 0 }, show: { width: 56, transition: { duration: 0.6, delay: 0.2 } } }}
        className="mx-auto h-1 rounded-full bg-blue-500"
      />
      <p className="text-ink-muted max-w-xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeading;
