import"./addWidget.css"
export default function AddWidget({addWidgetHandler}){
    return(
        <button onClick={addWidgetHandler} className="btn">+</button>
    )
}