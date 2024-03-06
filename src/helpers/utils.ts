export const calculateGenderCategory = (
  selectedGender: string,
  inputAge: number
): string => {
  let result: string;
  if (selectedGender === 'Male') {
    if (inputAge > 0 && inputAge <= 44) {
      result = 'Male-1';
    } else if (inputAge >= 45 && inputAge <= 59) {
      result = 'Male-2';
    } else {
      result = 'Male-3';
    }
  } else if (selectedGender === 'Female') {
    if (inputAge > 0 && inputAge <= 44) {
      result = 'Female-4';
    } else if (inputAge >= 45 && inputAge <= 59) {
      result = 'Female-5';
    } else {
      result = 'Female-6';
    }
  } else {
    return 'Male-1';
  }
  return result;
};
