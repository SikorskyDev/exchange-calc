import React, { useState } from 'react';
import stl from './CurrencyConverter.module.scss';
import { FaEquals } from 'react-icons/fa';



function CurrencyConverter({ isSuccess, isLoading, isError, usdRate, eurRate, plnRate, mdlRate }) {
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

    // Обчислення курсів валют та виведення їх значень
    React.useEffect(() => {
        if (activeInput === "first") {
            // UAH-USD,EUR,PLN,MDL
            if (selectFirst === "UAH" && selectSecond === "UAH") {
                setInputSecond(Number(inputFirst).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "USD") {
                setInputSecond((Number(inputFirst) / usdRate).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "EUR") {
                setInputSecond((Number(inputFirst) / eurRate).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "PLN") {
                setInputSecond((Number(inputFirst) / plnRate).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "MDL") {
                setInputSecond((Number(inputFirst) / mdlRate).toFixed(2))
            }

            // USD - UAH, EUR, PLN, MDL
            if (selectFirst === "USD" && selectSecond === "USD") {
                setInputSecond(Number(inputFirst).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "UAH") {
                setInputSecond((Number(inputFirst) * usdRate).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "EUR") {
                let usdEur = usdRate / eurRate;
                setInputSecond((Number(inputFirst) * usdEur).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "PLN") {
                let usdPLN = usdRate / plnRate;
                setInputSecond((Number(inputFirst) * usdPLN).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "MDL") {
                let usdMDL = usdRate / mdlRate;
                setInputSecond((Number(inputFirst) * usdMDL).toFixed(2))
            }

            // PLN - UAH, USD, EUR, MDL
            if (selectFirst === "PLN" && selectSecond === "PLN") {
                setInputSecond(Number(inputFirst).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "UAH") {
                setInputSecond((Number(inputFirst) * plnRate).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "EUR") {
                let plnEur = plnRate / eurRate;
                setInputSecond((Number(inputFirst) * plnEur).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "USD") {
                let plnUsd = plnRate / usdRate;
                setInputSecond((Number(inputFirst) * plnUsd).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "MDL") {
                let plnMDL = plnRate / mdlRate;
                setInputSecond((Number(inputFirst) * plnMDL).toFixed(2))
            }


            // MDL - UAH, USD, EUR, PLN
            if (selectFirst === "MDL" && selectSecond === "MDL") {
                setInputSecond(Number(inputFirst).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "UAH") {
                setInputSecond((Number(inputFirst) * mdlRate).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "EUR") {
                let mdlEur = mdlRate / eurRate;
                setInputSecond((Number(inputFirst) * mdlEur).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "USD") {
                let mdlUsd = mdlRate / usdRate;
                setInputSecond((Number(inputFirst) * mdlUsd).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "PLN") {
                let mdlPln = mdlRate / plnRate;
                setInputSecond((Number(inputFirst) * mdlPln).toFixed(2))
            }


            // EUR - UAH, USD, PLN, MDL
            if (selectFirst === "EUR" && selectSecond === "EUR") {
                setInputSecond(Number(inputFirst).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "UAH") {
                setInputSecond((Number(inputFirst) * eurRate).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "MDL") {
                let eurMdl = eurRate / mdlRate;
                setInputSecond((Number(inputFirst) * eurMdl).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "USD") {
                let eurUsd = eurRate / usdRate;
                setInputSecond((Number(inputFirst) * eurUsd).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "PLN") {
                let eurPln = eurRate / plnRate;
                setInputSecond((Number(inputFirst) * eurPln).toFixed(2))
            }


        } else if (activeInput === "second") {
            //UAH-USD,EUR,PLN,MDL
            if (selectFirst === "UAH" && selectSecond === "UAH") {
                setInputFirst(Number(inputSecond).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "USD") {
                setInputFirst((Number(inputSecond) * usdRate).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "EUR") {
                setInputFirst((Number(inputSecond) * eurRate).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "PLN") {
                setInputFirst((Number(inputSecond) * plnRate).toFixed(2))
            }
            if (selectFirst === "UAH" && selectSecond === "MDL") {
                setInputFirst((Number(inputSecond) * mdlRate).toFixed(2))
            }

            // USD - UAH, EUR, PLN, MDL
            if (selectFirst === "USD" && selectSecond === "USD") {
                setInputFirst(Number(inputSecond).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "UAH") {
                setInputFirst((Number(inputSecond) / usdRate).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "EUR") {
                let usdEur = eurRate / usdRate;
                setInputFirst((Number(inputSecond) * usdEur).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "PLN") {
                let usdPLN = plnRate / usdRate;
                setInputFirst((Number(inputSecond) * usdPLN).toFixed(2))
            }
            if (selectFirst === "USD" && selectSecond === "MDL") {
                let usdMDL = mdlRate / usdRate;
                setInputFirst((Number(inputSecond) * usdMDL).toFixed(2))
            }

            // PLN - UAH, USD, EUR, MDL
            if (selectFirst === "PLN" && selectSecond === "PLN") {
                setInputFirst(Number(inputSecond).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "UAH") {
                setInputFirst((Number(inputSecond) / plnRate).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "EUR") {
                let plnEur = eurRate / plnRate;
                setInputFirst((Number(inputSecond) * plnEur).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "USD") {
                let plnUsd = usdRate / plnRate;
                setInputFirst((Number(inputSecond) * plnUsd).toFixed(2))
            }
            if (selectFirst === "PLN" && selectSecond === "MDL") {
                let plnMDL = mdlRate / plnRate;
                setInputFirst((Number(inputSecond) * plnMDL).toFixed(2))
            }

            // MDL - UAH, USD, EUR, PLN
            if (selectFirst === "MDL" && selectSecond === "MDL") {
                setInputFirst(Number(inputSecond).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "UAH") {
                setInputFirst((Number(inputSecond) / mdlRate).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "EUR") {
                let mdlEur = eurRate / mdlRate;
                setInputFirst((Number(inputSecond) * mdlEur).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "USD") {
                let mdlUsd = usdRate / mdlRate;
                setInputFirst((Number(inputSecond) * mdlUsd).toFixed(2))
            }
            if (selectFirst === "MDL" && selectSecond === "PLN") {
                let mdlPln = plnRate / mdlRate;
                setInputFirst((Number(inputSecond) * mdlPln).toFixed(2))
            }


            // EUR - UAH, USD, PLN, MDL
            if (selectFirst === "EUR" && selectSecond === "EUR") {
                setInputFirst(Number(inputSecond).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "UAH") {
                setInputFirst((Number(inputSecond) / eurRate).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "MDL") {
                let eurMdl = mdlRate / eurRate;
                setInputFirst((Number(inputSecond) * eurMdl).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "USD") {
                let eurUsd = usdRate / eurRate;
                setInputFirst((Number(inputSecond) * eurUsd).toFixed(2))
            }
            if (selectFirst === "EUR" && selectSecond === "PLN") {
                let eurPln = plnRate / eurRate;
                setInputFirst((Number(inputSecond) * eurPln).toFixed(2))
            }
        }

    }, [inputFirst, inputSecond, selectFirst, selectSecond, activeInput, eurRate, usdRate, plnRate, mdlRate])


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
                                <option value="UAH">UAH</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="PLN">PLN</option>
                                <option value="MDL">MDL</option>
                            </select>
                        </div>
                        <div className={stl.equal}>
                            <FaEquals size={25} style={{ transform: 'rotate(90deg)', color: 'black' }} />
                        </div>
                        <div className={stl.item}>
                            <input className={stl.secondInput} type='number' value={inputSecond} onChange={handleSecondInputChange} onFocus={() => setActiveInput('second')} />
                            <select className={stl.secondSelect} value={selectSecond} onChange={handleSecondSelectChange} >
                                <option value="UAH">UAH</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="PLN">PLN</option>
                                <option value="MDL">MDL</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}



        </div>
    )
}

export default React.memo(CurrencyConverter);