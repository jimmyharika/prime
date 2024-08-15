import { useState } from 'react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="py-16">
      <h1 className="text-4xl font-semibold text-center mb-12">
        Request a Quote
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="details"
          placeholder="Details of your request"
          value={formData.details}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-amber-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quote;
