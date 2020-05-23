import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="text-light">Contact</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-sm-8 col-md-6">
                    <form method="post" action="mailto:huonghuonglacey1020@gmail.com" enctype="text/plain">
                        <div className="form-group">
                            <label for="usr" className="text-light">Name</label>
                            <input type="text" className="form-control" id="usr" placeholder="Enter name" />
                        </div>
                        <label for="exampleInputEmail1" className="text-light">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter email" />Email me for help
                        <small id="emailHelp" className="form-text text-light">
                            </small>
                        <label for="exampleFormControlTextarea1" className="text-light">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;