const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

<UserProfile 
  name="Naajih Siraj" 
  age={20} 
  bio="A passionate software developer and graphic designer from Nigeria." 
/>


export default UserProfile;
