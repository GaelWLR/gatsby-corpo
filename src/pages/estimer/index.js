import React from 'react';
import Layout from '../../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <div className='flex items-center justify-center flex-grow bg-gradient-to-br from-primary  via-blue-500 to-primary'>
        <div className='flex flex-col w-1/2 px-2 py-6 bg-white'>
          <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='Acheter, vendre, louer, ...' />
          <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='Type de bien' />
          <input type='text' className='px-2 py-4 m-2 border rounded-md' placeholder='CP, Ville, Département' />
          <button className='px-2 py-4 m-2 text-white rounded-md bg-tertiary'>Rechercher</button>
        </div>
      </div>
    </Layout>
  );
}
