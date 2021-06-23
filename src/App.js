import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items = [
    {
      title:'What is React?',
      content:'React is a front end javascript library'  
    },
    {
        title:'Why use React ?',
        content:'React is a favorite JS library among engineers'
    },
    {
        title:'How do you use React?',
        content:'You use React by creating components'
    }
];

const options = [
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color green',
        value:'green'
    },
    {
        label:'A shade of Blue',
        value:'blue'
    }
];

// const showAccordion = () => {
//     if(window.location.pathname === '/'){
//         return <Accordion items={items}/>
//     }
// }

// const showList = () => {
//   if(window.location.pathname === '/list'){
//       return <Search/>
//   }  
// }

// const showDropdown = () => {
//     if(window.location.pathname === '/dropdown'){
//         return <Dropdown/>
//     }
// }

// const showTranslate = () => {
//     if(window.location.pathname === '/translate'){
//         return <Translate/>
//     }
// }

const App = () => {
    const [selected,setSelected] = useState(options[0])
    // const [showDropdown,setShowDropdown] = useState(true)
    // return (
    //     <div>
    //         <br/>
    //          <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    //          {showDropdown ?
    //          <Dropdown 
    //          selected={selected}
    //          onSelectedChange = {setSelected}
    //           options={options}/> :null     
    //           }
    //         </div>
    // )
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                label = "select a color"
                options = {options}
                selected = {selected}
                onSelectedChange={setSelected}
                />
            </Route>
        </div>
    )
};

export default App;

