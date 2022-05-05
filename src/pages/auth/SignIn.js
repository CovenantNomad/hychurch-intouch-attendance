import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { loginRequest } from '../../api/auth/login';
// components
import SubmitButton from '../../components/atoms/buttons/SubmitButton';
import AuthContainer from '../../components/blocks/containers/AuthContainer';
import AuthHero from '../../components/blocks/heros/AuthHero';
import AuthNavbar from '../../components/blocks/navbars/AuthNavbar';

const SignIn = () => {
  const login = useMutation(() => loginRequest())
  const {} = useForm()
  
  return (
    <AuthContainer>
      <AuthNavbar />
      <AuthHero />
      <form>
        <div>
          <label 
            htmlFor='phone'
            className="block text-sm font-medium text-gray-700">
              휴대폰번호
          </label>
          <input 
            name='phone'
            type="text"
            className="mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
          />
          {/* {errors.phone && <p className='mt-1 text-red-600'>{errors.phone.message}</p>} */}
        </div>
        <div className='mt-3'>
          <label 
            htmlFor='password'
            className="block text-sm font-medium text-gray-700"
          >
            비밀번호
          </label>
          <input 
            name='password'
            type="text"
            className="mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
          />
          {/* {errors.password && <p className='mt-1 text-red-600'>{errors.password.message}</p>} */}
        </div>
        <div className='mt-9'>
          <SubmitButton label="로그인" />
        </div>
      </form>
      <p className='text-sm font-medium text-gray-700 text-center mt-6 mb-4'>
        아직 계정이 없으신가요?  
        <Link to="/signup" className='inline-block ml-2 text-black'>간편 회원가입</Link>
      </p>
    </AuthContainer>
  );
}

export default SignIn;