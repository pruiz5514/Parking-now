import React, { useState } from 'react';
import { Body, CheckedLabel, SwitchInput, SwitchLabel } from './switch-style';

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Body>
      <SwitchInput 
        type="checkbox" 
        id="switch" 
        checked={isChecked} 
        onChange={handleToggle} 
      />
      {isChecked ? (
        <CheckedLabel htmlFor="switch" />
      ) : (
        <SwitchLabel htmlFor="switch" />
      )}
    </Body>
  );
};

export default ToggleSwitch;
