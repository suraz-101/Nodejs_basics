//write a javascript function to convert title to slug
//Eg:"React Js Clean Code Guide" => react-js-clean-code-guide

const string = "React Js Clean Code Guide";
const res = string.toLowerCase().replaceAll(" ", "-");
console.log(res);
console.log(res.split(",").join("-"));

//Use npm package to find the slud converter
