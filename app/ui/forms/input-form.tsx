'use client'

import React, { useState, useEffect } from 'react';
import Slider from '@/app/ui/components/slider'
import Radio from '@/app/ui/components/radio'    

export default function Page() {
    const [inputs, setInputs] = useState({
        url: '',
        discountAskingPrice: 15,
        desiredYield: 0,
        convertedRentRate: 20,
        duration: 3
    });

    const [isValidUrl, setIsValidUrl] = useState(true);
    const [isValidDesiredYield, setIsValidDesiredYield] = useState(true);

    function validateDesiredYield(inputDesiredYield: string) {
        const desiredYieldRegex = /^(4\.5|5(\.0)?|6(\.0)?|7(\.0)?|8(\.0)?|9(\.0)?)$/;
        setIsValidDesiredYield(desiredYieldRegex.test(inputDesiredYield));
    };

    function validateUrl(inputUrl: string) {
        const urlRegex = /^(https?:\/\/www\.rightmove\.co\.uk\/properties\/\d+#)$/;
        setIsValidUrl(urlRegex.test(inputUrl));
    }

    function setdiscountAskingPrice(value: number) {
        setInputs({...inputs, discountAskingPrice: value});
    }

    function setconvertedRentRate(value: number) {
        setInputs({...inputs, convertedRentRate: value});
    }

    function setDuration(value: number) {
        setInputs({...inputs, duration: value});
    }

    function handleDesiredYield(value: any) {
        setInputs({...inputs, desiredYield: value});    
        validateDesiredYield(value);
    }

    function handleUrlChange(value: string) {
        setInputs({...inputs, url: value});
        validateUrl(value);
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
                            onChange = {(e) => handleUrlChange(e.target.value)}
                        />
                    </div>
                    {!isValidUrl && <div className="flex justify-center items-center mt-4 text-crimson">Please enter a valid URL.</div>}
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