import React from 'react';
import { useRouter } from 'next/router'


const About = ({href}) => {

  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

  const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];

  const router = useRouter()
  const style = {
    marginRight: 10,
    color:router.asPath === href ? 'orange' : 'black'
  }

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/contact')
  }
  return (
    <div className='my-5'>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque dignissimos molestias facere nihil! Exercitationem assumenda accusantium facilis ab doloremque consequuntur provident aspernatur? Quisquam tempore consequuntur incidunt, quidem eum magni!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic nesciunt minima qui? Corrupti ipsum magnam rem iste veniam totam doloribus, velit temporibus, distinctio atque officiis dolor eveniet porro maiores!</p>
      <button type="button" onClick={handleClick} style={style}>
      Click me
    </button>
    {/* {names.map((val) => {
      return(
        <div>
          <h3>{val}</h3>
        </div>
      )
    })} */}
    {/* {names.filter(val => val.includes('K')).map((filteredName) => {
      return(
        <li>{filteredName}</li>
      )
    })} */}
  {/* {people.map((val) => {
    return(
      <div>{val.name} - {val.age}</div>
    )
  })} */}

  {people.filter((val) => val.age < 50).map(filteredPerson => {
    return(
      <div>{filteredPerson.name} {filteredPerson.age}</div>
    )
  })}

    </div>
  )
}

export default About