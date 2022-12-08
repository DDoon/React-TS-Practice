import React from "react"

export const Button = () => {
  const onSubmit = () => {
    console.log("title,body")
  }

  return <button className="btn btn-primary">Post</button>
}
