const FAQs = () => {
  return (
    <div className="container col-8">
      <h1 className="text-center">How can we help you?</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How to get help with your order?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>To know order status:</strong>
              <br />
              Sign in to Epharma and go to Your account.
              <br />
              Select Orders.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How to Change Your Password?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>To change your password:</strong>
              <br />
              On E-pharma, click on top right account icon. Click on profile.
              Click on "Change Password" button, then enter old password, new
              password and done.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How to Contact Epharma Support?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>To know order status.</strong>
              <br />
              To contact E-pharma customer service, select the Contact button
              below and we can help you with account or purchasing issues.
              <br />
              We’ll connect you with the type of support that’s the best fit for
              your specific question: chat, phone, or email.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse9"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How to search for medicines ?
            </button>
          </h2>
          <div
            id="collapse9"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>To search for medicine you must sign in :</strong>
              <br />
              Enter name of medicine one by one in the search bar to start your
              search. For example: “dolo”, "citrizen”.
              <br />
              Search results are ordered by how relevant the items are to what
              you search for.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can I Permanently Delete My E-pharma Account?
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                To permanently close and delete your E-pharma account:
              </strong>
              <br />
              On E-pharma, click on top right account icon. Click on profile.
              Click on "Delete Account" button deletion of your data under
              Permanently close and delete your E-pharma account.
              <br />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How to Search for medicines in Epharma?
            </button>
          </h2>
          <div
            id="collapse5"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>To know order status.</strong>
              <br />
              You can use the search bar at the top of E-pharma to look for
              items or shops.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse6"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How to Sign In or Out of Epharma ?
            </button>
          </h2>
          <div
            id="collapse6"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>To sign in to your E-pharma account:</strong>
              <br />
              On E-pharma, click Sign in at the top right. Enter the email
              address and password you use for your E-pharma account, Click Sign
              in. <br></br>
              <strong>To sign out of your E-pharma account:</strong>
              <br />
              On E-pharma, click on Your account icon at top right. Click Sign
              out.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
