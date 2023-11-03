import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register()
{
  const [password, setPassword]= useState("")
  const [email, setEmail]= useState("")

  async function createUser()
    {
      try {
          const result = await fetch('https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/users/register',
              {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(
                      {
                          user:{
                            username:email,
                            password:password,
                        }
                      }
                  )
              }
            )
              const response = await result.json()
            console.log(response)
              if (response.success)
              {alert("Successful Register")}
        } 
  catch (error){}
    }

  return (
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            value={password}
            onChange={(p)=>{setPassword(p.target.value)}}
            placeholder="Password"
          />
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="user"
              onClick={(u)=>{createUser(u.target.value)}}
              placeholder="Username"
            >
              Register
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
      )
}