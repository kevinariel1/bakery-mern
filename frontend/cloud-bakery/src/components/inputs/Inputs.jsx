import React, {useState} from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'

const Inputs = ({value, onChange, type, placeholder}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div>

      <div className="input-box">
        <input 
          type={type == 'password' ? showPassword ? 'text' : 'password' : type}
          placeholder={placeholder}
          className='w-full bg-transparent outline-none' 
          value={value}
          onChange={(e) => onChange(e)} />

          {type === 'password' && (
            <>
              {showPassword ? (
                <FaRegEye 
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => handleTogglePassword()}/>
            
          ) : (
            <FaRegEyeSlash 
              size={22}
              className="text-slate-400 cursor-pointer"
              onClick={() => handleTogglePassword()}/>
          )}
            </>
        )}
      </div>
    </div>
  )
}

export default Inputs