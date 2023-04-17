import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";

const Services = () => {

  const router = useRouter();

  const btnBack  =( e) => {
    router.push('/')
  }

  const [ user,setUser] = useState([]);
  const [ loading,setLoading] = useState(false);
  const [ error,setError] = useState('');

  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if(!response.ok){
        throw new Error('sorry something went wrong')
      }
      const data = await response.json();
      setUser(data)
      setLoading(false)
    }
    catch(error){
      setError(error.message);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const handleRemove = (id) => {
    const finalData = user.filter((val) => val.id !== id)
    setUser(finalData)
  }
  

  if(loading){
    return(
      <div>LOading...</div>
    )
  }
  if(error){
    return(
      <div>{error}</div>
    )
  }
  return (
    <div className="my-5">
      <h1>Services</h1>
      <div className="bg-light p-5 rounded">
        <div className="col-sm-8 py-5 mx-auto">
          <h1 className="display-5 fw-normal">
            Navbar with offcanvas examples
          </h1>
          <button onClick={btnBack}>Back</button>
          <p className="fs-5">
            This example shows how responsive offcanvas menus work within the
            navbar. For positioning of navbars, checkout the{" "}
            <a href="/docs/5.2/examples/navbar-static/">top</a> and{" "}
            <a href="/docs/5.2/examples/navbar-fixed/">fixed top</a> examples.
          </p>
          {user.map((val,index) => {
            return(
              <div key={index}>
                <h3>{val.name}</h3>
                <p>{val.email}</p>
                <button onClick={() => handleRemove(val.id)}>Remove</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
