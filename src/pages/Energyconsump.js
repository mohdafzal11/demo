import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useRef } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from '../Components/LightNavbar'
// import {TouchableOpacity} from 'react-native';
// import { faChevronUp,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import Ellipse_16 from "../images/Ellipse_16.png"
import Redminus from "../images/Redminus.png"
import Ellipse_17 from "../images/Ellipse_17.png"
import "./Energyconsump.css";
import Dropdown from './Dropdown';
const Energyconsump = () => {
    const [isPlus, setIsPlus] = useState(true);
    const navigate = useNavigate();
const [isDivVisible, setIsDivVisible] = useState(false);

const handleButtonClick = () => {
  setIsPlus(!isPlus);
  setIsDivVisible(!isDivVisible);
};
const handleButtonClick1 = () => {
    navigate('/CCMoreinfo');
  };
  const handleButtonClick2 = () => {
      navigate('/Carbonemission');
  };

//   const handleDropdownChange = (selectedValue) => {
//     // Handle the selected value here
//     console.log('Selected value:', selectedValue);
//   };

const [inputText1,setInputText1]=useState(" ")
const [inputText2,setInputText2]=useState(" ")
const [inputText3,setInputText3]=useState(" ")
const [inputText4,setInputText4]=useState(" ")
const [inputText5,setInputText5]=useState(" ")
const [inputText6,setInputText6]=useState(" ")
const [inputText7,setInputText7]=useState(" ")
const [inputText8,setInputText8]=useState(" ")
const [inputText9,setInputText9]=useState(" ")
const [inputText10,setInputText10]=useState(" ")

const [dropdowns, setDropdowns] = useState([{ id: 1, selectedOption: '' }]);

  const options = [
    { label: 'T5 4ft (1200mm)', value: 'T5 4ft (1200mm)' },
    { label: 'Metal halide', value: 'Metal halide' },
    { label: 'CFL 2ft (500mm)', value: 'CFL 2ft (500mm)' },
    { label: 'Others', value: 'Others' },
  ];
  const handleDropdownChange = (selectedValue, id) => {
    const updatedDropdowns = dropdowns.map((dropdown) =>
      dropdown.id === id ? { ...dropdown, selectedOption: selectedValue } : dropdown
    );
    setDropdowns(updatedDropdowns);
  };

  const addDropdown = () => {
    const newId = dropdowns.length + 1;
    setDropdowns([...dropdowns, { id: newId, selectedOption: '' }]);
  };

  const removeDropdown = (id) => {
    const updatedDropdowns = dropdowns.filter((dropdown) => dropdown.id !== id);
    setDropdowns(updatedDropdowns);
  };

  const [divs, setDivs] = useState([{ id: 1 }]);
  
  const addDiv = () => {
    const newId = divs.length + 1;
    setDivs([...divs, { id: newId }]);
  };

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setInputText1(e.target.value)
  
  };
  const handleChange2= (e: ChangeEvent<HTMLInputElement>) => {
    setInputText2(e.target.value)

  };
    const handleChange3= (e: ChangeEvent<HTMLInputElement>) => {
      setInputText3(e.target.value)

    };

      const handleChange4= (e: ChangeEvent<HTMLInputElement>) => {
        setInputText4(e.target.value)

      };

        const handleChange5= (e: ChangeEvent<HTMLInputElement>) => {
          setInputText5(e.target.value)

        };

          const handleChange6= (e: ChangeEvent<HTMLInputElement>) => {
            setInputText6(e.target.value)

          };

            const handleChange7= (e: ChangeEvent<HTMLInputElement>) => {
              setInputText7(e.target.value)

            };

              const handleChange8= (e: ChangeEvent<HTMLInputElement>) => {
                setInputText8(e.target.value)

              };

                const handleChange9= (e: ChangeEvent<HTMLInputElement>) => {
                  setInputText9(e.target.value)

                };
                const handleChange10= (e: ChangeEvent<HTMLInputElement>) => {
                  setInputText10(e.target.value)
      
                };



  const removeDiv = (id) => {
    const updatedDivs = divs.filter((div) => div.id !== id);
    setDivs(updatedDivs);
  };

  


    return (
        <>
            <div>
                <Navbar />
                <div className="txt1">
                    Enter the light energy consumption of your facility (in kilowatts).
                    <p>Your input: {inputText1}</p>
                </div>
                <div className='txt2'>
                    <input type="txt2"  onChange={handleChange1}  placeholder="Value" value={inputText1} />
                </div>
                <div className='txt3'>
                    kw
                </div>
                <div className='txt4'>
                    OR
                </div>
                <div className='txt5'>
                    Select your lamp types.
                </div>
                

               
  
                    <div className="banners">
                        <p>
                            Lamp Type
                        </p>
                        <p>
                            Wattage
                        </p>
                        <p>
                            Qty
                        </p>
                    </div>

           


    <div className="ddropdown">
    
     
          <div className="row"> 
            <div className="ddown" >
            
        <Dropdown className="ddown"
        options={options}
        defaultValue=""
        onChange={handleDropdownChange} />  
        </div>
     
      <input type="number" className="input" onChange={handleChange2}  value={inputText2} />
      <input type="number" className="input" onChange={handleChange3}  value={inputText3} />
 
      
    </div>
    </div>

    <div className="ddropdown">
    
     
    <div className="row"> 
      <div className="dropdownn">
      
  <Dropdown id="dropdownn"
  options={options}
  defaultValue=""
  onChange={handleDropdownChange} />  
  </div>

<input type="number" className="input" onChange={handleChange4}  value={inputText4} />
<input type="number" className="input" onChange={handleChange5}  value={inputText5} />


</div>
</div>
<div className="ddropdown">
    
     
    <div className="row"> 
      <div >
      
  <Dropdown 
  options={options}
  defaultValue=""
  onChange={handleDropdownChange} />  
  </div>

<input type="number" className="input"onChange={handleChange6}  value={inputText6} />
<input type="number" className="input"onChange={handleChange7}  value={inputText7} />


</div>
</div>
    <div className="ddropdown">
    
      {divs.map((div) => (
        <div className="" key={div.id}>
          <div className="row"> 
            <div >
            
        <Dropdown 
        options={options}
        defaultValue=""
        onChange={handleDropdownChange} />  
        </div>
     
      <input type="number" className="input"onChange={handleChange8}  value={inputText8} />
      <input type="number" className="input"onChange={handleChange9} id='newId'  value={inputText9} />

     
 
      </div>

      
         <button className="imge1" onClick={() => removeDiv(div.id)}>
          <img src={Redminus} alt="delete" /> </button>
        </div>
      ))}
    </div>

    <div className="ddropdown">
    
    {divs.map((div) => (
      <div className="" key={div.id}>
        <div className="row"> 
          <div>
          
      <Dropdown 
      options={options}
      defaultValue=""
      onChange={handleDropdownChange} />  
      </div>
   
    <input type="number" className="input"onChange={handleChange10}  value={inputText10} />

   

    </div>

    
       <button className="imge1" onClick={() => removeDiv(div.id)}>
        <img src={Redminus} alt="delete" /> </button>
      </div>
    ))}
  </div>
        <button className="add" onClick={addDiv}>+ Add More</button>
  


<div>
  </div>















 <div className="navigation">  <div className="trl-btnn">
        
        <button className="back" onClick={handleButtonClick2}>&lt;&nbsp;&nbsp;Back</button>
        <button className="nxt" onClick={handleButtonClick1}>Next&nbsp;&nbsp;&gt;</button>

           </div>

            </div>
            
            </div>
            <div className="box16">
                <img className="ellipse16" alt="Ellipse16" src={Ellipse_16} />
                </div>
                <div className="box17">
                <img className="ellipse17" alt="Ellipse17" src={Ellipse_17} />
                </div>
        </>
        
    )
} 
export default Energyconsump;
