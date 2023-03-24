import React, { useState } from 'react';
import stl from './CurrencyConverter.module.scss';
import { FaEquals } from 'react-icons/fa';



function CurrencyConverter({ isSuccess, isLoading, isError, allCurrency }) {
    // Отримую інформацію, який інпут активний
    const [activeInput, setActiveInput] = useState(null);

    // Контрольовані інпути та селекти
    const [inputFirst, setInputFirst] = useState("");
    const [inputSecond, setInputSecond] = useState("");
    const [selectFirst, setSelectFirst] = useState('UAH');
    const [selectSecond, setSelectSecond] = useState('USD');

    // Обробники селектів та інпутів
    const handleFirstSelectChange = React.useCallback((event) => {
        setSelectFirst(event.target.value);
    }, [])

    const handleSecondSelectChange = React.useCallback((event) => {
        setSelectSecond(event.target.value);
    }, [])

    const handleFirstInputChange = React.useCallback((event) => {
        setInputFirst(event.target.value);
    }, [])

    const handleSecondInputChange = React.useCallback((event) => {
        setInputSecond(event.target.value);
    }, [])


    // Створюю масив об*єктів із необхідними курсами валют. В умові, яку мені написала Катерина https://t.me/k_rinet_ta, для додання нових валют має бути тільки одне місце в коді. Ось тут це місце. Для того, щоб додати нову валюту необхідно в умову allCurrency.filter додати obj.cc === "умовне позначення валюти"
    const selectedCurrency = React.useMemo(() => {
        const filteredCurrency = allCurrency.filter((obj) => obj.cc === "USD" || obj.cc === "EUR" || obj.cc === "PLN" || obj.cc === "MDL" || obj.cc === "GBP");
        return [...filteredCurrency, { cc: "UAH", rate: 1 }];
    }, [allCurrency]);


    // Функція обрахунку курсів валют. Код написаний так, щоб мені потрібно лише отримати відношення курсу гривні до інших валют.
    const calculateCurr = React.useCallback((activeInput, selectFirst, selectSecond) => {
        if (activeInput === "first") {
            if (selectFirst === selectSecond) {
                setInputSecond(Number(inputFirst).toFixed(2))
            } else if (selectFirst === "UAH") {
                const rate = selectedCurrency.find((obj) => obj.cc === selectSecond).rate;
                setInputSecond((Number(inputFirst) / rate).toFixed(2))
            } else if (selectSecond === "UAH") {
                const rate = selectedCurrency.find((obj) => obj.cc === selectFirst).rate;
                setInputSecond((Number(inputFirst) * rate).toFixed(2))
            } else {
                const rate = selectedCurrency.find((obj) => obj.cc === selectFirst).rate / selectedCurrency.find((obj) => obj.cc === selectSecond).rate
                setInputSecond((Number(inputFirst) * rate).toFixed(2))
            }
        } else {
            if (selectFirst === selectSecond) {
                setInputFirst(Number(inputSecond).toFixed(2))
            } else if (selectFirst === "UAH") {
                const rate = selectedCurrency.find((obj) => obj.cc === selectSecond).rate;
                setInputFirst((Number(inputSecond) * rate).toFixed(2))
            } else if (selectSecond === "UAH") {
                const rate = selectedCurrency.find((obj) => obj.cc === selectFirst).rate;
                setInputFirst((Number(inputSecond) / rate).toFixed(2))
            } else {
                const rate = selectedCurrency.find((obj) => obj.cc === selectSecond).rate / selectedCurrency.find((obj) => obj.cc === selectFirst).rate
                setInputFirst((Number(inputSecond) * rate).toFixed(2))
            }
        }
    }, [inputFirst, inputSecond, selectedCurrency])

    // Обчислення курсів валют та виведення їх значень
    React.useEffect(() => {
        calculateCurr(activeInput, selectFirst, selectSecond)

    }, [inputFirst, inputSecond, selectFirst, selectSecond, activeInput, calculateCurr])


    return (
        <div className={stl.root}>
            {isError && (
                <h5>Вибачте =( <br />Cталася помилка<br />Спробуйте пізніше</h5>
            )}
            {isLoading && (
                <h5>Завантаження..</h5>
            )}
            {isSuccess && (
                <div className={stl.converter}>
                    <h2 className={stl.title}>Конвертер валют</h2>
                    <h4 className={stl.subTitle}>по курсу НБУ</h4>
                    <hr />
                    <div className={stl.inputsContainer}>
                        <div className={stl.item}>
                            <input className={stl.firstInput} type='number' value={inputFirst} onChange={handleFirstInputChange} onFocus={() => setActiveInput('first')} />
                            <select className={stl.firstSelect} value={selectFirst} onChange={handleFirstSelectChange} >
                                {selectedCurrency.map((curr, index) => {
                                    return (
                                        <option value={curr.cc} key={index + curr.cc}>{curr.cc}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={stl.equal}>
                            <FaEquals size={25} style={{ transform: 'rotate(90deg)', color: 'black' }} />
                        </div>
                        <div className={stl.item}>
                            <input className={stl.secondInput} type='number' value={inputSecond} onChange={handleSecondInputChange} onFocus={() => setActiveInput('second')} />
                            <select className={stl.secondSelect} value={selectSecond} onChange={handleSecondSelectChange} >
                                {selectedCurrency.map((curr, index) => {
                                    return (
                                        <option value={curr.cc} key={index + curr.cc + "second"}>{curr.cc}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default React.memo(CurrencyConverter);