import React,{useState} from 'react';
import { ISearchBar } from './interfaces';

const SearchBar: React.FC<ISearchBar> = ({id,label,value, onChange,locked,active}) => {

    const [activeS, setActive] = useState<boolean>(locked && active|| false);
    const [valueS, setValue] = useState<string>(value || "");
    const [error, setError] = useState<string>("");
    // const [label, setLabel] = useState<string>("Label");

    const fieldClassName = `field ${(locked ? active : active || value) &&
        "active"} ${locked && !active && "locked"}`;

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const target = e.target as HTMLTextAreaElement;
        // const value = target.value;
        setError("");
        setValue(e.target.value);
        }
        
    // const handleKeyPress = (event: KeyboardEvent) => {
    //         if (event.which === 13) {
    //         setValue(predicted);
    //         }
    //     }
    
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
                onChange={e => onChange(e.target.value)}
                // onKeyPress={this.handleKeyPress.bind(this)}
                onFocus={() => !locked && setActive(true)}
                onBlur={() => !locked && setActive(false)}
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