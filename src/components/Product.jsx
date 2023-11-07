import React from 'react'

function Product({ products, setProducts }) {

    const handleChangeQuantity = (id, status) => {
        const newProducts = [...products]
        const index = newProducts.findIndex(product => product.id == id)
        switch (status) {
            case 0:
                if (newProducts[index].count > 0) {
                    newProducts[index].count -= 1
                }
                break
            case 1:
                newProducts[index].count += 1
                break
        }
        setProducts(newProducts)
    }

    return (
        <div className='product'>
            <div className='product_scope'>
                {products.map((product) => (
                    <div key={product.id} className='product-item'>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div className='product-info'>
                            <span>{product.title}</span>
                            <span>${product.price.toLocaleString('vi-VN')}</span>
                        </div>
                        <div className='product-quantity'>
                            <button style={{ opacity: `${product.count != 0 ? 1 : 0.3}` }} className='btn-minus' onClick={() => handleChangeQuantity(product.id, 0)}>Interest</button>
                            <span>{product.count}</span>
                            <button className='btn-add' onClick={() => handleChangeQuantity(product.id, 1)}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product