export const categories = [
  'All',
  'Brand Identity',
  'Logo Design',
  'Packaging',
  'Social Media',
]

export const projects = [
  {
    id: 'lumen-coffee-identity',
    title: 'Lumen Coffee — Full Brand Identity',
    category: 'Brand Identity',
    client: 'Lumen Coffee Roasters',
    year: '2025',
    height: 420,
    image: 'https://picsum.photos/seed/lumen-coffee/600/760',
    summary:
      'A warm, minimal identity system for a specialty coffee roaster, built around a custom wordmark and a palette pulled from roasted bean tones.',
    deliverables: ['Logo suite', 'Color system', 'Typography', 'Packaging', 'Signage'],
  },
  {
    id: 'northstar-logo',
    title: 'Northstar Athletics Wordmark',
    category: 'Logo Design',
    client: 'Northstar Athletics',
    year: '2024',
    height: 320,
    image: 'https://picsum.photos/seed/northstar/600/560',
    summary:
      'A bold, geometric wordmark for an athletic apparel startup, designed to scale from a jersey tag to a stadium banner.',
    deliverables: ['Primary logo', 'Icon mark', 'Usage guidelines'],
  },
  {
    id: 'verdant-packaging',
    title: 'Verdant Skincare Packaging System',
    category: 'Packaging',
    client: 'Verdant Botanicals',
    year: '2025',
    height: 480,
    image: 'https://picsum.photos/seed/verdant/600/860',
    summary:
      'Recyclable packaging system for a clean-beauty skincare line, using embossed botanical linework and a muted sage palette.',
    deliverables: ['Bottle labels', 'Carton design', 'Unboxing insert', 'Shipping mailer'],
  },
  {
    id: 'holloway-social',
    title: 'Holloway Bakery Social Templates',
    category: 'Social Media',
    client: 'Holloway Bakery',
    year: '2024',
    height: 360,
    image: 'https://picsum.photos/seed/holloway/600/620',
    summary:
      'A flexible Instagram template system so an in-house team could keep a consistent brand voice without a designer on retainer.',
    deliverables: ['Post templates', 'Story templates', 'Highlight covers', 'Content calendar'],
  },
  {
    id: 'atlas-rebrand',
    title: 'Atlas Logistics Rebrand',
    category: 'Brand Identity',
    client: 'Atlas Logistics',
    year: '2023',
    height: 400,
    image: 'https://picsum.photos/seed/atlas/600/720',
    summary:
      'A full rebrand for a 20-year-old logistics company, modernizing a dated identity while preserving brand equity with longtime clients.',
    deliverables: ['Logo redesign', 'Fleet livery', 'Brand guidelines', 'Business collateral'],
  },
  {
    id: 'sable-mark',
    title: 'Sable & Co. Monogram',
    category: 'Logo Design',
    client: 'Sable & Co.',
    year: '2025',
    height: 300,
    image: 'https://picsum.photos/seed/sable/600/520',
    summary:
      'An elegant monogram mark for a boutique law firm, designed to feel established from day one.',
    deliverables: ['Monogram', 'Letterhead', 'Business cards'],
  },
  {
    id: 'juniper-packaging',
    title: 'Juniper Gin Bottle & Label',
    category: 'Packaging',
    client: 'Juniper Distilling Co.',
    year: '2024',
    height: 440,
    image: 'https://picsum.photos/seed/juniper/600/780',
    summary:
      'Label and bottle design for a small-batch gin, leaning into botanical illustration and a deep forest-green palette.',
    deliverables: ['Bottle label', 'Neck tag', 'Gift box', 'Point-of-sale display'],
  },
  {
    id: 'pulse-social',
    title: 'Pulse Fitness Launch Campaign',
    category: 'Social Media',
    client: 'Pulse Fitness Studio',
    year: '2025',
    height: 340,
    image: 'https://picsum.photos/seed/pulse/600/600',
    summary:
      'A high-energy social campaign for a boutique fitness studio’s opening month, built to drive class sign-ups.',
    deliverables: ['Launch campaign', 'Reel covers', 'Ad creative', 'Email banners'],
  },
  {
    id: 'orchard-identity',
    title: 'Orchard Lane Farm Stand Identity',
    category: 'Brand Identity',
    client: 'Orchard Lane Farm',
    year: '2023',
    height: 380,
    image: 'https://picsum.photos/seed/orchard/600/680',
    summary:
      'A friendly, hand-drawn identity for a family-run farm stand, designed to feel at home on both a market tent and a jar label.',
    deliverables: ['Logo', 'Market signage', 'Jar labels', 'Tote bag design'],
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
