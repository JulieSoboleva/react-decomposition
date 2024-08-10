
import Navigator from './Navigator/Navigator';
import SearchForm from './SearchForm/SearchForm';
import './Search.css';
import SearchAdvice from './SearchAdvice/SearchAdvice';

interface SearchItem {
    searchСategories: string[],
    searchLogo: string,
    searchBtnName: string,
    searchAdvice: string,
    searchExample: string,
}

/** 
 * Отрисовка элементов поиска подсказка строки поиска 
 */
export default function Search(props: SearchItem) {
    const {
        searchСategories,
        searchLogo,
        searchBtnName,
        searchAdvice,
        searchExample,
    } = props;

    return (
        <div className='search'>
            <Navigator categories={searchСategories}/>

            <SearchForm searchLogo={searchLogo} searchBtnName={searchBtnName}/>

            <SearchAdvice searchAdvice={searchAdvice} searchExample={searchExample}/>
        </div>
    );
}