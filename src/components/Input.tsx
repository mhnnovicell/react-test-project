import { useState } from 'react';

export default function SearchInput({ inputText, setInputText }) {
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-full mb-4'>
        <form onSubmit={formSubmitHandler}>
          <label
            htmlFor='search'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Søg efter opskrifter
          </label>
          <input
            placeholder='Søg'
            onChange={inputHandler}
            type='text'
            id='search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          ></input>
        </form>
      </div>
    </>
  );
}
