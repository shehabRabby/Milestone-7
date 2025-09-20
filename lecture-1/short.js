const isActive = true;
const showUser = () => console.log('Show User green');
const hideUser = () => console.log('Hide User red');

isActive ? showUser() : hideUser();
isActive && showUser();  //true hoile kaj korbe
isActive || hideUser();  //false hoile kaj korbe
