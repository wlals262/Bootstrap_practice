import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './EventByBootstrap.module.css';

import arrow_left from '../assets/icons/arrow_left.svg';
import share from '../assets/icons/share.svg';
import event_thumb from '../assets/images/event_thumb.png';
import star from '../assets/icons/star.svg';

import product1 from '../assets/images/event/products/product1.png';
import product2 from '../assets/images/event/products/product2.png';

const productList = [
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

const EventByBootstrap = () => {
    return (
        <article className='layout'>
            <div>
                <div className={styles.page__style}>

                    {/* 헤더태그 */}
                    <section className={styles.header}>
                        <button className={styles.header__btn}>
                            <img src={arrow_left} alt="왼쪽 화살표" />
                        </button>
                        <h1 className={styles.header__title}>크리스마스 특별할인</h1>
                        <button className={styles.header__btn}>
                            <img src={share} alt="공유하기" />
                        </button>
                    </section>

                    {/* 이벤트이미지 2개 */}
                    <section>
                        <img src={event_thumb} alt="이벤트 이미지1" className={styles.event__img} />
                        <div gap={16} className={styles.percent__section}>
                            <div className={styles.percent}>
                                <img src={star} alt="start" />
                                <h2>50%</h2>
                            </div>
                            <h3>
                                고객 여러분들을 위해 다양한
                                <br />
                                <span>최대 50%</span> 할인 상품들을 준비했어요
                                <br />이 기회를 놓치지 마세요!
                            </h3>
                        </div>
                    </section>

                    {/* 카테고리 분류와 카드 */}
                    <section>
                        <ul className={styles.filter__list}>
                            <li
                                className={styles.filter__btn}
                            >
                                남성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                            >
                                여성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                            >
                                가전제품
                            </li>
                        </ul>

                        <div className={styles.top__sales}>
                            <h2>실시간 인기 TOP5</h2>

                            <div className={styles.top__sales_list}>
                                {productList.map((e, i) => (
                                    <Card style={{ minWidth: 240, borderRadius: 16 }}>
                                        <Card.Img src={e.img} className={styles.product__image} />
                                        <Card.Body style= {{ padding: 0 }}>
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
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>

                            <Button className={styles.show__all__btn}>
                                전체 상품 보기
                            </Button>
                        </div>
                    </section>

                    <section className={styles.coupon__section}>
                        <h2>
                            어디서든 사용 가능한
                            <br />
                            15% 쿠폰을 드려요!
                        </h2>
                        <p>쿠폰 지급 기간 : ~12월 31일까지</p>
                    </section>
                </div>
            </div>
        </article>
    )
}

export default EventByBootstrap;