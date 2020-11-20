import React from 'react';
import { ISearchBar } from '../interfaces/interfaces';

const SearchBar: React.FC<ISearchBar> = ({label,value, onChange,locked,active,padding}) => {
    
      // tslint:disable-next-line:no-console
    // const [activeS, setActive] = useState<boolean>(locked && active|| false);
    // const [error, setError] = useState<string>("");
    const error = "";
    // const [label, setLabel] = useState<string>("Label");

    const fieldClassName = `field ${(padding ? 'padding' : '')} ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;
    
    return (
        <>
        <div className={fieldClassName}>
            {active && value
            // predicted &&
            //         predicted.includes(value) && <p className="predicted">{predicted}</p>
            }
            <input
            // id={1}
                type="text"
                value={value}
                placeholder={label}
                maxLength={39}
                onChange={e => onChange(e.target.value)}
            />
            <label className={error && "error"}>
            {error || label}
            </label>
        </div>
    </>
);
};

export default SearchBar;


// htmlFor={1}