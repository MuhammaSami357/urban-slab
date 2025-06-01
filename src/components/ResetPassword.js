import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setIsError(true);
      return setMessage('🔒 Passwords match nahi kar rahe');
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/user/reset-password/${token}`, {
        password,
      });

      setIsError(false);
      setMessage(res.data.msg || '✅ Password reset hogaya!');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setIsError(true);
      setMessage('❌ Reset failed. Link expire ya invalid ho sakta hai.');
    }
  };

  return (
    <div className="reset-pass-con">
      <h2>🔐 Reset Your Password</h2>

      <form onSubmit={handleSubmit} className="reset-form">
        <input
          type="password"
          placeholder="Naya Password daalein"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Naya Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">🔁 Reset Password</button>
      </form>

      {message && (
        <p className={isError ? "error-message" : "success-message"}>
          {message}
        </p>
      )}
    </div>
  );
};

export default ResetPassword;
