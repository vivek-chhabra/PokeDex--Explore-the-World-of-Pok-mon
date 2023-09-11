import './Background.scss'
import bokeBall1 from '../../Assets/pokeball.png'
import bokeBall2 from '../../Assets/pokeball2.png'

type Props = {}

export default function Background({}: Props) {
  return (
    <div className='Background'>
      <img src={bokeBall1} className='pokeball-1' alt="" />
      <img src={bokeBall2} className='pokeball-2' alt="" />
      <img src={bokeBall1} className='pokeball-1' alt="" />
      <img src={bokeBall2} className='pokeball-2' alt="" />
      <img src={bokeBall1} className='pokeball-1' alt="" />
      <img src={bokeBall2} className='pokeball-2' alt="" />
    </div>
  )
}
