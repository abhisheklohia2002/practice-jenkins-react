import React, { useRef } from "react";
// import ParnentCount from "../../components/use-callback/ParnentCount";

export default function Contact() {
const userName = useRef<HTMLInputElement>(null);
const password = useRef<HTMLInputElement>(null);


React.useEffect(() => {
  if (userName.current) {
    userName.current.style.backgroundColor = "lightyellow";
  }
}, []);
    const  handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        console.log('username ref:', userName);
        const user = userName.current?.value;
        const pass = password.current?.value;
        console.log("Username:", user);
        console.log("Password:", pass);
    }
  return (
    <>
      <h4>Register</h4>
      {/* <ParnentCount/> */}
      <div>
        <form
        style={{
            background:"white"
        }}
        >
          <div>
            <label>
              Username:
              <input  ref = {userName} type="text" name="username" />
            </label>
          </div>
          <br />
          <div >
          <label>
            Password:
            <input ref = {password} type="password" name="password" />
          </label>
          </div>
          <input onClick={handleSubmit} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
