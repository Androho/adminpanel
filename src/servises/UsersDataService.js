import http from "../http-common";

class UsersDataService {
    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/user/${id}`);
    }

    create(data) {
        return http.post("/user", data);
    }

    update(id, data) {
        return http.put(`/user/${id}`, data);
    }

    delete(id) {
        return http.delete(`/user/${id}`);
    }

    deleteAll() {
        return http.delete(`/users`);
    }

    findByTitle(title) {
        return http.get(`/user?title=${title}`);
    }
}

export default new UsersDataService();
