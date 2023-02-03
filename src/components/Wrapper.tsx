import React, { Children } from 'react'
interface Props {
  children: React.ReactNode
}
export const Wrapper = ({ children }: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-5'>
      {children}
    </div>
  )
}
