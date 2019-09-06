const articles = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_STUNDIN':
    return Object.assign({}, state, { ...action.data });
  default:
    return state;
  }
};

export default articles;
