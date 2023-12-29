import './contacts-list.css'	

const ContactsList = (props) => {
	const elems = props.data.map((el, index) => { 
		return (
			<li className='contacts__list-item' key={el.name+index }>
				<img src={el.icon} alt={el.name } />
				<a href={el.url } className="link-contact">{el.number }</a>
			</li>
		)
	})


	return (
		<ul className='contacts__list'>
			{elems}
	</ul>
)

 }
export default ContactsList