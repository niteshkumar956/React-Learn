import { useState , useCallback, useEffect } from 'react'


function App() {
  //const [count, setCount] = useState(0)
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setpassword] = useState("")
  //useref hook
const passwordRef = useRef(null)

  const passwordGenerator =useCallback(()=>{

let pass = " " 
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

if(numberAllowed) str+="0123456789"
if (charAllowed) str+="~!@#$%^&*()" 
for(let i = 0 ; i < length ; i++){
  let char = Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
}
setpassword(pass)
 
  },[length , numberAllowed,charAllowed,setpassword])
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(() =>{
  passwordGenerator() 
} ,[length , numberAllowed,charAllowed,passwordGenerator] )

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className ='text-white text center'>passwordGenerator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value= {password} 
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
      ref ={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className= ' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy
        </button> 
</div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input
        type ="range"
        min ={6 }
        max ={50}
        value = {length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <lable >length: {length}</lable>
      </div>
      <div className='flex gap-x-1'>
        <input
        type="checkbox"
        checked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        />
      <label htmlFor='numberInput'>numbers</label>
      </div>
      <div className='felx items-center gap-x-1'>
      <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>     
     </div>
      </>
  )
}

export default App
