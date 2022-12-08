import React, { useState } from "react"

export const Input = () => {
  const [title, setTitle] = useState("")

  return (
    <input
      value={title}
      onChange={(event) => {
        setTitle(event.target.value)
      }}
      className="form-control"
    />
  )
}
