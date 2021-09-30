import styles from './Cards.module.scss';
import React from 'react';
import {CardList} from './CardList/CardList';

export const Cards = () => {
    return (
        <>
            <section className={styles.cards}>
                <div className={'container'}>
                    <div className={styles.cards__inner}>
                            <CardList/>
                    </div>
                </div>
            </section>
        </>
    );
}