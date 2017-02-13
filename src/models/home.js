
export default {

  namespace: 'home',

  state: {
    zuopin: {
      aa: 'haha'
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      console.log(state)
      return { ...state, ...action.payload };
    },
  },

};
