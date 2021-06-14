import React from 'react';
import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <div className='relative flex flex-row items-center flex-grow w-full h-full bg-cover bg-home justify-evenly'>
        <div className='flex flex-col w-1/4 p-4 bg-white'>
          <div className='m-2 text-center'>
            <span className='px-2 text-2xl font-bold border-l-4 border-primary'>Je souhaite</span>
          </div>
          <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='Acheter, vendre, louer, ...' />
          <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='Type de bien' />
          <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='CP, Ville, Département' />
          <button className='px-2 py-4 m-2 text-white rounded-md bg-tertiary'>Rechercher</button>
        </div>

        <div className='w-1/4 bg-gray-300'>
          <span className='font-bold text-8xl'>Yeaaah !</span>
          <p>Vous aussi vendez votre bien dans les meilleures conditions ! </p>
        </div>
      </div>
    </Layout>
  );
}
