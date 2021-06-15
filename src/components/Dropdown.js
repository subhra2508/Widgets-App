import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({ options,selected,onSelectedChange }) => {
    const [open,setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {// // if the event is inside our component we return early
            // ref.current gives the current reference of the dom
            return;
          }
          setOpen(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);   
    
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
    
    console.log(ref.current)
    return (
        <div ref={ref} className="ui form">
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