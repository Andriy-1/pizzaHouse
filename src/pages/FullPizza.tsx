import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { selectCartItemId } from '../redux/cart/selector';
import { setItem } from '../redux/cart/slice';
import Skeleton from '../components/pizzaBlock/skeleton';
import { useAppDispatch } from '../redux/store';
import { CartItem } from '../redux/cart/types';
export const FullPizza: React.FC = () => {
  const typeNames: string[] = ['тонкі', 'традиційне'];
  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
  }>();
  const cartItem = useSelector(selectCartItemId(id ? id : ''));

  const addedCount = cartItem ? cartItem.count : 0;

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://62910cd627f4ba1c65c720d9.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {}
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <Skeleton />;
  }

  const { imageUrl, title, types, sizes, price } = pizza;
  const clickAddItem = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 1,
    };
    dispatch(setItem(item as CartItem));
  };
  return (
    <div className="container fullPizza-container">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((index: number) => (
              <li
                onClick={() => setActiveType(index)}
                key={index}
                className={activeType === index ? 'active' : ''}>
                {typeNames[index]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((value: number, index: number) => (
              <li
                onClick={() => setActiveSize(index)}
                key={index + value}
                className={activeSize === index ? 'active' : ''}>
                {value} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">від {price} ₴</div>
          <button onClick={clickAddItem} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавити</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default FullPizza;
