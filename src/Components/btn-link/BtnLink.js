const BtnLink = (props) => (
	<div className={props.btnClass }>
		<a href={props.url} className={props.linkClass}>{props.linkText }</a>
	</div>
)
export default BtnLink;