import { CurrencyRateItem } from '../../data/currencyRates'
import RateItem from './RateItem/RateItem';
import './ExchangeRates.css';

interface CurrencyRatesList {
    currencyRates: CurrencyRateItem[],
}

/** 
 * Отрисовка списка курсов валют 
 */ 
export default function ExchangeRates({ currencyRates }: CurrencyRatesList) {
    return (
        <div className='exchange-rates-container'>
            <ul className='exchange-rates'>
                {currencyRates.map((item, index) => {
                    return (
                        <RateItem 
                            key={index}
                            currency={item.currency}
                            rate={item.rate}
                        />
                    );
                })}
            </ul>
            <a href='#0' className='exchange-rates__more-rates'>
                &#8230;
            </a>
        </div>
    );
}