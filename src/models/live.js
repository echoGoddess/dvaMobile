const fns = {
  getTopicsDiscuessing(data) {
    return data;
  },
};
export default {
  namespace: 'live',
  state: {
    dynamic_search: '', // 动态搜索关键字
    toppics: [], // 所有话题
    topics_discuess: [], // 正在讨论的话题
    types_subscribes: [], // 所有订阅类型
    types_space: [], // 空间类型
    types_decoration: [], // 装修必看类型
    types_optimization: [], // 家居优化无止境类型
    types_subscribes_ing: [], // 当前用户订阅的类型
    types_hot: [], // 热门
    all_dynamic: [], // 动态的所有数据
    total_dynamic: null, // 动态的所有数据总数
    users: [], // 所有用户
    follows: [], // 关注的用户
    comments: [], // 所有评论
  },
  reducers: {
    initTopics(state, { payload: { data, total } }) { // 初始化话题数据
      Object.assign(state, { toppics: data, topics_discuess: fns(data), total_dynamic: total });
      return { ...state };
    },
    initSubscribes(state, { payload: { data } }) { // 初始化订阅数据
      Object.assign(state, { types_subscribes: data });
      return { ...state };
    },
  },
  effects: {},
  subscriptions: {},
};
