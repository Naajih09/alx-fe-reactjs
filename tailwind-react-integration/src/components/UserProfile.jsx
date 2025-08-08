
import Naajih from "../components/Naajih.png"
function UserProfile() {
  return (
    <div className="user-profile" class="bg-gray-100 p-8 max-w-sm mx-auto,my-20 rounded-lg shadow-lg">
      <img src={Naajih} alt="User" class="w-36 h-36 mx-auto" />
      <h1 class="text-xl text-blue-800 my-4">Naajih Siraj</h1>
      <p class="text-gray-600 text-base">Developer at MarkazCo. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;