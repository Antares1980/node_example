
exports.getGenericMessage = () => {
  const currentDate = new Date().getHours() + ' h ' + new Date().getMinutes() + ' m';
    return 'Hello world. It\'s ' +  currentDate;
  };