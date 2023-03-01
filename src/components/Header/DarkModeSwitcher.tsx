import cx from 'classnames';
import { Moon } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { useSelector } from '~/hooks/useRedux';
import { toggleDarkMode } from '~/features/darkMode.slice';

export function DarkModeSwitcher() {
  const darkMode = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();

  return (
    <button className={cx('flex flex-row align-middle')} onClick={() => dispatch(toggleDarkMode())}>
      <Moon weight={darkMode ? 'fill' : 'regular'} size={20} />
      <p className='pl-2'>Dark Mode</p>
    </button>
  );
}
