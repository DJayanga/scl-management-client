export const ageCalculator = (dob) => {
  const today = new Date();
  const birthDate = new Date(dob);

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const monthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += monthDays;
    ageMonths--;
  }

  let age = '';

  if (ageYears > 0) {
    age += `${ageYears} year${ageYears > 1 ? 's' : ''}`;
  }

  if (ageMonths > 0) {
    age += ` ${ageMonths} month${ageMonths > 1 ? 's' : ''}`;
  }

  return age.trim();
};
