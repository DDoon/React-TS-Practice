import { Button } from "../common/button"
import { Input } from "../common/input"
import { Label } from "../common/label"
import { Textarea } from "../common/Textarea"

export const MainPage = () => {
  return (
    <div className="container">
      <div>
        <Label />
        <Input />
      </div>
      <Label />
      <Textarea />
      <Button />
    </div>
  )
}
