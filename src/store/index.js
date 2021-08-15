import { createStore } from 'vuex';
import robots from './modules/robots';
import users from './modules/users';

export default createStore({
  modules: {
    robots,
    users,
  },
});
