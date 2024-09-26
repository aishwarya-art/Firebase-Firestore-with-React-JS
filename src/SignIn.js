// SignIn.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSignIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/collection'); // Navigate to the collection page
    } catch (error) {
      console.error("Error signing in: ", error);
      // Handle errors here (e.g., show a message to the user)
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
