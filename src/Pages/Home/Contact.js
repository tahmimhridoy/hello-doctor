import React from 'react';
import background from '../../assets/images/appointment.png'
import CommonButton from '../Shared/CommonButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='text-center py-12'>
            <h4 className='uppercase text-primary font-semibold'>Contact us</h4>
            <h2 className='text-3xl text-white'>Stay connected with us</h2>
            <div className="flex flex-col items-center mt-10">
                <input type="text" placeholder="Email Address" class="input w-full max-w-xs" />
                <input type="text" placeholder="Subject" class="input w-full max-w-xs my-3" />
                <textarea class="textarea w-full max-w-xs mb-3" placeholder="Your message"></textarea>
            </div>
            <CommonButton>Get Started</CommonButton>
        </section>
    );
};

export default Contact;