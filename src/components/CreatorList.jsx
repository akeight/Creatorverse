import Card from './Card';

function CreatorList({ creators }) {
  if (!creators || creators.length === 0) {
    return <p>No creators found!</p>;
  }

  return (
  
    <div className="grid details">
      {creators.map((creator) => (
       <div key={creator.id}>
         <Card creator={creator} />
       </div>
      ))}
    </div>
  );
}

export default CreatorList;