import React, { useState } from "react";

const ComplianceForm = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required.";
    if (!subject) errors.subject = "Subject is required.";
    if (!file) errors.file = "File is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic
      console.log("Title:", title);
      console.log("Subject:", subject);
      console.log("File:", file);
      // Clear form
      setTitle("");
      setSubject("");
      setFile(null);
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center justify-center lg:flex-row">
      <div className="mx-6 flex flex-col rounded-lg bg-white p-8 shadow-md lg:w-1/2">
        <h2 className="mb-6 text-center text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          የቅሬታ መመዝገቢያ ቅጽ
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-xl"
              htmlFor="title"
            >
              የቅሬታው ርእስ<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full rounded-lg border bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:px-7 xl:py-6"
              placeholder="Enter the title..."
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {errors.title}
              </p>
            )}
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-xl"
              htmlFor="subject"
            >
              የቅሬታው ዝርዝር<span className="text-red-500">*</span>
            </label>
            <textarea
              id="subject"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="w-full rounded-lg border bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:px-7 xl:py-6"
              rows="4"
              placeholder="Enter the subject..."
            ></textarea>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {errors.subject}
              </p>
            )}
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              htmlFor="file"
            >
              ሰነድ አያይዝ
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="w-full rounded-lg border bg-gray-100 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 xl:px-7 xl:py-6"
            />
            {errors.file && (
              <p className="mt-1 text-sm text-red-500 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {errors.file}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6"
            >
              አስቀምጥ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplianceForm;
