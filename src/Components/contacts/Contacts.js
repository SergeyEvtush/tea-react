import './contacts.css'
import LogoBlock from '../logoBlock/LogoBlock';
import ContactsList from '../contactsList/ContactsList';
import SocialList from '../socialList/SocialList';
const Contacts = ({ data }) => {
	return (
		<div className='contacts'>
		<LogoBlock classLogooBlock={"contacts__logo"} url={ data[2].url} />
		<ContactsList data={data[0] } />
		<SocialList data={data[1]}/>
	</div>
	)
	
 }
export default Contacts;