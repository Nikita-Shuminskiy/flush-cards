import styles from './Cards.module.scss';
import React from 'react';
import {Sidebar} from '../Deck/Sidebar/Sidebar';
import {PacksList} from '../Deck/PacksList/PacksList';
import {CardList} from './CardList/CardList';

export const Cards = () => {
    return (
        <>
            <section className={styles.cards}>
                <div className={'container'}>
                    <div className={styles.cards__inner}>
                        <div className={styles.cards__info}>
                            <Sidebar/>
                        </div>
                            <CardList/>
                    </div>
                </div>
            </section>
        </>
    );
}