import { Theme } from "./ThemeContext"
import { useTheme } from "./useTheme"

const Theme = () => {
    const {theme, changeTheme} = useTheme()
  return (<select defaultValue={theme} onChange={
    e=>{
        const selectedTheme = e.target.value as Theme
        changeTheme(selectedTheme)
    }
  }>
    {['light','dark','system'].map(
        (i)=><option value={i} key={i}>
           {i}
        </option>
    )}
  </select>
  )
}

export default Theme