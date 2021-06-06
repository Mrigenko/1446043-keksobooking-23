const getRandomInt = function (min, max){
  if (min >= 0 & max>=0 & max > min) {
    return Math.floor(Math.random() * (max - min)+ min);
  } else {
    return 'Введите корректные данные! Начальное значение диапазона должно больше конечного, значение не может быть отрицательным';
  }
};
getRandomInt(-2, 1);
getRandomInt(5, 13);

const getRandomFloat = function (min, max, numberOfSimbols ) {
  if (min >= 0 & max >=0 & max > min) {
    const floatNumber = (Math.random() * (max - min)+ min);
    return floatNumber.toFixed(numberOfSimbols);
  }
  return 'Введите корректные данные! Начальное значение диапазона должно больше конечного, значение не может быть отрицательным';
};
getRandomFloat(11, 101, 5);
