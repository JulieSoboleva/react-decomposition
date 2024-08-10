import './Navigator.css';

interface ICategories {
    categories: string[],
}

/**
 * Отрисовка панели навигации по категориям поиска
 */
export default function Navigator(props: ICategories) {
    const {categories} = props;
    return (
        <nav className='search-nav'>
            <ul className='search-nav-menu'>
                {categories.map((category, index) => {
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
    );
}