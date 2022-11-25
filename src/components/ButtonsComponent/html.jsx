import React, { useState } from "react";
import homepage from "../img/hero-img.png";
import img from "../img/why-us.png";
import { BiCheckDouble, BiTachometer, BiLayer, BiPhone, BiPlayCircle, BiHelpCircle } from "react-icons/bi";
import { BsDribbble } from "react-icons/bs";
import { FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";
import { Button, Col, Modal, ProgressBar } from "react-bootstrap";
import { FaFacebookF, FaLinkedin, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrCircleQuestion } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { BsSkype } from "react-icons/bs";
import { MdOutlineMarkEmailUnread, MdLocationOn } from "react-icons/md";

function Html() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>AVIAR Financial Services with Vijay Govindarajan</h1>
                <h2>
                  AVIAR Financial Services LLC is committed to serving customers with respect and attention to detail.
                  Our core values of Honesty, Integrity, and Transparency flow from the corporate office down to the
                  Loan Officer who will serve you. Contact Vijay today and become a believer.
                </h2>
                <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                  <a href="/#/step-1" className="btn-get-started scrollto">
                    Get Started
                  </a>
                  <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video">
                    <i className="bi bi-play-circle">
                      <BiPlayCircle />
                    </i>
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img src={require("../img/hero-img.png")} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="clients" className="clients section-bg">
            <div className="container">
              <div className="row" data-aos="zoom-in">
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-1.png")} className="img-fluid secondImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-2.png")} className="img-fluid firstImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-3.png")} className="img-fluid thirdImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-4.png")} className="img-fluid fourthImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-5.png")} className="img-fluid fifthImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-6.png")} className="img-fluid fifthImage" alt="logo" />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>How We Work</h2>
              </div>

              <div className="row content">
                <div className="col-lg-6">
                  <h5>Get the loan you need</h5>
                  <p>
                    Getting a loan doesn’t have to be a complicated process filled with headaches and paperwork. At Team
                    USA Mortgage, we’re not just committed to finding you the perfect loan, we’re committed to making
                    sure that the whole process is 100% pain–and hassle–free. We can qualify you in five minutes with
                    our loan-by-phone program.
                  </p>
                  <ul>
                    <li>
                      <BiCheckDouble color="blue" size={20} />
                      Apply now for a better mortgage experience through Encompass
                    </li>
                    {/* <li>
                      <BiCheckDouble color="blue" size={20} /> Duis aute irure dolor in reprehenderit in voluptate velit
                    </li>
                    <li>
                      <BiCheckDouble color="blue" size={20} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </li> */}
                  </ul>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                  <h5>We take care of all details, from application to closing.</h5>
                  <p>
                    We have access to an endless pool of investors, so we can offer you more options with better rates
                    and services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to.
                    We’ll make sure you’re informed and updated every step of the way.
                  </p>
                  <a href="/#/step-1" className="btn-learn-more">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="why-us" className="why-us section-bg">
            <div className="container-fluid" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                  <div className="content">
                    <h3>
                      We take care of all details, from <strong>application to closing</strong>
                    </h3>
                    <p>
                      We have access to an endless pool of investors, so we can offer you more options with better rates
                      and services than other mortgage providers. We are quick, efficient, friendly, and easy to talk
                      to. We’ll make sure you’re informed and updated every step of the way.
                    </p>
                  </div>

                  <div className="accordion-list">
                    <ul>
                      <li>
                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                          <span>01</span> HOME PURCHASING
                          <i className="bx bx-chevron-down icon-show">
                            <FiChevronDown />
                          </i>
                          <i className="bx bx-chevron-up icon-close">
                            <FiChevronUp />
                          </i>
                        </a>
                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                          <p>
                            Turn the home of your dreams into reality. Whether you are buying your first home, second
                            home, or vacation property.
                          </p>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                          <span>02</span> HOME REFINANCING
                          <i className="bx bx-chevron-down icon-show">
                            <FiChevronDown />
                          </i>
                          <i className="bx bx-chevron-up icon-close">
                            <FiChevronUp />
                          </i>
                        </a>
                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                          <p>
                            Save money by taking advantage of the lowest rates available. Whether you are looking to
                            lower your rate, lower your monthly payment, or tap into your home's equity.
                          </p>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                          <span>03</span> We make it easy
                          <i className="bx bx-chevron-down icon-show">
                            <FiChevronDown />
                          </i>
                          <i className="bx bx-chevron-up icon-close">
                            <FiChevronUp />
                          </i>
                        </a>
                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                          <p>
                            Once you've made an offer and it's been accepted, it's time to apply for the loan. It's very
                            easy, and you can apply online, right here on our website. After the offer has been accepted
                            and you have submitted your loan application, we'll order the professional appraisal on the
                            home.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                  // style='background-image: url("../ img/why-us.png");'
                  style={{ backgroundImage: `url(${img})` }}
                  data-aos="zoom-in"
                  data-aos-delay="150"
                ></div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                  <img src={require("../img/skills.png")} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                  <h3>Progressbar</h3>
                  <p className="fst-italic">
                    Bank's mortgage loans and start your home mortgage process today. Compare mortgages, see current
                    rates, calculate monthly payments and more.
                  </p>

                  <div className="skills-content">
                    <div className="progress">
                      <span className="skill">
                        Personal Loan <i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={100} />
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Business Loan <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={90} />
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Commercial Loan <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={75} />
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Health Loan<i className="val">55%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={55} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Services</h2>
                <p>
                  Also known as a direct lender, a mortgage company typically only specializes in mortgage products and
                  does not offer other banking services such as checking, investments, or loans for other purposes.
                  Moreover, they will usually offer their own products and will not offer loans or products from other
                  companies.
                </p>
              </div>

              <div className="row">
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-box">
                    <div className="icon">
                      <BsDribbble size={35} color="#47b2e4" />
                    </div>
                    <h4>
                      <a href="">Personal Loan</a>
                    </h4>
                    <p>
                      You may use a personal loan to consolidate debt, pay for home renovations, or plan a dream
                      wedding.
                    </p>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <FiFileText size={35} color="#47b2e4" />
                    </div>
                    <h4>
                      <a href="">Business Loan</a>
                    </h4>
                    <p>
                      Bank loans, mezzanine financing, asset-based financing, invoice financing, microloans, business
                      cash advances and cash flow loans.
                    </p>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <BiTachometer size={35} color="#47b2e4" />
                    </div>
                    <h4>
                      <a href="">Commercial Loan</a>
                    </h4>
                    <p>Borrower to purchase vehicles like trucks, buses, tippers, light commercial vehicles.</p>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <BiLayer size={35} color="#47b2e4" />
                    </div>
                    <h4>
                      <a href="">Health Loan</a>
                    </h4>
                    <p>
                      A medical loan is a form of personal loan that you can avail of in the event of a medical
                      emergency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-start">
                  <h3>We take care of all details, from application to closing.</h3>
                  <p>
                    We have access to an endless pool of investors, so we can offer you more options with better rates
                    and services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to.
                    We’ll make sure you’re informed and updated every step of the way.
                  </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a className="cta-btn align-middle" href="/#/step-1">
                    Apply To Action
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="pricing" className="pricing">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Team USA Mortgage’ core philosophy of “customers for Life”</h2>
                <p>
                  A strong and genuine belief in the “customers for life” principal of doing business is what fuels this
                  company. Referrals from previous customers and local real estate professionals have always delivered
                  the majority of the company’s production. We believe in doing the job right the first time so our
                  customers feel comfortable calling on us the next time.
                </p>
              </div>

              <img src={require("../../Image/communication.jpg")} className="fixed-image mx-auto" />

              <div className="mt-4">
                <h5 className="headline">We Listen… then find the best loan product for you!</h5>
                <p>
                  Our goal in serving our customers is letting them tell us what they wish to accomplish in the best
                  possible scenario. Then we work hard to make that scenario a reality. We are proud of our commitment
                  to get the job done right the first time. In times of uncertainty you want a mortgage company that
                  will fight for your best interest. At Team USA Mortgage, we are committed to doing what’s best for our
                  customers. Let us prove it to you!
                </p>
              </div>
              <Col className="d-flex justify-content-center mt-4">
                <button className="px-3 py-2 mx-auto getmorebutton" onClick={() => setShow(!show)}>
                  Get More Details
                </button>
              </Col>
            </div>
          </section>

          <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Team</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                  fugiat sit in iste officiis commodi quidem hic quas.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="pic">
                      <img src={require("../img/team/team-1.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                    <div className="pic">
                      <img src={require("../img/team/team-2.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                    <div className="pic">
                      <img src={require("../img/team/team-3.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                    <div className="pic">
                      <img src={require("../img/team/team-4.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>The Loan Process : an Overview</h2>
                <p>
                  There is no doubt ; Getting a mortgage loan is a complicated process. You wouldn't be visiting our
                  website if you could fill out a simple application and get the best loan funded the same day. We do
                  the heavy lifting for you, so you can concentrate on what's important — preparing to move into your
                  new home or saving money.
                </p>
              </div>

              <div className="faq-list">
                <p className="mb-2">
                  {" "}
                  <b>Getting a mortgage loan involves four major steps.</b>
                </p>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="100">
                    <a data-bs-toggle="collapse" className="collapse " data-bs-target="#faq-list-1">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step one: determine how much you can borrow
                      <i className="bx bx-chevron-down icon-show">
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                      <p>
                        A couple of factors determine this amount. What kind of monthly payment are you looking for? And
                        given your unique credit and employment history, income and debt, and goals, how much will a
                        lender loan you? You can get a good idea of your preferred payment abount using the calculators
                        on our website. We'll also help you through different scenarios by asking a few simple
                        questions. Because lender guidelines are fairly standard, we can give you a good idea of how
                        much you can borrow after a short conversation.
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="200">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step two: pre-qualify for your loan
                      <i className="bx bx-chevron-down icon-show">
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        This is where Team USA Mortgage can begin saving you money. You will give us information on your
                        employment, assets, and your residence history. You'll provide information on your employment,
                        asset, and residence history. We will get your credit report and score with your permission.
                        After we have reviewed all this info we give you a letter of pre-qualification. Your REALTOR®
                        should use the pre-qual (as they may call it) in order to make the best offer on the home you
                        choose. The pre-qual letter gives you buying clout! While you're picking out the home that's
                        right for you, we're busy researching the loan program that's right for your situation.
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="300">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step three: apply now! We make it easy{" "}
                      <i className="bx bx-chevron-down icon-show">
                        {" "}
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Once you've made an offer and it's been accepted, it's time to apply for the loan. It's very
                        easy, and you can apply online, right here on our website. After the offer has been accepted and
                        you have submitted your loan application, we'll order the professional appraisal on the home.
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="400">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step four: funding
                      <i className="bx bx-chevron-down icon-show">
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        The agents will find an escrow/title company to handle the "funding" of the loan and closing.
                        We'll coordinate with this company to make sure the papers your lender needs are in order, and
                        you will probably likely sign all these papers at their officeWe do all the work to coordinate
                        with this company on your date to close. Because you don't have to worry with this coordination,
                        you can think about the move, painting, new carpet, and the details involved in getting a new
                        home.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="mt-2">
                You've answered some few questions, provided lots of information, applied online, and before you know
                it, you're deciding when to move in! We take care of the mortgage legwork so you can spend your time
                finding your new home.
              </p>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                  fugiat sit in iste officiis commodi quidem hic quas.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt">
                        <MdLocationOn />
                      </i>
                      <h4>Location:</h4>
                      <p>2103 Eastland Dr, STE A, Bloomington, IL 61704</p>
                    </div>

                    <div className="email">
                      <i className="bi bi-envelope">
                        <MdOutlineMarkEmailUnread />
                      </i>
                      <h4>Email:</h4>
                      <p>
                        <a href="mailto:vijay@aviarfs.com">Vijay@aviarfs.com</a>
                      </p>
                    </div>

                    <div className="phone">
                      <i className="bi bi-phone">
                        <FiPhoneCall />
                      </i>
                      <h4>Call:</h4>
                      <p>
                        <a href="tel:3097501082">+1 3097501082</a>
                      </p>
                    </div>

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d98980.77958290937!2d-86.60188667868584!3d39.17132507403884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1669109434552!5m2!1sen!2sbg"
                      frameBorder="0"
                      style={{ border: "0", width: " 100%", height: "290px" }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="name">Subject</label>
                      <input type="text" className="form-control" name="subject" id="subject" required />
                    </div>
                    <div className="form-group">
                      <label for="name">Message</label>
                      <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* <div id="preloader"></div> */}
        {/* <a href="/#/" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a> */}
      </div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setShow(!show)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">AVIAR Financial Services</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-sm-3 p-md-5 p-lg-5">
          <div>
            <h4 style={{ color: "#37517e" }}>Low rates and fees through knowledge and technology</h4>
            <p>
              We use the most advanced technology available to close loans quickly, and at low cost. Team USA Mortgage
              combines the use of the internet along with advanced processing software and automated underwriting
              systems to find the best loan program for our customers. We’ve essentially taken the mystery out of
              approving and closing a home loan.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#37517e" }}>Not just for those with perfect credit</h4>
            <p>
              Team USA Mortgage is dedicated in the pursuit of offering competitive rates and terms for our “A” credit
              customers. We are also just as driven to provide customers who may have had credit problems in the past
              with the opportunity to obtain a mortgage. Just ask about our low down payment purchase and FHA programs.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#37517e" }}>We Listen… then find the best loan product for you!</h4>
            <p>
              Our goal in serving our customers is letting them tell us what they wish to accomplish in the best
              possible scenario. Then we work hard to make that scenario a reality. We are proud of our commitment to
              get the job done right the first time. In times of uncertainty you want a mortgage company that will fight
              for your best interest. At Team USA Mortgage, we are committed to doing what’s best for our customers. Let
              us prove it to you!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)} className="px-4">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Html;
