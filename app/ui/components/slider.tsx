
import { SliderFields} from "@/app/lib/definitions";

export default function Slider({currentValue, min, max, step, setCurrentValue}: SliderFields) {
    return (
        <div className="w-full relative">
            <div className="flex items-center gap-3">
                <span>{min}%</span>
                <input 
                    type="range" 
                    className="w-full h-1 bg-azure rounded-lg appearance-none cursor-pointer" 
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={currentValue} 
                    onChange={(e) => setCurrentValue(parseInt(e.target.value))}
                />
                <output className="bg-red-500 h-5 px-3 py-1 absolute rounded bottom-7 left-1/2 transform -translate-x-1/2">
                    {currentValue}%
                </output>
                <span>{max}%</span>
            </div>
        </div>
    );
}