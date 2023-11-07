import React, { useState } from 'react'

function Header({ products }) {

    const [totalMoney, setTotalMoney] = useState(128000000000)

    const totalPrice = products.reduce((total, product) => {
        return total + product.price * product.count
    }, 0)

    return (
        <div className='header'>
            <p>To Spend <b style={{ color: "white" }}>${(totalMoney - totalPrice).toLocaleString('vi-VN')}</b>, 
            <span>{totalPrice==0?"You have Money" : "You have a lot of Money"}</span> </p>
        </div>
    )
}

export default Header