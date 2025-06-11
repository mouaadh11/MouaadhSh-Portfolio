import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Navbar() {
  return (
    <div className="flex flex-row gap-5 bg-[#ffffff08] px-4.5 py-1 rounded-2xl absolute top-8">
      {/* Home */}
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link className="flex flex-col justify-center items-center w-9 h-9" to="/">
            <img
              src="/home.svg"
              alt="homeIcon"
              className="hover:opacity-70"
              width={20}
              height={20}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-soft-gray text-white" sideOffset={4}>
          <p>Home</p>
        </TooltipContent>
      </Tooltip>

      {/* Education */}
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link className="flex flex-col justify-center items-center w-9 h-9" to="/education">
            <img
              src="/book.svg"
              alt="bookIcon"
              className="hover:opacity-70"
              width={20}
              height={20}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-soft-gray text-white" sideOffset={4}>
          <p>Education</p>
        </TooltipContent>
      </Tooltip>

      {/* Projects */}
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link className="flex flex-col justify-center items-center w-9 h-9" to="/projects">
            <img
              src="/folder.svg"
              alt="folderIcon"
              className="hover:opacity-70"
              width={20}
              height={20}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-soft-gray text-white" sideOffset={4}>
          <p>Projects</p>
        </TooltipContent>
      </Tooltip>
 
      {/* Tools */}
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link className="flex flex-col justify-center items-center w-9 h-9" to="/tools">
            <img
              src="/tool.svg"
              alt="toolIcon"
              className="hover:opacity-70"
              width={20}
              height={20}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-soft-gray text-white" sideOffset={4}>
          <p>Tools</p>
        </TooltipContent>
      </Tooltip>

      {/* Contact */}
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link  className="flex flex-col justify-center items-center w-9 h-9" to="/contact">
            <img
              src="/edit.svg"
              alt="editIcon"
              className="hover:opacity-70"
              width={20}
              height={20}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-soft-gray text-white" sideOffset={4}>
          <p>Contact</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
