import NewsItem from './NewsItem/NewsItem';
import './NewsList.css';

interface NewsCategoriesList {
    newsCategories: string[],
    newsList: string[],
}

/** 
 * Отрисовка поля навигации по категориям новостей и списка новостей 
 */
export default function NewsList ({ newsCategories, newsList }: NewsCategoriesList) {
    return (
        <div className='news'>
            <nav className='news-nav'>
                <ul className='news-nav-menu'>
                    {newsCategories.map((category, index) => {
                        return (
                            <li
                                className={`news-nav-menu__item ${index === 0 ? 'active' : ''}`}
                                key={index}
                            >
                                <a href='#0' className='news-nav-menu__item-link'>{category}</a>
                            </li>
                        );
                    })}
                </ul>
                <span className='news-current-datetime'>31 июля, среда 02:32</span>
            </nav>
            <div className='news-content'>
                <ul>
                    {newsList.map((name, index) => {
                        return (
                            <NewsItem 
                                key={index}
                                icon='https://seeklogo.com/images/R/ria-novosti-logo-0252FBCC61-seeklogo.com.png'
                                text={name}
                                link='#'
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}