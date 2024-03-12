import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center max-h-screen">
      <Image
        src="Spinner.svg"
        alt="Loading..."
        width={"200"}
        height={"200"}
        className="mt-16"
      />
    </div>
  );
}
