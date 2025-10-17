import { ChevronDownIcon } from "@heroicons/react/16/solid"
import Navbar from "../Navbar"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white">
      <div>
        <section>
            <h1 className="font-bold flex items-center">Super Admin <ChevronDownIcon className="size-5"/></h1>
            
        </section>
      </div>
      <Navbar />
    </div>
  )
}

export default Sidebar
