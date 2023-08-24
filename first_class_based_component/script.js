const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(app));

function app(){
    return React.createElement("section", null,
    React.createElement("h1", null,"counters"),
    React.createElement("section", null,
    React.createElement(Counter,null))
    );
}