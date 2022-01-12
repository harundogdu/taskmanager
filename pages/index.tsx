import Content from "components/Content";
import Sidebar from "components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex">
      {/* aside start */}
      <Sidebar />
      {/* main start */}
      <Content />
    </div>
  );
}
