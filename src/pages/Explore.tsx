import { Wrapper } from '../components/Wrapper'
import { SearchButton } from '../components/SearchButton'
import { TopicBar } from '../components/TopicBar'
import { CardList } from '../components/CardList'

export const Explore = () => {
  return (
    <Wrapper>
      <div className="lg:mt-32 md:mt-24 mt-12 text-center gap-y-10 flex flex-col">
        <h1 className="text-4xl lg:text-3xl font-bold lg:tracking-tight">
          Busca el proyecto, creador de contenido, ONG que mas te guste e invitale un T-cito!
        </h1>
        <p className="text-xl mt-4 text-slate-600">
          T-cito es una plataforma donde podrás presentar al mundo lo que amas
          hacer!
        </p>

        <div className="flex max-w-3xl mx-auto h-16 p-5 items-center">
          <SearchButton />
        </div>
        <TopicBar />
        <CardList />
      </div>
    </Wrapper>
  )
}
