interface InputProps {
  title: string;
  disabled: boolean;
  count: number;
}

export default function Button({ title, disabled, count }: InputProps) {
  return (
    <>
      <div className='bg-slate-950'>
        <p className='text-white'>{title}</p>
      </div>
      <span className='text-red-300'>{disabled}</span>
      <p className='text-yellow-500'>{count}</p>
    </>
  );
}
