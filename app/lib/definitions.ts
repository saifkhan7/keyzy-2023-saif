export type SliderFields = {
    min: number;
    max: number;
    currentValue: number;
    step: number;
    setCurrentValue: (value: number) => void;
};

export type RadioFields = {
    currentValue: number;
    setCurrentValue: (value: number) => void;
    options: { label: string; value: number }[];
};