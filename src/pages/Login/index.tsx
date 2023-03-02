/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./style";
import { useAuth } from "contexts/Account.Context";
import { DataType } from "types/interfaces/users";
import { Api } from "helpers/Api";
import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const Login = (): JSX.Element => {
  const { login } = useAuth();
  // const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  console.log(valueEmail, valuePassword);

  const action = async (): Promise<void> => {
    const data: DataType = {
      email: valueEmail,
      password: valuePassword,
    };

    const sigin = await Api.post(`/auth/login`, data).then((res) => res);
    switch (sigin.status) {
      case 200:
        login(sigin.data);
        break;
      default:
        // error("Try again with correct credentials");
        break;
    }
    console.log(data);
  };

  action();
  return (
    // <S.Login>
    <>
      <Header />
      <S.SLoginContainer>
        <h1 className="title">Entre na sua conta!</h1>
        {/* <S.Form> */}
        <label>Digite seu Nome:</label>
        <input
          placeholder="Adimin"
          id="email_login"
          name="email"
          title="email"
          type="email"
          onChange={(e): void => {
            e.stopPropagation();
            setValueEmail(e.target.value);
          }}
          required
        />
        <label>Digite sua Senha:</label>
        <input
          placeholder="********"
          id="password_login"
          name="password"
          title="password"
          type="password"
          onChange={(e): void => {
            e.stopPropagation();
            setValuePassword(e.target.value);
          }}
          value={valuePassword}
          required
        />
        <button
          onClick={(e): void => {
            action();
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          Entrar
        </button>
        {/* </S.Form> */}
        <p>
          Não tem conta? <a>Cadastre-se</a>
        </p>
      </S.SLoginContainer>

      <Footer />
      {/* </S.Login> */}
    </>
  );
};

export default Login;
