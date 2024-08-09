import './Widgets.css';

interface WidgetItem {
    children: JSX.Element[], 
}

/**
 * Распределение виджетов по трём колонкам 
 */
export default function Widgets({ children }: WidgetItem) {
    const column1: JSX.Element[] = [];
    const column2: JSX.Element[] = [];
    const column3: JSX.Element[] = [];

    children.forEach((widget, index) => {
        if (index % 3 === 0) {
            column1.push(widget);
        } else if (index % 3 === 1) {
            column2.push(widget);
        } else if (index % 3 === 2) {
            column3.push(widget);
        }
    })

    return (
        <>
            <div className='widgets-column'>
                {column1.map((widget, index) => {
                    return (
                        <div className='widget-container' key={index}>
                            {widget}
                        </div>
                    );
                })}
            </div>
            <div className='widgets-column'>
                {column2.map((widget, index) => {
                    return (
                        <div className='widget-container' key={index}>
                            {widget}
                        </div>
                    );
                })}
            </div>
            <div className='widgets-column'>
                {column3.map((widget, index) => {
                    return (
                        <div className='widget-container' key={index}>
                            {widget}
                        </div>
                    );
                })}
            </div>
        </>
    );
}