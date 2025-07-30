"use client";

import { useEffect, useState } from "react";
import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollAppointmentBanner from "@/components/ScrollAppointmentBanner";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(6); // must match Django
  const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog`;

  const totalPages = Math.ceil(count / pageSize);

  const fetchBlogs = async (page = 1) => {
    try {
      const url = `${baseUrl}?page=${page}`;
      const res = await fetch(url);
      const data = await res.json();
      setBlogs(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setCount(data.count);
      setCurrentPage(page);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 py-10 md:px-20 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-10 md:mt-[125px] mt-[80px] text-primary">
          Our Blog
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48 w-full">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.image}`}
                  alt={blog.title}
                  className="rounded-t-lg w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  {blog.title}
                </h2>
                <p className="text-gray-700 text-sm text-justify">
                  {blog.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
          <button
            onClick={() => fetchBlogs(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded bg-primary text-white ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary-dark"
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => fetchBlogs(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-white border text-primary hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => fetchBlogs(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded bg-primary text-white ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary-dark"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Book />
      <Footer />
      <ScrollAppointmentBanner />
    </>
  );
}
