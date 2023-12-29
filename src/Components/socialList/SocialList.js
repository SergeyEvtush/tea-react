import './social-list.css'
import LinkImage from '../linkImage/LinkImage'


const SocialList = (props) => {
	const item = props.data.map((el, index) => {
		return (
			<li className='socials__item' key={el.name+index}>
				<LinkImage url={el.url} class={"link-social"} content={
					<img src={el.icon} alt={el.name } />
				 } />
			</li>
		)
	 })

	return (
		<ul className='contacts__socials socials'>
			{ item}
		</ul>
	)
}
export default SocialList;