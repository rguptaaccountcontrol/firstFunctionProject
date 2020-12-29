const privateMessage = () => {
  return 'This is private! The function is in a seperate file and in assets folder';
};

const secondMessage = (m) => {
  return `This is the secondMessage function! ${m} The function is in a seperate file and in assets folder`;
};

module.exports = {privateMessage, secondMessage};
