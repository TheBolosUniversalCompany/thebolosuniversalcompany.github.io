export type BusinessLanguage = 'en' | 'fr';

type Localised<T> = { en: T; fr?: T };

export interface BusinessEditorial {
  carouselTitle: string;
  carouselCopy: string[];
  sectionTitle: string;
  sectionCopy: string[];
}

export interface BusinessUnit {
  id: string;
  name: string;
  shortName: string;
  carouselImage: string;
  imageAlt: string;
  maisons: string[];
  maisonImages: Array<{ file: string; alt: string }>;
  editorial: Localised<BusinessEditorial>;
}

export const businessPageCopy: Localised<{
  eyebrow: string;
  intro: string[];
  seeMaisons: string;
  previous: string;
  next: string;
  chapterLabel: string;
  maisonTotal: number;
  leadership: {
    heading: string;
    opening: string;
    seb: { overview: string; quote: string; name: string };
    kahrdinal: { overview: string[]; quote: string; name: string };
  };
}> = {
  en: {
    eyebrow: 'OUR MAISONS',
    intro: [
      'The Bolos Universal Company™ is home to 29 distinguished Maisons operating across seven major business sectors.',
      'True to its entrepreneurial spirit, each of our Maisons builds on unique expertise while sharing the Group’s unwavering ambition to expand its influence, seize new opportunities and create value wherever valuable absurdity remains to be captured.',
    ],
    seeMaisons: 'SEE THE MAISONS',
    previous: 'Previous Business Unit',
    next: 'Next Business Unit',
    chapterLabel: 'Business Unit chapters',
    maisonTotal: 29,
    leadership: {
      heading: 'ONE VISION. TWO WAYS OF MAKING SURE IT HAPPENS.',
      opening: 'At The Bolos Universal Company™, leadership is built on trust, loyalty and a clear understanding of who decides what, especially in the darkness.',
      seb: {
        overview: 'As Directeur Général, Seb Cornichon oversees the execution of MC Jupiter’s vision across the Group, ensuring that seven Business Units, 29 Maisons and an unreasonable number of strategic priorities continue moving in exactly the right direction.',
        quote: '“My role is simple. Jupiter sets the course. I obey.”',
        name: 'Seb Cornichon',
      },
      kahrdinal: {
        overview: [
          'The Kahrdinal, Secrétaire Général, provides the continuity, institutional memory and discreet strategic guidance required to ensure that the course remains the right one.',
          'He does not interfere with leadership. He simply anticipates unnecessary alternatives, removes avoidable uncertainties and ensures that every decision reaches its natural conclusion.',
        ],
        quote: '“A great leader must always remain free to make his own decisions. My role is to make sure he makes the right ones.”',
        name: 'The Kahrdinal',
      },
    },
  },
};

