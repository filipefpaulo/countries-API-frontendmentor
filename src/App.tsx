import cx from 'classnames';
import { useEffect } from 'react';
import { CountrieCard } from './components/CountrieCard';
import { Header } from './components/Header';
import { fetchCountries } from './features/countries.slice';
import { useDispatch, useSelector } from './hooks/useRedux';

function App() {
  const darkMode = useSelector((state) => state.darkMode.mode);
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div
      className={cx('font-defaultFont', {
        'text-dark-text': darkMode,
        'text-light-text': !darkMode,
      })}
    >
      <div
        className={cx('fixed -z-10 h-screen w-screen', {
          'bg-dark-background': darkMode,
          'bg-light-background': !darkMode,
        })}
      />
      <Header />
      <div className='grid grid-cols-1 gap-10 px-10 pt-40'>
        {countries?.map((country, index) => (
          <CountrieCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
