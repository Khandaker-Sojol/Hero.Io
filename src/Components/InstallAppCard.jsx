import { GoDownload } from "react-icons/go";
import { IoStar } from "react-icons/io5";

const InstallAppCard = ({ app }) => {
  console.log(app);

  return (
    <div className="bg-[#FFFFFF] rounded mb-5 p-6 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <figure className="bg-gray-100 p-3 rounded-lg">
          <img className="w-20 h-20 object-cover" src={app.image} alt="" />
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
      <button className="btn bg-[#00D390] text-white">Uninstall</button>
    </div>
  );
};

export default InstallAppCard;
