import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';

import styles from '../pages/EventByMui.module.css';
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

const MuiProductList = (props) => {
    let selectedArray=[];
    if( props.category === 'productList') {selectedArray = productList;}
    else if( props.category === 'mansCloth') {selectedArray = mansCloth;}
    else if( props.category === 'womansCloth') {selectedArray = womansCloth;}
    return (
        <Stack spacing={'16px'} className={styles.top__sales_list} direction="row">
            {selectedArray.map((e, i) => (
                <Card key={i} sx={{ minWidth: 240, borderRadius: 16 }}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image={e.img}
                            alt="product"
                            className={styles.product__image}
                        />
                        <CardContent style={{ padding: 0 }}>
                            <div className={styles.product}>
                                <Stack className={styles.content}
                                    spacing={'8px'}
                                    alignItems="flex-start"
                                >
                                    <div>
                                        <p>{e.type}</p>
                                        <h3>{e.productName}</h3>
                                    </div>
                                    <div className={styles.price__layout}>
                                        <p className={styles.percent}>{e.percent}%</p>
                                        <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                    </div>
                                </Stack>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Stack>
    );
}

MuiProductList.defaultProps = {
    category : 'mansCloth'
};

export default MuiProductList;