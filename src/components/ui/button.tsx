type Props = {
    label: string;
    onclick?: () => void;
    size: 1 | 2 | 3;
}

export const Button = ({ label, onclick, size }: Props) => {
    return (
        <div
            onClick={onclick}
            className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl
            ${size === 1 ? 'h-14 text-lg' : size === 2 ? 'h-10 text-md' : 'h-7 text-xs'}`}>
            {label}
        </div>
    );
}