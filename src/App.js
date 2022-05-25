
import './App.css';
import Profile from './profile/Profile';
import pImg from './profile/io.png';


function App() {

  const handleName=(fullName)=>{alert(`Your Name's : ${fullName}`)};
 
  return (
    <div className="App"> 
      <Profile fullName="Fatma RTIMI" handleName={handleName}
        bio="computer science degree" 
        profession="Full stack web developer" 
        imge={pImg} />     
    </div>
  );
}

export default App;
