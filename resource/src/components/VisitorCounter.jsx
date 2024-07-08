import React, { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Increment the visitor count and get the updated count
        const response = await fetch("/api/visitors", {
          method: "POST",
        });
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div>
      <h1>Visitor Count: {visitorCount}</h1>
    </div>
  );
}
