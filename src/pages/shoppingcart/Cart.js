import { useCart } from "react-use-cart"
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Cart = () => {

    const{
    isEmpty,
    totalItems,
    cartTotal,
    items,
    emptyCart,
    updateItemQuantity,
    removeItem,
    } = useCart()


    if (isEmpty) return (
        <div className="text-center">
            <h3 className="fs-5 mb-4">Your Shopping Cart is Empty</h3>

            <div className="mb-3">
                <Link to="/shop">
                    <button className="browseBtn">Browse Store</button>
                </Link>
            </div>
        </div>
    );

  return (
    <div className="px-5 mb-5">
        <div className="mb-3 fw-bold">
            <span className="me-1">Toatal Items:</span>
            <span>{totalItems}</span>
        </div>
        <Table striped hover responsive>
          <thead>
            <tr>
                <th>Product</th>
                <th>description</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
           </thead>
           <tbody>
           {items.map((item) =>{
               return(
                <tr key={item.id}>
                    <td>
                        <div className="imgDiv">
                          <img src={item.image}/>
                        </div>
                    </td>

                    <td>{item.description}</td>

                    <td>
                        <span>$</span>
                        {item.price}
                    </td>

                    <td>
                        <span className="me-2">Quantity</span>
                        <span>({item.quantity})</span>
                    </td>

                    <td className="flex">
                        <button className="reduceBtn me-3 p-1 text-center"
                        onClick={()=> updateItemQuantity(item.id, item.quantity -1)}
                        >
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <button className="plusBtn p-1 text-center"
                        onClick={()=> updateItemQuantity(item.id, item.quantity +1)}
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </td>

                    <td>
                       <button className="trash"
                       onClick={()=> removeItem(item.id)}
                       >
                          <i class="fa-solid fa-trash-can"></i>
                       </button>
                    </td>
                </tr>
                )
            })}
           </tbody>
        </Table>

        <div className="totalCart fw-bold mb-3">
           <div>
                <span className="me-2">Total Price:</span>
                <span>${cartTotal}</span>
           </div>
        </div>

        <div className="text-center mb-5">
            <button className="clearCart p-2 fw-bold"
            onClick={()=> emptyCart()}
            >
                Clear Cart
            </button>
        </div>

        <div className="purchase">
            <button className="purchaseNow p-2 fw-bold">Purchase Now</button>
        </div>
    </div>
  )
}

export default Cart