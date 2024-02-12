import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function () {
  return (
    <div>
      <div><Navbar></Navbar></div>

      <div>
            <h1>Welcome To Nutrition Prediction</h1>

            <h2>Login</h2>
            <div>
                <input type="text" placeholder="Email" />
            </div>
            <div>
                <input type="text" placeholder="Password" />
            </div>
            <input type="submit" value="Login" />
            <div>
                Don't have an account?
            </div>
            <div>
                <a href="#">
                    <input type="submit" value="Signup Using Google" />
                </a>
            </div>
        </div>

        <div></div>
      <div><Footer></Footer></div>
    </div>
  )
}
