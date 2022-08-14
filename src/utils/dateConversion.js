export default function convertDate(dateString = "") {
  const date = dateString.split(" ")[0];
  const formatedDate = new Date(date);
  return formatedDate.toUTCString().split(" ").slice(0, 3).join(" ");
}
