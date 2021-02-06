import { Activites } from '../Activites'
import { Top } from '../Top'
import { Profile } from '../Profile'
import { Output } from '../Output'
import { Contact } from '../Contact'
import { Gou } from '../Gou'

export default function Home() {
  return (
    <div>
      <Top />
      <Profile />
      <Activites />
      <Output />
      <Contact />
    </div>
  )
}
