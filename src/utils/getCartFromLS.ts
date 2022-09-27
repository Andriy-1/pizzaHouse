import { CartItem } from '../redux/cart/types';
import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLS: Function = () => {
  const data = localStorage.getItem('cart');
  const items: CartItem[] = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  if (items.length) {
    return {
      items: items as CartItem[],
      totalPrice: totalPrice as number,
    };
  }
  return {
    items: [] as CartItem[],
    totalPrice: 0,
  };
};
