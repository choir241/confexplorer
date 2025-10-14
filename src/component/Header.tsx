import { Outlet } from "react-router";
import { label } from "../static/label";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <h1><a href = "/">{label.header.h1}</a></h1>
          <a href = "/auth" className="button">{label.header.auth}</a>
        </nav>
      </header>

      <Outlet/>
    </>
  );
}
