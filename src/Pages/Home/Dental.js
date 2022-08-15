import React from 'react';
import teeth from '../../assets/images/treatment.png';
import CommonButton from '../Shared/CommonButton';

const Dental = () => {
    return (
        <div className="hero min-h-screen px-40">
            <div className="hero-content flex-col lg:flex-row">
                <img src={teeth} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='lg:pl-16'>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <CommonButton>get started</CommonButton>
                </div>
            </div>
        </div>
    );
};

export default Dental;