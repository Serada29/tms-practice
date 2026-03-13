const trucksdb = [
  {
    id: 1,
    truckPlateNo: "NHD3261",
    driverName: "REX",
    driverLicense: "K0701018717",
    driverContact: "+639265135323",
    helperName: "NICK",
    helperContact: "+639265135323",
    status: "Active",
  },
];

const createTruck = {
  id: 2,
  truckPlateNo: "NEM1867",
  driverName: "PABLO",
  driverLicense: "D0613005204",
  driverContact: "+639265135323",
  helperName: "ELDRIN",
  helperContact: "+639265135323",
  status: "Active",
};

localStorage.setItem("trucks", JSON.stringify(trucksdb));
const trucksData = localStorage.getItem("trucks");
const trucksObj = JSON.parse(trucksData);
console.log(trucksObj);
