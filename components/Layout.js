import Navbar from "./common/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
