import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrgList = () => {
  // Define state for organization list and search input
  const [organizations, setOrganizations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy organization data for testing
  const dummyOrganizations = [
    {
      id: 1,
      name: "Organization 1",
      category: "Category 1",
      location: "Location 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Organization 2",
      category: "Category 2",
      location: "Location 2",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Organization 3",
      category: "Category 3",
      location: "Location 3",
      description: "Description 3",
    },
  ];

  useEffect(() => {
    // Fetch organization data from backend API and update state
    setOrganizations(dummyOrganizations);
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter organizations based on search input
  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Organization List</h1>
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search organizations"
          className="w-full rounded-md border border-gray-200 p-2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="rounded-md bg-blue-500 p-2 text-white">
          Search
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through filtered organizations and render table rows */}
          {filteredOrganizations.map((org) => (
            <tr key={org.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{org.name}</td>
              <td className="px-4 py-2">{org.category}</td>
              <td className="px-4 py-2">{org.location}</td>
              <td className="px-4 py-2">{org.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          to="/create-organization"
          className="rounded-md bg-blue-500 p-2 text-white"
        >
          Add Organization
        </Link>
      </div>
    </div>
  );
};

export default OrgList;
