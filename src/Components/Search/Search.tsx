import React,{useState,FC} from 'react';
import './Search.scss'

interface ISearchProps {
    setSearch:(str:string) => void
}

const Search:FC<ISearchProps> = (props) => {
    const {
        setSearch = Function.prototype
    } = props;
    const [str,setStr] = useState<string>('');
    const  handleKey = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            setSearch(str);
        }
    };
    return (
        <div className="form">
            <input
                        className='input'
                        placeholder='search'
                        type='search'
                        value={str}
                        onChange={(e) =>
                            setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
            <button
                         className='button'
                         name='type'
                         type='button'
                         onClick={() =>
                            setSearch(str)
                        }
                    >
                        Search
                    </button>
         </div>
    );
};

export  {Search};