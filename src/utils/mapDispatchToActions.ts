// receives a dispatch function, and an object of functions
// create a new storage object
// for each key in the object that was received
// set the key on the new storage object
// equal to the function found at the key on the object of functions
export const mapDispatchToActions = (
  dispatch: React.Dispatch<Object>,
  actions: { [key: string]: Function }
): { [key: string]: Function } => {
  let mappedActions = {};
  for (let action in actions) {
    mappedActions[action] = actions[action](dispatch);
  }
  return mappedActions;
};
