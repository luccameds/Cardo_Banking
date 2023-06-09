import React from 'react';

const SecondHero = () => {
  return (
    <div className="h-screen flex-1 bg-gradient-to-r from-[#b5cae6] to-[#fdeee8]">
      <div className="my-[58px] flex flex-1 flex-row justify-center">
        <button className="mx-[39px] h-[33px] w-[167px] rounded-[100px] bg-[#1D1D1C]">
          Abra sua Conta
        </button>
        <button className="flex h-[33px] flex-row items-center justify-between rounded-[100px] bg-white px-[15px]">
          <p className="mx-[10px] text-black">Log In</p>
          <img src="./arrowbutton.svg" alt="arrowbutton" />
        </button>
      </div>
      <div className="flex justify-center py-[90px]">
        <img src="./stars.svg" alt="stars" className="absolute z-0" />
        <img src="./hand.svg" alt="hand" className="absolute z-0 h-[650px]" />
        <img src="./card.svg" alt="card" className="absolute top-80 z-10" />
      </div>
    </div>
  );
};

export default SecondHero;