export const businessUnits: BusinessUnit[] = [
  {
    id: 'capital',
    name: 'Bolos Karl Capital',
    shortName: 'Kapital',
    carouselImage: 'carrousel_kapital.png',
    imageAlt: 'Bolos Karl Capital trading floor',
    maisons: ['BLS Real Estate™', 'BLS Asset Management™', 'BLS Financial Engineering™', 'BLS Private Equity™', 'BolosCoin™'],
    maisonImages: [
      { file: 'maison-kapital-00.png', alt: 'Bolos Karl Capital editorial scene' },
      { file: 'maison-kapital-01.png', alt: 'BLS Real Estate editorial scene' },
      { file: 'maison-kapital-02.png', alt: 'BLS Asset Management editorial scene' },
      { file: 'maison-kapital-03.png', alt: 'BLS Financial Engineering editorial scene' },
      { file: 'maison-kapital-04.png', alt: 'BLS Private Equity editorial scene' },
      { file: 'maison-kapital-05.png', alt: 'BolosCoin editorial scene' },
    ],
    editorial: { en: {
      carouselTitle: 'BOLOS KARL CAPITAL',
      carouselCopy: [
        'Bolos Karl Capital brings together five specialised Maisons spanning real estate, asset management, financial engineering, private equity and digital assets.',
        'Each operates with the same disciplined approach to capital: identify value, acquire value, leverage value — and ensure somebody else remains ultimately responsible for it.',
      ],
      sectionTitle: 'Bolos Karl Capital',
      sectionCopy: [
        'Our financial model combines disciplined capital allocation, strategic leverage and a rigorous commitment to extracting value wherever it can still be found.',
        'Under the leadership of Don Tony Sarkocciny, The Bolos Universal Company™ approaches every asset with the same fundamental question: How much can we borrow against it?',
        'From acquisitions and real estate to financial engineering and carefully structured liabilities, our strategy is built around one simple principle: ownership is temporary. Debt is scalable.',
        'We do not speculate. We anticipate value before anyone else has had the opportunity to keep it.',
        'This approach allows the Group to pursue ambitious investments while maintaining the highest standards of financial discipline.',
        'We don’t create wealth. We make sure it knows where to go.',
      ],
    } },
  },
  {
    id: 'industries',
    name: 'BOLOS Industries™',
    shortName: 'Industries',
    carouselImage: 'carrousel_industries.png',
    imageAlt: 'BOLOS Industries research workshop',
    maisons: ['BLS Manufacturing™', 'BOLOS Advanced R&D™', '493 Gigafactory™', 'BOLOS Energy™', 'BOLOS Defense Systems™'],
    maisonImages: [
      { file: 'maison-industries-01.png', alt: 'BLS Manufacturing editorial scene' },
      { file: 'maison-industries-02.png', alt: 'BOLOS Advanced R&D editorial scene' },
      { file: 'maison-industries-03.png', alt: '493 Gigafactory editorial scene' },
      { file: 'maison-industries-04.png', alt: 'BOLOS Energy editorial scene' },
      { file: 'maison-industries-05.png', alt: 'BOLOS Defense Systems editorial scene' },
    ],
    editorial: { en: {
      carouselTitle: 'BOLOS INDUSTRIES',
      carouselCopy: [
        'BOLOS Industries™ brings together five highly specialised Maisons spanning advanced research, manufacturing, energy, defence and industrial innovation.',
        'Each operates at the frontier of technology — developing tomorrow’s problems today, while carefully outsourcing the burden of actually producing anything.',
      ],
      sectionTitle: 'Bolos Industries',
      sectionCopy: [
        'Bolos Industries™ is the beating industrial heart of the Greatest Startup Nation™ — where the Group invests at the forefront of research, technology and advanced engineering, with one clear horizon: total absurdity.',
        'As a visionary Group consistently ahead of its time, we relocated our manufacturing operations long before everyone else understood the strategic benefits of not manufacturing anything ourselves.',
        'This allows us to keep our factories permanently empty, our inventories perfectly under control and, with the recent deployment of autonomous vacuum-cleaning technologies, our industrial future entirely dust-free.',
        'Today, Bolos Industries™ focuses its resources where they can create the greatest shareholder disvalue: Research & Development.',
        'Our scientists, engineers and interns work relentlessly to create new problems for which no viable solution could ever exist — ensuring the Group maintains a decisive technological lead over its competitors.',
        'For everything else, we follow industry best practices.',
        'We dropship.',
      ],
    } },
  },
  {
    id: 'media-group',
    name: 'BOLOS Media Group™',
    shortName: 'Media Group',
    carouselImage: 'carrousel_media.png',
    imageAlt: 'BOLOS Media Group film production',
    maisons: ['BLS-HAZY', 'Bolosmard', 'Bolos Universale NoiZ', 'Studio Bolos Pictures', 'CFAKE', 'Media1Bolos', 'SUD-BoLlOSs'],
    maisonImages: [
      { file: 'maison-media-group-01.png', alt: 'BLS-HAZY editorial scene' },
      { file: 'maison-media-group-02.png', alt: 'Bolosmard editorial scene' },
      { file: 'maison-media-group-03.png', alt: 'Bolos Universale NoiZ editorial scene' },
      { file: 'maison-media-group-04.png', alt: 'Studio Bolos Pictures editorial scene' },
      { file: 'maison-media-group-05.png', alt: 'CFAKE editorial scene' },
      { file: 'maison-media-group-06.png', alt: 'Media1Bolos editorial scene' },
      { file: 'maison-media-group-07.png', alt: 'SUD-BoLlOSs editorial scene' },
    ],
    editorial: { en: {
      carouselTitle: 'MEDIA GROUP',
      carouselCopy: [
        'The Media Group brings together Maisons dedicated to shaping public perception and transforming complex realities into clear, engaging and appropriately aligned narratives.',
        'Together, they ensure the right stories reach the right audiences, through the right channels, with the right version of the facts.',
      ],
      sectionTitle: 'Bolos Media Groupe',
      sectionCopy: [
        'Is composed of our seven powerful propaganda units, each delivering the finest alternative realities to satisfy the ever-growing appetite of absurdity — and our shareholders.',
        'Our fully integrated business model gives Bolos Media Group™ control over the entire narrative value chain — from content creation and production to distribution, amplification and audience engagement.',
        'By keeping every stage of the process within the Group, our Maisons share resources, audiences and strategic direction, creating powerful cross-platform synergies while ensuring that nothing is lost between the story we manufacture and the reality you receive.',
      ],
    } },
  },
  {
    id: 'retail-consumer',
    name: 'BOLOS Retail & Consumer™',
    shortName: 'Retail & Consumer',
    carouselImage: 'carrousel_retail.png',
    imageAlt: 'BOLOS Retail and Consumer boutique',
    maisons: ['BLS Luxury Consumer Goods™', 'La Boutique BOLOS™', 'BLS Marketplace™', 'BOLOS Licensing™'],
    maisonImages: [
      { file: 'maison-retail-consumer-01.png', alt: 'BOLOS Retail & Consumer editorial scene 1' },
      { file: 'maison-retail-consumer-02.png', alt: 'BOLOS Retail & Consumer editorial scene 2' },
    ],
    editorial: { en: {
      carouselTitle: 'BOLOS RETAIL & CONSUMER',
      carouselCopy: [
        'BOLOS Retail & Consumer™ brings together Maisons dedicated to transforming everyday desires into premium unessentials.',
        'From luxury goods to retail, they anticipate aspirations, create new expectations and ensure consumers always have access to things they never knew they needed.',
      ],
      sectionTitle: 'Bolos Retail & Consumer',
      sectionCopy: [
        'Bolos Retail & Consumer™ transforms ideas, identities and occasionally forgotten office inventory into highly desirable consumer products.',
        'From premium unessentials and carefully manufactured desire to limited editions, questionable collaborations and objects nobody remembers ordering, our Maisons cover the entire consumer journey — from unnecessary production to completely avoidable purchase.',
        'At BLS Luxury Consumer Goods™, we combine craftsmanship, storytelling and strategic overpricing to create exceptional objects designed to elevate everyday life — or at least their recommended retail price.',
        'La Boutique Bolos™ gives selected pieces, corporate relics and regrettable procurement decisions a second chance on the market.',
        'BLS Marketplace™ extends our reach through frictionless commerce and strategically outsourced responsibility, while Bolos Licensing™ ensures that absolutely nothing bearing our name escapes monetisation.',
        'We don’t respond to consumer demand. We create the feeling that there should have been one.',
      ],
    } },
  },
  {
    id: 'consulting',
    name: 'BOLOS Consulting™',
    shortName: 'Consulting',
    carouselImage: 'carrousel_consulting.png',
    imageAlt: 'BOLOS Consulting strategy meeting',
    maisons: ['Le Bistrot des Bolos™', 'Luiggi’s Alpha Camp™'],
    maisonImages: [
      { file: 'maison-consulting-01.png', alt: 'Le Bistrot des Bolos editorial scene' },
      { file: 'maison-consulting-02.png', alt: 'Luiggi’s Alpha Camp editorial scene' },
    ],
    editorial: { en: {
      carouselTitle: 'BOLOS CONSULTING',
      carouselCopy: [
        'BOLOS Consulting™ brings together Maisons offering complementary approaches to strategy, transformation and executive decision-making.',
        'Through proprietary methodologies and conflicting expertise, they provide leaders with the insights required to confidently make decisions they were already planning to make.',
      ],
      sectionTitle: 'Bolos Consulting',
      sectionCopy: [
        'Bolos Consulting™ brings together two radically different approaches to strategic advisory, united by one shared conviction: no problem is too complex to be made significantly worse.',
        'At Le Bistrot des Bolos™, Gégé & Gréta transform conflicting opinions, accumulated experience and several glasses of wine or the Famous KinseyMac Cocktail into actionable strategic insights.',
        'At Luiggi’s Alpha Camp™, tomorrow’s leaders are pushed beyond their limits through intensive executive coaching, competitive thinking and methodologies whose legality and results remain under continuous review. Don’t seek logic. Seek Masculinity.',
        'Together, they provide the Group with a unique consulting model — combining instinct, confrontation and premium confidence.',
        'We don’t provide answers. We provide recommendations.',
        'Implementation remains your problem.',
      ],
    } },
  },
  {
    id: 'education',
    name: 'BOLOS Education™',
    shortName: 'Education',
    carouselImage: 'carrousel_education.png',
    imageAlt: 'BOLOS Education school playground',
    maisons: ['La Crèche des P’tits Bolos™', 'H.E.C – Bolos™'],
    maisonImages: [
      { file: 'maison-education-01.png', alt: 'BOLOS Education editorial scene 1' },
      { file: 'maison-education-02.png', alt: 'BOLOS Education editorial scene 2' },
      { file: 'maison-education-03.png', alt: 'BOLOS Education editorial scene 3' },
    ],
    editorial: { en: {
      carouselTitle: 'BOLOS EDUCATION',
      carouselCopy: [
        'BOLOS Education™ brings together Maisons committed to excellence in learning, from early education to higher education.',
        'By combining innovation, ambition and public-private excellence, they prepare tomorrow’s leaders to solve the challenges nobody has asked them to solve.',
      ],
      sectionTitle: 'Bolos Education',
      sectionCopy: [
        'Bolos Education™ provides a seamless learning journey from early childhood to executive leadership — ensuring that no formative year is left to chance.',
        'At La Crèche des P’tits Bolos™, future leaders are introduced to the fundamentals of ambition, competition and personal branding before they have fully mastered object permanence.',
        'At H.E.C – Bolos™, the same individuals can pursue their education well into adulthood, developing the strategic expertise, financial vocabulary and premium confidence required to explain why everything went exactly according to plan.',
        'Together, our institutions provide a unique lifelong education model — from the first building blocks to the final PowerPoint.',
        'We don’t teach students what to think. We teach them how to make it sound strategic.',
      ],
    } },
  },
  {
    id: 'internship',
    name: 'BOLOS Internship™',
    shortName: 'Internship',
    carouselImage: 'carrousel_internship.png',
    imageAlt: 'BOLOS Internship open workspace',
    maisons: ['BOLOS Internship™', 'SUD BOLOS™'],
    maisonImages: [],
    editorial: { en: {
      carouselTitle: 'BOLOS INTERNSHIP',
      carouselCopy: [
        'BOLOS Internship™ brings together Maisons dedicated to connecting ambitious young talents with world-class professional opportunities.',
        'Through our unique pay-to-work model, they transform unpaid experience into a premium investment in tomorrow’s workforce — and today’s margins.',
      ],
      sectionTitle: 'Bolos Internship',
      sectionCopy: [
        'Bolos Internship™ places young talent at the very heart of The Bolos Universal Company™ — where ambition meets opportunity, responsibility and remarkably low labour costs.',
        'From L’OpenSpace™ to our prestigious Stagiaire du Mois™ programme, we provide the next generation with hands-on experience, meaningful responsibilities and all the recognition money can’t buy.',
        'Naturally, SUD BOLOS™ ensures every intern has a voice.',
        'Management remains under no obligation to listen.',
        'We don’t exploit young talent. We accelerate professional experience.',
      ],
    } },
  },
];

export const totalMaisons = businessUnits.reduce((total, unit) => total + unit.maisons.length, 0);

export const getBusinessPageCopy = (lang: BusinessLanguage) => businessPageCopy[lang] ?? businessPageCopy.en;
export const getBusinessEditorial = (unit: BusinessUnit, lang: BusinessLanguage) => unit.editorial[lang] ?? unit.editorial.en;
