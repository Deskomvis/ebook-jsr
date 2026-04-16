/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  ChevronRight, 
  ChevronLeft, 
  Leaf, 
  ShieldCheck, 
  Droplets, 
  BookOpen,
  Search,
  Maximize2,
  Share2,
  Download
} from 'lucide-react';
import { recipes, Recipe } from './recipes';
import coverBg from '@/Assets/cover-bg.jpg';
import recipeBg from '@/Assets/recipe-bg.jpg';


const CATEGORIES = [
  { id: 'all', name: 'Semua Resep' },
  { id: 'detox', name: 'Detoks' },
  { id: 'immunity', name: 'Imunitas' },
  { id: 'organ', name: 'Organ' },
  { id: 'health', name: 'Kesehatan' },
  { id: 'treatment', name: 'Pengobatan' },
];

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageIndex]);

  // Flatten pages for the flipbook
  const pages = useMemo(() => {
    const filtered = recipes.filter(r => {
      const matchesFilter = filter === 'all' || r.category === filter;
      const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           r.originalTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    return [
      { type: 'cover' },
      { type: 'intro' },
      { type: 'toc' },
      ...filtered.map(r => ({ type: 'recipe', data: r })),
      { type: 'back-cover' }
    ];
  }, [filter, searchQuery]);

  const totalPages = pages.length;

  const nextPage = () => {
    if (pageIndex < totalPages - 1) {
      setDirection(1);
      setPageIndex(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setDirection(-1);
      setPageIndex(prev => prev - 1);
    }
  };

  const goToPage = (index: number) => {
    setDirection(index > pageIndex ? 1 : -1);
    setPageIndex(index);
    setIsMenuOpen(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className="fixed inset-0 bg-[#f8f9f8] text-[#1a1a1a] font-sans overflow-hidden select-none" role="main" aria-label="E-Magazine Resep Sehat JSR">
      {/* Accessibility: Skip to content */}
      <a href="#magazine-content" className="sr-only focus:not-sr-only absolute top-4 left-4 z-[100] bg-[#76b82a] text-white px-4 py-2 font-bold">
        Lompat ke konten utama
      </a>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </div>

      {/* Top Navigation */}
      {/* Top Navigation - Hidden on mobile, visible on desktop */}
      <nav className="hidden md:flex absolute top-0 left-0 right-0 z-50 px-8 py-6 justify-end items-center pointer-events-none">
        
        {/* Right Nav Icons */}
        <div className="flex items-center gap-8 pointer-events-auto">
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-[#2d5a27] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d5a27] p-1 rounded" aria-label="Bagikan"><Share2 className="w-5 h-5" /></button>
            <button className="text-gray-600 hover:text-[#2d5a27] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d5a27] p-1 rounded" aria-label="Unduh"><Download className="w-5 h-5" /></button>
            <button className="text-gray-600 hover:text-[#2d5a27] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d5a27] p-1 rounded" aria-label="Layar Penuh"><Maximize2 className="w-5 h-5" /></button>
          </div>
        </div>
      </nav>

      {/* Magazine Container */}
      <div id="magazine-content" className="relative w-full h-full flex items-start md:items-center justify-center perspective-[2000px] px-2 sm:px-4 md:px-0 py-0 md:py-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={pageIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              rotateY: { duration: 0.6 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const swipeThreshold = 50;
              if (info.offset.x > swipeThreshold) {
                prevPage();
              } else if (info.offset.x < -swipeThreshold) {
                nextPage();
              }
            }}
            className="relative w-full aspect-[0.7/1] md:aspect-auto md:w-full md:h-full md:max-w-none bg-white md:shadow-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex overflow-hidden border border-black/5 touch-none pb-12 md:pb-28"
            aria-live="polite"
          >
            {/* Spine Shadow (Removed as per user request) */}
            {/* <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/5 to-black/10 z-40 pointer-events-none" aria-hidden="true" /> */}
            
            {/* Mobile Spine Shadow (Removed as per user request) */}
            {/* <div className="md:hidden absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/10 to-transparent z-40 pointer-events-none" aria-hidden="true" /> */}

            {/* Render Page Content */}
            <PageContent 
              page={pages[pageIndex]} 
              pageIndex={pageIndex} 
              totalPages={totalPages} 
              goToPage={goToPage}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filter={filter}
              setFilter={setFilter}
              pages={pages}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Mobile Only) */}
        <button 
          onClick={prevPage}
          disabled={pageIndex === 0}
          className="md:hidden absolute left-2 w-10 h-10 flex items-center justify-center bg-white/90 shadow-lg rounded-full disabled:opacity-0 z-50 focus:outline-none"
          aria-label="Halaman Sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextPage}
          disabled={pageIndex === totalPages - 1}
          className="md:hidden absolute right-2 w-10 h-10 flex items-center justify-center bg-white/90 shadow-lg rounded-full disabled:opacity-0 z-50 focus:outline-none"
          aria-label="Halaman Berikutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar (Compact) */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-2 md:py-4 flex flex-col items-center gap-1 md:gap-2 z-[50]">
        <div className="w-full max-w-xl h-2 bg-black/10 relative rounded-full overflow-hidden" role="progressbar" aria-valuenow={pageIndex + 1} aria-valuemin={1} aria-valuemax={totalPages}>
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#2d5a27]"
            initial={false}
            animate={{ width: `${((pageIndex + 1) / totalPages) * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm uppercase tracking-[0.3em] text-gray-700 font-bold">
          {/* Desktop Nav Arrows (Integrated) */}
          <button 
            onClick={prevPage}
            disabled={pageIndex === 0}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:bg-[#2d5a27] hover:text-white disabled:opacity-20 transition-all focus:outline-none"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <span>Halaman {pageIndex + 1}</span>
            <span className="text-[#2d5a27]" aria-hidden="true">/</span>
            <span>{totalPages}</span>
          </div>

          <button 
            onClick={nextPage}
            disabled={pageIndex === totalPages - 1}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:bg-[#2d5a27] hover:text-white disabled:opacity-20 transition-all focus:outline-none"
            aria-label="Berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sidebar Menu Removed */}
    </div>
  );
}

function PageContent({ page, pageIndex, totalPages, goToPage, searchQuery, setSearchQuery, filter, setFilter, pages }: any) {
  if (page.type === 'cover') {
    return (
      <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden bg-[#f5f2ed]">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={coverBg} 
            alt="Bahan-bahan herbal premium sebagai latar belakang" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-12 text-center w-full h-full max-w-2xl">
          {/* Badge JH (Smaller & Top) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 border border-[#2d5a27] flex items-center justify-center rotate-45 mb-6 md:mb-8 bg-white/80 backdrop-blur-sm"
          >
            <span className="rotate-[-45deg] text-[#2d5a27] font-serif text-2xl font-bold">JH</span>
          </motion.div>

          {/* Main Title Styled like the book */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center mb-8 md:mb-12"
          >
            <h1 className="font-sans font-black text-6xl md:text-8xl uppercase tracking-tight text-[#6b9c43] leading-[0.9]">
              Buku Resep <br />
              JSR
            </h1>
            <p className="font-serif text-xl md:text-2xl text-[#8b4513] mt-4 font-bold">
              Hidup Sehat Menebar Manfaat
            </p>
          </motion.div>

          {/* Circle Badge (Large Highlight) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="w-64 h-64 md:w-96 md:h-96 bg-[#2d5a27] rounded-full flex flex-col items-center justify-center shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-8 border-white group hover:scale-105 transition-transform duration-500"
          >
            <span className="text-white font-serif text-7xl md:text-9xl font-bold leading-none">200</span>
            <span className="text-white text-sm md:text-base uppercase tracking-widest font-bold mt-2">Resep Sehat</span>
            <div className="w-16 h-[2px] bg-white/50 my-4" />
            <span className="text-white font-serif text-5xl md:text-7xl font-bold leading-none">JSR</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-gray-800 text-sm md:text-sm max-w-xs leading-relaxed font-medium bg-white/30 backdrop-blur-sm p-3 rounded-lg border border-white/20"
          >
            "Sebuah perjalanan terkurasi melalui resep berbasis Al-Qur'an dan Sunnah untuk kesehatan optimal."
          </motion.p>
        </div>

        {/* Decorative Frame */}
        <div className="absolute inset-0 border-[15px] md:border-[30px] border-white/10 pointer-events-none z-20" />
      </div>
    );
  }

  if (page.type === 'intro') {
    return (
      <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 h-full p-8 md:p-16 flex flex-col justify-center border-r border-black/10 overflow-y-auto no-scrollbar bg-white">
          <span className="text-[#2d5a27] text-sm md:text-sm uppercase tracking-[0.4em] mb-4 md:mb-8 font-bold">Pengantar</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 md:mb-8 leading-tight text-black">Alam adalah <br /><span className="text-[#2d5a27]">Kemewahan Sejati</span></h2>
          
          <div className="space-y-6 md:space-y-6 text-gray-800 text-xl md:text-lg leading-relaxed font-serif">
            <p>Melalui lisan Rasul-Nya, Allah menjanjikan obat bagi setiap penyakit. Rasulullah sendiri bahkan mencontohkan bagaimana berobat yang sesuai dengan ketentuan syariat, termasuk menggunakan bahan-bahan alami (tanaman dan zat makanan) yang disebutkan dalam Al-Qur'an seperti madu, kurma, zaitun, jahe, labu, dan lain-lain.</p>
            <p>Selain bahan-bahan alami yang disebutkan Al-Qur'an itu, melalui kajian-kajian ilmiah, bahan-bahan alami yang ada di sekitar kita dan bahkan berlimpah di dapur kita, terbukti mengandung khasiat pengobatan yang menakjubkan. Sebutlah kunyit, temu lawak, temu putih, kencut serai, dan lain-lain.</p>
            <p>Buku ini merangkum pendalaman pengobatan Islami berbasiskan Al-Qur'an dan sabda Baginda Rasulullah yang telah dipelajari selama bertahun-tahun. Dari hasil pendalaman tersebut, bahan-bahan alami yang mudah didapatkan ternyata sangat membantu menjaga kesehatan dan menyembuhkan penyakit.</p>
            <p>Buku ebook ini bersumber dari referensi Buku Resep Sehat JSR yang merupakan rangkuman limpahan manfaat dari bahan-bahan alami tersebut yang diracik menjadi 200 resep menyehatkan berdasarkan pengalaman para praktisi herbal. Tentu semua resep itu bukan jaminan kesembuhan karena kesembuhan hanyalah karena izin Allah. Selamat membaca dan mendapatkan limpahan manfaatnya!</p>
          </div>
        </div>
        <div className="hidden md:block w-1/2 h-full relative bg-black">
          <img 
            src={recipeBg} 
            alt="Bahan-bahan herbal segar di dapur" 
            className="w-full h-full object-cover blur-[2px] opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/10 to-transparent" />
          <div className="absolute bottom-16 left-16 right-16">
            <div className="p-8 bg-white/95 backdrop-blur-md border border-[#2d5a27]/30 shadow-2xl">
              <span className="text-[#2d5a27] text-xs uppercase tracking-widest mb-4 block font-bold">Catatan Editor</span>
              <p className="text-lg font-serif italic text-gray-800 font-bold">
                "Nikmati setiap tegukan sebagai bentuk cinta pada diri sendiri dan syukur kepada Sang Pencipta."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page.type === 'toc') {
    return (
      <div className="w-full h-full flex flex-col p-8 md:p-10 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-6 gap-3 md:gap-4">
          <div>
            <span className="text-[#2d5a27] text-xs md:text-xs uppercase tracking-[0.4em] mb-1 md:mb-2 block font-bold">Perpustakaan</span>
            <h1 className="font-serif text-4xl md:text-5xl text-black leading-none">Indeks <span className="italic text-[#2d5a27]">Penyembuhan</span></h1>
          </div>
          <div className="w-full md:w-64 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d5a27]" />
            <input 
              type="text" 
              placeholder="Cari resep..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/5 border border-[#2d5a27]/30 py-3 pl-12 pr-4 text-sm md:text-sm uppercase tracking-widest focus:outline-none focus:border-[#2d5a27] text-black rounded-lg placeholder:text-gray-500"
              aria-label="Cari resep berdasarkan nama atau bahan"
            />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-3 overflow-y-auto pr-2 md:pr-4 no-scrollbar">
          {recipes.filter(r => filter === 'all' || r.category === filter).map((r, i) => (
            <div 
              key={r.id}
              onClick={() => {
                const idx = pages.findIndex(p => p.type === 'recipe' && p.data?.id === r.id);
                if (idx !== -1) goToPage(idx);
              }}
              className="flex justify-between items-baseline group cursor-pointer border-b border-black/5 pb-2 focus:outline-none focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27] rounded-sm"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && goToPage(3 + i)}
            >
              <div className="flex flex-col">
                <span className="text-xs md:text-[11px] uppercase tracking-widest text-[#2d5a27] font-bold">{r.category}</span>
                <span className="font-serif text-lg md:text-lg text-gray-900 group-hover:text-[#2d5a27] transition-colors font-bold leading-tight">{r.title}</span>
              </div>
              <span className="font-serif text-xs md:text-xs text-gray-500 italic font-bold whitespace-nowrap ml-2" aria-label={`Halaman ${i + 4}`}>Hal {i + 4}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-6 flex gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 md:px-5 py-3 md:py-2 border border-black/10 text-xs md:text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-[#2d5a27] rounded-full font-bold ${
                filter === cat.id ? 'bg-[#2d5a27] text-white border-[#2d5a27] shadow-md' : 'border-black/10 text-gray-700 hover:border-[#2d5a27]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (page.type === 'recipe') {
    const r = page.data as Recipe;
    return (
      <article className="w-full h-full flex flex-col md:flex-row" aria-labelledby={`recipe-title-${r.id}`}>
        {/* Left Page: Visuals & Intro */}
        <div className="w-full md:w-1/2 h-[50%] md:h-full relative overflow-hidden group border-b md:border-b-0 border-black/10 bg-black">
          <img 
            src={recipeBg} 
            alt={`Foto bahan herbal untuk resep ${r.title}`} 
            className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100 blur-[3px] opacity-70"
            referrerPolicy="no-referrer"
          />
          {/* Dark Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-black/20" />
          <div className="absolute top-6 md:top-auto md:bottom-24 left-6 md:left-16 right-6 md:right-16">
            <span className="text-[#a4d46c] text-sm md:text-sm uppercase tracking-[0.4em] mb-2 md:mb-4 block font-bold">Halaman Resep</span>
            <h1 id={`recipe-title-${r.id}`} className="font-serif text-3xl md:text-6xl leading-tight mb-2 md:mb-6 text-white drop-shadow-2xl font-bold">{r.title}</h1>
            <p className="text-white font-serif italic text-sm md:text-xl leading-relaxed line-clamp-2 md:line-clamp-none drop-shadow-lg font-bold">
              "{r.description}"
            </p>

            <section aria-label="Manfaat Kesehatan" className="mt-4 md:mt-8">
              <h2 className="text-[#a4d46c] text-sm md:text-sm uppercase tracking-[0.4em] mb-4 flex items-center gap-4 font-bold">
                Manfaat <div className="h-[1px] flex-1 bg-[#a4d46c]/30" aria-hidden="true" />
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {r.benefits.map((benefit, i) => (
                  <span key={i} className="px-3 md:px-5 py-2 md:py-2 border border-white/40 bg-white/10 backdrop-blur-md text-white text-xs md:text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#2d5a27] hover:border-[#2d5a27] transition-all cursor-default shadow-lg">
                    {benefit}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right Page: Details */}
        <div className="w-full md:w-1/2 h-[50%] md:h-full bg-white p-6 md:p-10 overflow-y-auto no-scrollbar border-l border-black/10">
          <div className="space-y-6 md:space-y-8">
            <section aria-label="Bahan-bahan">
              <h2 className="bg-[#e8f5e9] text-[#1b5e20] text-base md:text-base uppercase tracking-[0.4em] py-2.5 px-6 mb-3 md:mb-5 flex items-center gap-4 font-bold rounded-md shadow-sm border-l-4 border-[#2d5a27]">
                Bahan-bahan <div className="h-[2px] flex-1 bg-[#2d5a27]/30" aria-hidden="true" />
              </h2>
              <ul className="space-y-3 md:space-y-3">
                {r.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 group">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2d5a27] mt-1.5 md:mt-2" aria-hidden="true" />
                    <span className="text-gray-900 text-base md:text-base group-hover:text-black transition-colors font-bold">{ing}</span>
                  </li>
                ))}
              </ul>
            </section>
 
            <section aria-label="Cara Pembuatan">
              <h2 className="text-[#2d5a27] text-base md:text-base uppercase tracking-[0.4em] mb-3 md:mb-6 flex items-center gap-4 font-bold">
                Persiapan <div className="h-[2px] flex-1 bg-[#2d5a27]/30" aria-hidden="true" />
              </h2>
              <div className="space-y-6 md:space-y-6">
                {r.preparation.map((step, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 group">
                    <span className="font-serif text-3xl md:text-4xl text-[#2d5a27] opacity-40 group-hover:opacity-100 transition-opacity font-bold" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-gray-900 text-base md:text-base leading-relaxed pt-1 md:pt-1.5 group-hover:text-black transition-colors font-bold">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="pt-4 md:pt-6 border-t border-black/10 flex justify-between items-center opacity-60">
              <span className="text-xs md:text-sm uppercase tracking-widest text-gray-800 font-bold">Referensi: {r.originalTitle}</span>
              <BookOpen className="w-6 h-6 text-[#2d5a27]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (page.type === 'back-cover') {
    return (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center p-8 md:p-20 text-center">
        <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-[#2d5a27] flex items-center justify-center rotate-45 mb-10 md:mb-16">
          <span className="rotate-[-45deg] text-[#2d5a27] font-serif text-xl md:text-3xl font-bold">JH</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl mb-6 md:mb-8 text-black">JSR Herbal <br /><span className="italic text-[#2d5a27]">e-magazine</span></h1>
        <div className="w-12 md:w-20 h-1 bg-[#2d5a27] mb-8 md:mb-12 rounded-full" />
        <p className="text-gray-800 font-serif italic text-lg md:text-2xl max-w-sm leading-relaxed mb-10 md:mb-16 font-bold">
          "Semoga setiap halaman membawa Anda lebih dekat ke kesehatan yang sejati melalui izin Allah."
        </p>
        <button 
          onClick={() => goToPage(0)}
          className="px-10 md:px-16 py-4 md:py-5 bg-[#2d5a27] text-white text-sm md:text-base uppercase tracking-[0.3em] font-bold hover:bg-[#1b5e20] transition-all focus:outline-none focus:ring-4 focus:ring-[#2d5a27] rounded-full shadow-2xl"
          aria-label="Baca Lagi dari Awal"
        >
          Baca Lagi
        </button>
        <div className="mt-12 md:mt-20 text-xs md:text-sm uppercase tracking-[0.5em] text-gray-600 font-bold">
          JSR Herbal • Edisi 2026
        </div>
      </div>
    );
  }

  return null;
}
