import './SearchForm.css';

interface ISearchForm {
    searchLogo: string,
    searchBtnName: string,
}

/**
 * Отрисовка формы поиска для ввода пользователем запроса
 */
export default function SearchForm({searchLogo, searchBtnName}: ISearchForm) {
    return (
        <form className='search-bar'>
            <img src={searchLogo} alt='logo' className='search-bar-logo'/>
            <input className='search-bar-input' id='search-bar-input' type='text' name='search-bar-input' required />
            <button className='search-bar-button' type='submit'>
                {searchBtnName}
            </button>
        </form>
    );
}