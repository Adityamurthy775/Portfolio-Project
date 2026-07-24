import {useEffect,useState} from 'react'
import {motion} from 'motion/react'
import {useNavigate} from 'react-router'
function Preloader() {
  const words=[
    'Design',
    'Prototype',
    'Build',
    'Deploy'
  ]
const [count,setcount]=useState(0)
const navigate=useNavigate()
    useEffect(()=>{
      const timer=setInterval(() => {
        setcount((prev)=>{
          if(prev>=100){
            clearInterval(timer)
            return 100
          }
          return prev+1
        })
      }, 10);
      return ()=>clearInterval(timer)
    },[])
    const index=Math.min(Math.floor(count/25),3)
    const word=words[index]
  return (
<div>
  <motion.div
className="fixed inset-0 bg-black"
    initial={{ y: 0 }}
    animate={count === 100 ? { y: "-100%" } : { y: 0 }}
    transition={{
      duration: 1,
      ease:'easeIn',
    }}
    onAnimationComplete={() => {
      if(count === 100) {
        navigate('/home')
      }
    }}
>
    <h1 className='text-8xl fixed top-0 right-0  m-10 text-white font-light'>{`${String(count).padStart(2,'00')}%`}</h1>

    <motion.h1 className='text-white text-8xl fixed bottom-10 left-0 font-semibold'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,ease:"easeOut"}}> {word}</motion.h1>

</motion.div>
</div>

  )
}

export default Preloader
