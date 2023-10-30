import React from 'react';

const SignUp = () => {
	return (
        <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us </h1>
        {/* <p className="text-center" style={{fontSize:12}}>
            BITSS BFIN SASU, 8 RUE DUBLIN 34200 SÈTE FRANCE</p> */}
            {/* <p className="text-center" style={{fontSize:12}}>
            Contact :+0033666100010</p>     */}
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form my-3">
                <label for="PhoneNo">PhoneNumber</label>
                <input
                  type="number"
                  class="form-control"
                  id="Email"
                  placeholder="99******10"
                />
              </div>
              <div class="form my-3">
              <label for="cars"> Country</label><br></br>
            <select name="cars" id="cars" className="form my-3">
              <option value="india">India</option>
              <option value="italy">Italy</option>
              <option value="England">England</option>
              <option value="London">London</option>
            </select>
              </div>
              <div class="form my-3">
                <label for="subject">Subject / Product Query </label>
                <input
                  type="text"
                  class="form-control"
                  id="text"
                 
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
	);
};

export default SignUp;
