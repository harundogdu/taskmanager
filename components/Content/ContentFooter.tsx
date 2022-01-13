import React from "react";
import DATA from "public/data/todo.json";
import Card from "components/shared/Card";

type Props = {
  tasks: [];
};

const ContentFooter = ({ tasks }: Props) => {
  return (
    <footer className="flex-1 w-full px-6 py-4 bg-red-50 flex gap-x-8 overflow-x-scroll overflow-y-hidden">
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">
          Başlanmamış Görevler
        </h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
              {tasks
                .filter((task) => task.status_title === "todo")
                .map((task) => (
                  <Card key={task.id} card={task} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">
          Yapılmakta Olan Görevler
        </h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
              {tasks
                .filter((task) => task.status_title === "inprogress")
                .map((task) => (
                  <Card key={task.id} card={task} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">
          Boşta Olan Görevler
        </h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
              {tasks
                .filter((task) => task.status_title === "testing")
                .map((task) => (
                  <Card key={task.id} card={task} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">
          Tamamlanmış Görevler
        </h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
              {tasks
                .filter((task) => task.status_title === "done")
                .map((task) => (
                  <Card key={task.id} card={task} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">
          Zamanı Geçmiş Görevler
        </h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
              {tasks
                .filter((task) => task.status_title === "outdated")
                .map((task) => (
                  <Card key={task.id} card={task} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContentFooter;
