import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './EventByBootstrap.module.css';

import { BrowserRouter, Link } from 'react-router-dom';

import arrow_left from '../assets/icons/arrow_left.svg';
import share from '../assets/icons/share.svg';

import ProductList from '../components/ProductList';
import EventMainSection from '../components/EventMainSection';
import { Form } from 'react-bootstrap';

const EventByBootstrap = () => {
    const [currentFilter, setCurrentFilter] = useState('남성의류');
    const handleCurrnetFilter = (newFilter) => {
        setCurrentFilter(newFilter);
    }

    const [currentState, setCurrentState] = useState('mansCloth');
    const handleCurrentState = (state) => {
        setCurrentState(state);
    }

    return (
        <BrowserRouter>
            <article className='layout'>
                <div>
                    <div className={styles.page__style}>

                        {/* 헤더태그 */}
                        <section className={styles.header}>
                            <button className={styles.header__btn}>
                                <img src={arrow_left} alt="왼쪽 화살표" />
                            </button>
                            <h1 className={styles.header__title}>크리스마스 특별할인</h1>
                            <Link to={'notice'}>
                                <button className={styles.header__btn}>
                                    <img src={share} alt="share button" />
                                </button>
                            </Link>
                        </section>

                        {/* 이벤트이미지 2개 */}
                        <EventMainSection />

                        {/* 카테고리 분류와 카드 */}
                        <section>
                        <ul className={styles.filter__list}>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '남성의류'}
                                onClick={() => {
                                    handleCurrnetFilter('남성의류');
                                    handleCurrentState('mansCloth');
                                }}
                            >
                                남성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '여성의류'}
                                onClick={() => {
                                    handleCurrnetFilter('여성의류');
                                    handleCurrentState('womansCloth');
                                }}
                            >
                                여성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '가전제품'}
                                onClick={() => {
                                    handleCurrnetFilter('가전제품');
                                    handleCurrentState('productList');
                                }}
                            >
                                가전제품
                            </li>
                        </ul>
                            <div className={styles.top__sales}>
                                <h2>실시간 인기 TOP5</h2>

                                <ProductList category = {currentState} />

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
                <div style={{ padding: '8px 16px' }}>
                    <Form.Control
                        placeholder="답글을 입력해주세요."
                        style={{ background: '#F6F6F6' }}
                        className={styles.comment__input__field}
                    />
                </div>
            </article>
        </BrowserRouter>
    )
}

export default EventByBootstrap;