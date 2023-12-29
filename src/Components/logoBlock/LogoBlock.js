import './logoBlock.css'

const LogoBlock = (props) => (
	<div className={props.classLogooBlock }>
		<img src={props.url } alt="logo"/>
	</div>
)
export default LogoBlock