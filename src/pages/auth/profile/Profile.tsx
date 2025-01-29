import { useLogOutMutation } from "@/redux/api/customer-api";
import { clearToken } from "@/redux/features/token-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logOut] = useLogOutMutation();

  const handleLogOut = () => {
    logOut(null);
    dispatch(clearToken());
    navigate("/");
  };

  return (
    <div className="min-h-96 container">
      <h2>Profile</h2>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default Profile;
