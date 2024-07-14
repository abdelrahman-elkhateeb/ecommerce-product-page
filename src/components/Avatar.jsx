import avatar from "../assets/image-avatar.png";
function Avatar() {
  return (
    <div className="hover:border-orange w-12 cursor-pointer rounded-full hover:border-2">
      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
