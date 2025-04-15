import { useEffect, useRef } from "react"

export default function WaveAnimation() {
   const canvasRef = useRef<HTMLCanvasElement>(null)

   useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      let animationFrameId: number
      let time = 0
      const baseColor = "0, 180, 216"
      const baseHeight = 150
      const verticalSpacing = 20

      const waves = [
         { amplitude: 15, frequency: 0.005, speed: 0.05, opacity: 0.8 },
         { amplitude: 10, frequency: 0.015, speed: 0.03, opacity: 0.6 },
         { amplitude: 8, frequency: 0.011, speed: 0.04, opacity: 0.4 },
      ]

      const resizeCanvas = () => {
         canvas.width = window.innerWidth
         canvas.height = window.innerHeight
      }


      const drawWave = (
         wave: typeof waves[number],
         offsetTime: number,
         index: number
      ) => {
         ctx.beginPath()
         ctx.fillStyle = `rgba(${baseColor}, ${wave.opacity})`
         ctx.moveTo(0, 0)

         for (let x = 0; x <= canvas.width; x++) {
            const y =
               baseHeight +
               index * verticalSpacing +
               wave.amplitude * Math.sin(x * wave.frequency - offsetTime * wave.speed)
            ctx.lineTo(x, y)
         }

         ctx.lineTo(canvas.width, 0)
         ctx.closePath()
         ctx.fill()
      }

      const render = () => {
         ctx.clearRect(0, 0, canvas.width, canvas.height)
         waves.forEach((wave, index) => {
            drawWave(wave, time + index * 100, index)
         })
         time += 1
         animationFrameId = requestAnimationFrame(render)
      }

      window.addEventListener("resize", resizeCanvas)
      resizeCanvas()
      render()

      return () => {
         window.removeEventListener("resize", resizeCanvas)
         cancelAnimationFrame(animationFrameId)
      }
   }, [])

   return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
}
