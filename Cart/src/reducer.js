const reducer = (state, action) => {
  if (action.type === "intialize") {
    const newCart = action.payload.map((obj) => {
      return { ...obj, price: parseFloat(obj.price) };
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "loading") {
    return { ...state, loading: 1 };
  }
  if (action.type === "show") {
    return { ...state, loading: 0 };
  }
  if (action.type === "getTotal") {
    let { total, cost } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const costTotal = price * amount;

        cartTotal.cost += costTotal;
        cartTotal.total += amount;
        return cartTotal;
      },
      {
        total: 0,
        cost: 0,
      }
    );
    cost = parseFloat(cost.toFixed(2));

    return { ...state, total, cost };
  }
  if (action.type === "remove") {
    const id = action.payload;
    const ind = state.cart.findIndex((curr) => curr.id === id);
    const cost = state.cost - state.cart[ind].amount * state.cart[ind].price;
    const total = state.total - state.cart[ind].amount;
    const newCart = state.cart.filter((curr) => curr.id !== id);
    return { ...state, cart: newCart, cost, total: total };
  }
  if (action.type === "clear") {
    return { ...state, cart: [] };
  }
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
};

export default reducer;
