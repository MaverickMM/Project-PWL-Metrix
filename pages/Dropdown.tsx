import React, { useState } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option); // Call the parent's onSelect callback with the selected option
    setIsOpen(false);
  };

interface VectorIconProps {
    onVectorIconClick: () => void;
}

const VectorIcon: React.FC<VectorIconProps> = ({ onVectorIconClick }) => {
    return (
      <div>
        <img
            className={styles.vectorIcon}
            alt=""
            src="/Images/Vector.svg"/>
        {/* Your vector icon component */}
        <button onClick={onVectorIconClick}>Click me</button>
      </div>
    );
  };
  
   return (
     <div className='dropdown'>
       <div className='dropdown-button'>
        <button onClick={toggleDropdown}>
            {selectedOption ? selectedOption : 'Indonesia'} 
        </button>
       </div>
       <div className='dropdown-item'>
       {isOpen && (
         <ul>
           <li onClick={() => handleOptionSelect('Malaysia')}>Malaysia</li>
           <li onClick={() => handleOptionSelect('Singapura')}>Singapura</li>
           <li onClick={() => handleOptionSelect('England')}>England</li>
         </ul>
       )}
       </div>
     </div>
     );
};

export default Dropdown;