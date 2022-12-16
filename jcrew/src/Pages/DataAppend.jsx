
import { Link } from "react-router-dom"


function DataAppend({ id, imgUrl, price, name }) {
    return (
        <>
        <Link to={`/ProductDetails/${id}`}>
            <div  key={id}>
                <img width="80%" src={imgUrl} alt="" />
                <h3>{name}</h3>
                <h3>{price}</h3>
            </div>
            </Link>
        </>

    )
}

export default DataAppend