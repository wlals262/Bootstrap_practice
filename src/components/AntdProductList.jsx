import React from "react";
import { Card } from 'antd';
import styles from '../pages/EventByBootstrap.module.css';
import product1 from '../assets/images/event/products/product1.png';
import product2 from '../assets/images/event/products/product2.png';

const productList = [
    {
        img: product1,
        type: '가전제품',
        productName : '냉장고 (7color)',
        percent: 50,
        price: 50000
    },
    {
        img: product2,
        type: '셔츠/블라우스',
        productName : '스탠다드 블루종 스웨이드 자켓',
        percent: 55,
        price: 100000
    },
    {
        img: product1,
        type: '셔츠/블라우스',
        productName : '데일리 베이직 셔츠 (7color)',
        percent: 50,
        price: 50000
    },
    {
        img: product2,
        type: '셔츠/블라우스',
        productName : '스탠다드 블루종 스웨이드 자켓',
        percent: 50,
        price: 100000
    },
]

const mansCloth = [
    {
        img: product1,
        type: '남자셔츠/블라우스',
        productName : '남자 베이직 셔츠 (7color)',
        percent: 50,
        price: 50000
    },
    {
        img: product2,
        type: '셔츠/블라우스',
        productName : '스탠다드 블루종 스웨이드 자켓',
        percent: 50,
        price: 100000
    },
]

const womansCloth = [
    {
        img: product1,
        type: '여자셔츠/블라우스',
        productName : '여자 베이직 셔츠 (7color)',
        percent: 50,
        price: 50000
    },
    {
        img: product2,
        type: '셔츠/블라우스',
        productName : '스탠다드 블루종 스웨이드 자켓',
        percent: 50,
        price: 100000
    },
]

const AntdProductList = (props) => {
    let selectedArray=[];
    if( props.category === 'productList') {selectedArray = productList;}
    else if( props.category === 'mansCloth') {selectedArray = mansCloth;}
    else if( props.category === 'womansCloth') {selectedArray = womansCloth;}
    return (
        <div className={styles.top__sales_list}>
            {selectedArray.map((e, i) => (
                <Card 
                    cover={<img src={e.img} className={styles.product__image} />} key={i} >
                        <div className={styles.product}>
                            <div className={styles.content}>
                                <div>
                                    <p>{e.type}</p>
                                    <h3>{e.productName}</h3>
                                </div>
                                <div className={styles.price__layout}>
                                    <p className={styles.percent}>{e.percent}%</p>
                                    <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                </div>
                            </div>
                        </div>
                </Card>
            ))}
        </div>
    );
}

AntdProductList.defaultProps = {
    category : 'mansCloth'
};

export default AntdProductList;