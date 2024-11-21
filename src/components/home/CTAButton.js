import React from 'react';

export const CTAButton = () => {
    const handleClick = () => {
        window.open('https://7vjgx7um9hq.typeform.com/to/bLR2sHY8', '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            className="py-[14px] px-[28px] rounded-[10px] bg-[#FED63E] text-[#071943] font-semibold text-[20px]"
            onClick={handleClick}
        >
            Jetzt sparen!
        </button>
    );
};