import {Link} from "react-router-dom";

function LogIn({setView}) {
  return (
    <div className="flex flex-col w-80">
      <p>
        <span className="font-light text-sm">Email: </span>
        <span>"emmail</span>
      </p>
      <p>
        <span className="font-light text-sm">Password: </span>
        <span>password</span>
      </p>
      <Link to="/">
        <button
          className="bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2"
          disabled={false}
        >
          Log in
        </button>
      </Link>
      <div className="text-center">
        <a className="font-light text-xs underline underline-offset-4" href="/">
          Forgot my password
        </a>
      </div>
      <button
        className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
        onClick={() => setView("create-user-info")}
        disabled={false}
      >
        Sign up
      </button>
    </div>
  );
}

export default LogIn;
