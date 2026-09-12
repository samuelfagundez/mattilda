// Única fuente de verdad del negocio. Datos tomados de Google Maps
// (ver /data/place.json y /data/ficha.md) el 12 de septiembre de 2026,
// más el teléfono y el Instagram confirmados directamente por el cliente
// (ver /data/contacto.json). Pendiente: el cliente no facilitó correo
// electrónico propio del restaurante.

export const content = {
  name: 'Mattilda',
  shortName: 'Mattilda',
  tagline: 'Arrocería y cocina mediterránea en el Barrio del Carmen, Valencia',
  description:
    'Mattilda es un restaurante de cocina mediterránea en pleno Barrio del Carmen, en el casco histórico de Valencia, especializado en arroces y fideuás de precisión. Su carta cambia con frecuencia y combina entrantes de autor con producto de mercado, arroces con socarrat cuidado al detalle y una selección de postres caseros. Un local con encanto, alejado de los circuitos más turísticos, donde el trato es cercano y se adaptan sin problema a intolerancias y alergias.',
  metaDescription:
    'Restaurante de arroces y cocina mediterránea en el Barrio del Carmen, Valencia. Menú del día, fideuás y postres caseros en Carrer de Roteros, Ciutat Vella.',
  keywords: [
    'Mattilda',
    'restaurante Valencia',
    'Barrio del Carmen',
    'Ciutat Vella',
    'arroces Valencia',
    'fideuá Valencia',
    'menú del día Valencia',
    'cocina mediterránea',
  ],
  priceRange: '20 € - 30 €',
  priceRangeDisplay: '20 € – 30 € por persona',
  cuisine: 'Cocina mediterránea y arrocería',

  rating: { value: 4.4, count: 746, countDisplay: '746 reseñas' },
  highlights: [
    'Arroces y fideuás de precisión, con socarrat cuidado al detalle — referencia en el Carmen.',
    'Menú del día muy completo, con producto de mercado y carta que cambia con frecuencia.',
    'Ambiente acogedor y trato cercano, ideal tanto para una comida de grupo como para una cena tranquila.',
    'Se adaptan sin problema a intolerancias y alergias alimentarias.',
  ],

  address: {
    streetAddress: 'Carrer de Roteros, 21',
    addressLocality: 'València',
    addressRegion: 'Valencia',
    postalCode: '46003',
    addressCountry: 'ES',
    full: 'Carrer de Roteros, 21, Ciutat Vella, 46003 València, Valencia',
  },
  geo: { lat: 39.4789655, lng: -0.3775018 },

  phone: '+34 963 92 31 68',
  phoneDisplay: '963 92 31 68',
  whatsappNumber: '34963923168',
  email: '',

  siteUrl: 'https://samuelfagundez.github.io/mattilda/',

  menuUrl: 'https://go.nordqr.com/46ud52/',

  social: {
    instagram: 'https://www.instagram.com/mattilda_vlc/',
    facebook: '',
    tiktok: '',
    whatsapp: '',
  },

  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '13:00 – 16:00' },
    { day: 'Miércoles', hours: '13:00 – 16:00' },
    { day: 'Jueves', hours: '13:00 – 16:00' },
    { day: 'Viernes', hours: '13:00 – 16:00' },
    { day: 'Sábado', hours: '13:00 – 16:00' },
    { day: 'Domingo', hours: '13:00 – 16:00' },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '13:00',
      closes: '16:00',
    },
  ],

  gallery: [
    {
      src: '/gallery/mattilda-fachada-terraza.jpg',
      alt: 'Fachada y terraza de Mattilda en Carrer de Roteros, Barrio del Carmen, Valencia',
    },
    {
      src: '/gallery/mattilda-arroz-fideua.jpg',
      alt: 'Fideuá de fideo fino servida en Mattilda',
    },
    {
      src: '/gallery/mattilda-puerros-jamon.jpg',
      alt: 'Puerros con salsa y jamón, entrante de la carta de Mattilda',
    },
    {
      src: '/gallery/mattilda-tartar-ensalada.jpg',
      alt: 'Tartar con hojas frescas y vinagreta de la carta de Mattilda',
    },
    {
      src: '/gallery/mattilda-secreto-flor.jpg',
      alt: 'Secreto ibérico con rúcula y flor comestible en Mattilda',
    },
    {
      src: '/gallery/mattilda-gazpacho.jpg',
      alt: 'Crema fría de remolacha con aceite de oliva en Mattilda',
    },
    {
      src: '/gallery/mattilda-brioche-mango.jpg',
      alt: 'Postre de brioche con salsa de mango en Mattilda',
    },
    {
      src: '/gallery/mattilda-postres.jpg',
      alt: 'Tarta de queso y crumble de manzana, postres caseros de Mattilda',
    },
  ],

  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Mattilda, Carrer de Roteros 21, 46003 València') +
    '&hl=es&z=16&output=embed',
  mapLinkUrl:
    'https://maps.google.com/?cid=7420912631637122045&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CONTACT_MESSAGE =
  '¡Hola! Vengo de la página web de Mattilda y tengo una consulta.'
export const WHATSAPP_RESERVE_MESSAGE =
  '¡Hola! Vengo de la página web de Mattilda y me gustaría hacer una reserva.'

// Sin sistema de reservas propio: cae siempre a WhatsApp.
export const reservationLink = ''

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE)
}

export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE)
}
