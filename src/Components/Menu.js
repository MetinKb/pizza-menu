import pizzaData from "data"

function Menu() {
    return (
        <main>
            <h2>Our Menu</h2>
            <ul>
                {pizzaData.length > 0 ? pizzaData.map((pizza, index) => (
                    (<Pizza pizzaObj={pizza} key={index} />)
                )) :
                    <p> Menu preparations continue. Please try again later. </p>
                }
            </ul>
        </main>
    )
}

function Pizza(props) {
    return (
        <li>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
                {!props.pizzaObj.soldOut ? null : "Out of stock"}
            </div>
        </li>
    )
}

export default Menu