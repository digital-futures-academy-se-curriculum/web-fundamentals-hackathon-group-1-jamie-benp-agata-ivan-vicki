import React from 'react';

function Signup() {
    return (
        <>
            <div className="container-left" id="photo-left-container">
                <div className="row">
                    <div className="col-md-6">
                        {/* Left Column Content */}
                        <h1>WHATS ON MY FRIENDS</h1>
                    </div>
                    <div className="col-md-6">
                        {/* Right Column Content */}
                        <form action="/submit-form" method="POST">
                            <label htmlFor="title">Title:</label><br />
                            <input type="text" id="title" name="title" required /><br /><br />
                            <label htmlFor="firstName">First Name:</label><br />
                            <input type="text" id="firstName" name="firstName" required /><br /><br />
                            <label htmlFor="lastName">Last Name:</label><br />
                            <input type="text" id="lastName" name="lastName" required /><br /><br />
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" name="email" required /><br /><br />
                            <label htmlFor="dateOfBirth">Date of Birth:</label><br />
                            <input type="date" id="dateOfBirth" name="dateOfBirth" required /><br /><br />
                            <label htmlFor="phone">Phone:</label><br />
                            <input type="tel" id="phone" name="phone" required /><br /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Signup;
