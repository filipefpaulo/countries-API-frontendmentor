import cx from 'classnames';
import { Header } from './components/Header';
import { useSelector } from './hooks/useRedux';

function App() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <div
      className={cx('h-screen w-screen font-defaultFont', {
        'bg-dark-background text-dark-text': darkMode,
        'bg-light-background text-light-text': !darkMode,
      })}
    >
      <Header />
    </div>
  );
}

export default App;
