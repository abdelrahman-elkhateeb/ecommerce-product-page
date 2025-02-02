import avatar from "../../assets/image-avatar.png";
function Avatar() {
  return (
    <div className="w-6 cursor-pointer rounded-full hover:border-2 hover:border-orange sm:w-12">
      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
