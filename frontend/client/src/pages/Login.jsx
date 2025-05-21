import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login, register } from "../api/authApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigation = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Geçerli bir e-posta giriniz")
      .required("Zorunlu"),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalı")
      .required("Zorunlu"),
  });

  const registerSchema = Yup.object().shape({
    name: Yup.string().min(2, "En az 2 karakter").required("Zorunlu"),
    email: Yup.string()
      .email("Geçerli bir e-posta giriniz")
      .required("Zorunlu"),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalı")
      .required("Zorunlu"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
      .required("Zorunlu"),
  });

  const handleSubmit = async (values) => {
    try {
      let data;
      if (isLogin) {
        // Giriş işlemi
        data = await login({
          email: values.email,
          password: values.password,
        });
      } else {
        // Kayıt işlemi
        data = await register({
          name: values.name,
          email: values.email,
          password: values.password,
        });
      }

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Başarılı",
          text: data.message,
        });
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigation('/account')
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Hata",
          text: data.message,
        });
      }

      return data;
    } catch (error) {
      console.error("İstek sırasında bir hata oluştu:", error);
      Swal.fire({
        icon: "error",
        title: "Bir Hata Oluştu",
        text: "Lütfen tekrar deneyin.",
      });
    }
  };

  return (
    <>
      <Header />
      <main className="auth__wrapper">
        <div className="container">
          <div className="formWrapper">
            <h2 className="title">{isLogin ? "Giriş Yap" : "Kayıt Ol"}</h2>

            <Formik
              initialValues={
                isLogin
                  ? { email: "", password: "" }
                  : { name: "", email: "", password: "", confirmPassword: "" }
              }
              validationSchema={isLogin ? loginSchema : registerSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <Form className="form">
                  {!isLogin && (
                    <>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Adınız Soyadınız"
                        className="input"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </>
                  )}

                  <Field
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    className="input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />

                  <Field
                    type="password"
                    name="password"
                    placeholder="Şifre"
                    className="input"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />

                  {!isLogin && (
                    <>
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Şifreyi Onayla"
                        className="input"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="error"
                      />
                    </>
                  )}

                  <button
                    className="button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="toggleText">
              {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}{" "}
              <span className="toggleLink" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Kayıt Ol" : "Giriş Yap"}
              </span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
