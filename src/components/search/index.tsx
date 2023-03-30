import React from 'react';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/filter/slice';
import styles from './search.module.scss';
import { useAppDispatch } from '../../redux/store';
import search from '../../img/search.svg';
import close from '../../img/close.svg';
const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>();

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 450),
    [],
  );
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };
  const onChengeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.searchBlock}>
      <img className={styles.search} width="30" src={search} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChengeValue}
        className={styles.input}
        placeholder="Пошук піц..."
        type="text"
      />
      {value && (
        <img onClick={onClickClear} className={styles.close} width="20" src={close} alt="close" />
      )}
    </div>
  );
};

export default Search;
