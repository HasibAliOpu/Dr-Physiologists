import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mt-3">
        <span className="border-b-2 border-blue-500 pb-1">
          {" "}
          Authentication Vs Authorization
        </span>
      </h1>
      <div className="grid grid-cols-2 p-8">
        <div className="p-4">
          <h1>Authentication</h1>
          <li>Authentication verifies who the user is.</li>
          <li>
            Authentication works through passwords, one-time pins, and other
            information entered by the user.
          </li>
          <li>
            Authentication is the first step of a good identity and access
            management process.
          </li>
          <li>
            Authentication is visible to and partially changeable by the user.
          </li>
        </div>
        <div className="p-4">
          <h1>Authorization</h1>
          <li>Authorization determines what resources a user can access.</li>
          <li>
            Authorization works through settings that are implemented and
            maintained by the organization.
          </li>
          <li>Authorization always takes place after authentication.</li>
          <li>Authorization isn't visible to or changeable by the user.</li>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl">
          <span className="border-b-2 border-blue-500 pb-1">
            {" "}
            What other services does firebase provide other than authentication
          </span>
        </h1>
        <p className="p-6">
          Most apps need to know the identity of a user. Knowing a user's
          identity allows an app to securely save user data in the cloud and
          provide the same personalized experience across all of the user's
          devices. Firebase Authentication provides backend services,
          easy-to-use SDKs, and ready-made UI libraries to authenticate users to
          your app. It supports authentication using passwords, phone numbers,
          popular federated identity providers like Google, Facebook and
          Twitter, and more.
        </p>
      </div>
      <div>
        <h1 className="text-center text-2xl">
          <span className="border-b-2 border-blue-500 pb-1">
            {" "}
            Why are you using firebase? What other options do you have to
            implement authentication?
          </span>
        </h1>
        <p className="p-6">
          Firebase Authentication aims to make building secure authentication
          systems easy, while improving the sign-in and onboarding experience
          for end users. It provides an end-to-end identity solution, supporting
          email and password accounts, phone auth, and Google, Twitter,
          Facebook, and GitHub login, and more. Parse, Back4App, AWS Amplify,
          Kuzzle, NativeScript etc..there best alternative firebase Open source
        </p>
      </div>
    </div>
  );
};

export default Blogs;
