import Navbar from '@/components/Navbar';
import Particles from 'react-tsparticles';
import { loadFireflyPreset } from 'tsparticles-preset-firefly';
import type { Engine } from 'tsparticles-engine';
import { Mouse } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MyHome = () => {
  const particlesInit = async (engine: Engine) => {
    await loadFireflyPreset(engine); // <- ini kunci utamanya
  };
  return (
    <>
      {/* jumbotron */}
      <div className="h-screen relative overflow-hidden">
        <Navbar />
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 -z-10"
          options={{
            preset: 'firefly',
            background: {
              color: { value: '#020617' },
            },
            particles: {
              number: {
                value: 10, // 🔢 jumlah firefly (default sekitar 20an)
              },
              size: {
                value: 2, // 🌕 besar titik cahaya (default 1–2)
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 1,
                  sync: false,
                },
              },
              color: {
                value: '#ffff',
              },
            },
          }}
        />

        <div className="text-white/90 absolute flex top-[40%] left-1/4">
          <div className="max-w-[550px] space-y-3">
            <h1 className="text-3xl font-semibold">
              Halo, Saya Dimas Bagus Prasetyo
            </h1>
            <h1 className="text-xl font-semibold text-white/60">
              Frontend Web Developer
            </h1>
            <h1 className="font-normal text-sm text-justify my-5">
              Saya berfokus pada pengembangan website yang modern, responsif,
              dan berorientasi pada pengalaman pengguna. Dengan pengalaman di
              lingkungan profesional, saya terbiasa membangun antarmuka yang
              cepat, mudah digunakan, dan memiliki desain yang kuat secara
              visual untuk memberikan pengalaman terbaik bagi setiap pengguna.
            </h1>
            <Button className="bg-blue-500 hover:bg-blue-500/90">
              Curiculum Vitae
            </Button>
          </div>
        </div>

        <div className="absolute w-60 h-60 -top-10 -left-10 rounded-full bg-white/20 blur-[120px]"></div>
        <div className="absolute w-80 h-80 -bottom-20 -right-20 rounded-full bg-white/25 blur-[120px]"></div>

        <img
          src="/assets/images/dimas.png"
          alt="Gambar Dimas"
          className="absolute bottom-0 right-20 w-[450px]"
        />

        <div className="absolute bottom-10 left-1/4 text-white/50">
          <Mouse className="text-white animate-bounce duration-300" />
        </div>
      </div>

      {/* summary */}
      <div className="h-screen bg-[#2a2a2a]"></div>
    </>
  );
};

export default MyHome;
