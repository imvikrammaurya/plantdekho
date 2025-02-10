import React from "react";
import "./Footer.styles.css";
const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start bg-light text-muted mt-4">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <div className=" mb-4">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgokKaiKsG0VBdKqkCUEz1ZIJduMzbonBwq2BgbShy2TWnsddX4YfoN5ZKro5qXsDlFA5T8gA9_MSn-35we2k04gpTZ1UN8yb1wE5KIClv_lU7FtABio3eXsM93keYOSNI61EK-wN62pZ17iffhdBxGrKTcnKXzAXXGy7rWxxinM2-V2zzeLmkwM2ipIxo"
                  alt="logo"
                  className="nav-logo"
                />
              </div>
              <p>
              PlantDekho.com is your one-stop destination for lush, healthy plants! 🌿✨
Explore a wide range of indoor and outdoor plants, perfect for adding greenery to your home or office. Whether you're a seasoned gardener or a beginner, we bring you the best selection with easy care tips. 🌱
Shop now and bring nature closer to you!
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
              <p>
                <a href="/about" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="/shop" className="text-reset">
                  Shop
                </a>
              </p>
              <p>
                <a href="/blog" className="text-reset">
                  Blog
                </a>
              </p>
              <p>
                <a href="/contact" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> 23/A, Deep Road,
                <br />
                left side, north,
                <br />
                Kandy, Moon
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                planetdekho@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 94 78 533 
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 94 75 506 
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        
        <a className="text-reset fw-bold" href="/">
          {" "}
          Vikram Maurya
        </a>
      </div>
    </footer>
  );
};

export default Footer;
