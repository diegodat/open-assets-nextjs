import Entry from "@/components/threads/components/Entry";
import React from "react";

const EntryDetail = () => {
  return (
    <div>
      {/* root thread */}
      <Entry asChild />
      {/* child */}
      <Entry asChild />
      <Entry asChild />
      <Entry asChild />
    </div>
  );
};

export default EntryDetail;
