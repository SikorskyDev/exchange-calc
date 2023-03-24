import React from 'react';
import { useGetCurrencyRateQuery } from '../../../redux/exchange/currencyApi'
import CurrencyConverter from '../../CurrencyConverter/CurrencyConverter';
import Modal from '../../Modal/Modal';
import stl from './HeaderMenu.module.scss';

function HeaderMenu() {
    // отримую від НБУ масив об'єктів валют
    const { data, isSuccess, isLoading, isError } = useGetCurrencyRateQuery();

    // Перевіряю чи отримано та присвоюю масив об'єктів валют у змінну
    const allCurrency = isSuccess && data;

    return (
        <ul className={stl.menu}>
            <li className={stl.menu__item}>
                <a className={stl.menu__link} href="#">Головна</a>
            </li>
            <li className={stl.menu__item}>
                <a className={stl.menu__link} href="#">Послуги</a>
            </li>
            <li className={stl.menu__item}>
                <a className={stl.menu__link} href="#">Проекти</a>
            </li>
            <li className={`${stl.menu__item} ${stl.exchange}`}>
                <a className={stl.menu__link} href="#">
                    <Modal title={'Конвертер валют'} >
                        <CurrencyConverter isSuccess={isSuccess} isLoading={isLoading} isError={isError} allCurrency={allCurrency} />
                    </Modal>
                </a>
                <div className={stl.currenValue}>
                    <div className={stl.currenValue__dollar}>1 $ = {isError ? "error" : isLoading ? "..." : allCurrency.find((obj) => obj.cc === "USD").rate.toFixed(1)} ₴</div>
                    <div className={stl.currenValue__euro}>1 € = {isError ? "error" : isLoading ? "..." : allCurrency.find((obj) => obj.cc === "EUR").rate.toFixed(1)} ₴</div>
                </div>
            </li>
            <li className={stl.menu__item}>
                <a className={stl.menu__link} href="#">Контакти</a>
            </li>
        </ul>
    )
}

export default HeaderMenu