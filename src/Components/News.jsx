import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [currentNews, setCurrentNews] = useState({
    id: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNews({ ...currentNews, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewsList([...newsList, { ...currentNews, id: uuidv4() }]);
    setCurrentNews({ id: "", title: "" });
  };

  const handleEdit = (news) => {
    const newTitle = prompt("Enter new title:", news.title);
    if (newTitle !== null) {
      setNewsList(
        newsList.map((item) =>
          item.id === news.id ? { ...item, title: newTitle } : item
        )
      );
    }
  };

  const handleDelete = (id) => {
    setNewsList(newsList.filter((news) => news.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        className="bg-white p-6 shadow-md rounded mb-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={currentNews.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter title"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add News
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsList.map((news) => (
          <div key={news.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">{news.title}</h2>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => handleEdit(news)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(news.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
