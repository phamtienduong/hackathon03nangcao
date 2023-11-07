import React from 'react'

function Cart({ products, setProducts }) {

    const totalPrice = products.reduce((total, prouct) => {
        return total + prouct.price * prouct.count
    }, 0)

    const data = products.filter(prouct => prouct.count != 0)

    const handleReset = () => {
        const newProducts = products.map((product) => {
            return {
                ...product,
                count: 0
            }
        })
        setProducts(newProducts)
    }

    return (
        <div className='cart'>
            <div>
                <h3 className='title'>Your Cart</h3>
                <div>
                    {data.map((product) => (
                        <div className='cart-item'>
                            <span>{product.title}</span>
                            <span>{product.count}</span>
                        </div>
                    ))}
                </div>
                <div className='reset'>
                    <div>
                        <b>Total: ${totalPrice.toLocaleString('vi-VN')}</b>
                    </div>
                    <div>
                        <button className='btn-reset' onClick={handleReset}>Reset Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart