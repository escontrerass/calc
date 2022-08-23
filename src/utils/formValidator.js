const ageValidator = (value) => {
  if (parseInt(value) < 105)
    return parseInt(value) >= 16 || 'Edad minima 16 años';
  else return value <= 105 || 'Edad maxima 105 años';
};

const weightValidatorDec = (value) => {
  if (parseFloat(value) < 300)
    return parseFloat(value) >= 40.5 || 'Peso mínimo 40.5 Kg';
  else return parseFloat(value) <= 300 || 'Peso máximo 300 Kg';
};

const weightValidatorImp = (value) => {
  if (parseFloat(value) < 661.386)
    return parseFloat(value) >= 89.2871 || 'Peso mínimo 89.2871 Lb';
  else return parseFloat(value) <= 661.386 || 'Peso máximo 661.386 Lb';
};

const heightValidatorDec = (value) => {
  if (parseFloat(value) < 2.25)
    return parseFloat(value) >= 1.4 || 'Altura minima 1.4 Mts';
  else return parseFloat(value) <= 2.25 || 'Altura maxima 2.25 Mts';
};

const heightValidatorImp = (value) => {
  if (parseFloat(value) < 88.5825)
    return parseFloat(value) >= 55.118 || 'Altura minima 55.118 In';
  else return parseFloat(value) <= 88.5825 || 'Altura maxima 88.5825 In';
};

const wDecToImp = (value) => {
  if (value >= 0) return parseFloat((parseFloat(value) * 2.2046).toFixed(4));
};

const wImpToDec = (value) => {
  if (value >= 0) return parseFloat((parseFloat(value) / 2.2046).toFixed(4));
};

const hDecToImp = (value) => {
  if (value >= 0) return parseFloat((parseFloat(value) * 39.3701).toFixed(4));
};

const hImpToDec = (value) => {
  if (value >= 0) return parseFloat((parseFloat(value) / 39.3701).toFixed(4));
};

export {
  ageValidator,
  weightValidatorDec,
  weightValidatorImp,
  heightValidatorDec,
  heightValidatorImp,
  wDecToImp,
  wImpToDec,
  hDecToImp,
  hImpToDec,
};
