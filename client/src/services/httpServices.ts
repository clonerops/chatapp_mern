import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

const url = 'http://localhost:8000/api'


const http = {
    url: url,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}

export default http