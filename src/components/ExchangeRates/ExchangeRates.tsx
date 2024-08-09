import { CurrencyRateItem } from '../../data/currencyRates'
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
                        <li className='exchange-rates__item' key={index}>
                            <a href='#0' className='exchange-rates__item-link'>
                                {item.currency}
                            </a>
                            <span className='exchange-rates__item-rate'>
                                {item.rate}
                            </span>
                        </li>
                    );
                })}
            </ul>
            <a href='#0' className='exchange-rates__more-rates'>
                &#8230;
            </a>
        </div>
    );
}