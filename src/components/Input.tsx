import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error: string | boolean;
  wrapperClasses?: string;
  labelClasses?: string;
  inputClasses?: string;
  errorClasses?: string;
}

function Input({
  label,
  id,
  error,
  wrapperClasses,
  labelClasses,
  inputClasses,
  errorClasses,
  ...props
}: InputProps) {
  return (
    <div className={wrapperClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <input className={inputClasses} id={id} {...props} />
      <div className={errorClasses}>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default Input;
