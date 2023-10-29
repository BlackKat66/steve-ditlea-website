import ContactForm from "./contactForm";

const Footer = () => (
  <>
    <ContactForm />
    <div className="copyright py-4 text-center text-white">
    <div className="container text-medium">
        Copyright © 2023 Steve Ditlea <br />
        <a className="text-white" href="https://en.wikipedia.org/wiki/Ted_Richards_(artist)" target="_blank">Web site design by Ted Richards</a>
    </div>
  </div>
  </>
);

export default Footer; 