import React from 'react';

export const Header = () => {
  return (
    <div className="px-[15px] bg-black">
      <div className="max-w-[1026px] mx-auto">
        <div className="flex justify-between ">
          <div className="logo p-[15px]">
            <img src="/images/logo.png" className="lg:max-w-[200px] w-full h-auto  max-w-[150px]" alt="" />
          </div>

          <div className="md:hidden">
            <img src="/images/menu.png" className="cursor-pointer" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
