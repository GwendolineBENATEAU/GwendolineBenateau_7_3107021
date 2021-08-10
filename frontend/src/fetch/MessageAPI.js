import { API_URL } from '../config'
import axios from 'axios'

function findAll() {
      return axios.get(`${API_URL}/messages`).then((res) => res.data)
}

function findOne(id) {
      return axios.get(`${API_URL}/messages/${id}`).then((res) => res.data)
}

function findComments(id) {
      return axios
            .get(`${API_URL}/messages/${id}/comments`)
            .then((res) => res.data)
}

function create(message) {
      return axios.post(`${API_URL}/messages`, message)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
      findAll,
      findOne,
      findComments,
      create,
}
