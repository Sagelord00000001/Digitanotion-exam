
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" id="contact">
      <div className="container mx-auto text-center">
        <p>Contact Us: 123 Tech Lane, Silicon Valley, CA</p>
        <p>Phone: (123) 456-7890 | Email: info@techstart.com</p>
        <div className="mt-4 space-x-4">
          <a href="#"><img src="facebook.png" alt="Facebook" className="inline-block" /></a>
          <a href="#"><img src="twitter.png" alt="Twitter" className="inline-block" /></a>
          <a href="#"><img src="linkedin.png" alt="LinkedIn" className="inline-block" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
