import firebase from './firebasss'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    function hy(){
      Notification.requestPermission().then((Permissions)=>{console.log(Permissions)})
     
          const messaging =firebase.messaging();
        messaging.requestPermission()
    .then(()=>{ return messaging.getToken();})
    .then(data=>{console.log('token',data)})
    .catch(token=>{console.log('hahah fail');})
    }
   hy();
    
  }, []);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
