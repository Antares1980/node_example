
exports.getGenericMessage = () => {
  const currentDate = new Date().getHours() + ' h ' + new Date().getMinutes() + ' m';
  const a = new Date().getHours();
  const b = new Date().getMinutes();
  console.log(a+b);
    return 'Hello world. It\'s ' +  currentDate;
  };
exports.getGenericMessages = () => {  
  const currentDate = new Date().getHours() + ' h ' + new Date().getMinutes() + ' m';
  const a = new Date().getHours();
  const b = new Date().getMinutes();
  
  console.log(a+b);
    return 'Hello world. It\'s ' +  currentDate;
  };
