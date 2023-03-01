import cx from 'classnames';
import { useSelector } from '~/hooks/useRedux';
import { DarkModeSwitcher } from './DarkModeSwitcher';

export function Header() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <header
      className={cx('fixed flex w-full flex-row justify-between px-4 py-9 shadow-md', {
        'bg-dark-elements': darkMode,
        'bg-light-elements': !darkMode,
      })}
    >
      <p className='font-extrabold'>Where in the world?</p>
      <DarkModeSwitcher />
    </header>
  );
}
