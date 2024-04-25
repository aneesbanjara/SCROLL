import { useRef, useState } from 'react'
import './App.css'
import Card from './components/Card'
import  useDraggableScroll  from 'use-draggable-scroll';
import "./styles.css";

function App() {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref, { direction: 'vertical' });

// const [isMouseDown, setIsMouseDown] = useState(false)
// const [startX, setStartX] = useState(0)
// const [scrollLeft, setScrollLeft] = useState(0)
// const handleMouseDown = (e) => {

//   setIsMouseDown(true)
//   setStartX(e.pageX - itemsRef.current.offsetLeft)
//   setScrollLeft(itemsRef.current.scrollLeft)
// }
// const handleMouseLeave = (e) => {
//   setIsMouseDown(false)
// }
// const handleMouseUp = (e) => {
//   setIsMouseDown(false)

// }
// const handleMouseMove = (e) => {
//   if (!isMouseDown) return;
//   const x = e.pageX - itemsRef.current.offsetLeft
//   const walk = (x - startX)
//   itemsRef.current.scrollLeft = startX - walk

// }
  return (
    <>
      <div ref={ref} onMouseDown={onMouseDown} className='h-screen grid place-content-center overflow-y-scroll no-scrollbar'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
      
    </>
  )
}

export default App

