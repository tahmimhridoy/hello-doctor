import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import CommonButton from '../Shared/CommonButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center px-20 my-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                <h3 className='text-xl text-primary font-semibold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today.</h2>
                <p className='text-white py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laudantium modi ad similique cumque voluptates! Velit, accusamus, modi totam numquam atque suscipit dolor blanditiis ipsa corporis nesciunt minima quas placeat ex voluptate consectetur at autem quis error dicta. Adipisci, ratione?</p>
                <CommonButton>Get Started</CommonButton>
            </div>
        </section>
    );
};

export default MakeAppointment;