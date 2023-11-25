import React from "react";

const Homepage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src="/images/headshot.jpg" alt="Kyle Gran" className="img-fluid" />
                    <h2 className="text-center"><strong>Kyle Gran</strong></h2>
                </div>
                <div className="col-md-12">
                    <p className='text-center'>
                        Welcome to my portfolio!. < br />
                        <br />< br />
                        Im currently enrolled in a full-stack coding bootcamp at ASU, with an expected graduation date of November 30th, 2023. I come from an extensive background in marketing and sales, and can't wait to bring my years of marketing expertise to the development side.<br /> <br />
                        Currently as my time as a bootcamp student, I've expanded my skillset to include: <br />
                        <br />
                        1. HTML & CSS <br />
                        2. JavaScript <br />
                        3. Node.js <br />
                        4. Express.js <br />
                        5. MySQL <br />
                        6. MongoDB <br />
                        7. React <br />
                        <br /> <br />

                        when im not coding, I enjoy spending time with my fiancé and two dogs, playing video games, watching sports, and being active lifting or practicing Brazilian Jujitsu. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;