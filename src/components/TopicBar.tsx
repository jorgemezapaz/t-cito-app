import React, { useEffect, useState } from 'react'
import { TopicBadge } from './TopicBadge'
import TopicService from '../services/TopicService'
import ITopic from '../types/Topic'

export const TopicBar = () => {

  const [topics, setTopics] = useState<Array<ITopic> | null>(null)
  const [topicsSearch, setTopicsSeach] = useState<Array<string>>([])
  useEffect(() => {
    TopicService.getAll().then((response: any) => {
      setTopics(response.data)
    }
    ).catch((e: Error) =>
      console.log(e)
    )
  }, [])

  useEffect(() => {
    console.log('call to server, filters topics=' + topicsSearch.join(","))
    console.log(topicsSearch)
  }, [topicsSearch])

  const searchByTopicsHandler = (topicName: string) => {
    let newFilter: Array<string>
    if (topicsSearch.indexOf(topicName) >= 0) {
      newFilter = topicsSearch.filter(item => item !== topicName)
    } else {
      newFilter = [...topicsSearch, topicName]
    }
    setTopicsSeach(newFilter)
  }
  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {topics && topics.map((topic, index) => (
        <TopicBadge key={index} id={topic.code} name={topic.name} handler={searchByTopicsHandler} />
      ))}
    </div>
  )
}
