import { CurrencyRateItem } from '../../../data/currencyRates';
import './RateItem.css';

/** 
 * Отрисовка элементов списка курсов валют 
 */
export default function RateItem(props: CurrencyRateItem) {
    const {currency, rate} = props;

    return (
        <li className='exchange-rates__item'>
            <a href='#0' className='exchange-rates__item-link'>
                {currency}
            </a>
            <span className='exchange-rates__item-rate'>
                {rate}
            </span>
        </li>
    );
}
