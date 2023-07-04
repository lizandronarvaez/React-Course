/* eslint-disable react/prop-types */

const Products = ({ id, title, image, price }) => {

    return (
        <div key={id} className="mx-auto text-center">
            <p>{title}</p>
            <img src={image} alt="img" width={200} />
            <p>{price}€</p>
        </div>

    )
}

export default Products