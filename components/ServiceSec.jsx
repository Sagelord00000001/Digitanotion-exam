import Image from 'next/image';
import Web from '@/assets/images/webdev.jpg'
import Mobile from '@/assets/images/mobileapp.jpg'
import Cloud from '@/assets/images/cloudsolution.jpg'

const ServicesSection = () => {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="service">
            <Image src={Web} alt="Web Development" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4">Web Development</h3>
            <p className="mt-2">We create responsive, scalable websites.</p>
          </div>
          <div className="service">
            <Image src={Mobile} alt="Mobile Apps" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4">Mobile Apps</h3>
            <p className="mt-2">Custom mobile applications to suit your needs.</p>
          </div>
          <div className="service">
            <Image src={Cloud} alt="Cloud Solutions" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4">Cloud Solutions</h3>
            <p className="mt-2">We offer secure cloud storage and hosting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
