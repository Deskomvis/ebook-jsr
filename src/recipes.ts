export interface Recipe {
  id: string;
  category: 'detox' | 'immunity' | 'brain' | 'organ' | 'health' | 'juice' | 'treatment';
  title: string;
  originalTitle: string;
  description: string;
  ingredients: string[];
  preparation: string[];
  benefits: string[];
  imagePrompt: string;
}

export const recipes: Recipe[] = [
  {
    id: 'leaky-gut-recovery',
    category: 'detox',
    title: 'Ramuan Pemulihan Usus Bocor',
    originalTitle: 'RESEP USUS BOCOR',
    description: 'Campuran kuat yang dirancang untuk mengembalikan integritas usus dan mendukung kesehatan pasangan suami istri dengan biji-bijian padat nutrisi.',
    ingredients: [
      'Biji semangka (dihaluskan)',
      'Madu organik murni',
      'Air matang'
    ],
    preparation: [
      'Haluskan biji semangka sampai menjadi bubuk.',
      'Campurkan bubuk biji semangka dengan air matang.',
      'Tambahkan madu organik murni secukupnya dan aduk rata.'
    ],
    benefits: [
      'Menyembuhkan sindrom usus bocor',
      'Kaya akan zinc alami dan mineral esensial',
      'Mendukung kesehatan reproduksi (Pasutri)',
      'Tinggi pati resisten untuk mikrobioma usus'
    ],
    imagePrompt: 'nano banana pro style, ultra-realistic macro photography of ground watermelon seeds and golden honey, soft cinematic side lighting, luxury editorial food styling, minimalist dark stone background, 8k resolution, vibrant natural textures'
  },
  {
    id: 'intestinal-detox-tonic',
    category: 'detox',
    title: 'Tonik Detoks Usus',
    originalTitle: 'DETOX USUS',
    description: 'Campuran lembut dan kaya nutrisi untuk membersihkan saluran pencernaan dan meningkatkan penyerapan nutrisi.',
    ingredients: [
      '1 buah alpukat matang',
      '2 sdm madu murni',
      '1/2 sdt bubuk kopi organik',
      'Air matang'
    ],
    preparation: [
      'Campurkan alpukat, madu, dan bubuk kopi dalam blender.',
      'Tambahkan air untuk mencapai konsistensi yang diinginkan.',
      'Blender sampai benar-benar halus dan lembut.',
      'Konsumsi sebelum makan untuk efek detoks maksimal.'
    ],
    benefits: [
      'Mengikat dan membuang mukoid usus',
      'Pembersihan saluran pencernaan yang mendalam',
      'Meningkatkan penyerapan nutrisi secara keseluruhan',
      'Penambah energi alami'
    ],
    imagePrompt: 'nano banana pro style, high-end food photography of a creamy avocado smoothie in a crystal glass, honey drizzle, hint of organic coffee grounds, soft natural morning light, minimalist luxury aesthetic, 8k, ultra-detailed'
  },
  {
    id: 'gastric-balance-tonic',
    category: 'organ',
    title: 'Tonik Keseimbangan Lambung',
    originalTitle: 'RESEP ASAM LAMBUNG',
    description: 'Infusi herbal yang menenangkan untuk menyeimbangkan asam lambung dan menenangkan lapisan pencernaan.',
    ingredients: [
      '1 ruas jahe seukuran jempol',
      '1 batang kayu manis',
      '1 sdt biji ketumbar',
      'Madu murni secukupnya',
      '250-300ml air panas'
    ],
    preparation: [
      'Masukkan jahe, kayu manis, dan ketumbar ke dalam gelas.',
      'Tuangkan air panas ke atas bahan-bahan tersebut.',
      'Biarkan meresap sampai hangat.',
      'Tambahkan madu dan aduk sebelum diminum.'
    ],
    benefits: [
      'Menetralkan asam lambung berlebih',
      'Mengurangi kembung dan ketidaknyamanan',
      'Anti-inflamasi untuk lapisan lambung',
      'Mendukung pencernaan yang sehat'
    ],
    imagePrompt: 'nano banana pro style, macro shot of steaming herbal tea with a cinnamon stick and fresh ginger slices, warm golden hour lighting, high-end editorial food photography, dark moody background, 8k, realistic steam'
  },
  {
    id: 'sinus-relief-elixir',
    category: 'treatment',
    title: 'Ramuan Pereda Sinus',
    originalTitle: 'RESEP SINUSITIS',
    description: 'Campuran tropis yang menyegarkan untuk membersihkan saluran pernapasan dan mengurangi peradangan sinus.',
    ingredients: [
      '1 buah nanas ukuran sedang (bonggol nanas)',
      '1 kapsul habbatusauda (minyak jintan hitam)',
      '1 gelas air matang'
    ],
    preparation: [
      'Blender bonggol dan daging nanas dengan air.',
      'Tuangkan ke dalam gelas dan tambahkan habbatusauda.',
      'Tunggu sampai endapan turun.',
      'Minum bagian atas cairan yang bening.'
    ],
    benefits: [
      'Membersihkan kemacetan sinus',
      'Sifat anti-histamin alami',
      'Mengurangi peradangan pernapasan',
      'Kaya akan Vitamin C dan Bromelain'
    ],
    imagePrompt: 'nano banana pro style, minimalist luxury photography of fresh pineapple juice in a sleek glass, soft natural lighting, high-end food styling, clean white marble background, 8k, ultra-realistic textures'
  },
  {
    id: 'dengue-recovery-support',
    category: 'treatment',
    title: 'Dukungan Pemulihan DBD',
    originalTitle: 'RESEP DEMAM BERDARAH',
    description: 'Campuran nutrisi khusus untuk meningkatkan kadar trombosit dan mendukung sistem kekebalan tubuh selama pemulihan.',
    ingredients: [
      '10g beras merah',
      '85g air kelapa',
      '5g kedelai non-GMO'
    ],
    preparation: [
      'Blender semua bahan bersama-sama sampai halus.',
      'Konsumsi segera untuk menjaga aktivitas enzim.'
    ],
    benefits: [
      'Merangsang respon sistem kekebalan tubuh',
      'Meningkatkan kadar trombosit secara alami',
      'Menghidrasi dengan elektrolit esensial',
      'Menyediakan protein nabati bersih'
    ],
    imagePrompt: 'nano banana pro style, professional health tonic photography, small minimalist glass, natural ingredients blurred in background, soft morning light, high-end medical aesthetic, 8k, ultra-detailed'
  },
  {
    id: 'respiratory-relief-tonic',
    category: 'treatment',
    title: 'Tonik Pereda Pernapasan',
    originalTitle: 'RESEP BATUK BERDAHAK',
    description: 'Tonik hangat berbahan rempah untuk membersihkan paru-paru dan menenangkan batuk yang membandel.',
    ingredients: [
      '1 sdt cengkeh',
      '3 bunga lawang',
      '250-300ml air panas',
      'Madu murni secukupnya'
    ],
    preparation: [
      'Seduh cengkeh dan bunga lawang dalam air panas.',
      'Biarkan sampai air menjadi harum dan hangat.',
      'Tambahkan madu dan konsumsi selagi hangat.',
      'Paling baik diminum sebelum tidur atau saat batuk menyerang.'
    ],
    benefits: [
      'Membersihkan dahak dan lendir',
      'Anti-bakteri alami untuk saluran pernapasan',
      'Menenangkan iritasi tenggorokan',
      'Menghangatkan tubuh'
    ],
    imagePrompt: 'nano banana pro style, macro photography of star anise and cloves in a warm herbal infusion, steam rising, warm ambient lighting, high-end editorial food photography, dark moody background, 8k'
  },
  {
    id: 'reproductive-detox-elixir',
    category: 'health',
    title: 'Ramuan Detoks Reproduksi',
    originalTitle: 'DETOX REPRODUKSI',
    description: 'Infusi khusus untuk membersihkan sistem reproduksi dan menyeimbangkan energi hormonal.',
    ingredients: [
      '2 batang kayu manis',
      '1 ruas jahe seukuran jempol',
      '600ml air matang'
    ],
    preparation: [
      'Rendam semua bahan dalam air selama minimal 6 jam (gaya infused water).',
      'Minum sepanjang hari.',
      'Dapat dikonsumsi hangat dengan menyeduh dalam air panas selama 15 menit.'
    ],
    benefits: [
      'Meringankan kram menstruasi',
      'Mendetoksifikasi organ reproduksi',
      'Meningkatkan tingkat energi',
      'Mendukung keseimbangan hormonal'
    ],
    imagePrompt: 'nano banana pro style, minimalist luxury infused water bottle with cinnamon sticks and ginger, soft natural lighting, high-end lifestyle photography, clean bright background, 8k, ultra-realistic'
  },
  {
    id: 'anti-inflammatory-golden-milk',
    category: 'immunity',
    title: 'Susu Emas Anti-Inflamasi',
    originalTitle: 'RESEP ANTI RADANG',
    description: 'Campuran anti-inflamasi yang kuat menampilkan kekuatan penyembuhan kunyit dan lada hitam.',
    ingredients: [
      '1 sdt kunyit bubuk',
      '1 buah jeruk nipis',
      'Sejumput lada hitam',
      '300ml air hangat',
      'Madu murni'
    ],
    preparation: [
      'Campurkan kunyit dan lada hitam dalam air hangat.',
      'Tambahkan air perasan jeruk nipis dan madu.',
      'Aduk rata dan segera minum.'
    ],
    benefits: [
      'Anti-inflamasi sistemik yang kuat',
      'Meningkatkan fungsi kekebalan tubuh',
      'Mendukung kesehatan sendi',
      'Kaya akan antioksidan'
    ],
    imagePrompt: 'nano banana pro style, high-end food photography of golden milk in a minimalist ceramic mug, turmeric powder dusting, warm cinematic lighting, dark moody background, 8k, ultra-detailed'
  },
  {
    id: 'ultimate-jsr-tonic',
    category: 'immunity',
    title: 'Ramuan Ultimate JSR',
    originalTitle: 'RESEP ULTIMATE',
    description: 'Ramuan andalan untuk meningkatkan vitalitas dan membersihkan tubuh secara menyeluruh.',
    ingredients: [
      'Jahe seukuran jempol',
      'Kunyit seukuran telunjuk',
      '1 batang serai',
      'Jeruk nipis',
      'Madu murni',
      'Air panas'
    ],
    preparation: [
      'Iris tipis jahe, kunyit, dan serai.',
      'Seduh dengan air panas.',
      'Tunggu hangat, tambahkan perasan jeruk nipis dan madu.'
    ],
    benefits: [
      'Meningkatkan imunitas tubuh',
      'Mendetoksifikasi racun',
      'Meningkatkan energi vital',
      'Anti-inflamasi alami'
    ],
    imagePrompt: 'nano banana pro style, luxury editorial photography of sliced ginger, turmeric, and lemongrass in a glass teapot, golden liquid, soft natural light, high-end food styling, 8k'
  },
  {
    id: 'womb-detox-elixir',
    category: 'health',
    title: 'Detoks Rahim JSR',
    originalTitle: 'DETOX RAHIM',
    description: 'Ramuan khusus untuk membersihkan rahim dan mendukung kesehatan reproduksi wanita.',
    ingredients: [
      'Jahe',
      'Kayu manis',
      'Kapulaga',
      'Cengkeh',
      'Ketumbar',
      'Madu'
    ],
    preparation: [
      'Seduh semua rempah dengan air panas.',
      'Diamkan sampai hangat.',
      'Tambahkan madu dan minum selagi hangat.'
    ],
    benefits: [
      'Membersihkan rahim',
      'Mendukung program hamil',
      'Menyeimbangkan hormon',
      'Meringankan masalah menstruasi'
    ],
    imagePrompt: 'nano banana pro style, macro photography of various spices like cloves, cardamom, and cinnamon in a minimalist wooden bowl, soft warm lighting, luxury aesthetic, 8k'
  },
  {
    id: 'cyst-treatment-tonic',
    category: 'treatment',
    title: 'Ramuan Pendukung Kista',
    originalTitle: 'RESEP KISTA',
    description: 'Campuran alami untuk membantu mengatasi kista dan masalah reproduksi lainnya.',
    ingredients: [
      '3-5 batang licorice (akar manis)',
      '1/2 gelas rumput laut murni',
      'Air secukupnya'
    ],
    preparation: [
      'Didihkan licorice dalam air hingga keluar aroma dan warna.',
      'Tambahkan rumput laut setelah air hangat.',
      'Minum secara rutin.'
    ],
    benefits: [
      'Membantu mengecilkan kista',
      'Mendetoksifikasi sistem reproduksi',
      'Anti-tumor alami',
      'Meningkatkan kesehatan sel'
    ],
    imagePrompt: 'nano banana pro style, high-end photography of licorice roots and fresh seaweed in a minimalist glass bowl, soft natural lighting, clean aesthetic, 8k'
  },
  {
    id: 'leucorrhea-relief',
    category: 'health',
    title: 'Ramuan Pereda Keputihan',
    originalTitle: 'RESEP KEPUTIHAN',
    description: 'Solusi alami untuk menjaga kebersihan dan kesehatan organ kewanitaan.',
    ingredients: [
      'Jahe',
      'Kunyit',
      'Asam jawa',
      'Gula aren/Madu'
    ],
    preparation: [
      'Rajang halus jahe dan kunyit.',
      'Seduh dengan air panas bersama asam jawa.',
      'Tambahkan gula aren atau madu setelah hangat.'
    ],
    benefits: [
      'Mengatasi keputihan berlebih',
      'Menghilangkan bau tidak sedap',
      'Anti-jamur alami',
      'Menyeimbangkan pH organ kewanitaan'
    ],
    imagePrompt: 'nano banana pro style, macro photography of sliced turmeric and ginger with tamarind, soft warm lighting, luxury editorial food styling, dark moody background, 8k'
  },
  {
    id: 'headache-relief-tonic',
    category: 'treatment',
    title: 'Ramuan Pereda Sakit Kepala',
    originalTitle: 'RESEP SAKIT KEPALA / PUSING',
    description: 'Infusi jahe hangat untuk meredakan ketegangan dan sakit kepala secara alami.',
    ingredients: [
      '1 ruas jahe',
      '250 ml air',
      'Madu murni'
    ],
    preparation: [
      'Seduh jahe dengan air panas.',
      'Setelah hangat, tambahkan madu secukupnya.',
      'Minum selagi hangat.'
    ],
    benefits: [
      'Meredakan migrain dan pusing',
      'Meningkatkan sirkulasi darah ke otak',
      'Menenangkan sistem saraf',
      'Anti-mual alami'
    ],
    imagePrompt: 'nano banana pro style, macro shot of fresh ginger slices in a minimalist glass cup, steam rising, soft morning light, high-end editorial photography, 8k'
  },
  {
    id: 'vertigo-relief-elixir',
    category: 'treatment',
    title: 'Ramuan Pereda Vertigo',
    originalTitle: 'RESEP VERTIGO',
    description: 'Campuran rempah yang menenangkan untuk membantu mengatasi pusing berputar atau vertigo.',
    ingredients: [
      '1 ruas jahe',
      '1/2 jeruk nipis',
      '1 batang kayu manis',
      '250 ml air',
      'Madu murni'
    ],
    preparation: [
      'Seduh semua bahan dengan air panas.',
      'Setelah dingin atau hangat, tambahkan madu.',
      'Minum secara perlahan.'
    ],
    benefits: [
      'Menyeimbangkan sistem keseimbangan tubuh',
      'Meredakan pusing berputar',
      'Meningkatkan fokus',
      'Menenangkan pikiran'
    ],
    imagePrompt: 'nano banana pro style, luxury photography of a cinnamon stick and lime slice in a clear glass of herbal tea, soft cinematic lighting, dark background, 8k'
  },
  {
    id: 'menstrual-flow-support',
    category: 'health',
    title: 'Ramuan Pelancar Haid',
    originalTitle: 'RESEP MEMPERLANCAR HAID',
    description: 'Campuran rempah tradisional untuk membantu menormalkan siklus menstruasi.',
    ingredients: [
      '1 ruas jahe',
      '2 ruas kunyit',
      '1 batang serai',
      'Asam jawa',
      'Gula aren/Madu'
    ],
    preparation: [
      'Rajang halus jahe, kunyit, dan serai.',
      'Seduh dengan air mendidih.',
      'Masukkan asam jawa setelah hangat, beri madu atau gula aren.'
    ],
    benefits: [
      'Melancarkan siklus haid',
      'Mengatasi nyeri haid',
      'Mendetoksifikasi rahim',
      'Meningkatkan kesuburan'
    ],
    imagePrompt: 'nano banana pro style, high-end food photography of sliced turmeric, ginger, and lemongrass on a minimalist plate, soft natural light, luxury aesthetic, 8k'
  },
  {
    id: 'colon-cleanse-juice',
    category: 'detox',
    title: 'Jus Pembersih Kolon',
    originalTitle: 'RESEP MEMBERSIHKAN COLON /USUS BESAR',
    description: 'Jus pepaya kaya enzim untuk membersihkan usus besar dan melancarkan pencernaan.',
    ingredients: [
      '1/2 pepaya matang',
      '1 buah jeruk nipis',
      'Madu murni'
    ],
    preparation: [
      'Potong-potong atau blender pepaya.',
      'Tambahkan perasan jeruk nipis dan madu.',
      'Minum saat perut kosong.'
    ],
    benefits: [
      'Melancarkan BAB',
      'Membuang lemak jahat di usus',
      'Kaya akan enzim pencernaan',
      'Meningkatkan kesehatan mikrobioma'
    ],
    imagePrompt: 'nano banana pro style, high-end photography of a vibrant papaya smoothie in a crystal glass, lime wedge, soft natural lighting, clean minimalist background, 8k'
  },
  {
    id: 'blood-circulation-tonic',
    category: 'health',
    title: 'Ramuan Pelancar Darah',
    originalTitle: 'RESEP PELANCAR DARAH',
    description: 'Ramuan rempah bakar untuk menghangatkan tubuh dan melancarkan sirkulasi darah.',
    ingredients: [
      '1 ruas jahe (bakar/panggang)',
      '1 ruas kunyit (bakar/panggang)',
      '1 buah kencur (bakar/panggang)',
      '3-5 kapulaga',
      'Sedikit kayu manis',
      'Gula aren'
    ],
    preparation: [
      'Campur semua bahan yang sudah dibakar.',
      'Seduh dengan air panas.',
      'Minum setelah hangat.'
    ],
    benefits: [
      'Melancarkan aliran darah',
      'Menghangatkan tubuh',
      'Meningkatkan kesehatan jantung',
      'Membuang lendir berlebih'
    ],
    imagePrompt: 'nano banana pro style, macro photography of roasted ginger and turmeric roots, soft warm lighting, luxury editorial food styling, dark moody background, 8k'
  },
  {
    id: 'diabetes-support-tea',
    category: 'treatment',
    title: 'Teh Dukungan Diabetes',
    originalTitle: 'RESEP DIABETES',
    description: 'Minuman kayu manis sederhana untuk membantu menjaga kadar gula darah.',
    ingredients: [
      '1 sdt kayu manis bubuk',
      '1 sdt madu',
      '250 ml air panas'
    ],
    preparation: [
      'Seduh kayu manis dengan air panas.',
      'Tunggu hangat, tambahkan madu.',
      'Minum secara rutin.'
    ],
    benefits: [
      'Meningkatkan sensitivitas insulin',
      'Membantu menstabilkan gula darah',
      'Kaya akan antioksidan',
      'Mendukung metabolisme'
    ],
    imagePrompt: 'nano banana pro style, macro shot of cinnamon powder swirling in hot water, honey jar in background, soft morning light, minimalist luxury photography, 8k'
  },
  {
    id: 'kidney-strength-tonic',
    category: 'organ',
    title: 'Ramuan Memperkuat Ginjal',
    originalTitle: 'RESEP MEMPERKUAT GINJAL',
    description: 'Infusi rempah aromatik untuk mendukung fungsi dan kesehatan ginjal.',
    ingredients: [
      '5 butir cengkeh',
      '5 butir kapulaga',
      '3 butir bunga lawang',
      '200 ml air panas'
    ],
    preparation: [
      'Seduh semua bahan dengan air panas.',
      'Minum segera setelah hangat.',
      'Konsumsi setiap pagi secara rutin.'
    ],
    benefits: [
      'Meningkatkan filtrasi ginjal',
      'Anti-bakteri alami saluran kemih',
      'Mendetoksifikasi ginjal',
      'Meningkatkan energi vital'
    ],
    imagePrompt: 'nano banana pro style, macro photography of cloves, cardamom, and star anise in a minimalist glass cup, soft cinematic lighting, dark background, 8k'
  },
  {
    id: 'bone-health-elixir',
    category: 'health',
    title: 'Ramuan Kesehatan Tulang',
    originalTitle: 'RESEP PENGAPURAN/NYERI TULANG',
    description: 'Campuran jeruk nipis dan madu untuk membantu mengatasi masalah pengapuran dan nyeri tulang.',
    ingredients: [
      '3 buah jeruk nipis',
      '2 sdm madu',
      '1 gelas air hangat',
      'Sejumput garam himalaya'
    ],
    preparation: [
      'Campur semua bahan menjadi satu.',
      'Aduk rata dan minum selagi hangat.'
    ],
    benefits: [
      'Mengurangi peradangan tulang',
      'Meningkatkan kepadatan mineral',
      'Menyeimbangkan pH tubuh',
      'Meredakan nyeri sendi'
    ],
    imagePrompt: 'nano banana pro style, high-end photography of lime slices and a jar of honey, soft natural light, clean minimalist aesthetic, 8k, ultra-realistic'
  },
  {
    id: 'uti-relief-paste',
    category: 'treatment',
    title: 'Ramuan Pereda ISK',
    originalTitle: 'RESEP ISK (INFEKSI SALURAN KENCING)',
    description: 'Pasta madu kunyit yang kuat untuk melawan infeksi saluran kemih secara alami.',
    ingredients: [
      '1/4 gelas madu murni',
      '1 sdt kunyit bubuk',
      '2 tetes minyak jintan hitam/vco'
    ],
    preparation: [
      'Campur semua bahan dalam madu hingga menjadi pasta.',
      'Simpan dalam wadah kaca di kulkas.',
      'Konsumsi 2-3 sdm setiap hari.'
    ],
    benefits: [
      'Anti-biotik alami yang kuat',
      'Meredakan peradangan saluran kemih',
      'Meningkatkan sistem imun',
      'Melawan bakteri penyebab ISK'
    ],
    imagePrompt: 'nano banana pro style, macro photography of a golden turmeric honey paste in a small glass jar, soft cinematic lighting, luxury aesthetic, 8k'
  },
  {
    id: 'antioxidant-boost-juice',
    category: 'juice',
    title: 'Jus Peningkat Antioksidan',
    originalTitle: 'RESEP JUICE ANTIOKSIDAN',
    description: 'Jus jeruk dan kurma yang menyegarkan untuk melawan radikal bebas.',
    ingredients: [
      '2/3 buah jeruk',
      '7 butir kurma ruthob',
      'Madu secukupnya'
    ],
    preparation: [
      'Blender semua bahan sampai halus.',
      'Konsumsi segera untuk nutrisi maksimal.'
    ],
    benefits: [
      'Kaya akan Vitamin C',
      'Meningkatkan energi instan',
      'Melawan penuaan dini',
      'Meningkatkan daya tahan tubuh'
    ],
    imagePrompt: 'nano banana pro style, high-end photography of a vibrant orange juice with dates on the side, soft natural lighting, clean minimalist background, 8k'
  },
  {
    id: 'tempeh-smoothie',
    category: 'juice',
    title: 'Smoothie Tempe Non-GMO',
    originalTitle: 'RESEP JUICE TEMPE NON GMO',
    description: 'Smoothie protein nabati yang unik untuk kesehatan usus dan energi.',
    ingredients: [
      'Tempe sehat non-GMO',
      '400 ml air',
      'Kurma'
    ],
    preparation: [
      'Blender semua bahan sampai halus.',
      'Minum saat perut kosong atau sebelum tidur.'
    ],
    benefits: [
      'Sumber protein nabati terbaik',
      'Kaya akan probiotik alami',
      'Mendukung kesehatan otot',
      'Menyeimbangkan mikrobioma usus'
    ],
    imagePrompt: 'nano banana pro style, minimalist luxury photography of a creamy tempeh smoothie in a modern glass, soft natural light, high-end food styling, 8k'
  },
  {
    id: 'morning-detox-juice',
    category: 'juice',
    title: 'Jus Detoks Pagi',
    originalTitle: 'MORNING DETOX JUICE',
    description: 'Jus buah dan biji-bijian untuk memulai hari dengan sistem pencernaan yang bersih.',
    ingredients: [
      '3 butir kurma',
      '1/2 apel lokal',
      '1/2 pisang',
      '1 jahe kecil',
      '1 sdt chia seed'
    ],
    preparation: [
      'Blender semua bahan dengan air secukupnya.',
      'Minum setiap pagi hari secara rutin.'
    ],
    benefits: [
      'Memulai metabolisme',
      'Memberikan energi berkelanjutan',
      'Kaya akan serat',
      'Mendetoksifikasi hati'
    ],
    imagePrompt: 'nano banana pro style, high-end photography of a fresh fruit smoothie with chia seeds on top, soft morning light, minimalist breakfast aesthetic, 8k'
  },
  {
    id: 'chelation-therapy-smoothie',
    category: 'detox',
    title: 'Smoothie Terapi Kelasi',
    originalTitle: 'RESEP CHELATION THERAPY',
    description: 'Campuran tape dan kurma untuk membantu mengikat logam berat dalam tubuh.',
    ingredients: [
      'Sepotong tape singkong',
      '1-3 butir kurma',
      '300 ml air'
    ],
    preparation: [
      'Blender semua bahan sampai halus.',
      'Konsumsi secara berkala.'
    ],
    benefits: [
      'Menetralisir logam berat',
      'Meningkatkan energi seluler',
      'Sumber enzim alami',
      'Mendukung kesehatan saraf'
    ],
    imagePrompt: 'nano banana pro style, minimalist photography of a white creamy smoothie in a crystal glass, soft cinematic lighting, high-end food styling, 8k'
  },
  {
    id: 'anti-free-radical-tonic',
    category: 'immunity',
    title: 'Ramuan Anti Radikal Bebas',
    originalTitle: 'RESEP ANTI RADIKAL BEBAS',
    description: 'Infusi kunyit dan air kelapa dingin untuk perlindungan sel yang maksimal.',
    ingredients: [
      '300 ml air kelapa',
      '1 ruas kunyit (kupas dan iris)',
      'Es batu besar'
    ],
    preparation: [
      'Blender air kelapa dan dagingnya dengan kunyit.',
      'Simpan dalam wadah kaca di atas es batu selama 6 jam.',
      'Minum sarinya saja (bagian bening di atas).'
    ],
    benefits: [
      'Perlindungan antioksidan tingkat tinggi',
      'Mencegah kerusakan DNA',
      'Meningkatkan kesehatan kulit',
      'Anti-aging alami'
    ],
    imagePrompt: 'nano banana pro style, luxury photography of a clear golden liquid in a glass jar surrounded by ice, soft natural light, high-end editorial aesthetic, 8k'
  },
  {
    id: 'hyperthyroid-support',
    category: 'treatment',
    title: 'Dukungan Hipertiroid',
    originalTitle: 'RESEP HIPERTIROID',
    description: 'Ramuan jahe dan kunyit untuk membantu menyeimbangkan fungsi tiroid.',
    ingredients: [
      '1 jempol jahe',
      '1 kelingking kunyit',
      '2 sdm madu',
      '1 jeruk nipis',
      '250 ml air panas'
    ],
    preparation: [
      'Rajang halus jahe dan kunyit.',
      'Seduh dengan air panas.',
      'Diamkan sampai hangat, tambahkan madu dan jeruk nipis.'
    ],
    benefits: [
      'Menyeimbangkan hormon tiroid',
      'Mengurangi kecemasan',
      'Meningkatkan metabolisme',
      'Anti-inflamasi alami'
    ],
    imagePrompt: 'nano banana pro style, macro photography of sliced ginger and turmeric with a lime half, soft cinematic lighting, luxury food styling, dark background, 8k'
  },
  {
    id: 'hormonal-balance-juice',
    category: 'health',
    title: 'Jus Keseimbangan Hormon',
    originalTitle: 'JUICE MENGATASI HORMON PADA WANITA',
    description: 'Jus wortel dan lemon untuk membantu menyeimbangkan hormon wanita.',
    ingredients: [
      '2 buah wortel (juicer)',
      '2 buah lemon (ambil airnya)',
      '1 ruas jahe (opsional)'
    ],
    preparation: [
      'Campur air wortel dan lemon.',
      'Tambahkan jahe jika diinginkan.',
      'Konsumsi 2x sehari sebelum makan.'
    ],
    benefits: [
      'Menyeimbangkan hormon estrogen',
      'Mencegah menopause dini',
      'Meningkatkan kesehatan mata',
      'Anti-kanker alami'
    ],
    imagePrompt: 'nano banana pro style, high-end photography of a vibrant orange carrot juice with lemon slices, soft natural lighting, clean minimalist background, 8k'
  },
  {
    id: 'golden-latte-jsr',
    category: 'immunity',
    title: 'Golden Latte Premium',
    originalTitle: 'GOLDEN LATTE',
    description: 'Susu kacang kunyit yang mewah untuk kesehatan jantung dan pencernaan.',
    ingredients: [
      '2 gelas susu kacang (almond/pistachio/santan)',
      '1 sdm bubuk kunyit',
      '1 sdm minyak kelapa (VCO)',
      '1/2 sdt kayu manis',
      '1/8 sdt lada hitam',
      '1/4 sdt jahe',
      'Madu'
    ],
    preparation: [
      'Campur susu, kunyit, dan minyak kelapa di atas kompor hangat.',
      'Angkat, masukkan rempah lainnya dan madu.',
      'Aduk rata dan taburkan kayu manis di atasnya.'
    ],
    benefits: [
      'Anti-inflamasi sistemik',
      'Memperkuat pencernaan',
      'Kesehatan jantung',
      'Meningkatkan kualitas tidur'
    ],
    imagePrompt: 'nano banana pro style, high-end photography of a golden latte with cinnamon dusting in a minimalist ceramic mug, soft cinematic lighting, dark moody background, 8k'
  },
  {
    id: 'autoimmune-reset',
    category: 'treatment',
    title: 'Ramuan Reset Autoimun',
    originalTitle: 'RESEP AUTOIMUN',
    description: 'Infusi serai dan jeruk nipis untuk membantu menyeimbangkan sistem imun.',
    ingredients: [
      '2 batang serai (iris tipis)',
      '1/2 - 1 buah jeruk nipis',
      'Madu murni',
      '300-400 ml air'
    ],
    preparation: [
      'Rebus serai sampai mendidih atau seduh dengan air panas.',
      'Tunggu sampai keluar uap dan berubah warna.',
      'Saring, diamkan hangat, tambahkan jeruk nipis dan madu.'
    ],
    benefits: [
      'Mereset sistem imun',
      'Menyeimbangkan kolesterol',
      'Meredakan nyeri sendi',
      'Memperbaiki pencernaan'
    ],
    imagePrompt: 'nano banana pro style, macro photography of sliced lemongrass and lime in a glass teapot, soft natural light, high-end editorial aesthetic, 8k'
  },
  {
    id: 'healthy-heart-tonic',
    category: 'organ',
    title: 'Tonik Jantung Sehat',
    originalTitle: 'RESEP JANTUNG SEHAT JSR',
    description: 'Infusi ketumbar sederhana untuk menjaga kesehatan pembuluh darah dan jantung.',
    ingredients: [
      '2-3 sdm ketumbar murni',
      '300-400 ml air',
      '3 sdm madu'
    ],
    preparation: [
      'Rebus ketumbar dengan air sampai berubah warna.',
      'Pindahkan ke gelas, tunggu hangat.',
      'Tambahkan madu dan minum.'
    ],
    benefits: [
      'Membersihkan pembuluh darah',
      'Menurunkan tekanan darah',
      'Menguatkan otot jantung',
      'Kaya akan mineral esensial'
    ],
    imagePrompt: 'nano banana pro style, macro photography of coriander seeds in a minimalist glass cup, golden liquid, soft cinematic lighting, dark background, 8k'
  },
  {
    id: 'insomnia-relief-tea',
    category: 'treatment',
    title: 'Teh Pereda Insomnia',
    originalTitle: 'RESEP INSOMNIA',
    description: 'Rebusan sayuran untuk membantu menenangkan saraf dan meningkatkan kualitas tidur.',
    ingredients: [
      'Segenggam kangkung',
      'Segenggam tauge',
      '2 gelas air'
    ],
    preparation: [
      'Rebus kangkung dengan air.',
      'Masukkan tauge setelah kangkung agak layu.',
      'Biarkan 1 menit, matikan kompor, bagi menjadi 2 gelas.',
      'Minum siang dan malam.'
    ],
    benefits: [
      'Menenangkan sistem saraf',
      'Meningkatkan kualitas tidur',
      'Relaksasi otot alami',
      'Kaya akan mineral penenang'
    ],
    imagePrompt: 'nano banana pro style, professional photography of a clear herbal broth in a minimalist ceramic bowl, soft evening light, high-end lifestyle aesthetic, 8k'
  },
  {
    id: 'virus-shield-tonic',
    category: 'immunity',
    title: 'Ramuan Perisai Virus',
    originalTitle: 'RESEP MENGHADANG VIRUS/PERUBAHAN CUACA',
    description: 'Campuran kayu secang dan rempah untuk melindungi tubuh dari virus.',
    ingredients: [
      '3-5 lembar kayu secang',
      '1 batang serai',
      '1 ruas jahe',
      '300 ml air',
      'Madu murni'
    ],
    preparation: [
      'Seduh semua bahan kecuali madu.',
      'Setelah hangat, tambahkan madu.',
      'Minum secara rutin saat cuaca berubah.'
    ],
    benefits: [
      'Meningkatkan daya tahan terhadap virus',
      'Menghangatkan tubuh',
      'Antioksidan tinggi',
      'Melancarkan pernapasan'
    ],
    imagePrompt: 'nano banana pro style, macro photography of red sappan wood (secang) and lemongrass in a glass cup, vibrant red liquid, soft cinematic lighting, 8k'
  },
  {
    id: 'natural-antibiotic',
    category: 'immunity',
    title: 'Antibiotik Alami JSR',
    originalTitle: 'RESEP ANTIBIOTIK',
    description: 'Campuran kunyit dan madu yang kuat untuk melawan bakteri jahat.',
    ingredients: [
      '2 sdm bubuk kunyit',
      '3 sdm madu murni'
    ],
    preparation: [
      'Campur bubuk kunyit dengan madu sampai rata.',
      'Konsumsi secara rutin setiap hari.'
    ],
    benefits: [
      'Melawan infeksi bakteri',
      'Meningkatkan sistem imun',
      'Anti-inflamasi kuat',
      'Menjaga kesehatan usus'
    ],
    imagePrompt: 'nano banana pro style, macro photography of golden honey mixed with turmeric powder, luxury editorial food styling, soft cinematic lighting, 8k'
  }
];
