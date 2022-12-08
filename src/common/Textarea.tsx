import React, { useState } from "react"

export const Textarea = () => {
  const [body, setBody] = useState("")

  return (
    <textarea
      value={body}
      className="form-control"
      onChange={(event) => {
        setBody(event.target.value)
      }}
    />
  )
}
