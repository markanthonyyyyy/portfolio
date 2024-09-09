import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import animationData from './../../../public/Animations/coffee-animation.json'
import animationData2 from './../../../public/Animations/email-sent-animation.json'
import animationData3 from './../../../public/Animations/cloud-white-animation.json'
import animationData4 from './../../../public/Animations/scan-qr-animation.json'
import { useForm } from 'react-hook-form';
import emailJs from '@emailjs/browser';

const ContactScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSent, setIssent] = useState(false);
  const form : any = useRef();
  const onSubmit = async () => {
      setLoading(true);
      try {
        await emailJs.sendForm('service_5kz6u8c', 'template_jiqhtn8', form.current, {
          publicKey: 'BQIPgzXZi8qYckNM_',
        })
        .then(
          () => {
            setIssent(true);
            setTimeout(() => {
              setIssent(false);
            }, 5000)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        reset(); 
      }catch (error) {
        console.error("Message Send Failed", error);
      }finally{
        setLoading(false);
      }
      
  }

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsMobile(false);    
        }
        else{
           setIsMobile(true);
        }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <section id="Connect" className="w-full h-full bg-zinc-800 p-5 md:p-10 text-white overflow-hidden">
      <p className="font-nunito-sans text-white text-2xl md:text-4xl font-bold text-center mb-2 md:mb-5" data-aos="fade-right">Let's <span className="text-blue-500">Connect</span></p>
      <div className="w-full h-full flex flex-col md:flex-row">
          {/* Container 1 */}
          {isMobile ? 
          (
            <div className="w-full md:w-3/5 h-auto p-5" data-aos="fade-right" data-aos-delay="500" >
                <div className='w-full h-full bg-black-gradient px-7 pt-10 pb-14 rounded-2xl relative'>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-16 border-t-4 rounded-lg border-gray-300"></div>
                <div className="absolute bottom-3.5 left-1/2 transform -translate-x-1/2 border-gray-300">
                  <div className='w-7 h-7 bg-white rounded-full'></div>
                </div>
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                {isSent ? (
                    <div className='text-black w-full h-[23.5rem] bg-white flex items-center justify-center'>
                      <Lottie animationData={animationData2} loop={false} style={{height: 120, width: 120}}/>
                    </div>
                  ) : (
                    <div className='bg-white w-full h-[23.5rem] p-5'>
                      <div className='flex items-center mb-5'>
                        <img src='/Images/Connect/message-icon.png' className={`w-6 md:w-8 h-auto object-contain mr-3`}/>
                        <p className='font-nunito-sans text-sm text-blue-500 font-bold' data-aos-delay="700">Send a Message</p>
                      </div>
                      <input id="sender_name" {...register('sender_name', { required: 'Name is required' })} type="text" className={`text-xs mb-2 w-full p-2 border-2 ${errors.sender_name ? 'border-red-500' : 'border-blue-500'} text-black outline-none`} placeholder={errors.sender_name ? `${errors.sender_name?.message}` : 'Name'}/>
                      <input id="sender_email" {...register('sender_email', { required: 'Email is required', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Email is not valid'}})} type="email" className={`text-xs mb-2 w-full p-2 border-2 ${errors.sender_email ? 'border-red-500' : 'border-blue-500'} text-black outline-none`} placeholder={errors.sender_email ? `${errors.sender_email?.message}` : 'Email'}/>
                      <div className='flex space-x-2 mb-2'>
                        <input id="subject" {...register('subject', { required: 'Subject is required' })} type="text" className={`text-xs w-full p-2 border-2 ${errors.subject ? 'border-red-500' : 'border-blue-500'} text-black outline-none`} placeholder={errors.subject ? `${errors.subject?.message}` : 'Subject'}/>
                      </div>
                      <textarea id='message' {...register('message', { required: 'Message is required' })} placeholder={errors.message ? `${errors.message?.message}` : 'Your Message'} className={`text-xs border-2 ${errors.message ? 'border-red-500' : 'border-blue-500'} appearance-none mb-3  w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-28 resize-none`}></textarea>
                      <div className='flex items-center justify-between'>
                        <button type='submit' className="text-xs text-white whitespace-nowrap font-nunito-sans px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-center md:text-sm md:px-5 md:py-2.5" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                        <div className='flex items-center '>
                          <img src='/Images/Connect/ph-icon.png' className={`w-4 md:w-6 h-auto object-contain mr-1`}/>
                          <p className='font-nunito-sans text-sm text-blue-500 font-bold'>PH</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
                </div>
                <div className='flex flex-col items-center mt-10 gap-y-3'>
                <div className='flex items-center'>
                  <img src='/Images/Connect/telephone-icon.png' className={`w-8 md:w-10 h-auto object-contain mr-3`}/>
                  <p className='font-nunito-sans'>+639278447694</p>
                </div>
                <div className='flex items-center'>
                  <img src='/Images/Connect/telephone-icon.png' className={`w-8 md:w-10 h-auto object-contain mr-3`}/>
                  <p className='font-nunito-sans'>+639625540316</p>
                </div>
              </div>
            </div>

          ) : 
          (
            <div className="w-full md:w-3/5 h-auto p-10" data-aos="fade-right" data-aos-delay="500">
              <div  className="w-full h-5/6 bg-black-gradient border border-zinc-700 rounded-xl py-5 pl-12 pr-16 relative">
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 h-28 border-l-4 rounded-lg border-gray-300"></div>
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 border-gray-300">
                  <div className='w-8 h-8 bg-white rounded-full'></div>
                </div>
                <form ref={form} onSubmit={handleSubmit(onSubmit)} >
                  {isSent ? (
                    <div className='text-black w-full h-[26rem] bg-white flex items-center justify-center'>
                      <Lottie animationData={animationData2} loop={false} style={{height: 300, width: 300}}/>
                    </div>
                  ) : (
                    <div className='w-full h-[26rem] bg-white p-5 overflow-y-auto'>
                        <div className='flex items-center mb-5'>
                          <img src='/Images/Connect/message-icon.png' className={`w-6 md:w-8 h-auto object-contain mr-3`}/>
                          <p className='font-nunito-sans text-lg text-blue-500 font-bold' data-aos-delay="700">Send a Message</p>
                        </div>
                        <div className='flex space-x-2 mb-2'>
                          <input id="sender_name" {...register('sender_name', { required: 'Name is required' })} type="text" className={`w-1/2 p-2 border-2 ${errors.sender_name ? 'border-red-500' : 'border-blue-500'} text-black outline-none`} placeholder={errors.sender_name ? `${errors.sender_name?.message}` : 'Name'}/>
                          <input id="sender_email" {...register('sender_email', { required: 'Email is required', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Email is not valid'}})}  type="email" className={`w-1/2 p-2 border-2 ${errors.sender_email ? 'border-red-500' : 'border-blue-500'} text-black outline-none`} placeholder={errors.sender_email ? `${errors.sender_email?.message}` : 'Email'}/>
                        </div>
                        <div className='flex space-x-2 mb-2'>
                          <input id="subject" {...register('subject', { required: 'Subject is required' })}  type="text"  className={`w-full p-2 border-2 ${errors.subject ? 'border-red-500' : 'border-blue-500'} text-black outline-none`} placeholder={errors.subject ? `${errors.subject?.message}` : 'Subject'}/>
                        </div>
                        <textarea id='message' {...register('message', { required: 'Message is required' })} placeholder={errors.message ? `${errors.message?.message}` : 'Your Message'} className={`border-2 ${errors.message ? 'border-red-500' : 'border-blue-500'} appearance-none mb-3  w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none`}></textarea>
                        <div className='flex items-center justify-between'>
                          <button type='submit' className="text-xs text-white whitespace-nowrap font-nunito-sans px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-center scale-0 transition-scale duration-500 md:scale-100 md:text-sm md:px-5 md:py-2.5" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                          <div className='flex items-center'>
                            <img src='/Images/Connect/ph-icon.png' className={`w-4 md:w-6 h-auto object-contain mr-3`}/>
                            <p className='font-nunito-sans text-blue-500 font-bold'>Philippines</p>
                          </div>
                        </div>
                    </div>
                  )}
                 
                </form>
              </div>
              <div className='flex px-10 py-6 justify-evenly'>
                <div className='flex items-center'>
                  <img src='/Images/Connect/telephone-icon.png' className={`w-8 md:w-10 h-auto object-contain mr-3`}/>
                  <p className='font-nunito-sans'>+639278447694</p>
                </div>
                <div className='flex items-center'>
                  <img src='/Images/Connect/telephone-icon.png' className={`w-8 md:w-10 h-auto object-contain mr-3`}/>
                  <p className='font-nunito-sans'>+639625540316</p>
                </div>
              </div>
            </div>
          )}
          {/* Container 2 */}
          <div className="w-full md:w-2/5 h-auto p-10 flex flex-col items-center justify-center" data-aos={`${isMobile ? 'fade-right' : 'fade-left'}`} data-aos-delay="500">
            <div className='relative w-52 h-52 md:w-80 md:h-80 ml-12'>
              <img src='/Images/Connect/coffee-qr-icon.png' className={`w-52 h-52 md:w-80 md:h-80 object-contain mr-3`}/>
              <div className='absolute -left-3 -bottom-2 md:-left-8 md:-bottom-4'>
                <Lottie animationData={animationData} loop={true} style={{height: isMobile ? 90 : 150, width: isMobile ? 90 : 150}}/>
              </div>
              <div className='absolute -left-20 top-16 md:-left-44 md:top-16'>
                <Lottie animationData={animationData3} loop={true} style={{height: isMobile ? 90 : 180, width: isMobile ? 90 : 180}}/>
              </div>
              <div className='absolute -left-[60px] top-[90px] md:-left-[135px] md:top-28'>
                <Lottie animationData={animationData4} loop={true} style={{height: isMobile ? 40 : 80, width: isMobile ? 40 : 80}}/>
              </div>
            </div>
            <p className='font-nunito-sans mt-7 md:mt-10 text-xl md:text-2xl font-bold'>Buy me <span className='text-blue-500'>Coffee</span> :)</p>
          </div>
      </div>

    </section>
  )
}

export default ContactScreen