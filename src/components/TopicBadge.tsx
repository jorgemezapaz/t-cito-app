import { useState } from "react"

interface Props {
  id: string,
  name: string,
  handler: (topic: string) => any
}
export const TopicBadge = ({ id, name, handler }: Props) => {
  const [select, isSelect] = useState(false)
  const selectHandler = () => {
    handler(name)
    isSelect(current => !current)
  }
  return (
    <span className={`flex flex-row gap-1 ${select ? ' bg-fuchsia-600 ' : 'bg-indigo-500 '} px-2 py-1 rounded-full text-white text-sm cursor-pointer`} onClick={selectHandler}>
      {name}
      {select && <button className="bg-transparent hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 1792 1792">
          <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
          </path>
        </svg>
      </button>}
    </span>
  )
}
