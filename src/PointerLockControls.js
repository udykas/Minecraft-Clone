import React, {useEffect, useRef} from 'react'
import { extend, useThree } from '@react-three/fiber'
import { PointerLockControls as PointerLockControlsImpl } from 'three/examples/jsm/controls/PointerLockControls'

extend({PointerLockControlsImpl})

export const PointerLockControls = (props) => {
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    document.addEventListener("click", () => {
      controls.current.lock()
    })
  }, [])

  return <pointerLockControls
    ref={controls}
    args={[camera, gl.domElement]}
  />
}