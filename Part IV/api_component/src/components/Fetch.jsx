import React from "react";
import { useState, useEffect } from "react";

function Fetch() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchEndpoint = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
          console.log("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setTitle(data[0].title);
      } catch (error) {
        console.log("Encountered an error: ", error);
      }
    };

    fetchEndpoint();
  }, []);

  return (
    <>
      <h3>Post Title: {title}</h3>
    </>
  );
}

export default Fetch;
