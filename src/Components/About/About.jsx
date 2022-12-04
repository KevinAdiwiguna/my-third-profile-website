import React from "react";
// components
import { Images } from "./Molecule/Images";
import { Table } from "./Molecule/Table";
import { Text } from "./Molecule/Text";

export const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-10 lg:p-20 xl:p-40">
      <div className="mt-10">
        <div className="py-5 md:grid md:gap-10 md:grid-cols-2  md:justify-center md:items-center">
          <div className="">
            <p className="text-secondary text-2xl md:text-3xl">
              01. <span className="text-primary">About Me</span>
            </p>
            <Text />
            <Table />
          </div>
          <div className="">
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
};
