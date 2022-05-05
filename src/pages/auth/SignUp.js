import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { createUserRequest } from '../../api/auth/createUser';
// components
import SubmitButton from '../../components/atoms/buttons/SubmitButton';
import AuthContainer from '../../components/blocks/containers/AuthContainer';
import AuthHero from '../../components/blocks/heros/AuthHero';
import AuthNavbar from '../../components/blocks/navbars/AuthNavbar';

const SignUp = () => {
  const createUser = useMutation(() => createUserRequest())
  const {} = useForm()
  
  return (
    <AuthContainer>
      <AuthNavbar />
      <AuthHero />
      <form>
        <div>
          <label 
            htmlFor='name'
            className="block text-sm font-medium text-gray-700">
              이름
          </label>
          <input 
            name='name'
            type="text"
            className="mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
          />
          {/* {errors.name && <p className='mt-1 text-red-600'>{errors.name.message}</p>} */}
        </div>
        <div className='mt-3'>
          <label 
            htmlFor='phone'
            className="block text-sm font-medium text-gray-700"
          >
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
        <div className='mt-3'>
          <label 
            htmlFor='passwordConfirm'
            className="block text-sm font-medium text-gray-700"
          >
            비밀번호 확인
          </label>
          <input 
            name='passwordConfirm'
            type="text"
            className="mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
          />
          {/* {errors.passwordConfirm && <p className='mt-1 text-red-600'>{errors.passwordConfirm.message}</p>} */}
        </div>
        <div className='mt-3'>
          <label 
            htmlFor='authenticationNumber'
            className="block text-sm font-medium text-gray-700"
          >
            인증코드
          </label>
          <input 
            name='authenticationNumber'
            type="text"
            className="mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
          />
          {/* {errors.authenticationNumber && <p className='mt-1 text-red-600'>{errors.authenticationNumber.message}</p>} */}
        </div>
        <div className='mt-9'>
          <SubmitButton label="회원가입" />
        </div>
      </form>
      <p className='text-sm font-medium text-gray-700 text-center mt-6 mb-4'>
        계정이 있으시다면,
        <Link to="/signin" className='inline-block ml-2 text-black'>로그인 하러가기</Link>
      </p>
    </AuthContainer>
  );
}

export default SignUp;