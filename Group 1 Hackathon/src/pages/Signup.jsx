import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Signup() {
    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        phone: ""
    });

    const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value
            });
          };

    return (
        <>
            <div className="container-left" id="photo-left-container">
                <div className="row">
                    <div className="col-md-6">
                        {/* Left Column Content */}
                        <img
                            className="deadpool"
                            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2017/12/Deadpool-2-Cable-banner.jpg"
                            alt="Block 01 Image"
                        />
                        <br></br>
                        <br></br>
                        <img
                            className="deadpool"
                            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2017/12/Deadpool-2-Cable-banner.jpg"
                            alt="Block 01 Image"
                        />
                        <br></br>
                        <br></br>
                        <img
                            className="deadpool"
                            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2017/12/Deadpool-2-Cable-banner.jpg"
                            alt="Block 01 Image"
                        />
                    </div>
                    <div className="col-md-3">
                        <div className="card" id="formCard">
                            <div class="card-body">

                                {/* Right Column Content */}
                                {/*Form */}
                                <form action="/submit-form" method="POST">
                                    <label htmlFor="title">Title*:</label><br />
                                    <input type="text" id="title" name="title" placeholder="Mr/Mrs/Miss/Other" required /><br /><br />
                                    <label htmlFor="firstName">First Name*:</label><br />
                                    <input type="text" id="firstName" name="firstName" placeholder="Your First Name" required /><br /><br />
                                    <label htmlFor="lastName">Last Name*:</label><br />
                                    <input type="text" id="lastName" name="lastName" placeholder="Your Last Name" required /><br /><br />
                                    <label htmlFor="email">Email*:</label><br />
                                    <input type="email" id="email" name="email" placeholder="email@email.com" required /><br /><br />
                                    <label htmlFor="dateOfBirth">Date of Birth:</label><br />
                                    <input type="date" id="dateOfBirth" name="dateOfBirth" required /><br /><br />
                                    <label htmlFor="phone">Phone*:</label><br />
                                    <input type="tel" id="phone" name="phone" placeholder="07999999999" required /><br /><br />
                                    <input type="submit" value="Sign Me Up" style={{ backgroundColor: '#f2c338', color: 'black' }} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
