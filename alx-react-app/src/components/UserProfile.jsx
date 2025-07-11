function UserProfile({ name, age, bio }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

<UserProfile 
  name="Naajih Siraj" 
  age={20} 
  bio="A passionate software developer and graphic designer from Nigeria." 
/>


export default UserProfile;
