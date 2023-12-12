import { RadioFields} from "@/app/lib/definitions";

export default function Radio({currentValue, setCurrentValue, options}: RadioFields) {
    return (
        <>
            {options.map((option: any) => (
                <label className={"p-3 cursor-pointer text-md " + (currentValue === option.value ? 'bg-azure text-white' : 'bg-grey text-black')} key={option.value}>
                    <input 
                        type="radio" 
                        className="hidden" 
                        name="duration" 
                        value={option.value} 
                        checked={currentValue === option.value}
                        onChange={(e) => setCurrentValue(parseInt(e.target.value))}
                    />
                    <span>{option.label}</span>
                </label>
            ))}
        </> 
    );
}