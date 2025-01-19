/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { isLoading, user, isAuthenticated, logout } = useAuth0();

  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div className="text-center p-4">You need to log in to view this page.</div>;
  }

  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <span>{user.name.charAt(0).toUpperCase()}{user.name.charAt(1).toUpperCase()}</span>
      </div>
      <h2>{user.email}</h2>
      <p>{user.email}</p>
      <button className="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
