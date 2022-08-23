import React, { createContext, useState } from 'react';
import {
  ageValidator,
  heightValidatorImp,
  weightValidatorImp,
} from '../utils/formValidator';

export const appContext = createContext({});

export function AppContextProvider({ children }) {
  const [status, setStatus] = useState(false);
  const [system, setSystem] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [calories, setCalories] = useState('');

  const calCalories = () => {
    let factor = null;
    if (weight < 165) factor = 1.6;
    else if (weight >= 165 && weight <= 200) factor = 1.4;
    else if (weight >= 201 && weight <= 220) factor = 1.2;
    else factor = 1;
    if (age.length > 0 && weight > 0 && height > 0) {
      if (
        ageValidator(age) === true &&
        weightValidatorImp(weight) === true &&
        heightValidatorImp(height) === true
      )
        setCalories(
          ((10 * weight + 6.25 * height - 10 * age + 5) * factor).toFixed(4)
        );
      else setCalories('Datos inválidos');
    } else setCalories('');
  };

  return (
    <appContext.Provider
      value={{
        status,
        setStatus,
        system,
        setSystem,
        age,
        setAge,
        weight,
        setWeight,
        height,
        setHeight,
        calories,
        setCalories,
        calCalories,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
