import React from "react";
import { UserForm } from "../../components/UserForm/UserForm";

interface Props {}

export const LoginPage: React.FC<Props> = () => {
  return (
    <div className="login-page">
      <UserForm type="login" />
    </div>
  );
};
