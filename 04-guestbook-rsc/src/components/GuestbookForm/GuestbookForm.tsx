"use client";

import { createComment } from "@/actions/comments";
import { useState } from "react";

export const GuestbookForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="relative w-full pt-4 px-6 border-t-2 border-t-gray-200"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await createComment({ name, message });
        setLoading(false);
        setName("");
        setMessage("");
      }}
    >
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="Jon Doe"
        />
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Write a message..."
        />
      </div>

      <div className="flex items-center justify-between space-x-3 py-2">
        <div className="flex"></div>
        <div className="flex-shrink-0">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isLoading ? (
              <div
                className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Create"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
