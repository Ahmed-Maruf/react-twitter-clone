const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(action);
  const returnValue = next(action);
  console.log(`The new state: ${JSON.stringify(store.getState(), '', ' ')}`);
  console.groupEnd();
  
  return returnValue;
};

export default logger;