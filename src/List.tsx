import { ElementRef, useRef, useState } from "react";



type NameState  = {
  name:string;
  surname:string;
}

function ListSample() {


  const [names,setNames] = useState<NameState[]>([]);
  let nameText = '';
  let surnameText = '';
  const [firstName,setFirstName] = useState<string>('');
  const [lastName,setLastName] = useState<string>('');

  const firstNameInputRef =  useRef<any>();
  const lastNameInputRef =  useRef<any>();

  // Net deki eventArgs tipi e olarak geldi.
  // inputta ki değişimi emit eder.
  const onNameInputChange = (e:any):void => {
    console.log('event', e);
    console.log('nameText', nameText);
    // setFirstName(e.target.value);
    nameText = e.target.value;
  }

  const onSurNameInputChange = (e:any):void => {
    surnameText = e.target.value;
    console.log('surnameText', surnameText);
    // setLastName(e.target.value);
  }


  const add = () => {

    console.log('firstNameInputRef', firstNameInputRef);

    const addObject = {
      name: firstNameInputRef.current.value,
      surname: lastNameInputRef.current.value
    }

    // sayafayı render eder state değişimi olduğu için
    // setFirstName('');
    // reset input
    // referans üzerinden bağlanıldığı için render etmez.
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    firstNameInputRef.current.focus();

    setNames([...names, addObject]);
  }

  // onChange işlemleri

  return <>

  <input ref={firstNameInputRef} type="text" onBlur={(e) => onNameInputChange(e)} />
  <input ref={lastNameInputRef} type="text" onBlur={(e) => onSurNameInputChange(e)} />
  <button onClick={add}>Add</button>
  
  <ul>
    {
       names.map((item:NameState, index:number) => {
         return <li key={index}>{item.name} {item.surname}</li>
       })
      
    }
  </ul>
  </>
}

export default ListSample;