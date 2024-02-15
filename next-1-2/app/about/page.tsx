import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Created By Ashtral",
};
export default function About() {
  //   throw new Error("Not Today!");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
