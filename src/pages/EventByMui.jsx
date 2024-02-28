import React, { useState } from 'react';
import styles from './EventByMui.module.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ArrowBackIosNew, FileUploadOutlined } from '@mui/icons-material';

import EventMainSection from '../components/EventMainSection';
import { BrowserRouter, Link } from 'react-router-dom';
import MuiProductList from '../components/MuiProductList';

const EventByMui = () => {
    const [currentFilter, setCurrentFilter] = useState('남성의류');
    const handleCurrnetFilter = (newFilter) => {
        setCurrentFilter(newFilter);
    }
    return (
        <BrowserRouter>
            <article className='layout'>
                <div>
                    <div className={styles.page__style}>
                        <Stack justifyContent="space-between" alignItems="center" direction="row" className={styles.header}>
                            {/* 헤더태그 */}
                            <button className={styles.header__btn}>
                                <ArrowBackIosNew style={{ color: '#383838'}}/>
                            </button>
                            <h1 className={styles.header__title}>크리스마스 특별할인</h1>
                            <Link to={'notice'}>
                                <button className={styles.header__btn}>
                                    <FileUploadOutlined style={{ color: '#383838'}} />
                                </button>
                            </Link>
                        </Stack>

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
                                }}
                            >
                                남성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '여성의류'}
                                onClick={() => {
                                    handleCurrnetFilter('여성의류');
                                }}
                            >
                                여성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '가전제품'}
                                onClick={() => {
                                    handleCurrnetFilter('가전제품');
                                }}
                            >
                                가전제품
                            </li>
                        </ul>
                            <div className={styles.top__sales}>
                                <h2>실시간 인기 TOP5</h2>

                                <MuiProductList />

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
                    {/* <Form.Control
                        placeholder="답글을 입력해주세요."
                        style={{ background: '#F6F6F6' }}
                        className={styles.comment__input__field}
                    /> */}
                </div>
            </article>
        </BrowserRouter>
    )
}

export default EventByMui;