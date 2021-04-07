import react from 'react';
import './cover.css';
import { a } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
           
            <footer className=" text-white pt-8 my-md-8  border-top ">
                <h1 className='footer'>
                    Contact Us
                </h1>
                <div className="container ">
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="https://fontawesome.com/icons/address-card?style=light" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        {/* <!-- Twitter --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>

                        {/* <!-- Google --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-google"></i>
                        </a>

                        {/* <!-- Instagram --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>

                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        {/* <!-- Github --> */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>

    <div className="row">
    <div className="col-12 col-md">
    {/* <h5>Features</h5> */}
        <ul className="list-unstyled text-small">
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://help.netflix.com/en/node/412">
                    FAQ
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                    Investor Relations
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://help.netflix.com/legal/privacy">
                    Privacy
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://fast.com/">
                    Speed Test
                </a>
            </li>
           
        </ul>
     
    </div>
    <div className="col-8 col-md">
    {/* <h5>Resources</h5> */}
        <ul className="list-unstyled text-small">
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://help.netflix.com/en/">
                    Help Center
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://jobs.netflix.com/">
                    Jobs
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://www.netflix.com/eg-en/#">
                    Cooki Preferences
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://help.netflix.com/legal/notices">
                    Legal Notices
                </a>
            </li>
        </ul>
    </div>
  
    <div className="col-6 col-md">
        {/* <h5>About</h5> */}
        <ul className="list-unstyled text-small">
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://devices.netflix.com/en/">
                    Ways to Watch
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://media.netflix.com/en/">
                    Media Center
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://help.netflix.com/en/contactus">
                    Contact Us
                </a>
            </li>
            <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="https://help.netflix.com/legal/termsofuse">
                    Terms of Use
                </a>
            </li>
        </ul>
    </div>
</div>
    

                    <section className="mb-4">
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You
                            can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and
                            movies are added every week!.
                        </p>
                    </section>
                </div>

                {/* <!-- Copyright --> */}
                <div className="text-center p-3">
                    © 2021 Copyright:
                    <a className="text-white" href="https://www.netflix.com/browse">
                        Netflix.com
                    </a>
                </div>
            </footer>
        </div>
    );
}



