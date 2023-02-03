import http from '../config/http'
import ITopic from '../types/Topic'

const getAll = () => {
  return http.get<Array<ITopic>>("/topics");
};

const TopicService ={
  getAll  
}

export default TopicService