// import React from 'react'
import { type Course } from "../Types/Course"
import { Coffee, Atom, BinaryIcon } from "lucide-react";
import { Link } from "react-router";

const iconMap = {
  coffee: Coffee,
  atom: Atom,
  binary: BinaryIcon,
};

const Coursecard = ({id,title,description,duration,level,icon}:Course) => {
  const Icon = iconMap[icon as keyof typeof iconMap];
  return (
    <Link to={`/courses/${id}`}>
    <div className="flex flex-col m-2 p-4 border-border border rounded-lg items-center bg-surface hover:border-primary hover:cursor-pointer">
      <span><Icon size={32} /></span>
      <span className="font-bold text-2xl text-text-primary mt-2">{title}</span>
      <span className="text-text-secondary mt-2">{description}</span>
      <div className="flex place-content-between w-[100%] mt-2">
        <button className="px-4 py-1 border-border bg-success border-2 rounded-[50%]">{level}</button>
        <span className="text-text-secondary">{duration}</span>
      </div>
    </div>
    </Link>
  )
}

export default Coursecard