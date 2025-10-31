import { Languages } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const menus = [
    { id: 'home', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'keterampilan', label: 'Keterampilan' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-center py-4 fixed">
        <div className="bg-white/15 text-white text-sm border border-white/20 rounded-full px-5 h-12 w-fit flex items-center justify-center">
          <div className="flex gap-8 justify-center items-center">
            {menus.map((menu, idx) => (
              <ul
                key={idx}
                className="hover:text-[#60a5fa] duration-200 cursor-pointer"
              >
                <li>{menu.label}</li>
              </ul>
            ))}
            <div>|</div>
            <div>
              <Button className="rounded-full text-xs bg-blue-500 hover:bg-blue-500/80 duration-200">
                <Languages /> Indonesia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// text-[#60a5fa]

export default Navbar;
