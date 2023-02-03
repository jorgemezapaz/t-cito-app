interface Props {
  partnerId: string,
  name: string,
  avatar: string,
  banner: string,
  description: string
}
export const PartnerCard = ({ partnerId, name, avatar, banner, description }: Props) => {
  return (
    <a href={`/${partnerId}`} className="w-64 shadow-lg rounded-2xl hover:shadow-2xl">
      <img alt="profil" src={banner} className="w-full mb-4 rounded-t-lg h-28" />
      <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <div className="relative block">
          <img alt="profil" src={avatar} className="mx-auto object-cover rounded-full h-16 w-16 " />
        </div>
        <p className="mt-2 text-xl font-medium text-gray-800">
          {name}
        </p>
        <p className="text-xs text-gray-400">
          {description}
        </p>
        <div className="flex items-center justify-between w-full gap-4 mt-8">
          <span className="px-4 text-base rounded-full text-indigo-400 border border-indigo-400 hover:bg-indigo-400 hover:text-white">
            Ver Perfil
          </span>
        </div>
      </div>
    </a>

  )
}
