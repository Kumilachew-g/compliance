import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateOrganization = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, such as sending data to a backend API
    const formData = {
      name,
      category,
      location,
      description,
    };
    console.log(formData); // For testing purposes, you can see the form data in the console
    // After submitting the form, you can redirect the user to another page
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Create Organization</h1>
      <form onSubmit={handleSubmit}>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="pr-4 pb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter organization name"
                />
              </td>
              <td className="pb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter organization category"
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4 pb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter organization location"
                />
              </td>
              <td className="pb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter organization description"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 flex justify-end">
          <Link
            to="/"
            className="mr-2 rounded-md bg-gray-200 py-2 px-4 hover:bg-gray-300"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrganization;
