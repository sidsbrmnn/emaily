import React from "react";

const IndexPage = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="mb-8">Home</h2>
      <a
        href="/auth/google"
        className="p-4 rounded shadow-md text-sm bg-blue-600 text-gray-100 hover:shadow-inner focus:outline-none focus:shadow-inner"
      >
        Login with Google
      </a>
    </section>
  );
};

export default IndexPage;
