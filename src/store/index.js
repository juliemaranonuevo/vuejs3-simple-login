import { createStore } from 'vuex';
import { UserModule } from './user';
import { AuthModule } from './auth';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      User: UserModule,
      Auth: AuthModule
  }
})
