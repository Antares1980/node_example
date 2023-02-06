
exports.getGenericMessage = () => {
  const currentDate = new Date().getHours() + ' h ' + new Date().getMinutes() + ' m';
  const a = new Date().getHours();
  const b = new Date().getMinutes();
  console.log(a+b);

  const a1 = new Date().getHours();
  const b1 = new Date().getMinutes();
  console.log(a1+b1);
  
  const b2 = new Date().getMinutes();
    return 'Hello world. It\'s ' +  currentDate;
  };