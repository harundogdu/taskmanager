import Content from "components/Content";
import Sidebar from "components/Sidebar";
import axios from "lib/axios";
import React from "react";
import ContentHeader from "components/Content/ContentHeader";
import ContentFooter from "components/Content/ContentFooter";
import Head from "next/head";
type Props = {
  tasks: [];
};
export default function Home({ tasks }: Props) {
  const [tasksData, setTasks] = React.useState<[]>([]);
  React.useEffect(() => {
    setTasks(tasks);
  }, []);

  return (
    <div className="h-screen flex">
      <Head>
        <title>TaskManager App</title>
      </Head>
      {/* aside start */}
      <Sidebar />
      {/* main start */}
      <main id="main" className="flex-1 flex flex-col overflow-hidden">
        <ContentHeader />
        <ContentFooter tasks={tasksData} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("/api/tasks");

  return {
    props: {
      tasks: response.data.data,
    },
  };
}
