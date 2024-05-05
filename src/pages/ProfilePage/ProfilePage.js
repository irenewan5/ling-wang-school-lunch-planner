import MyInfoForm from "../../components/MyInfoForm/MyInfoForm";
import MyKids from "../../components/MyKids/MyKids";
import "./ProfilePage.scss";

function ProfilePage() {
  return (
    <div className="profilepage">
      <MyInfoForm />
      <MyKids />
    </div>
  );
}

export default ProfilePage;
