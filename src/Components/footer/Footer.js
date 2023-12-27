import './footer.css'
import Container from '../container/Container';
import NavigationBlock from '../navigationBlock/NavigationBlock';
const Footer = ({ dataFooter }) => {
	
	return (
		<div>
		<footer className="footer">
			<div className='footer__wraper'>
				<Container content={
					<div className="footer__grid-block">
						<NavigationBlock data={[dataFooter[0],dataFooter[1]] } />
					</div>
				} />
			</div>
		</footer>
	</div>)
};
export default Footer;