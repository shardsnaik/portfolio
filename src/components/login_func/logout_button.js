import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './button_log_in_out.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout_btn_auth auth-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;