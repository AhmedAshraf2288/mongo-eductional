import { Link } from "react-router-dom";
import "./ErrorPage.css";
import Button from "../../components/Button/Button";

export default function ErrorPage() {
  return (
    <div className="unauth__page">
      <div className="mb-5 d-flex flex-column gap-4">
        <h1 className="fw-bolder mb-0">Sorry, something went wrong</h1>
        <h4 className="mb-0">Unexpected Error happened, please try again</h4>
        <div className="d-flex flex-column justify-content-center flex-lg-row gap-lg-2">
          <div>
            <Button>
              <Link to="/" className="text-white text-decoration-none">
                Home page
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="error__img">
        <img src="/assets/images/errorPage.svg" alt="" />
      </div>
    </div>
  );
}
