const ContactUs = () => {
  return (
    <div className="row">
      <div class="bg-light p-5 rounded col-4">
        <h1>Contact Us</h1>
        <p class="lead">
          <p className="card-text">
            C-DAC Innovation Park,
            <br />
            Panchavati, Pashan, Pune - 411 008, Maharashtra (India)
            <br />
            Phone: +91-20-25503100
            <br />
            Fax: +91-20-25503131
          </p>
        </p>
      </div>
      <div className="col-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8678264336377!2d73.80868804953576!3d18.5348740873388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre%20For%20Development%20Of%20Advanced%20Computing%2C%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1664351064968!5m2!1sen!2sin"
          width="900"
          height="400"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
