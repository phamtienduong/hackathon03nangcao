import React, { useState } from 'react'
import Header from './Header'
import Product from './Product'
import Cart from './Cart'

function SpendMoney() {

    const [products, setProducts] = useState(
        [
            {
                id: 1,
                title: "Cola",
                price: 6,
                count: 0,
                image:
                    "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
            },
            {
                id: 3,
                title: "Sprite",
                price: 5,
                count: 0,
                image: "https://images.ofix.com/product-image/s99509_2.jpg",
            },
            {
                id: 4,
                title: "Ayran",
                price: 3,
                count: 0,
                image:
                    "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
            },
            {
                id: 5,
                title: "Salgam",
                price: 4,
                count: 0,
                image: "http://esenlik.com.tr//images/prod/5704.jpg",
            },
            {
                id: 6,
                title: "Cay",
                price: 3,
                count: 0,
                image:
                    "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
            },
            {
                id: 7,
                title: "Kahve",
                price: 10,
                count: 0,
                image:
                    "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
            },
            {
                id: 8,
                title: "Soda",
                price: 4,
                count: 0,
                image: "http://esenlik.com.tr//images/prod/2928.jpg",
            },
            {
                id: 9,
                title: "Bisiklet",
                price: 1000,
                count: 0,
                image:
                    "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
            },

            {
                id: 11,
                title: "Bugatti Chiron",
                price: 2500000,
                count: 0,
                image:
                    "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
            },
            {
                id: 12,
                title: "Iskender",
                price: 50,
                count: 0,
                image:
                    "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
            },
            {
                id: 13,
                title: "Lahmacun",
                price: 12,
                count: 0,
                image:
                    "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
            },
            {
                id: 14,
                title: "Malikane",
                price: 2500000000,
                count: 0,
                image:
                    "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
            },
            {
                id: 15,
                title: "Helicopter",
                price: 28750000,
                count: 0,
                image:
                    "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
            },
            {
                id: 16,
                title: "Luxury Yatch",
                price: 17500000,
                count: 0,
                image: "https://d.neoldu.com/news/57966.jpg",
            },
            {
                id: 17,
                title: "Limosine",
                price: 1000000,
                count: 0,
                image:
                    "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
            },
            {
                id: 18,
                title: "Ada",
                price: 125000000,
                count: 0,
                image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
            },
            {
                id: 22,
                title: "Stadium",
                price: 2500000,
                count: 0,
                image:
                    "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
            },
            {
                id: 23,
                title: "Bitcoin",
                price: 60000,
                count: 0,
                image:
                    "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
            },
        ]
    )

    return (
        <div>
            <Header products={products} />
            <Product products={products} setProducts={setProducts} />
            <Cart products={products} setProducts={setProducts} />
        </div>
    )
}

export default SpendMoney