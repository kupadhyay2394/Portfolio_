import { useEffect, useRef } from 'react'

const MouseBubble = () => {
  const dotRef = useRef(null)

  useEffect(() => {
    const el = dotRef.current
    if (!el) return

    let raf = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const tick = () => {
      const lerp = 0.15
      currentX += (targetX - currentX) * lerp
      currentY += (targetY - currentY) * lerp
      el.style.transform = `translate(calc(${currentX}px - 50%), calc(${currentY}px - 50%))`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={dotRef} className="mouse-bubble" aria-hidden="true" />
}

export default MouseBubble


