export interface CurrencyRateItem {
    currency: string,
    rate: string,
}

const currencyRates: CurrencyRateItem[] = [
    {
        currency: 'usd moex',
        rate: '+0,09'
    },
    {
        currency: 'eur moex',
        rate: '+0,14'
    },
    {
        currency: 'нефть',
        rate: '+1.63%'
    },
];

export default currencyRates;