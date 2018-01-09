import axios from 'axios'

export default {
  getList () {
    return axios.get('https://cnodejs.org/api/v1/topics').then(res => res.data)
  }
}