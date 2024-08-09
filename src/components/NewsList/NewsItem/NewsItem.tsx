import './NewsItem.css'

interface INewsItem {
    icon: string,
    text: string,
    link: string,
}

/** 
 * Отрисовка элементов списка новостей 
 */
export default function NewsItem (props: INewsItem) {
    const { icon, text, link } = props;

    return (
        <li className='news-content__item'>
            <a href={link} className='news-content__link'>
                <img src={icon} alt='-' className='news-content__icon'/>
                <span>&nbsp;</span>
                <span>{text}</span>
            </a>
        </li>
    );
}