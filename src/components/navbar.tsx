import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Navbar() {
  return (
    <nav className="fixed top-4 z-50 flex max-w-[calc(100vw-2rem)] flex-row gap-2 overflow-x-auto rounded-2xl bg-[#ffffff14] px-3 py-1 shadow-lg backdrop-blur sm:top-8 sm:gap-5 sm:px-4.5">
      {/* Home */}
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Link className="flex h-9 w-9 shrink-0 flex-col items-center justify-center" to="/">
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
          <Link className="flex h-9 w-9 shrink-0 flex-col items-center justify-center" to="/education">
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
          <Link className="flex h-9 w-9 shrink-0 flex-col items-center justify-center" to="/projects">
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
          <Link className="flex h-9 w-9 shrink-0 flex-col items-center justify-center" to="/tools">
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
          <Link  className="flex h-9 w-9 shrink-0 flex-col items-center justify-center" to="/contact">
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
    </nav>
  );
}
