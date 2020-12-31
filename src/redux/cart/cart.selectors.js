import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems,
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden,
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQty, cartItem) => accumulatedQty + cartItem.qty,
    0,
  ),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.qty * cartItem.price,
    0,
  )
)
