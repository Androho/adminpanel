import axios from "axios";

export default axios.create({
    baseURL: "http://bijb/edit/api/api.php",
    headers: {
        "Content-type": "application/json"
    }
});
