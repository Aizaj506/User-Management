import { ChevronDownIcon, Cog8ToothIcon } from "@heroicons/react/16/solid"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white">
      <div>
        <section className=" p-2">
          <div className="flex justify-between">
            <h1 className="font-bold flex items-center">Super Admin <ChevronDownIcon className="size-5 font-bold" /></h1>
            <Cog8ToothIcon className="size-6" />
          </div>
          <p className="text-gray-400 font-semibold">admin.mail@company.com</p>
        </section>
      </div>
    </div>
  )
}

export default Sidebar
