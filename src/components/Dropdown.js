import React,{useState,useEffect} from 'react';

const Dropdown = ({ options,selected,onSelectedChange }) => {
    const [open,setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click',() => {
            setOpen(false) 
        },{capture:true})
    },[])


    const renderOptions = options.map(option => {
        if(option.value === selected.value) return null;
        return (
            <div 
            key={option.value} 
            className="item"
            onClick={()=>onSelectedChange(option)}
            >
            {option.lable}
            </div>
        );
    });
    
    return (
        <div className="ui form">
            <div className="field">
                <label className="lable">Select a Color</label>
                <div onClick={()=>setOpen(!open)}className={`ui selection dropdown ${open ? 'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.lable}</div>
                    <div className={`menu ${open ? 'visible transition':''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;