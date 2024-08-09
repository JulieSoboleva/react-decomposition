import React from 'react';
import '../Widgets.css';

interface PropsWithChildrenAndTitle {
    children: JSX.Element, 
    title: string,
}

/** 
 * Отрисовка виджета 
*/
export default function Widget (props: PropsWithChildrenAndTitle) {
    const content = React.Children.map(props.children, (child) => child);

    return (
        <>
            <h3 className='widget-title'>
                <a href='#0' className='widget-title__link'>
                    {props.title}
                </a>
            </h3>
            <div className='widget'>
                {content}
            </div>
        </>
    );
};