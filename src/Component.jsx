/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IkexrSdhu5J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MusicIcon className="h-6 w-6" />
          <h1 className="text-xl font-bold">Music Player</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button size="icon" variant="ghost">
            <SettingsIcon className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </header>
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="bg-gray-900 text-white p-6 flex flex-col gap-6 lg:w-1/3">
          <div className="flex items-center gap-4">
            <img
              alt="Album Cover"
              className="rounded-md"
              height={64}
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width={64}
            />
            <div>
              <h2 className="text-lg font-bold">Starlight</h2>
              <p className="text-gray-400">Muse</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Button size="icon" variant="ghost">
              <RewindIcon className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button size="icon" variant="ghost">
              <PlayIcon className="h-8 w-8" />
              <span className="sr-only">Play</span>
            </Button>
            <Button size="icon" variant="ghost">
              <PauseIcon className="h-8 w-8" />
              <span className="sr-only">Pause</span>
            </Button>
            <Button size="icon" variant="ghost">
              <ForwardIcon className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          <Slider
            className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
            defaultValue={[50]}
            max={100}
            step={1}
          />
          <div className="flex items-center justify-between text-sm">
            <span>0:00</span>
            <span>3:45</span>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Playlist</h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
              <img
                alt="Album Cover"
                className="rounded-md"
                height={64}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div>
                <h3 className="text-lg font-bold">Starlight</h3>
                <p className="text-gray-400">Muse</p>
              </div>
              <span className="text-gray-400">3:45</span>
            </div>
            <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
              <img
                alt="Album Cover"
                className="rounded-md"
                height={64}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div>
                <h3 className="text-lg font-bold">Uprising</h3>
                <p className="text-gray-400">Muse</p>
              </div>
              <span className="text-gray-400">4:12</span>
            </div>
            <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
              <img
                alt="Album Cover"
                className="rounded-md"
                height={64}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div>
                <h3 className="text-lg font-bold">Madness</h3>
                <p className="text-gray-400">Muse</p>
              </div>
              <span className="text-gray-400">3:58</span>
            </div>
            <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
              <img
                alt="Album Cover"
                className="rounded-md"
                height={64}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div>
                <h3 className="text-lg font-bold">Supermassive Black Hole</h3>
                <p className="text-gray-400">Muse</p>
              </div>
              <span className="text-gray-400">3:37</span>
            </div>
            <div className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
              <img
                alt="Album Cover"
                className="rounded-md"
                height={64}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div>
                <h3 className="text-lg font-bold">Time Is Running Out</h3>
                <p className="text-gray-400">Muse</p>
              </div>
              <span className="text-gray-400">4:24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
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
  )
}


function MusicIcon(props) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
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
  )
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
  )
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
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}