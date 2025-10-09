import { GoDownload } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { toast } from "react-toastify";

const InstallAppCard = ({ app, installedApps, setInstalledApps }) => {
  const handleUninstall = () => {
    const updatedApps = installedApps.filter((a) => a.id !== app.id);
    setInstalledApps(updatedApps);

    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success(`${app.title} has been uninstalled!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-[#FFFFFF] rounded mb-5 p-6 flex flex-col md:flex-row space-y-4 items-center justify-between">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <figure className="bg-gray-100 p-3 rounded-lg">
          <img
            className="w-full md:w-20 md:h-20 object-cover"
            src={app.image}
            alt=""
          />
        </figure>
        <div>
          <h1 className="text-[#001931] font-medium text-xl pb-4">
            {app.companyName} : {app.title}
          </h1>
          <div className="flex justify-between">
            <span className="flex items-center text-[#00D390] font-medium">
              <GoDownload />
              {app.downloads}
            </span>
            <span className="flex items-center text-[#FF8811] font-medium">
              <IoStar />
              {app.ratingAvg}
            </span>
            <span className="text-[#627382]">{app.size} MB</span>
          </div>
        </div>
      </div>
      <button onClick={handleUninstall} className="btn bg-[#00D390] text-white">
        Uninstall
      </button>
    </div>
  );
};

export default InstallAppCard;
