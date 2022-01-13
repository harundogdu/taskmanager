const handleColor = (type) => {
  const selectedColor = "";
  const selectedBgColor = "";
  switch (type.toLowerCase()) {
    case "design":
      selectedColor = "text-red-900";
      selectedBgColor = "bg-red-100";
      break;
    case "frontend":
      selectedColor = "text-green-900";
      selectedBgColor = "bg-green-100";
      break;
    case "backend":
      selectedColor = "text-yellow-900";
      selectedBgColor = "bg-yellow-100";
      break;
    case "marketing":
      selectedColor = "text-blue-900";
      selectedBgColor = "bg-blue-100";
      break;
    case "research":
      selectedColor = "text-orange-900";
      selectedBgColor = "bg-orange-100";
      break;
    case "new feature":
      selectedColor = "text-purple-900";
      selectedBgColor = "bg-purple-100";
      break;
    case "bug":
      selectedColor = "text-pink-900";
      selectedBgColor = "bg-pink-100";
      break;
    case "ar-ge":
      selectedColor = "text-indigo-900";
      selectedBgColor = "bg-indigo-100";
      break;
    default:
      selectedColor = "text-gray-900";
      selectedBgColor = "bg-gray-100";
      break;
  }
  return { selectedColor, selectedBgColor };
};

export { handleColor };
