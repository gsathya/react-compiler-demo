import { Button } from "./components/ui/button";

export function Next() {
  return (
    <Button size="icon" variant="ghost">
      <ForwardIcon className="h-6 w-6" />
      <span className="sr-only">Next</span>
    </Button>
  );
}

export function Pause() {
  return (
    <Button size="icon" variant="ghost">
      <PauseIcon className="h-8 w-8" />
      <span className="sr-only">Pause</span>
    </Button>
  );
}

function Play() {
  return (
    <Button size="icon" variant="ghost">
      <PlayIcon className="h-8 w-8" />
      <span className="sr-only">Play</span>
    </Button>
  );
}

function Previous() {
  return (
    <Button size="icon" variant="ghost">
      <RewindIcon className="h-6 w-6" />
      <span className="sr-only">Previous</span>
    </Button>
  );
}
export function PlayerControls() {
  return (
    <>
      <Previous />
      <Play />
      <Pause />
      <Next />
    </>
  );
}

function PauseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function RewindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  );
}

function ForwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 17 20 12 15 7" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  );
}
