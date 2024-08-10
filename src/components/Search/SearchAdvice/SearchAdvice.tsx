import './SearchAdvice.css';

interface ISearchAdvice {
    searchAdvice: string,
    searchExample: string,
}

export default function SearchAdvice({searchAdvice, searchExample}: ISearchAdvice) {
    return (
        <p className='search-advice'>
            {searchAdvice}
            <span className='search-advice__example'>
                &nbsp;{searchExample}
            </span>
        </p>
    );
}