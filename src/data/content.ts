// Semua teks website ada di sini, edit sesuai data asli.
// Bagian bertanda TODO masih contoh dan perlu diganti.

export type Lang = 'id' | 'en';

type Content = {
  nav: { id: string; label: string }[];
  languageLabel: string;
  themeLabel: { toLight: string; toDark: string };
  menuLabel: { open: string; close: string };
  hero: {
    greeting: string;
    role: string;
    summary: string;
    cv: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    highlights: { title: string; desc: string }[];
  };
  skills: {
    title: string;
    subtitle: string;
    groups: { title: string; items: string[] }[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: {
      role: string;
      company: string;
      period: string;
      points: string[];
      tech: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    tabs: Record<ProjectCategory, string>;
    empty: string;
    items: Record<ProjectId, { title: string; desc: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    locationLabel: string;
    location: string;
  };
};

// data yang sama di kedua bahasa
// TODO: data proyek masih dummy, ganti dengan proyek asli
// professional = proyek kantor/klien, personal = proyek pribadi
export type ProjectCategory = 'professional' | 'personal';
export const projectCategories: ProjectCategory[] = ['professional', 'personal'];

export const projects = [
  {
    id: 'sipeni',
    category: 'professional',
    tech: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Axios', 'Framer Motion', 'Leaflet'],
    gradient: 'from-blue-700 to-amber-500',
    image: '/assets/images/projects/sipeni.png',
  },
  {
    id: 'smpptd',
    category: 'professional',
    tech: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    gradient: 'from-blue-600 to-sky-400',
    image: '/assets/images/projects/smpptd.png',
  },
  {
    id: 'e-lptkdn',
    category: 'professional',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Redux'],
    gradient: 'from-slate-700 to-blue-500',
    image: '/assets/images/projects/e-lptkdn.png',
  },
  {
    id: 'sidahub',
    category: 'professional',
    tech: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Redux', 'Framer Motion'],
    gradient: 'from-slate-800 to-indigo-400',
    image: '/assets/images/projects/sidahub.png',
  },
  {
    id: 'tahu-kocek',
    category: 'personal',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Motion'],
    gradient: 'from-orange-500 to-red-500',
    image: '/assets/images/projects/tahu-kocek.png',
    demo: 'https://tahukocekmerona.vercel.app/',
    code: 'https://github.com/dimasbp17/tahu-kocek-merona',
  },
  {
    id: 'cerita-tumbuh-keluarga',
    category: 'personal',
    tech: ['React', 'Vite', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'PWA'],
    gradient: 'from-sky-500 to-cyan-400',
    image: '/assets/images/projects/cerita-tumbuh-keluarga.png',
    demo: 'https://ceritatumbuhkeluarga.vercel.app/',
  },
  {
    id: 'galaxia-animalium',
    category: 'personal',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Axios', 'iNaturalist API', 'Wikipedia API'],
    gradient: 'from-emerald-900 to-lime-500',
    image: '/assets/images/projects/galaxia-animalium.png',
    demo: 'https://galaxianimalium.vercel.app/',
  },
  {
    id: 'info-gempa-cuaca',
    category: 'personal',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Axios', 'API BMKG'],
    gradient: 'from-slate-700 to-teal-500',
    image: '/assets/images/projects/info-gempa-cuaca.png',
    demo: 'https://infogempacuaca-gamma.vercel.app/',
  },
  {
    id: 'e-alquran',
    category: 'personal',
    tech: ['Next.js', 'Tailwind CSS', 'Axios', 'EQuran.id API'],
    gradient: 'from-emerald-600 to-teal-400',
    image: '/assets/images/projects/e-alquran.png',
    demo: 'https://e-alquran.vercel.app/',
  },
  {
    id: 'd-movies',
    category: 'personal',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Axios', 'TMDB API'],
    gradient: 'from-zinc-800 to-amber-500',
    image: '/assets/images/projects/d-movies.png',
    demo: 'https://d-movies-omega.vercel.app/',
  },
  {
    id: 'tastebite',
    category: 'personal',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TheMealDB API'],
    gradient: 'from-orange-600 to-amber-400',
    image: '/assets/images/projects/tastebite.png',
    demo: 'https://taste-bite-bice.vercel.app/',
  },
] as const satisfies readonly {
  id: string;
  category: ProjectCategory;
  tech: readonly string[];
  gradient: string;
  image?: string;
  demo?: string;
  code?: string;
}[];

export type ProjectId = (typeof projects)[number]['id'];

export const contactLinks = {
  email: 'dimasbp.tech@gmail.com',
  whatsapp: '6282146202762',
  linkedin: 'https://www.linkedin.com/in/dimas-bagus-prasetyo-528a7b2a0/',
  github: 'https://github.com/dimasbp17',
};

export const content: Record<Lang, Content> = {
  id: {
    nav: [
      { id: 'home', label: 'Beranda' },
      { id: 'tentang', label: 'Tentang' },
      { id: 'keterampilan', label: 'Keterampilan' },
      { id: 'pengalaman', label: 'Pengalaman' },
      { id: 'proyek', label: 'Proyek' },
      { id: 'kontak', label: 'Kontak' },
    ],
    languageLabel: 'Indonesia',
    themeLabel: { toLight: 'Ganti ke tema terang', toDark: 'Ganti ke tema gelap' },
    menuLabel: { open: 'Buka menu', close: 'Tutup menu' },
    hero: {
      greeting: 'Halo, Saya Dimas Bagus Prasetyo',
      role: 'Frontend Web Developer',
      summary:
        'Saya berfokus pada pengembangan website yang modern, responsif, dan berorientasi pada pengalaman pengguna. Dengan pengalaman di lingkungan profesional, saya terbiasa membangun antarmuka yang cepat, mudah digunakan, dan memiliki desain yang kuat secara visual untuk memberikan pengalaman terbaik bagi setiap pengguna.',
      cv: 'Curriculum Vitae',
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Sedikit cerita tentang siapa saya dan cara saya bekerja.',
      paragraphs: [
        'Saya seorang Frontend Web Developer yang senang mengubah desain menjadi antarmuka web yang hidup, rapi, dan nyaman digunakan. Bagi saya, tampilan yang bagus harus berjalan seiring dengan performa yang cepat dan kode yang mudah dirawat.',
        'Sehari-hari saya bekerja dengan React, TypeScript, dan Tailwind CSS. Saya terbiasa berkolaborasi dengan desainer dan backend developer, mulai dari menerjemahkan desain Figma hingga mengintegrasikan REST API.',
        'Di era ketika AI semakin menjadi bagian dari dunia pengembangan perangkat lunak, saya turut beradaptasi dengan memanfaatkannya sebagai alat bantu untuk mempercepat pekerjaan yang bersifat repetitif, dengan tetap berpijak pada fondasi pemahaman frontend yang kuat. Keputusan teknis, struktur kode, dan kualitas akhir tetap berada di tangan saya, sehingga hasil yang diberikan tetap terukur dan dapat dipertanggungjawabkan.',
      ],
      highlights: [
        {
          title: 'Responsif',
          desc: 'Tampilan yang konsisten di desktop, tablet, maupun ponsel.',
        },
        {
          title: 'Performa',
          desc: 'Halaman yang ringan dan cepat dimuat oleh pengguna.',
        },
        {
          title: 'Kolaboratif',
          desc: 'Komunikasi yang jelas dengan tim desain dan backend.',
        },
      ],
    },
    skills: {
      title: 'Keterampilan',
      subtitle: 'Teknologi dan tools yang saya gunakan sehari-hari.',
      groups: [
        {
          title: 'Bahasa & Framework',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
        },
        {
          title: 'Styling & UI',
          items: ['Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Responsive Design'],
        },
        {
          title: 'Tools & Lainnya',
          items: ['Git', 'Vite', 'REST API', 'Axios', 'Figma'],
        },
      ],
    },
    experience: {
      title: 'Pengalaman',
      subtitle: 'Riwayat profesional dan kontribusi saya di setiap peran.',
      items: [
        // urutan: terbaru di atas
        {
          role: 'Frontend Web Developer',
          company: 'CV Segitiga Sama Sisi',
          period: 'Februari 2025 – Sekarang',
          points: [
            'Merancang dan mengembangkan frontend Early Warning System dari tahap awal, meliputi arsitektur proyek, komponen antarmuka, hingga rilis ke produksi.',
            'Mengembangkan antarmuka sistem informasi untuk Dinas Perhubungan sesuai kebutuhan operasional instansi.',
            'Mengimplementasikan fitur baru pada Sistem Penomoran Penyiaran untuk mendukung proses bisnis yang terus berkembang.',
            'Bertanggung jawab atas pemeliharaan sistem LPTKDN, mencakup perbaikan bug dan penyempurnaan fitur untuk menjaga stabilitas aplikasi.',
          ],
          tech: ['React', 'TypeScript'],
        },
        {
          role: 'Frontend Web Developer',
          company: 'Sofyan Corporation',
          period: 'Februari 2024 – November 2024',
          points: [
            'Mengembangkan frontend Learning Management System (LMS) untuk mendukung kegiatan pembelajaran daring di sekolah.',
            'Membangun aplikasi internal perusahaan berbasis Next.js untuk mendukung operasional tim.',
          ],
          tech: ['React', 'Next.js', 'TypeScript'],
        },
      ],
    },
    projects: {
      title: 'Proyek',
      subtitle: 'Beberapa proyek yang pernah saya kerjakan.',
      demo: 'Demo',
      code: 'Kode',
      tabs: { professional: 'Profesional', personal: 'Personal' },
      empty: 'Belum ada proyek di kategori ini.',
      items: {
        sipeni: {
          title: 'SIPENI',
          desc: 'Sistem informasi peringatan dini bencana BPBD Kabupaten Demak: peta sebaran dan daerah rawan, statistik kejadian, laporan bencana dari masyarakat, monitoring sungai, tempat pengungsian, serta manajemen berita.',
        },
        smpptd: {
          title: 'SMPPTD — Komdigi',
          desc: 'Sistem Manajemen Penomoran Penyiaran Televisi Digital milik Kementerian Komunikasi dan Digital untuk penerbitan penomoran (LCN), informasi wilayah siaran, regulasi, dan berita penyiaran.',
        },
        'e-lptkdn': {
          title: 'e-LPTKDN — Kemnaker',
          desc: 'Layanan perizinan lembaga penempatan tenaga kerja dalam negeri Kementerian Ketenagakerjaan, termasuk pendaftaran perusahaan/lembaga dan pencarian lembaga berizin resmi.',
        },
        sidahub: {
          title: 'SIDAHUB',
          desc: 'Sistem informasi Dinas Perhubungan Kabupaten Halmahera Timur: retribusi dan ticketing pelabuhan, presensi dan kepegawaian, arsip surat, serta informasi publik.',
        },
        'tahu-kocek': {
          title: 'Tahu Kocek Merona',
          desc: 'Landing page UMKM tahu kocek dengan cerita brand, katalog menu per level pedas, serta tautan pemesanan ke GoFood, GrabFood, ShopeeFood, dan WhatsApp.',
        },
        'cerita-tumbuh-keluarga': {
          title: 'Cerita Tumbuh Keluarga',
          desc: 'PWA pencatat tumbuh kembang anak dan kesehatan keluarga: grafik pertumbuhan standar WHO, KBM Buku KIA 2024, jadwal imunisasi IDAI, vitamin A & obat cacing, serta BMI orang tua.',
        },
        'galaxia-animalium': {
          title: 'Galaxia Animalium',
          desc: 'Ensiklopedia visual satwa dunia berbahasa Indonesia dari data terbuka iNaturalist dan Wikipedia: pencarian dan filter spesies, foto pengamatan asli, klasifikasi taksonomi, peta sebaran, dan status konservasi IUCN.',
        },
        'info-gempa-cuaca': {
          title: 'Info Gempa & Cuaca',
          desc: 'Pantau gempa bumi terkini, prakiraan cuaca hingga tingkat desa, dan peringatan dini cuaca di Indonesia secara real-time dari data terbuka BMKG.',
        },
        'e-alquran': {
          title: "E-Alqur'an",
          desc: "Baca dan dengarkan 114 surah lengkap dengan terjemahan dan murottal, ditambah doa harian, bacaan shalat, dan Asmaul Husna.",
        },
        'd-movies': {
          title: 'D-Movies',
          desc: 'Jelajahi film, serial TV, dan tokoh dari TMDB: daftar trending, pencarian, trailer, serta watchlist yang tersimpan di browser.',
        },
        tastebite: {
          title: 'Tastebite',
          desc: 'Kumpulan resep dari seluruh dunia dengan pencarian berdasarkan bahan, resep tersimpan, daftar belanja, dan pilihan bahasa ID/EN.',
        },
      },
    },
    contact: {
      title: 'Kontak',
      subtitle:
        'Punya proyek, tawaran kerja, atau sekadar ingin menyapa? Silakan hubungi saya.',
      cta: 'Kirim Email',
      locationLabel: 'Lokasi',
      location: 'Indonesia',
    },
  },

  en: {
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'tentang', label: 'About' },
      { id: 'keterampilan', label: 'Skills' },
      { id: 'pengalaman', label: 'Experience' },
      { id: 'proyek', label: 'Projects' },
      { id: 'kontak', label: 'Contact' },
    ],
    languageLabel: 'English',
    themeLabel: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    menuLabel: { open: 'Open menu', close: 'Close menu' },
    hero: {
      greeting: "Hi, I'm Dimas Bagus Prasetyo",
      role: 'Frontend Web Developer',
      summary:
        'I focus on building modern, responsive websites centered on user experience. With experience in professional environments, I build interfaces that are fast, easy to use, and visually strong to deliver the best experience for every user.',
      cv: 'Curriculum Vitae',
    },
    about: {
      title: 'About Me',
      subtitle: 'A little about who I am and how I work.',
      paragraphs: [
        "I'm a Frontend Web Developer who enjoys turning designs into lively, clean, and comfortable web interfaces. To me, a good-looking UI has to go hand in hand with fast performance and maintainable code.",
        'Day to day I work with React, TypeScript, and Tailwind CSS. I am used to collaborating with designers and backend developers, from translating Figma designs to integrating REST APIs.',
        'As AI becomes an increasingly integral part of software development, I have adapted by using it as a supporting tool to speed up repetitive tasks, while staying grounded in a solid foundation of frontend development. Technical decisions, code structure, and final quality remain my responsibility, so the work I deliver stays reliable and accountable.',
      ],
      highlights: [
        {
          title: 'Responsive',
          desc: 'Consistent layouts across desktop, tablet, and mobile.',
        },
        {
          title: 'Performance',
          desc: 'Lightweight pages that load quickly for users.',
        },
        {
          title: 'Collaborative',
          desc: 'Clear communication with design and backend teams.',
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I use every day.',
      groups: [
        {
          title: 'Languages & Frameworks',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
        },
        {
          title: 'Styling & UI',
          items: ['Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Responsive Design'],
        },
        {
          title: 'Tools & Others',
          items: ['Git', 'Vite', 'REST API', 'Axios', 'Figma'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional background and contributions in each role.',
      items: [
        // order: newest first
        {
          role: 'Frontend Web Developer',
          company: 'CV Segitiga Sama Sisi',
          period: 'February 2025 – Present',
          points: [
            'Designed and developed the frontend of an Early Warning System from the ground up, covering project architecture, UI components, and production release.',
            'Developed the interface of an information system for the Department of Transportation (Dinas Perhubungan) based on its operational needs.',
            'Implemented new features in the Broadcasting Numbering System to support evolving business processes.',
            'Maintained the LPTKDN system, handling bug fixes and feature improvements to ensure application stability.',
          ],
          tech: ['React', 'TypeScript'],
        },
        {
          role: 'Frontend Web Developer',
          company: 'Sofyan Corporation',
          period: 'February 2024 – November 2024',
          points: [
            'Developed the frontend of a Learning Management System (LMS) to support online learning in schools.',
            'Built an internal company application with Next.js to support team operations.',
          ],
          tech: ['React', 'Next.js', 'TypeScript'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of the projects I have worked on.',
      demo: 'Demo',
      code: 'Code',
      tabs: { professional: 'Professional', personal: 'Personal' },
      empty: 'No projects in this category yet.',
      items: {
        sipeni: {
          title: 'SIPENI',
          desc: 'Disaster early-warning system for BPBD Demak Regency: incident and hazard-zone maps, disaster statistics, public incident reports, river monitoring, evacuation sites, and news management.',
        },
        smpptd: {
          title: 'SMPPTD — Komdigi',
          desc: 'Digital TV broadcast numbering management system for the Ministry of Communication and Digital Affairs, covering channel number (LCN) issuance, coverage areas, regulations, and broadcasting news.',
        },
        'e-lptkdn': {
          title: 'e-LPTKDN — Kemnaker',
          desc: 'Licensing service for domestic job placement agencies at the Ministry of Manpower, including company registration and a public search of officially licensed agencies.',
        },
        sidahub: {
          title: 'SIDAHUB',
          desc: 'Integrated platform for the Transportation Agency of East Halmahera Regency: port levies and ticketing, staff attendance and HR, document archiving, and public information.',
        },
        'tahu-kocek': {
          title: 'Tahu Kocek Merona',
          desc: 'Landing page for a local tofu snack business, featuring the brand story, a menu by spice level, and ordering links to GoFood, GrabFood, ShopeeFood, and WhatsApp.',
        },
        'cerita-tumbuh-keluarga': {
          title: 'Cerita Tumbuh Keluarga',
          desc: 'A PWA for tracking child growth and family health: WHO growth charts, KIA 2024 weight-gain checks, IDAI immunization schedules, vitamin A & deworming rounds, and parent BMI.',
        },
        'galaxia-animalium': {
          title: 'Galaxia Animalium',
          desc: "A visual encyclopedia of the world's wildlife in Indonesian, built on open data from iNaturalist and Wikipedia: species search and filters, real observation photos, taxonomy, distribution maps, and IUCN conservation status.",
        },
        'info-gempa-cuaca': {
          title: 'Earthquake & Weather Info',
          desc: "Real-time earthquake reports, village-level weather forecasts, and severe weather warnings across Indonesia, powered by BMKG's open data.",
        },
        'e-alquran': {
          title: "E-Alqur'an",
          desc: 'Read and listen to all 114 surahs with translations and murottal audio, plus daily prayers, salah recitations, and Asmaul Husna.',
        },
        'd-movies': {
          title: 'D-Movies',
          desc: 'Browse movies, TV shows, and people from TMDB: trending lists, search, trailers, and a watchlist saved in the browser.',
        },
        tastebite: {
          title: 'Tastebite',
          desc: 'Recipes from around the world with search by ingredient, saved recipes, a shopping list, and ID/EN language options.',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Have a project, a job offer, or just want to say hi? Feel free to reach out.',
      cta: 'Send Email',
      locationLabel: 'Location',
      location: 'Indonesia',
    },
  },
};
