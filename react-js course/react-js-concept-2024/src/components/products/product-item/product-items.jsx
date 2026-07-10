import styles from "./product-item.module.css"



function Button(){
    return(
        <div > 
            <button className={styles.buttonstyle}>Click</button>
        </div>
    )
}



function Productitems({productitem,key}){
    return (
        <div itemkey={key} style={{border:"1px solid red",margin:"10px",padding:"12px"}}>
            <h1>{productitem}</h1>
            <Button/>
        </div>

    );
}

export default Productitems;