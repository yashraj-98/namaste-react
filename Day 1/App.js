/*
<div id="parent">
  <div id="child">
    <h1>Hare Krishna</h1>
    <h2>Hare Ram</h2>
  </div>  
  <div id="child2">
    <h1>Hare Krishna</h1> 
    <h2>Hare Ram</h2>
  </div>   
</div>   
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "Hare Krishna"),
    React.createElement("h3", {}, "Hare Ram"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "Hare Krishna"),
    React.createElement("h2", {}, "Hare Ram"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
