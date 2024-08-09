import './Search.css';

interface SearchItem {
    searchСategories: string[],
    searchLogo: string,
    searchBtnName: string,
    searchAdvice: string,
    searchExample: string,
}

/** 
 * Отрисовка элементов поиска: навигация по страницам, поле ввода запроса и подсказка строки поиска 
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
            <nav className='search-nav'>
                <ul className='search-nav-menu'>
                    {searchСategories.map((category, index) => {
                        return (
                            <li className='search-nav-menu__item active' key={index}>
                                <a href='#0' className='search-nav-menu__item-link'>
                                    {category}
                                </a>
                            </li>
                        );
                    })}
                    <li className='search-nav-menu__item'>
                        <a href='#0' className='search-nav-menu__item-link'>
                            ещё
                        </a>
                    </li>
                </ul>
            </nav>

            <form className='search-bar'>
                <img src={searchLogo} alt='logo' className='search-bar-logo'/>
                <input className='search-bar-input' id='search-bar-input' type='text' name='search-bar-input' required />
                <button className='search-bar-button' type='submit'>
                    {searchBtnName}
                </button>
            </form>

            <p className='search-advice'>
                {searchAdvice}
                <span className='search-advice__example'>
                    &nbsp;{searchExample}
                </span>
            </p>
        </div>
    );
}