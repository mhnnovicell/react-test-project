import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  value: string;
}

export default function Card({ value }: CardProps) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = (): void => {
      setLoading(true);
      fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          console.log(data.meals, 'data');
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    };
    if (value !== '') fetchData();
  }, [value]);

  if (loading) {
    return (
      <div className='text-center'>
        <div role='status'>
          <svg
            aria-hidden='true'
            className='inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (data.length !== 0) {
    const spring = {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    };

    return (
      // <div>
      //   {data.meals.map((meal, index) => (
      //     <div key={index}>
      //       <h2>{meal.strMeal}</h2>
      //       <img src={meal.strMealThumb} alt={meal.strMeal} />
      //       <p>{meal.strInstructions}</p>
      //     </div>
      //   ))}
      // </div>

      <div className='flex flex-row flex-wrap w-full h-full'>
        {data.meals.map((meal, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            transition={spring}
            key={index}
            animate={['visible', 'active']}
            layout
          >
            <div className='flex-col items-center justify-center w-full m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <img
                className='rounded-t-lg'
                src={meal.strMealThumb}
                alt={meal.strMeal}
                loading='lazy'
              />

              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {meal.strMeal}
                  </h5>
                </a>
                <h6 className='mt-4 font-bold tracking-tight text-gray-900 text-1xl dark:text-white'>
                  Mesurements
                </h6>
                <div className='flex flex-row w-1/2 my-4'>
                  <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                    {meal.strMeasure1} {meal.strIngredient1}
                  </span>
                  <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                    {meal.strMeasure2} {meal.strIngredient2}
                  </span>
                  <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                    {meal.strMeasure3} {meal.strIngredient3}
                  </span>
                  <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                    {meal.strMeasure4} {meal.strIngredient4}
                  </span>
                  <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                    {meal.strMeasure5} {meal.strIngredient5}
                  </span>
                </div>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {meal.strInstructions}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }
  if (data.length === 0) {
    return <div>Ingen oprskrifter blev fundet</div>;
  }
}
