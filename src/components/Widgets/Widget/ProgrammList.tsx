import { ProgrammItem } from "../../../data/tvProgramm";

/** 
 * Отрисовка элементов списка программы телепередач 
 */
export default function ProgrammList(props: ProgrammItem) {
    const {time, show, channel} = props;

    return (
        <li className='widget-list__item'>
            {time ? <span className='widget-list__item-time'>{`${time}\u00A0\u00A0`}</span> : null}
            <span className='widget-list__item-show'>{show}</span>
            <span className='widget-list__item-channel'>{`\u00A0\u00A0${channel}`}</span>
        </li>
    );
}