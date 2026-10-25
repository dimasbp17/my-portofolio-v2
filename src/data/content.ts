// Semua teks website ada di sini, edit sesuai data asli.
// Bagian bertanda TODO masih contoh dan perlu diganti.

export type Lang = 'id' | 'en';

type Content = {
  nav: { id: string; label: string }[];
  languageLabel: string;
  themeLabel: { toLight: string; toDark: string };
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
    footer: string;
  };
};

// data yang sama di kedua bahasa
// TODO: data proyek masih dummy, ganti dengan proyek asli
// professional = proyek kantor/klien, personal = proyek pribadi
export type ProjectCategory = 'professional' | 'personal';
export const projectCategories: ProjectCategory[] = ['professional', 'personal'];

export const projects = [
  {
    id: 'dashboard',
    category: 'professional',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    gradient: 'from-blue-500 to-cyan-400',
    demo: 'https://example.com',
    code: 'https://github.com/dimasbp17',
  },
  {
    id: 'ecommerce',
    category: 'professional',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-violet-500 to-fuchsia-400',
    demo: 'https://example.com',
    code: 'https://github.com/dimasbp17',
  },
  {
    id: 'notes',
    category: 'personal',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    gradient: 'from-amber-500 to-orange-400',
    code: 'https://github.com/dimasbp17',
  },
  {
    id: 'news',
    category: 'professional',
    tech: ['Next.js', 'TypeScript', 'REST API'],
    gradient: 'from-emerald-500 to-teal-400',
    demo: 'https://example.com',
  },
  {
    id: 'landing',
    category: 'personal',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-rose-500 to-pink-400',
    demo: 'https://example.com',
    code: 'https://github.com/dimasbp17',
  },
  {
    id: 'weather',
    category: 'personal',
    tech: ['React', 'Axios', 'OpenWeather API'],
    gradient: 'from-sky-500 to-indigo-400',
    demo: 'https://example.com',
    code: 'https://github.com/dimasbp17',
  },
] as const satisfies readonly {
  id: string;
  category: ProjectCategory;
  tech: readonly string[];
  gradient: string;
  demo?: string;
  code?: string;
}[];

export type ProjectId = (typeof projects)[number]['id'];

export const contactLinks = {
  email: 'dimas@example.com', // TODO: ganti email
  linkedin: 'https://www.linkedin.com/in/username', // TODO: ganti url linkedin
  github: 'https://github.com/dimasbp17', // TODO: pastikan username github benar
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
      subtitle: 'Perjalanan karier saya sejauh ini.',
      items: [
        // urutan: terbaru di atas
        {
          role: 'Frontend Web Developer',
          company: 'CV Segitiga Sama Sisi',
          period: 'Februari 2025 – Sekarang',
          points: [
            'Membangun Sistem Peringatan Dini (Early Warning System) dari nol, mulai dari struktur proyek hingga antarmuka siap pakai.',
            'Membangun sistem informasi untuk Dinas Perhubungan.',
            'Mengembangkan fitur-fitur baru pada Sistem Penomoran Penyiaran.',
            'Melakukan maintenance sistem LPTKDN, termasuk perbaikan bug dan penyesuaian fitur agar aplikasi tetap stabil.',
          ],
          tech: ['React', 'TypeScript'],
        },
        {
          role: 'Frontend Web Developer',
          company: 'Sofyan Corporation',
          period: 'Februari 2024 – November 2024',
          points: [
            'Membangun Learning Management System (LMS) untuk sekolah sebagai sarana pembelajaran online.',
            'Membangun aplikasi internal perusahaan menggunakan Next.js.',
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
        dashboard: {
          title: 'Dashboard Analitik',
          desc: 'Dashboard penjualan interaktif dengan grafik, filter periode, dan ringkasan performa bisnis.',
        },
        ecommerce: {
          title: 'Toko Online',
          desc: 'Website e-commerce dengan katalog produk, keranjang belanja, dan alur checkout.',
        },
        notes: {
          title: 'Aplikasi Catatan',
          desc: 'Aplikasi catatan dengan pencarian, label, dan penyimpanan lokal di browser.',
        },
        news: {
          title: 'Portal Berita',
          desc: 'Portal berita dengan halaman kategori, pencarian, dan rendering sisi server.',
        },
        landing: {
          title: 'Landing Page Startup',
          desc: 'Landing page responsif dengan animasi halus untuk memperkenalkan produk.',
        },
        weather: {
          title: 'Aplikasi Cuaca',
          desc: 'Menampilkan cuaca terkini dan prakiraan 5 hari berdasarkan kota yang dicari.',
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
      footer: 'Dibuat dengan React & Tailwind CSS.',
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
      subtitle: 'My career journey so far.',
      items: [
        // order: newest first
        {
          role: 'Frontend Web Developer',
          company: 'CV Segitiga Sama Sisi',
          period: 'February 2025 – Present',
          points: [
            'Built an Early Warning System from scratch, from project structure to a production-ready interface.',
            'Built an information system for the Department of Transportation (Dinas Perhubungan).',
            'Developed new features for the Broadcasting Numbering System.',
            'Maintained the LPTKDN system, including bug fixes and feature adjustments to keep the application stable.',
          ],
          tech: ['React', 'TypeScript'],
        },
        {
          role: 'Frontend Web Developer',
          company: 'Sofyan Corporation',
          period: 'February 2024 – November 2024',
          points: [
            'Built a Learning Management System (LMS) for schools to support online learning.',
            'Built an internal company application using Next.js.',
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
        dashboard: {
          title: 'Analytics Dashboard',
          desc: 'Interactive sales dashboard with charts, period filters, and business performance summaries.',
        },
        ecommerce: {
          title: 'Online Store',
          desc: 'E-commerce website with a product catalog, shopping cart, and checkout flow.',
        },
        notes: {
          title: 'Notes App',
          desc: 'Notes app with search, labels, and local storage in the browser.',
        },
        news: {
          title: 'News Portal',
          desc: 'News portal with category pages, search, and server-side rendering.',
        },
        landing: {
          title: 'Startup Landing Page',
          desc: 'Responsive landing page with smooth animations to introduce a product.',
        },
        weather: {
          title: 'Weather App',
          desc: 'Shows current weather and a 5-day forecast for any searched city.',
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
      footer: 'Built with React & Tailwind CSS.',
    },
  },
};
