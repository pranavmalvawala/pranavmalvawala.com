import React from "react";
import Section from "./section";
// import addToMailchimp from "gatsby-plugin-mailchimp";

function Newsletter() {
  // const [state, setState] = useState({ mail: "", status: "", msg: "" });

  // const handleChange = (event) => {
  //   setState({ mail: event.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // addToMailchimp(state.mail)
  //   //   .then(({ msg, result }) => {
  //   //     if (result === "success") {
  //   //       setState({ status: "success" });
  //   //       setState({ msg: msg });
  //   //       throw msg;
  //   //     }
  //   //   })
  //   //   .catch((err) => {
  //   //     setState({ status: "error" });
  //   //     setState({ msg: err });
  //   //   });
  // };

  return (
    <Section extend="mt-20">
      <form className="sm:flex custom-shadow custom-shadow-dark">
        <div className="dark:bg-neutral-800 p-12 sm:w-2/4 rounded-l-lg">
          <h1 className="text-xl border-b-0 mt-0 text-black bg-light-2 dark:text-white">
            Subscribe to the Newsletter
          </h1>
          <div>
            <p className="text-base">
              Subscribe to get my latest content by email.
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              style={{ maxWidth: "100%" }}
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#DD92AB"
                  d="M23,36 C22.813,36 22.627,35.948 22.463,35.844 L0.463,21.844 C0.159,21.651 -0.017,21.308 0.001,20.948 C0.02,20.589 0.23,20.266 0.553,20.105 L23,6 L45.447,20.105 C45.769,20.266 45.98,20.588 45.999,20.948 C46.018,21.308 45.841,21.65 45.537,21.844 L23.537,35.844 C23.373,35.948 23.187,36 23,36 Z"
                />
                <path
                  fill="#FFF"
                  d="M38,37 L8,37 L8,1 C8,0.448 8.448,0 9,0 L37,0 C37.552,0 38,0.448 38,1 L38,37 Z"
                />
                <path
                  fill="#FFA7C4"
                  d="M45,46 C44.916,46 44.831,45.989 44.748,45.968 L21.748,39.968 L22,33 L46,21 L46,45 C46,45.31 45.856,45.602 45.611,45.792 C45.435,45.928 45.219,46 45,46 Z"
                />
                <path
                  fill="#FFC3D7"
                  d="M45,46 L1,46 C0.447,46 0,45.552 0,45 L0,21 L45.479,44.122 C45.88,44.341 46.083,44.804 45.969,45.247 C45.856,45.69 45.457,46 45,46 Z"
                />
                <path
                  fill="#FFA7C4"
                  d="M19 20.414L14.293 15.707C13.902 15.316 13.902 14.684 14.293 14.293L19 9.586 20.414 11 16.414 15 20.414 19 19 20.414zM27 20.414L25.586 19 29.586 15 25.586 11 27 9.586 31.707 14.293C32.098 14.684 32.098 15.316 31.707 15.707L27 20.414z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="p-12 sm:w-2/4 bg-white dark:bg-neutral-900 rounded-r-lg">
          <div>
            <div className="mb-4">
              <input
                type="email"
                className="rounded-lg text-base p-3 w-full focus:outline-none text-black border"
                placeholder="Your email address"
              />
            </div>
            <button
              type="submit"
              className="text-white font-medium bg-reddish text-base py-3 px-6 radius-24 mb-4"
            >
              Subscribe
            </button>
          </div>
          <div>
            <p className="mb-0 text-sm leading-6">I won’t send you spam.</p>
            <p className="mb-0 text-sm leading-6">
              Unsubscribe at <em>any</em> time.
            </p>
          </div>
        </div>
      </form>
    </Section>
  );
}

export default Newsletter;
