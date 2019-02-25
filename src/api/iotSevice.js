import {post,fetch,patch,put} from './http.js'
export default {
  xxx: function (str, params) {
    return post("/api/" + str , params);
  },
}
