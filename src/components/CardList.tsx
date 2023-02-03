import { PartnerCard } from './PartnerCard'
const data = [{
  id: '1',
  name: 'Jorgillo el poderoso',
  avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  banner: 'https://cdn.cafecito.app/images_profile/5ed4c760-bb55-11ec-8270-7704816fd9c3.webp',
  description: 'esto es una descripcion de unas cuantas lineas para ver como queda con 100 caracteres la tarjeta ...'
}, {
  id: '2',
  name: 'Papu el gordillo',
  avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
  banner: 'https://cdn.cafecito.app/images_profile/37a039c0-bae4-11ec-8270-7704816fd9c3.webp',
  description: 'esto es una descripcion de unas cuantas lineas para ver como queda con 100 caracteres la tarjeta ...'
}, {
  id: '3',
  name: 'Jorgillo el poderoso',
  avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
  banner: 'https://cdn.cafecito.app/images_profile/7ea61e10-bb26-11ec-8270-7704816fd9c3.webp',
  description: 'esto es una descripcion de unas cuantas lineas para ver como queda con 100 caracteres la tarjeta ...'
}, {
  id: '4',
  name: 'Ana xd',
  avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
  banner: 'https://cdn.cafecito.app/images_profile/QGuxvAiJNN-f96b5ff6-75a8-4fc7-a933-5eea745d13cb.webp',
  description: 'esto es una descripcion de unas cuantas lineas para ver como queda con 100 caracteres la tarjeta ...'
}, {
  id: '5',
  name: 'Maria Maria',
  avatar: 'https://randomuser.me/api/portraits/women/88.jpg',
  banner: 'https://cdn.cafecito.app/images_profile/QGuxvAiJNN-f96b5ff6-75a8-4fc7-a933-5eea745d13cb.webp',
  description: 'esto es una descripcion de unas cuantas lineas para ver como queda con 100 caracteres la tarjeta ...'
}, {
  id: '6',
  name: 'Sigan viendo',
  avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  banner: 'https://cdn.cafecito.app/images_profile/5ed4c760-bb55-11ec-8270-7704816fd9c3.webp',
  description: 'esto es una descripcion de unas cuantas lineas para ver como queda con 100 caracteres la tarjeta ...'
}, {
  id: '7',
  name: 'Alicia ooh',
  avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
  banner: 'https://cdn.cafecito.app/images_profile/37a039c0-bae4-11ec-8270-7704816fd9c3.webp',
  description: 'esto es una descripcion de unas cuantas lineas para ver como queda con 100 caracteres la tarjeta ...'
}]
export const CardList = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 space-y-2 justify-center'>
      {data.map((item, key) => (
        <PartnerCard key={key} partnerId={item.id} name={item.name} avatar={item.avatar} banner={item.banner} description={item.description} />
      ))}
    </div>
  )
}
