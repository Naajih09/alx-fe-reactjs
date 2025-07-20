const UserProfile = (props) => {
  return (
  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
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
