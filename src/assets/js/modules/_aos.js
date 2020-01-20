import AOS from 'aos';

const aos = () => {
   
    AOS.init({
        disable: 'mobile',
        once: true,
        // duration: 800,
      });

};



export default aos;