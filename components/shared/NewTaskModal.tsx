import axios from "lib/axios";
import React from "react";
import Modal from "react-modal";
import { capitalizeFirstLetter } from "utils/helper";
interface NewTaskModalProps {
  modalIsOpen: boolean;
  toggleModal: () => void;
}

const NewTaskModal = ({ modalIsOpen, toggleModal }: NewTaskModalProps) => {
  const [types, setTypes] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<string[]>([]);
  const handleFormSubmit = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data["attachment"] = 0;
    axios
      .post("/api/createtask", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset();
    toggleModal();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  React.useEffect(() => {
    axios.get("/api/types").then((res) => {
      setTypes(res.data.data);
    });
    axios.get("/api/status").then((res) => {
      setStatus(res.data.data);
    });
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      ariaHideApp={false}
      contentLabel="Yeni Görev Oluştur"
      className="bg-white shadow-2xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-1/2 h-[25rem] rounded-lg px-8 py-6 "
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h1 className="text-2xl">Yeni Görev Oluştur</h1>
          <button onClick={toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form className="space-y-4" method="post" onSubmit={handleFormSubmit}>
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex items-center justify-between gap-x-4 w-1/2">
              <label htmlFor="title" className="text-primary font-semibold">
                Görev Tipi
              </label>
              <select
                name="type_id"
                id="type_id"
                className="flex-1 border border-primary outline-none p-1  "
                required
              >
                {types.length > 0 &&
                  types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {capitalizeFirstLetter(type.title)}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex items-center justify-between gap-x-4 w-1/2">
              <label htmlFor="title" className="text-primary font-semibold">
                Görev Durumu
              </label>
              <select
                name="status_id"
                id="status_id"
                className="flex-1 border border-primary outline-none p-1  "
                required
              >
                {status.length > 0 &&
                  status.map((stats) => (
                    <option
                      key={stats.id}
                      value={stats.id}
                      className="capitalize"
                    >
                      {capitalizeFirstLetter(stats.title)}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Görev başlığı giriniz."
              className="outline-none p-2 border border-primary "
              name="title"
              required
            />
            <textarea
              name="description"
              id="description"
              placeholder="Görev açıklaması giriniz..."
              className="outline-none border border-primary p-2 resize-none w-full h-[8.5rem]  "
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-primary text-white px-4 py-2 text-sm text-center"
              type="submit"
            >
              Görevi Kaydet
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default NewTaskModal;
