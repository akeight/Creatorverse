import Card from './Card';

function CreatorList({ creators }) {
  if (!creators || creators.length === 0) {
    return <p>No creators found!</p>;
  }

  return (
  
    <div className="grid">
      {creators.map((creator) => (
       <div className="container" key={creator.id}>
         <Card creator={creator} />
       </div>
      ))}
    </div>
  );
}

export default CreatorList;