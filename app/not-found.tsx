import Link from "next/link";
import css from "./page.module.css";

const NotFound = () => {
  return (
    <div className={css.title}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFound;