const ageValidator = (value) => {
  if (value < 105) return value >= 16 || 'Edad minima 16 años';
  else return value <= 105 || 'Edad maxima 105 años';
};

const weightValidatorDec = (value) => {
  if (value < 300) return value >= 40.5 || 'Peso mínimo 40.5 Kg';
  else return value <= 300 || 'Peso máximo 300 Kg';
};

const weightValidatorImp = (value) => {
  if (value < 661.386) return value >= 89.2871 || 'Peso mínimo 89.2871 Lb';
  else return value <= 661.386 || 'Peso máximo 661.386 Lb';
};

const heightValidatorDec = (value) => {
  if (value < 2.25) return value >= 1.4 || 'Altura minima 1.4 Mts';
  else return value <= 300 || 'Altura maxima 2.25 Mts';
};

const heightValidatorImp = (value) => {
  if (value < 88.5825) return value >= 55.118 || 'Altura minima 55.118 In';
  else return value <= 88.5825 || 'Altura maxima 88.5825 In';
};

export {
  ageValidator,
  weightValidatorDec,
  weightValidatorImp,
  heightValidatorDec,
  heightValidatorImp,
};
