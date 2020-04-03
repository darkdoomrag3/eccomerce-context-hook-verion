export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


export const removeItemFromCart = (cartItems, cartItemsToRemove) => {

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id == cartItemsToRemove.id
  )

  if (existingCartItem.id == 1) {
    return cartItems.filter(cartItem => cartItem.id == !cartItemsToRemove.id)
  }

  return cartItems.map(
    cartItem =>
      cartItem.id == cartItemsToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  )

}


export const filterItemFromCart = (cartItems, item) => cartItems.filter(cartItem => cartItem.id !== item.id)

export const getCartItemCount = cartItems => cartItems.reduce(
  (accumalatedQuantity, cartItem) =>
    accumalatedQuantity + cartItem.quantity,
  0
)

  export const getCartTotal = cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );