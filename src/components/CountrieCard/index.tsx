import cx from 'classnames';
import { formatNumber } from '~/helpers/formatNumber';
import { useSelector } from '~/hooks/useRedux';
import { CountryInterface } from '~/interface/country.interface';

interface CountrieCardProps {
  country: CountryInterface;
}

export function CountrieCard({ country }: CountrieCardProps) {
  const darkMode = useSelector((state) => state.darkMode.mode);

  const infos = [
    { title: 'Population', value: formatNumber(country.population) },
    { title: 'Region', value: country.region },
    { title: 'Capital', value: country.capital },
  ];

  return (
    <div
      className={cx('w-fit rounded-md shadow-md', {
        'bg-dark-elements': darkMode,
        'bg-light-elements': !darkMode,
      })}
    >
      <img src={country.flags.png} alt={country.flags.alt} className='rounded-t-md' />
      <div className='p-6'>
        <p className='pb-6 text-xl font-bold'>{country.name.common}</p>
        {infos.map(({ title, value }, index) => (
          <div key={index}>
            <span className='font-semibold'>{title}: </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
