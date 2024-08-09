export interface ProgrammItem {
    time?: string,
    show: string,
    channel: string,
}

const tvProgramm: ProgrammItem[] = [
    {
        time: '02:00',
        show: 'ТНТ.best',
        channel: 'ТНТ International',
    },
    {
        time: '02:15',
        show: 'Джинглики',
        channel: 'Карусель INT',
    },
    {
        time: '02:25',
        show: 'Наедине со всеми',
        channel: 'Первый',
    },
];

export default tvProgramm;