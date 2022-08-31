import React from "react";
import { useState } from "react";

export function FAQCardComponent({
  image,
  topic,
  summary,
  link = "",
  linkText = "",
}) {
  const [readMore, setReadMore] = useState(false);
  const halfText = summary.slice(0, summary.length / 3);

  function showMore() {
    setReadMore(true);
  }

  function showLess() {
    setReadMore(false);
  }

  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        class="rounded-t-lg"
        style={{ width: 500, height: 200 }}
        src={image}
        alt=""
      />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {topic}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {!readMore && <>{halfText}...</>}
          {readMore && (
            <>
              {summary}{" "}
              <a
                className="text-salmonPink-600 hover:text-salmonPink-900 hover:italic"
                href={link}
              >
                {linkText}
              </a>
            </>
          )}
        </p>
        {!readMore && (
          <>
            <button
              type="button"
              onClick={showMore}
              class="text-white bg-[#7066e0] hover:bg-[#7066e0] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Read More
            </button>
          </>
        )}
        {readMore && (
          <>
            <button
              type="button"
              onClick={showLess}
              class="text-white bg-[#7066e0] hover:bg-[#7066e0] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Read Less
            </button>
          </>
        )}
      </div>
    </div>
  );
}
