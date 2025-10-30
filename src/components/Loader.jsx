import React from 'react';

const Loader = () => {
  return (
    <div className='w-full min-h-[90vh] flex items-center justify-center'>
      <span className="loading loading-spinner text-secondary"></span>
    </div>
  );
};

export default Loader;