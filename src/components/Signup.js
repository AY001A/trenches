import React from 'react'

const Signup = () => {
    return (
        <div className="row mt-5 mx-5">
            <form class="row g-3">
            <div class="col-md-6">
                <label for="validationDefault01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationDefault01" value="Mark" required />
            </div>
            <div class="col-md-6">
                <label for="validationDefault02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" value="Otto" required />
            </div>
            
            <div class="col-md-6">
                <label for="validationDefault03" class="form-label">Email</label>
                <input type="email" class="form-control" id="validationDefault02" value="Otto" required />
            </div>
            <div class="col-md-6">
                <label for="validationDefault05" class="form-label">Password</label>
                <input type="password" class="form-control" id="validationDefault05" required /> 
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                </label>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Register</button>
            </div>
        </form>

        </div>
        
    )
}

export default Signup
