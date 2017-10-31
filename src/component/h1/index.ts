import "./index.less";

export default (text : string = "hello webpack 3") : Element => {
  const element : Element = document.createElement("h1");
  
  element.className = "h1";
  element.innerHTML = text;
  
  return element;
};