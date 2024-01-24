import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <div className='flex flex-col w-full h-full p-4'>
        <Input inputText={inputText} setInputText={setInputText}></Input>
        <Card value={inputText}></Card>
      </div>
    </>
  );
}
