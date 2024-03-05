const reducer = (state, action) => {
    if (action.type === "add") {
      const existingItemIndex = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (existingItemIndex !== -1) {
        return state.map((item, index) =>
          index === existingItemIndex ? { ...item, order: item.order + 1 } : item
        );
      } else {
        return [...state, { ...action.payload, order: 1 }];
      }
    } else if (action.type === "sub") {
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem && existingItem.order > 1) {
        return state.map((item) =>
          item.name === action.payload.name
            ? { ...item, order: item.order - 1 }
            : item
        );
      } else {
        return state.filter((item) => item.name !== action.payload.name);
      }
    } else {
      return state;
    }
  };
  
  export default reducer;