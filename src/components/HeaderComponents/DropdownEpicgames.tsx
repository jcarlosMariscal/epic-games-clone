import { DropdownEpicgamesItem } from "./DropdownEpicgamesItem";

export const DropdownEpicgames = () => {
  return (
    <div className="p-10 text-left grid grid-cols-1 xl:grid-cols-2 gap-6 !z-40">
      <div className="flex flex-col gap-8 ">
        <div className="">
          <span className="text-xl font-bold">Play</span>
          <ul className="flex flex-col gap-1 text-sm">
            <DropdownEpicgamesItem>Fortnite</DropdownEpicgamesItem>
            <DropdownEpicgamesItem>Rocket League</DropdownEpicgamesItem>
            <DropdownEpicgamesItem>Fall Guys</DropdownEpicgamesItem>
          </ul>
        </div>
        <div className="">
          <span className="text-xl font-bold">Discover</span>
          <ul className="flex flex-col  gap-1 text-sm">
            <DropdownEpicgamesItem>Epic Games Store</DropdownEpicgamesItem>
            <DropdownEpicgamesItem>Fab</DropdownEpicgamesItem>
            <DropdownEpicgamesItem>Sketchfab</DropdownEpicgamesItem>
            <DropdownEpicgamesItem>ArtStation</DropdownEpicgamesItem>
          </ul>
        </div>
      </div>
      <div className=" ">
        <span className="block text-xl font-bold my-2">Create</span>
        <ul className="flex flex-col text-sm">
          <DropdownEpicgamesItem>Unreal Engine</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>Create in Fortnite</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>MetaHuman</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>TwinMotion</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>RealityScan</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>RealityCapture</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>Epic Online Services</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>
            Public On Epic Games Store
          </DropdownEpicgamesItem>
          <DropdownEpicgamesItem>Kids Web Services</DropdownEpicgamesItem>
          <DropdownEpicgamesItem>Developer Community</DropdownEpicgamesItem>
        </ul>
      </div>
    </div>
  );
};
