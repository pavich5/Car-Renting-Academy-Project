import React, { useState } from 'react';
import './SignInPage.css';

const SignInPage = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const toggleForm = () => {
    setIsCreateAccount((prev) => !prev);
  };

  return (
    <div className="SignInPage">
      <div className="container">
        <h2>{isCreateAccount ? 'Create New Account' : 'Sign In to Your Account'}</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email-address">Email address</label>
            <input
              type="email"
              id="email-address"
              name="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <button type="submit">
              {isCreateAccount ? 'Create Account' : 'Sign In'}
            </button>
          </div>
          {!isCreateAccount && (
            <div className="form-group text-center">
              <a href="#!" className="text-muted">
                Forgot password?
              </a>
            </div>
          )}
          <div className="form-group text-center">
            {isCreateAccount ? (
              <p className="text-muted mb-0">Already have an account?</p>
            ) : (
              <p className="text-muted mb-0">Don't have an account?</p>
            )}
            <button type="button" className="create-account-btn" onClick={toggleForm}>
              {isCreateAccount ? 'Back to Sign In' : 'Create New Account'}
            </button>
          </div>
        </form>
        <form className={`create-account-form ${isCreateAccount ? 'active' : ''}`}>
          <div className="form-group">
            <label htmlFor="new-email-address">Email address</label>
            <input
              type="email"
              id="new-email-address"
              name="new-email"
              autoComplete="new-email"
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Password</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              autoComplete="new-password"
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
