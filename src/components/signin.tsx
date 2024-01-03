import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export default function signin() {
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:5173/",
  // This must be true.
  handleCodeInApp: true,
  dynamicLinkDomain: "example.page.link",
};

const auth = getAuth();
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem("emailForSignIn", email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
  
    return (
      <div>
        
      </div>
    )
  }
  