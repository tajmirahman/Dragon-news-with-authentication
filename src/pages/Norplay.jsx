import React from 'react';
import { Link } from 'react-router';

const Norplay = () => {
    return (
        <div className='w-6/12 mx-auto mt-20  '>
      
            <div className="card border gap-5 p-5">
                <h2 className='text-center text-2xl'>Norplay reset password</h2>
                <p className='text-center text-yellow-500'>Mail has been send. please cheek your mail inbox or span folder.</p>
                <Link to={'/auth/login'} className='btn bg-base-300 w-3/5 mx-auto'>Back to login</Link>
            </div>
        </div>
    );
};

export default Norplay;