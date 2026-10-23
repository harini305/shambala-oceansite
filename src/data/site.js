// Verified facts and destinations from docs/source-audit (03-content-inventory.md,
// 06-functionality-and-dependencies.md). Disputed values (room, spa and flower-bath
// prices, capacity, cancellation wording) are intentionally not stored here.

export const site = {
  name: 'Shambala Oceanside Retreat',
  tagline: 'Serenity, Spirituality and Sustainability',
  url: 'https://baliseminars.com',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/retreats', label: 'Retreats' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/contact', label: 'Contact' },
];

export const contact = {
  email: 'info@baliseminars.com',
  landline: { display: '+62 362 3428351', tel: '+623623428351' },
  mobile: { display: '+62 813 3867 4895', tel: '+6281338674895', person: 'Edy, Guest Service Manager' },
  address: ['Pantai Bondalem, Desun Jro Kuta', 'Bondalem, Tejakula 81173', 'District of Buleleng, Bali, Indonesia'],
  shortAddress: 'Pantai Bondalem, Tejakula, North Bali',
  businessName: 'PT SHANGRILA',
  maps: 'https://maps.app.goo.gl/6dttN16BsRB1wF3U7',
  facebook: 'https://www.facebook.com/ShambalaRetreatCenter',
  linktree: 'https://linktr.ee/shambalabali',
  perama: 'https://linktr.ee/peramatour',
  ritatkala: 'https://linktr.ee/ritatkalacafe',
};

export const booking = {
  room: 'https://www.wetravel.com/checkout_embed?uuid=98410851',
  personal7: 'https://www.wetravel.com/trips/personal-retreat-shambala-oceanside-bali-shambala-oceanside-retreat-21276371',
  personal30: 'https://www.wetravel.com/trips/personal-retreat-30day-shambala-oceanside-bali-shambala-oceanside-retreat-4668222409',
  detox: 'https://www.wetravel.com/trips/personal-detox-retreat-rejuvenate-your-essence-shambala-oceanside-retreat-indonesia-40663672',
  groupDeposit: 'https://www.wetravel.com/trips/group-event-deposit-shambala-oceanside-retreat-74805841',
};

export const docs = {
  menu: '/docs/shambala-menu.pdf',
  waiver: '/docs/guest-waiver-2025.pdf',
  directions: '/docs/directions-en.pdf',
  packingEn: '/docs/packing-list-2025-en.pdf',
  packingDe: '/docs/packliste-2025-de.pdf',
  c10: '/docs/c10-visa-group-leader-2026.pdf',
};

export const houseRules = [
  'No pets',
  'No alcohol',
  'No mind-altering substances of any kind',
  'No meat or fish, in the restaurant, the private kitchenettes or anywhere on the land',
  'No smoking, except on the far corners of the property',
  'No children under 12, except upon approval',
  'No garlic in any of our food, nor on our land, and no MSG',
];
