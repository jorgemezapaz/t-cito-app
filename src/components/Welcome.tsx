import React from 'react'
import { Wrapper } from './Wrapper'

export const Welcome = () => {
  return (
    <Wrapper>
      <div className="lg:mt-32 md:mt-24 mt-12 text-center gap-y-10 flex flex-col">
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
          Haz dinero con lo que amas!
        </h1>
        <p className="text-xl mt-4 text-slate-600">
          T-cito es una plataforma donde podrás presentar al mundo lo que amas
          hacer!
        </p>

        <div className="flex max-w-xl mx-auto h-16 p-5 items-center">
          <a
            href="/sign-up"
            className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-full text-xl px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-2">
            Comenzar
          </a>
        </div>
      </div>
    </Wrapper>
  )
}
