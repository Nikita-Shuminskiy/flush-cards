import styles from '../Cards/Cards.module.scss';
import {Sidebar} from '../Cards/Sidebar/Sidebar';
import {PacksList} from '../Cards/PacksList/PacksList';
import React from 'react';

export const Deck = () => {
    return (
        <>
            <section className={styles.cards}>
                <div className={'container'}>
                    <div className={styles.cards__inner}>
                        <div className={styles.cards__info}>
                            <Sidebar/>
                        </div>
                        <PacksList/>
                    </div>
                </div>
            </section>
        </>
    );
}