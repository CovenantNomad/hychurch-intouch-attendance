import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { singUpRequest } from '../../api/auth/createUser';
import PropTypes from 'prop-types';
// components
import SubmitButton from '../../components/atoms/buttons/SubmitButton';
import AuthContainer from '../../components/blocks/containers/AuthContainer';
import AuthHero from '../../components/blocks/heros/AuthHero';
import AuthNavbar from '../../components/blocks/navbars/AuthNavbar';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  const naviage = useNavigate()
  const {register, handleSubmit, getValues, formState: { errors }} = useForm()
  const singUp = useMutation(
    ({ name, phone, password, authenticationNumber }) => singUpRequest(name, phone, password, authenticationNumber),
    {
      onSuccess: (data) => {
        alert(`${data.signUp.user.name} 회원가입 되셨습니다`)
        naviage('/signin')
      },
      onError: (error) => {
        error.response.errors.map(errorItem => toast.error(errorItem.message))
      }
    }
  )
  
  const onSubmit = (data) =>{
    PropTypes.checkPropTypes(onSumbitPropTypes, data, 'prop', 'onSubmit');
    const { name, phone, password, authenticationNumber} = data

    singUp.mutate({
      name,
      phone, 
      password, 
      authenticationNumber
    })
  }

  const onSumbitPropTypes = {
    name: PropTypes.string, 
    phone: PropTypes.string, 
    password: PropTypes.string, 
    authenticationNumber: PropTypes.string,
  }

  return (
    <AuthContainer>
      <AuthNavbar />
      <AuthHero />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label 
            htmlFor='name'
            className="block text-sm font-medium text-gray-700">
              이름
          </label>
          <input 
            id='name'
            type="text"
            className="form-input mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
            {...register("name", { 
              required: "이름을 입력해주세요",
              setValueAs: v => v.replace(/\s/g, ""),
              pattern: {
                value: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
                message: "한글만 입력해주세요"
              },
              maxLength: {
                value: 5,
                message: "5자까지만 입력가능합니다"
              }
            })}
          />
          {errors.name && <p className='mt-1 text-red-600'>{errors.name.message}</p>}
        </div>

        <div className='mt-3'>
          <label 
            htmlFor='phone'
            className="block text-sm font-medium text-gray-700"
          >
            휴대폰번호
          </label>
          <input 
            id='phone'
            type="text"
            className="form-input mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
            {...register("phone",{ 
              required:"휴대폰번호를 입력해주세요",
              setValueAs: v => v.replace(/[-]|\s/g, ""),
              maxLength: {
                value: 11,
                message: "휴대폰번호를 확인해주세요"
              },
              minLength: {
                value: 10,
                message: "휴대폰번호를 확인해주세요"
              }
            })}
          />
          {errors.phone && <p className='mt-1 text-red-600'>{errors.phone.message}</p>}
        </div>

        <div className='mt-3'>
          <label 
            htmlFor='password'
            className="block text-sm font-medium text-gray-700"
          >
            비밀번호
          </label>
          <input 
            id='password'
            type="password"
            className="form-input mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
            {...register("password", { 
              required: "비밀번호를 입력해주세요",
              setValueAs: v => v.replace(/\s/g, "")
            })}
          />
          {errors.password && <p className='mt-1 text-red-600'>{errors.password.message}</p>}
        </div>

        <div className='mt-3'>
          <label 
            htmlFor='passwordConfirm'
            className="block text-sm font-medium text-gray-700"
          >
            비밀번호 확인
          </label>
          <input 
            id='passwordConfirm'
            type="password"
            className="form-input mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
            {...register("passwordConfirm", { 
              required: "비밀번호를 다시 한번 입력해주세요",
              setValueAs: v => v.replace(/\s/g, ""),
              validate: v => {
                const { password } = getValues()
                return v === password || "비밀번호가 일치하지 않습니다"
              }
            })}
          />
          {errors.passwordConfirm && <p className='mt-1 text-red-600'>{errors.passwordConfirm.message}</p>}
        </div>

        <div className='mt-3'>
          <label 
            htmlFor='authenticationNumber'
            className="block text-sm font-medium text-gray-700"
          >
            인증코드
          </label>
          <input 
            id='authenticationNumber'
            type="text"
            className="form-input mt-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm rounded-md sm:text-sm"
            {...register("authenticationNumber", {
              required: "인증코드를 입력해주세요",
              setValueAs: v => v.replace(/\s/g, ""),
              validate: v => v === '8903902718' || '인증번호가 올바르지 않습니다'
            })}
          />
          {errors.authenticationNumber && <p className='mt-1 text-red-600'>{errors.authenticationNumber.message}</p>}
        </div>

        <div className='mt-9'>
          <SubmitButton label="회원가입" />
        </div>
      </form>
      <p className='text-sm font-medium text-gray-700 text-center mt-6 mb-4'>
        계정이 있으시다면,
        <Link to="/signin" className='inline-block ml-2 text-black'>로그인 하러가기</Link>
      </p>
      <Toaster />
    </AuthContainer>
  );
}

export default SignUp;