import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../api/auth/login';
import PropTypes from 'prop-types';
// components
import SubmitButton from '../../components/atoms/buttons/SubmitButton';
import AuthContainer from '../../components/blocks/containers/AuthContainer';
import AuthHero from '../../components/blocks/heros/AuthHero';
import AuthNavbar from '../../components/blocks/navbars/AuthNavbar';
import toast, { Toaster } from 'react-hot-toast';
import { INTOUCH_ATTENDANCE_ACCESS_TOKEN, INTOUCH_ATTENDANCE_SAVED_MOBILE } from '../../constants/constants';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../stores/authState';

const SignIn = () => {
  const setAuth = useSetRecoilState(authState)
  const navigate = useNavigate()
  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      phone: localStorage.getItem(INTOUCH_ATTENDANCE_SAVED_MOBILE) || "",
      rememberMe: true
    }
  })

  const login = useMutation(({ phone, password }) => loginRequest(phone, password), {
    onSuccess: (data) => {
      localStorage.setItem(INTOUCH_ATTENDANCE_ACCESS_TOKEN, data.login.accessToken)
      setAuth({
        isLoggedIn: true,
        accessToken: data.login.accessToken,
        user: data.login.user
      })
      navigate("/")
    },
    onError: (error) => {
      error.response.errors.map(errorItem => toast.error(errorItem.message))
    }
  })

  const onSubmit = (data) => {
    try {
      PropTypes.checkPropTypes(onSumbitPropTypes, data, 'prop', 'onSubmit');
      const { phone, password, rememberMe } = data

      if (rememberMe) {
        localStorage.setItem(INTOUCH_ATTENDANCE_SAVED_MOBILE, phone)
      } else {
        localStorage.removeItem(INTOUCH_ATTENDANCE_SAVED_MOBILE)
      }

      login.mutate({
        phone, 
        password, 
      })

    } catch (error) {
      toast.error("제출에 실패하였습니다")
    }
  }
  

  const onSumbitPropTypes = {
    phone: PropTypes.string, 
    password: PropTypes.string, 
    rememberMe: PropTypes.bool,
  }

  return (
    <AuthContainer>
      <AuthNavbar />
      <AuthHero />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label 
            htmlFor='phone'
            className="block text-sm font-medium text-gray-700">
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

        <div className="flex items-center mt-2">
          <input
            id="rememberMe"
            type="checkbox"
            {...register('rememberMe')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-full"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            핸드폰번호 저장하기
          </label>
        </div>

        <div className='mt-9'>
          <SubmitButton label="로그인" isLoading={login.isLoading} />
        </div>
      </form>
      <p className='text-sm font-medium text-gray-700 text-center mt-6 mb-4'>
        아직 계정이 없으신가요?  
        <Link to="/signup" className='inline-block ml-2 text-black'>간편 회원가입</Link>
      </p>
      <Toaster />
    </AuthContainer>
  );
}

export default SignIn;