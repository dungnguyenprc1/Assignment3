export const lowerLetter = letter => {
  if (!letter) {
    return;
  }

  if (letter) {
    return letter.toLowerCase();
  }
};

export const resultSearch = (data, searchData) => {
  data.filter(item => {
    return Object.keys(item).some(key => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(searchData.toLowerCase().trim());
    });
  });
};
