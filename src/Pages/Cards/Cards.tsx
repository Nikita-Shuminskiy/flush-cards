import styles from './Cards.module.scss';
import React from 'react';
import {Sidebar} from './Sidebar/Sidebar';
import {PacksList} from './PacksList/PacksList';

export const Cards = () => {
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