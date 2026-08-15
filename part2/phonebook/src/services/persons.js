import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => axios.get(baseUrl).then(response => response.data)

const addRow = newRow => axios.post(baseUrl, newRow)
                                .then(response => response.data)

const delRow = id => axios.delete(`${baseUrl}/${id}`)
                            .then(response => response.data)

const changeNumber = (id, changedRow) => {
    return axios.put(`${baseUrl}/${id}`, changedRow)
            .then(response => response.data)
}
    
export default {
    getAll,
    addRow,
    delRow,
    changeNumber
}