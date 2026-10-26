import { useState } from "react";
export default function App() {
  const [f, setF] = useState({ name: "", email: "", course: "BCA", gender: "Male" });
  const [sub, setSub] = useState(null);
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSub(f); };
  return (
    <div className="app">
      <h1>Student Registration</h1>
      <form className="card" onSubmit={submit}>
        <input name="name" placeholder="Full name" value={f.name} onChange={change} required />
        <input name="email" type="email" placeholder="Email" value={f.email} onChange={change} required />
        <select name="course" value={f.course} onChange={change}>
          <option>BCA</option><option>BBA</option><option>B.Sc</option>
        </select>
        <select name="gender" value={f.gender} onChange={change}>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {sub && (
        <div className="card">
          <h2>Submitted Data</h2>
          <p>Name: {sub.name}</p>
          <p>Email: {sub.email}</p>
          <p>Course: {sub.course}</p>
          <p>Gender: {sub.gender}</p>
        </div>
      )}
    </div>
  );
}
