import React from "react";
import DATA from "public/data/todo.json";
import Card from "components/shared/Card";

const ContentFooter = () => {
  return (
    <footer className="flex-1 w-full px-6 py-4 bg-red-50 flex gap-x-8 overflow-x-scroll overflow-y-hidden">
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">Başlanmamış Görevler</h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
              {DATA.filter((todo) => todo.role === "todo").map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">Yapılmakta Olan Görevler</h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
              {DATA.filter((todo) => todo.role === "inprogress").map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">Boşta Olan Görevler</h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
            {DATA.filter((todo) => todo.role === "testing").map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">Tamamlanmış Görevler</h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
            {DATA.filter((todo) => todo.role === "done").map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-sm  text-primary">Zamanı Geçmiş Görevler</h1>
        <div className="overflow-y-auto overflow-x-hidden pr-2">
          <div className="card-container w-72">
            <div className="overflow-auto">
            {DATA.filter((todo) => todo.role === "outdated").map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContentFooter;
