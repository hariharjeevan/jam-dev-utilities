import router from "next/router";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ds/ButtonComponent";
import { ArrowLeftIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface HeaderProps {
  // The utilities index hides the back link; tool pages show it.
  showBackLink?: boolean;
}

export default function Header({ showBackLink = true }: HeaderProps) {
  return (
    <header className="flex justify-between px-4 sm:px-6 py-4 items-center">
      <div className="flex items-center gap-4">
        {showBackLink && (
          <Button
            onClick={() => {
              router.push("/utilities");
            }}
            variant="link"
            className="flex items-center gap-1 text-sm text-primary hover:underline transition"
          >
            <ArrowLeftIcon />
            View all utilities
          </Button>
        )}
      </div>

      <div className="flex gap-1 sm:gap-3">
        <ThemeToggle />
        <Button
          className="min-h-10 rounded-xl flex px-2 sm:px-4 min-w-10 sm:min-w-auto"
          variant="outline"
          onClick={() =>
            window.open(
              "https://github.com/jamdotdev/jam-dev-utilities",
              "_blank"
            )
          }
        >
          <span className="mr-2 hidden sm:inline">Contribute</span>
          <GitHubLogoIcon />
        </Button>
        <Button
          className="min-h-10 flex border-0 rounded-xl bg-[#A7F374] text-black hover:bg-[#9AEA5F]"
          onClick={() => window.open("https://jam.dev?ref=utils", "_blank")}
        >
          <span>Try Jam for free</span>
        </Button>
      </div>
    </header>
  );
}
