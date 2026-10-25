import Navbar from '@/components/Navbar';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadFireflyPreset } from '@tsparticles/preset-firefly';
import { Mouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AboutMe from './AboutMe';
import Keterampilan from './Keterampilan';
import Pengalaman from './Pengalaman';
import Proyek from './Proyek';
import Kontak from './Kontak';
import { useContent } from '@/i18n';
import { useTheme } from '@/theme';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import { container } from '@/lib/layout';

// harus di luar komponen, ParticlesProvider butuh fungsi init yang stabil
const particlesInit = async (engine: Engine) => {
  await loadFireflyPreset(engine);
};

const MyHome = () => {
  const { t } = useContent();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* jumbotron */}
      <div id="home" className="h-screen relative overflow-hidden">
        <Navbar />
        <ParticlesProvider init={particlesInit}>
          <Particles
            // key biar partikel dibuat ulang saat tema berubah
            key={theme}
            id="tsparticles"
            className="absolute inset-0 -z-10"
            options={{
              preset: 'firefly',
              background: {
                color: { value: isDark ? '#020617' : '#f8fafc' },
              },
              particles: {
                number: { value: 20 },
                size: { value: 2, animation: { enable: true, speed: 2 } },
                color: { value: isDark ? '#ffffff' : '#3b82f6' },
              },
            }}
          />
        </ParticlesProvider>
        {/* cahaya latar "bernapas" pelan */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-60 h-60 -top-10 -left-10 rounded-full bg-glow blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute w-80 h-80 -bottom-20 -right-20 rounded-full bg-glow blur-[120px]"
        />
        {/* foto & ikon mouse, sejajar dengan lebar konten */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <div className={`${container} flex items-end justify-between`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mb-10 text-ink-muted"
            >
              <Mouse className="text-ink animate-bounce duration-300" />
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src="/assets/images/dimas.png"
              alt="Gambar Dimas"
              className="w-[420px]"
            />
          </div>
        </div>
        <div className="text-ink absolute inset-0 flex items-center">
          <div className={container}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger(0.3, 0.15)}
              className="max-w-[550px] space-y-3"
            >
              <motion.h1 variants={fadeUp} className="text-3xl font-semibold">
                {t.hero.greeting}
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                className="text-xl font-semibold text-ink-muted"
              >
                {t.hero.role}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-normal text-sm text-justify text-ink-soft my-5"
              >
                {t.hero.summary}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button className="text-white bg-blue-500 hover:bg-blue-500/90 hover:scale-105 active:scale-95">
                  {t.hero.cv}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* summary */}
      <section id="tentang" className="min-h-screen bg-page-alt transition-colors duration-300 flex items-center justify-center py-24">
        <AboutMe />
      </section>

      {/* Features / Keterampilan */}
      <section id="keterampilan" className="min-h-screen bg-page transition-colors duration-300 flex items-center justify-center py-24">
        <Keterampilan />
      </section>

      {/* Experience / Pengalaman */}
      <section id="pengalaman" className="min-h-screen bg-page-alt transition-colors duration-300 flex items-center justify-center py-24">
        <Pengalaman />
      </section>

      {/* Projects / Proyek */}
      <section id="proyek" className="min-h-screen bg-page transition-colors duration-300 flex items-center justify-center py-24">
        <Proyek />
      </section>

      {/* Contact */}
      <section id="kontak" className="min-h-screen bg-page-alt transition-colors duration-300 flex items-center justify-center py-24">
        <Kontak />
      </section>
    </>
  );
};

export default MyHome;