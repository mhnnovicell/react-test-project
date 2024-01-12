import './App.css';
import Button from './components/Button';

export default function App() {
  return (
    <>
      <div className='bg-slate-950'>
        <p className='text-white'>Hello world</p>
        <Button count={10} disabled={true} title={'test'}></Button>
      </div>
    </>
  );
}
