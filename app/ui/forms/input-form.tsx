'use client'

import React, { useState } from 'react'
import Slider from '@/app/ui/components/slider'
import Radio from '@/app/ui/components/radio'    

export default function InputForm({setpropertyData, setFormData}: {setpropertyData?: any, setFormData?: any}) {
    const [inputs, setInputs] = useState({
        url: '',
        discountAskingPrice: 15,
        desiredYield: 4.5,
        convertedRentRate: 20,
        duration: 3
    });
    const [isValidUrl, setIsValidUrl] = useState(true);
    const [isValidDesiredYield, setIsValidDesiredYield] = useState(true);
    const [fetchingData, setFetchingData] = useState(false);

    // Validators
    function validateDesiredYield(inputDesiredYield: string) {
        const desiredYieldRegex = /^(4\.[5-9]|[5-8](\.\d+)?|9(\.0+)?)$/;
        setIsValidDesiredYield(desiredYieldRegex.test(inputDesiredYield));
    };

    function validateUrl(inputUrl: string) {
        const urlRegex = /^(https?:\/\/www\.rightmove\.co\.uk\/properties\/\d+#)$/;
        setIsValidUrl(urlRegex.test(inputUrl));
    }

    // Setters
    function setdiscountAskingPrice(value: number) {
        const data = {...inputs, discountAskingPrice: value}
        setInputs(data)
        setFormData(data)
    }

    function setconvertedRentRate(value: number) {
        const data = {...inputs, convertedRentRate: value}
        setInputs(data)
        setFormData(data)
    }

    function setDuration(value: number) {
        const data = {...inputs, duration: value}
        setInputs(data)
        setFormData(data)
    }

    function handleDesiredYield(value: any) {
        const data = {...inputs, desiredYield: value}
        setInputs(data)   
        validateDesiredYield(value)
        setFormData(data)
    }

    function handleUrlChange(value: string) {
        const data = {...inputs, url: value}
        setInputs(data)
        validateUrl(value)
        setFormData(data)
    }

    async function getPropertyListingPrice() {
        try {
            if (!isValidUrl) {
                return
            }

            setFetchingData(true)
            const response = await fetch('api/property-data', {
                method: 'POST',
                body: JSON.stringify(inputs)
            });

            const data = await response.json()
            if (data.status == 'error') {
                setFetchingData(false)
                setIsValidUrl(false)
                return
            }
            setpropertyData(data.data)
            setFetchingData(false)
          } 
          catch (error) {
            setFetchingData(false)
            setIsValidUrl(false)
          }
    }

    return (
        <div className="md:px-10">
            <p className="text-2xl mb-10 font-bold">Inputs</p>
            <div className="flex flex-col gap-10 md:gap-16">
                {/* URL */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                        <div className="md:w-1/6">URL:</div>
                        <input 
                            className="flex-1 text-white bg-azure border-2 border-black p-2" 
                            type="text" 
                            onChange={(e) => handleUrlChange(e.target.value)}
                            onBlur = {(e) => getPropertyListingPrice()}
                        />
                    </div>
                    {(!isValidUrl) && <div className="flex justify-center items-center mt-4 text-crimson">The URL doesn't seems to be correct</div>}
                    {fetchingData && <div className="flex justify-center items-center mt-4 text-crimson">Fetching data...</div>}
                </div>
                
                {/* Discount vs. asking price */}
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div className="md:w-1/6">Discount vs. asking price:</div>
                    <Slider 
                        min={0}
                        max={30}
                        step={1}
                        currentValue={inputs.discountAskingPrice} 
                        setCurrentValue={setdiscountAskingPrice} 
                    />
                </div>

                {/* Desired Yield */}
                <div>
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="md:w-1/6">Desired Yield:</div>
                            <div className="flex-1">
                                <input 
                                    type="number"
                                    className="text-white bg-azure border-2 border-black p-2 w-1/4"
                                    min="4.5"
                                    max="9"
                                    step="0.1"
                                    onChange = {(e) => (handleDesiredYield(e.target.value))}
                                    value={inputs.desiredYield}
                                />
                            </div>
                        </div>
                    {!isValidDesiredYield && <p className="flex justify-center items-center mt-4 text-crimson">Please enter a valid Desired Yield (e.g., 4.5% to 9%).</p>}
                </div>

                {/* Converted rent rate */}
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div className="md:w-1/6">Converted rent rate:</div>
                    <Slider 
                        min={10}
                        max={25}
                        step={5}
                        currentValue={inputs.convertedRentRate} 
                        setCurrentValue={setconvertedRentRate} 
                    />
                </div>

                {/* Duration */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-1/6">Duration:</div>
                    <div className="flex gap-5">
                        <Radio 
                            currentValue={inputs.duration}
                            setCurrentValue={setDuration}
                            options={[
                                {value: 3, label: '3 years'},
                                {value: 5, label: '5 years'},
                                {value: 7, label: '7 years'}
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}